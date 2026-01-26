const DB_CONFIG = {
    name: 'HanhGiaDB',
    version: 2, 
    stores: {
        goals: 'id',
        logs: 'timestamp',
        meta: 'key'
    }
};

const dbHelper = {
    db: null,
    
    open() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_CONFIG.name, DB_CONFIG.version);
            
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                const tx = e.target.transaction;

                if (!db.objectStoreNames.contains('goals')) db.createObjectStore('goals', { keyPath: 'id' });
                if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
                
                let logStore;
                if (!db.objectStoreNames.contains('logs')) {
                    logStore = db.createObjectStore('logs', { keyPath: 'timestamp' });
                } else {
                    logStore = tx.objectStore('logs');
                }

                if (!logStore.indexNames.contains('goalId')) {
                    logStore.createIndex('goalId', 'goalId', { unique: false });
                }
            };

            req.onsuccess = (e) => {
                this.db = e.target.result;
                resolve(this.db);
            };
            req.onerror = (e) => reject("DB Error: " + e.target.error);
        });
    },

    async deleteLog(timestamp) {
        if (!this.db) await this.open();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['logs'], 'readwrite');
            const store = tx.objectStore('logs');
            store.delete(Number(timestamp)); 
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async deleteGoalData(goalId) {
        if (!this.db) await this.open();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs'], 'readwrite');
            
            const goalStore = tx.objectStore('goals');
            goalStore.delete(goalId);

            const logStore = tx.objectStore('logs');
            
            try {
                const index = logStore.index('goalId');
                const req = index.openKeyCursor(IDBKeyRange.only(goalId));

                req.onsuccess = (e) => {
                    const cursor = e.target.result;
                    if (cursor) {
                        logStore.delete(cursor.primaryKey);
                        cursor.continue();
                    }
                };
            } catch (err) {
                console.warn("Index missing, falling back to slow delete", err);
                const req = logStore.openCursor();
                req.onsuccess = (e) => {
                    const cursor = e.target.result;
                    if (cursor) {
                        if (cursor.value.goalId === goalId) cursor.delete();
                        cursor.continue();
                    }
                };
            }

            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async saveAll(data) {
        if (!this.db) await this.open();
        
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs', 'meta'], 'readwrite');
            
            const goalStore = tx.objectStore('goals');
            data.goals.forEach(g => goalStore.put(g));
            
            const logStore = tx.objectStore('logs');
            data.logs.forEach(l => logStore.put(l));
            
            const metaStore = tx.objectStore('meta');
            metaStore.put({ key: 'xp', value: data.xp });
            metaStore.put({ key: 'streak', value: data.streak });
            metaStore.put({ key: 'achievements', value: data.achievements });
            metaStore.put({ key: 'medSettings', value: data.medSettings });
			metaStore.put({ key: 'activeBadge', value: data.activeBadge });
            
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async loadAll() {
        if (!this.db) await this.open();

        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs', 'meta'], 'readonly');
            const data = { goals: [], logs: [], xp: 0, streak: 0, achievements: [], medSettings: {} };
            
            const getAll = (storeName) => {
                return new Promise((res, rej) => {
                    const req = tx.objectStore(storeName).getAll();
                    req.onsuccess = () => res(req.result);
                    req.onerror = () => rej(req.error);
                });
            };

            Promise.all([getAll('goals'), getAll('logs'), getAll('meta')])
                .then(([goals, logs, metaItems]) => {
                    data.goals = goals || [];
                    data.logs = logs || [];
                    
                    metaItems.forEach(item => {
                        if (item.key === 'xp') data.xp = item.value;
                        if (item.key === 'streak') data.streak = item.value;
                        if (item.key === 'achievements') data.achievements = item.value;
                        if (item.key === 'medSettings') data.medSettings = item.value;
						if (item.key === 'activeBadge') data.activeBadge = item.value;
                    });
                    resolve(data);
                })
                .catch(reject);
        });
    },

    async isEmpty() {
        if (!this.db) await this.open();
        return new Promise(resolve => {
            const tx = this.db.transaction(['meta'], 'readonly');
            const req = tx.objectStore('meta').count();
            req.onsuccess = () => resolve(req.result === 0);
        });
    }
};

        Chart.defaults.color = '#9ca3af';
        Chart.defaults.borderColor = '#374151';

        class GoalTracker {
            constructor() {
                this.data = {
                    goals: [],
                    logs: [],
                    xp: 0,
                    streak: 0,
                    achievements: [],
                    medSettings: { mode: 'tap', holdDuration: 500, tapRequired: 1, vibration: true }
                };

                this.sessionLimits = {};
                this.tapState = { count: 0, lastTapTime: 0, timer: null };
                this.timers = {}; 
                this.today = new Date();
                this.currentMonth = new Date(this.today.getFullYear(), this.today.getMonth(), 1); 
                this.currentWeekStart = this.getStartOfWeek(this.today); 
                this.charts = { weekly: null, breakdown: null, monthly: null, dayChart: null, session: null };
                this.reportMode = 'time';
                this.meditationState = {
                    active: false, paused: false, goalId: null, count: 0,
                    startTime: null, timerRef: null, remainingSeconds: 0,
                    totalDurationSeconds: 0, touches: [] 
                };
                this.currentViewDate = null; 
                this.dayChartMode = 'time'; 
                
                // Define quick tags...
                this.QUICK_TAGS = [
                    'Tỉnh Thức', 'Định Tĩnh', 'An Lạc', 'Hỷ Lạc', 
                    'Khinh An', 'Thư Thái', 'Sáng Suốt', 'Rỗng Rang', 'Định Sâu', 
                    'Xả Ly', 'Biết Ơn', 'Nhẹ Nhàng', 'Ánh Sáng',
                    'Phóng Tâm', 'Vọng Tưởng', 'Trạo Cử', 'Hôn Trầm', 'Buồn Ngủ', 
                    'Thụy Miên', 'Tâm Tán Loạn', 'Lo Lắng', 'Sân Giận', 'Tham Ái',
                    'Hoài Nghi', 'Nhiều Toan Tính', 'Hồi Tưởng', 'Căng Thẳng',
                    'Đau Lưng', 'Tê Chân', 'Ngứa', 'Mỏi Cổ', 'Nóng Nực', 'Lạnh'
                ];

                this.init();
            }
			
			 async init() {
    try {
        await dbHelper.open();

        const dbData = await dbHelper.loadAll();
        if (dbData) {
            this.data = { ...this.data, ...dbData };
        }

        // --- THAY ĐỔI: Cấu hình mặc định mới ---
        if (!this.data.medSettings) this.data.medSettings = {};
        
        // Luôn luôn ép về chế độ thống nhất
        this.data.medSettings.mode = 'unified'; 
        
        // Đảm bảo các chỉ số khác có giá trị mặc định
        if (!this.data.medSettings.holdDuration) this.data.medSettings.holdDuration = 500;
        if (typeof this.data.medSettings.vibration === 'undefined') this.data.medSettings.vibration = true;
        if (typeof this.data.medSettings.confirmMode === 'undefined') this.data.medSettings.confirmMode = false;
        if (typeof this.data.medSettings.confirmProbability === 'undefined') this.data.medSettings.confirmProbability = 100;
        
        // Xóa các thuộc tính cũ không dùng nữa để nhẹ data
        delete this.data.medSettings.proMode;
        delete this.data.medSettings.tapRequired;
        // ---------------------------------------

        this.data.goals.forEach(goal => {
            if (!goal.type) goal.type = 'standard';
            if (!goal.sessionTargetSeconds) goal.sessionTargetSeconds = 0;
            if (!goal.remainingSeconds) goal.remainingSeconds = 0;
            if (typeof goal.dailyTargetMinutes === 'undefined') goal.dailyTargetMinutes = 30;
            if (goal.type === 'meditation' && !goal.currentMindfulness) goal.currentMindfulness = 0;
            if (goal.type === 'meditation' && !goal.totalMindfulness) goal.totalMindfulness = 0;
        });

        this.analyticsGoalFilter = localStorage.getItem('anaGoalFilter') || 'all';
        this.renderDate();
        this.renderGoals();
        this.updateStats();
        this.checkAchievements();
        this.renderCalendar();
        this.loadActiveBadge();
        setInterval(() => this.updateTimerUI(), 1000);
        this.setupMeditationListeners();
        this.noSleepAudio = new Audio('data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=');
        this.noSleepAudio.loop = true;
        this.noSleepAudio.volume = 0.01;

    } catch (err) {
        console.error("Lỗi khởi tạo:", err);
        this.showToast("Lỗi tải dữ liệu!");
    }

    if (!localStorage.getItem('intro_seen')) {
        this.openIntroModal();
    }
}
hexToRgba(hex, alpha) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');
        return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
    }
    return `rgba(156, 163, 175, ${alpha})`; // Fallback gray
}
setupMeditationListeners() {
    const medOverlay = document.getElementById('meditation-overlay');
    const counterEl = document.getElementById('med-counter');
    let pressTimer = null;
    
    if (medOverlay) {
         medOverlay.addEventListener('pointerdown', (e) => {
            if (e.target.closest('.med-controls') || e.target.closest('.modal')) return;
            e.preventDefault(); 
            
            const settings = this.data.medSettings;
            // Luôn dùng logic holdDuration
            this.holdTriggered = false; 
            
            counterEl.style.transform = "scale(0.9)";
            counterEl.style.transition = "transform 0.1s";
            
            // Logic Giữ (Hold) -> Kích hoạt mức Tốt (Level 2) hoặc Cao (Level 1 - xử lý bên trong trigger)
            pressTimer = setTimeout(() => {
                this.triggerAwarenessSuccess(); // <--- GỌI HÀM MỚI
                this.holdTriggered = true;
                pressTimer = null;
            }, settings.holdDuration || 500);
        });

        const handleRelease = (e) => {
            if (e.target.closest('.med-controls')) return;
            
            if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
            counterEl.style.transform = "scale(1)";
            
            // Nếu đã kích hoạt Hold (Giữ) thì bỏ qua logic Tap (Chạm)
            if (this.holdTriggered) {
                this.holdTriggered = false;
                this.tapState.count = 0;
                return;
            }

            // Logic Chạm (Tap) thống nhất
            if (this.tapState.timer) clearTimeout(this.tapState.timer);
            this.tapState.count++;
            
            counterEl.style.transform = "scale(0.95)";
            setTimeout(() => counterEl.style.transform = "scale(1)", 80);
            
            // Đợi một chút để xem người dùng có chạm đúp (double tap) không
            this.tapState.timer = setTimeout(() => {
                const taps = this.tapState.count;
                let qualityVal = 4; // Mặc định chạm 1 cái là Thấp (Level 4) hoặc Trung bình (Level 3)
                
                // Logic phân loại của Pro cũ:
                if (taps === 1) qualityVal = 4;      // 1 chạm: Thấp
                else if (taps === 2) qualityVal = 3; // 2 chạm: Trung bình
                else qualityVal = 2;                 // >2 chạm: Trung bình
                
                this.triggerMindfulnessSuccess(qualityVal);
                this.tapState.count = 0; 
            }, 400); 
        };
        
        medOverlay.addEventListener('pointerup', handleRelease);
        medOverlay.addEventListener('pointerleave', () => {
            if(pressTimer) clearTimeout(pressTimer);
            counterEl.style.transform = "scale(1)";
            this.holdTriggered = false;
        });
    }
}

triggerAwarenessSuccess() {
    if (!this.meditationState.active || this.meditationState.paused) return;
    
    // Tăng biến đếm Tỉnh giác
    this.meditationState.awarenessCount++;
    
    // Rung phản hồi (Kiểu rung khác: 2 nhịp ngắn nhanh để phân biệt)
    const settings = this.data.medSettings;
    if (settings.vibration && navigator.vibrate) {
        navigator.vibrate([30, 30, 30]); 
    }

    // Hiệu ứng Visual 
    const counterEl = document.getElementById('med-counter');
    const awarenessColor = '#55efc4'; 

    counterEl.style.transition = "transform 0.1s";
    counterEl.style.transform = "scale(1.2)";
    counterEl.style.borderColor = awarenessColor;
    counterEl.style.color = awarenessColor;
    
   
    const currentMindfulness = this.meditationState.count;
   counterEl.innerHTML = '<i class="fas fa-shield-alt"></i>'

    setTimeout(() => {
        counterEl.style.transform = "scale(1)";
        counterEl.style.borderColor = "transparent";
        counterEl.style.color = "white";
        counterEl.innerText = currentMindfulness; // Trả lại số hiển thị Chánh niệm
    }, 400);
}
openIntroModal() {
        const modal = document.getElementById('intro-modal');
        if (modal) modal.style.display = 'flex';
    }

closeIntroModal() {
    document.getElementById('intro-modal').style.display = 'none';
    localStorage.setItem('intro_seen', 'true'); 
}

renderQuickTags(containerId, inputId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; 
    
    this.QUICK_TAGS.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'quick-tag';
        span.innerText = tag;
        
        span.onclick = () => {
            const input = document.getElementById(inputId);

            if (input.value.trim().length > 0) {

                if(!input.value.includes(tag)) {
                    input.value += ', ' + tag;
                }
            } else {
                input.value = tag;
            }
        };
        
        container.appendChild(span);
    });
}

            getStartOfWeek(date) {
                const d = new Date(date);
                const day = d.getDay() || 7; 
                const diff = d.getDate() - day + 1; 
                return new Date(d.getFullYear(), d.getMonth(), diff);
            }
changeProWeek(dir) { 
    this.currentWeekStart.setDate(this.currentWeekStart.getDate() + (dir * 7)); 
    this.renderProAnalytics(); 
}

changeProMonth(dir) { 
    this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); 
    this.renderProAnalytics(); 
}
getTouchTimestamp(t, startTime) {
    if (typeof t === 'object' && t !== null) {
        if (t.d !== undefined) return startTime + t.d; 
        if (t.t !== undefined) return t.t;             
    }
    
    if (typeof t === 'number') {
        if (t > 1000000000000) {
            return t; 
        }
        return startTime + t;
    }
    
    return 0;
}

analyzeSingleSession(log) {
    const totalSec = log.minutes * 60;
    if (totalSec === 0) return { distractedSec: 0, qualityPct: 0 };
    const thresholdSec = log.threshold || 9;
    let distractedSec = 0;

    // 1. Tính toán thời gian xao nhãng dựa trên khoảng cách Touch (Chánh niệm)
    if (log.touches && log.touches.length >= 2) {
        const timestamps = log.touches.map(t => this.getTouchTimestamp(t, log.timestamp)).sort((a,b) => a - b);
        
        const startGap = (timestamps[0] - log.timestamp) / 1000;
        if (startGap > thresholdSec) distractedSec += (startGap - thresholdSec/2);

        for (let i = 1; i < timestamps.length; i++) {
            const gap = (timestamps[i] - timestamps[i-1]) / 1000;
            if (gap > thresholdSec) distractedSec += (gap - thresholdSec/2);
        }
        
        const endTime = log.timestamp + (log.minutes * 60 * 1000);
        const endGap = (endTime - timestamps[timestamps.length - 1]) / 1000;
        if (endGap > thresholdSec) distractedSec += (endGap - thresholdSec/2);
    } 
    else {
        // Fallback nếu ít touch
        const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        let mindfulSec = count * thresholdSec;
        mindfulSec = Math.min(mindfulSec, totalSec);
        distractedSec = totalSec - mindfulSec;
    }

    
    const awarenessCount = log.awarenessCount || 0;
    const holdDurationSec = (this.data.medSettings.holdDuration || 500) / 1000;
    const recoveryTime = awarenessCount * holdDurationSec;
    
    distractedSec -= recoveryTime;

    // Đảm bảo không âm và không vượt quá tổng thời gian
    if (distractedSec < 0) distractedSec = 0;
    distractedSec = Math.min(distractedSec, totalSec);

    const qualityPct = ((totalSec - distractedSec) / totalSec) * 100;
    return { distractedSec, qualityPct: parseFloat(qualityPct.toFixed(1)) };
}
renderAnalytics(saveState = false) {
    const range = parseInt(document.getElementById('ana-time-range').value) || 3;
    const ctxTrend = document.getElementById('analyticsTrendChart').getContext('2d');
    const goalSelect = document.getElementById('ana-goal-select');

    if (saveState) {
        this.analyticsGoalFilter = goalSelect.value;
        localStorage.setItem('anaGoalFilter', this.analyticsGoalFilter);
    }

    const medGoals = this.data.goals.filter(g => g.type === 'meditation');

    goalSelect.innerHTML = '<option value="all">Tất cả thời thiền</option>';
    medGoals.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.id;
        opt.innerText = g.name;
        goalSelect.appendChild(opt);
    });

    const goalExists = this.analyticsGoalFilter === 'all' || medGoals.some(g => g.id === this.analyticsGoalFilter);
    if (!goalExists) {
        this.analyticsGoalFilter = 'all';
        localStorage.setItem('anaGoalFilter', 'all');
    }
    goalSelect.value = this.analyticsGoalFilter;

    let targetGoalIds = [];
    if (this.analyticsGoalFilter === 'all') {
        targetGoalIds = medGoals.map(g => g.id);
    } else {
        targetGoalIds = [this.analyticsGoalFilter];
    }

    if (targetGoalIds.length === 0) {
        document.getElementById('ana-comparison-table').innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">Chưa có mục tiêu thiền nào.</td></tr>';
        return;
    }

    const now = Date.now();
    const cutoff = now - (range * 24 * 60 * 60 * 1000);
    
    const logs = this.data.logs
        .filter(l => targetGoalIds.includes(l.goalId) && l.timestamp >= cutoff)
        .sort((a, b) => a.timestamp - b.timestamp);

    if (logs.length === 0) {
        if(this.charts.analyticsTrend) this.charts.analyticsTrend.destroy();
        if(this.charts.hourlyChart) this.charts.hourlyChart.destroy();
        document.getElementById('ana-avg-quality').innerText = "---";
        document.getElementById('ana-avg-density').innerText = "---";
        document.getElementById('ana-total-mindful').innerText = "---";
        document.getElementById('ana-comparison-table').innerHTML = '<tr><td colspan="5" style="padding:20px; text-align:center;">Chưa có dữ liệu trong khoảng thời gian này.</td></tr>';
        return;
    }

    let totalTimeSec = 0;
    let totalDistractedSec = 0;
    let totalTouches = 0;
    
    // 1. Map data and include raw timestamp for calculation
    const sessionData = logs.map(log => {
        const result = this.analyzeSingleSession(log);
        
        totalTimeSec += log.minutes * 60;
        totalDistractedSec += result.distractedSec;
        const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        totalTouches += count;
        const d = new Date(log.timestamp);
        const timeStr = d.getHours().toString().padStart(2, '0') + ':' + 
                        d.getMinutes().toString().padStart(2, '0');
        const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                        (d.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                        d.getFullYear();
        
        return {
            timestamp: log.timestamp, // Keep raw timestamp for bucketing
            date: d.toLocaleDateString('vi-VN', {day: '2-digit', month:'2-digit'}),
            fullDateTime: `${timeStr}, ${dateStr}`,
            quality: result.qualityPct,
            density: log.minutes > 0 ? (count / log.minutes).toFixed(1) : 0
        };
    });

    const avgQuality = totalTimeSec > 0 ? ((1 - (totalDistractedSec / totalTimeSec)) * 100).toFixed(1) : 0;
    const avgDensity = totalTimeSec > 0 ? (totalTouches / (totalTimeSec / 60)).toFixed(1) : 0;
    const mindfulSeconds = Math.max(0, totalTimeSec - totalDistractedSec);
    const mindfulHours = (mindfulSeconds / 3600).toFixed(1);
    
    document.getElementById('ana-avg-quality').innerText = `${avgQuality}%`;
    document.getElementById('ana-avg-density').innerText = avgDensity;
    document.getElementById('ana-total-mindful').innerText = `${mindfulHours}h`;

    if (this.charts.analyticsTrend) this.charts.analyticsTrend.destroy();

    // 2. Trend Chart Logic with Time-Window Averaging
    let chartData = sessionData;
    const maxPoints = 30;

    if (sessionData.length > maxPoints) {
        chartData = [];
        // Determine the total time span of the visible data
        const startTime = sessionData[0].timestamp;
        const endTime = sessionData[sessionData.length - 1].timestamp;
        const totalDuration = endTime - startTime;
        
        // Calculate the time step for each point
        const step = totalDuration / maxPoints;

        for (let i = 0; i < maxPoints; i++) {
            const bucketStart = startTime + (i * step);
            const bucketEnd = bucketStart + step;

            // Find all logs that fall into this time bucket
            const bucketLogs = sessionData.filter(d => 
                d.timestamp >= bucketStart && d.timestamp < bucketEnd
            );

            // Edge case: Ensure the very last log is included in the last bucket
            if (i === maxPoints - 1) {
                const lastLog = sessionData[sessionData.length - 1];
                if (!bucketLogs.includes(lastLog)) bucketLogs.push(lastLog);
            }

            if (bucketLogs.length > 0) {
                // Calculate Average Quality for this time frame
                const totalQ = bucketLogs.reduce((sum, item) => sum + item.quality, 0);
                const avgQ = totalQ / bucketLogs.length;

                // Create label based on the bucket start time
                const d = new Date(bucketStart);
                const timeStr = d.getHours().toString().padStart(2, '0') + ':' + 
                                d.getMinutes().toString().padStart(2, '0');
                const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                                (d.getMonth() + 1).toString().padStart(2, '0');

                chartData.push({
                    date: dateStr,
                    fullDateTime: `${dateStr} (TB ${bucketLogs.length} thời)`, // Indication of averaging
                    quality: parseFloat(avgQ.toFixed(1)),
                    timestamp: bucketStart
                });
            }
        }
    }

    this.charts.analyticsTrend = new Chart(ctxTrend, {
        type: 'line',
        data: {
            labels: chartData.map(d => d.date),
            datasets: [
                {
                    label: 'Chất lượng chánh niệm (%)',
                    data: chartData.map(d => d.quality),
                    borderColor: '#34d399',
                    backgroundColor: 'rgba(52, 211, 153, 0.1)',
                    yAxisID: 'y',
                    fill: true,
                    tension: 0.3
                },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            elements: {
                point: {
                    hitRadius: 30,     
                    hoverRadius: 4     
                }
            },
            plugins: {
                legend: { display: true, labels: { font: {size: 11}} },             
                tooltip: {
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        title: function(context) {
                            return chartData[context[0].dataIndex].fullDateTime;
                        },
                        label: function(context) {
                // 1. Get the original label from the dataset (e.g., "Chất lượng trung bình")
                let label = context.dataset.label || '';

                // 2. Override the text ONLY for the tooltip display
                if (label === 'Chất lượng chánh niệm (%)') {
                    label = 'Chất lượng';
                }

                // 3. Construct the final string
                if (label) {
                    label += ': ';
                }
                
                if (context.parsed.y !== null) {
                    label += context.parsed.y;

                    // 4. Add the % sign if it corresponds to the quality dataset
                    if (context.dataset.label === 'Chất lượng chánh niệm (%)') {
                        label += '%';
                    }
                }
                return label;
            },
                        labelColor: function(context) {
                            return {
                                borderColor: context.dataset.borderColor,
                                backgroundColor: context.dataset.borderColor,
                                borderWidth: 0,
                                borderRadius: 2,
                            };
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear', display: true, position: 'right', min: 0, max: 100,
                    grid: { color: '#374151' }, ticks: { color: '#9ca3af', font: { size: 10 }, callback: function(value) {
                return value + '%';
            } },
                },
				y1: {
        type: 'linear',
        display: true,
        position: 'left', 
        min: 0,
        max: 100,
        grid: { drawOnChartArea: false }, 
        ticks: {
            color: '#9ca3af',
            font: { size: 10 },
            callback: value => value + '%'
        }
    },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 }, } 
                },
            }
        }
    });

    this.renderComparisonTable(targetGoalIds);
    this.renderHourlyAnalysis(logs);
}


renderHourlyAnalysis(logs) {
    const canvas = document.getElementById('analyticsHourlyChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const hourlyData = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        totalQuality: 0,
        totalMinutes: 0,
        count: 0
    }));

    logs.forEach(log => {
        const hour = new Date(log.timestamp).getHours();
        const result = this.analyzeSingleSession(log);
        
        hourlyData[hour].totalQuality += result.qualityPct;
        hourlyData[hour].totalMinutes += log.minutes;
        hourlyData[hour].count++;
    });

    const labels = hourlyData.map(d => `${d.hour}h`);
    const qualityPoints = hourlyData.map(d => d.count > 0 ? parseFloat((d.totalQuality / d.count).toFixed(1)) : 0);

    const hourPoints = hourlyData.map(d => parseFloat((d.totalMinutes / 60).toFixed(2)));

    if (this.charts.hourlyChart) this.charts.hourlyChart.destroy();

    this.charts.hourlyChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Chất lượng',
                    data: qualityPoints,
                    borderColor: '#a78bfa',
                    backgroundColor: 'rgba(167, 139, 250, 0.05)',
                    borderWidth: 1.5,
                    yAxisID: 'y',
                    fill: true,
                    tension: 0.3,
                    order: 1
                },
                {
                    label: 'Thời lượng', 
                    data: hourPoints,
                    type: 'bar',
                    backgroundColor: 'rgba(56, 189, 248, 0.2)',
                    borderColor: 'rgba(56, 189, 248, 0.5)',
                    borderWidth: 1,
                    yAxisID: 'y1',
                    order: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            elements: {
                point: {
                    hitRadius: 30,
                    hoverRadius: 2.5,
                    radius: 1.3
                }
            },
            plugins: {
                legend: { display: true, labels: { font: {size: 11}} },
                tooltip: {
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true,
                    callbacks: {
                        title: (items) => `${items[0].label} - ${parseInt(items[0].label) + 1}h`,
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) label += ': ';
                            if (context.parsed.y !== null) {
                                if (context.dataset.yAxisID === 'y') {
                                    label += context.parsed.y + '%';
                                } else {
                                    const totalHours = context.parsed.y;

                                    if (totalHours < 1) {
                                        label += Math.round(totalHours * 60) + ' phút';
                                    } else {
                                        label += totalHours.toFixed(1) + ' giờ';
                                    }
                                }
                            }
                            return label;
                        },
                        labelColor: function(context) {
                            return {
                                borderColor: context.dataset.borderColor,
                                backgroundColor: context.dataset.borderColor,
                                borderWidth: 0,
                                borderRadius: 2,
                            };
                        }
                    }
                }
            },
            scales: {
                y: {
                    type: 'linear', display: true, position: 'left', min: 0, max: 100,
                    grid: { color: '#374151' }, 
                    ticks: { color: '#9ca3af', font: { size: 10 }, callback: function(value) {
                return value + '%';
            } }
                },
                y1: {
                    type: 'linear', display: true, position: 'right',
                    beginAtZero: true,
                    grid: { drawOnChartArea: false },
                    ticks: { 
                        color: '#9ca3af',
                        font: { size: 10 },
                        callback: function(value) { 
                            if (value === 0) return 0;
                            if (value < 1) return Math.round(value * 60) + 'p';
                            return value + 'h'; 
                        }
                    }
                },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 } },
                    grid: { color: 'rgba(55, 65, 81, 0.5)', display: true }
                }
            }
        }
    });
}

getStatsForRange(startTime, endTime, goalIds) {
    const logs = this.data.logs.filter(l => 
        goalIds.includes(l.goalId) && 
        l.timestamp >= startTime && 
        l.timestamp < endTime
    );

    if (logs.length === 0) return { count: 0, minutes: 0, quality: 0, density: 0 };

    let totalMinutes = 0;
    let totalTouches = 0;
    let weightedQualitySum = 0;

    logs.forEach(l => {
        totalMinutes += l.minutes;
        const count = l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0);
        totalTouches += count;

        const analysis = this.analyzeSingleSession(l);
        weightedQualitySum += (l.minutes * analysis.qualityPct);
    });

    return {
        count: logs.length,
        minutes: totalMinutes,
        quality: (weightedQualitySum / totalMinutes).toFixed(1),
        density: (totalTouches / totalMinutes).toFixed(1)
    };
}

renderComparisonTable(medGoalIds) {
    const tbody = document.getElementById('ana-comparison-table');
    tbody.innerHTML = '';

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    const startOfYesterday = todayStart - (24 * 60 * 60 * 1000);
    const startOfDaybefore = todayStart - (48 * 60 * 60 * 1000);
    const dayOfWeek = now.getDay(); 
    const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
    const startOfThisWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - diffToMonday).getTime();
    const startOfLastWeek = startOfThisWeek - (7 * 24 * 60 * 60 * 1000);
    const startOfWeekBefore = startOfThisWeek - (14 * 24 * 60 * 60 * 1000);
    const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    const startOfMonthBefore = new Date(now.getFullYear(), now.getMonth() - 2, 1).getTime();

   const periods = [
        { label: 'Hôm nay', start: todayStart, end: Date.now() },
        { label: 'Hôm qua', start: startOfYesterday, end: todayStart },
		{ label: 'Hôm kia', start: startOfDaybefore, end: startOfYesterday },
        { label: 'Tuần này', start: startOfThisWeek, end: Date.now() },
        { label: 'Tuần trước', start: startOfLastWeek, end: startOfThisWeek },
		{ label: 'Tuần trước nữa', start: startOfWeekBefore, end: startOfLastWeek },
        { label: 'Tháng này', start: startOfThisMonth, end: Date.now() },
        { label: 'Tháng trước', start: startOfLastMonth, end: startOfThisMonth },
		{ label: 'Tháng trước nữa', start: startOfMonthBefore, end: startOfLastMonth }
    ];

    periods.forEach(p => {

        const stats = this.getStatsForRange(p.start, p.end, medGoalIds);
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border)';
        
        let qualityColor = 'var(--text)';
        if(stats.count > 0) {
            if(stats.quality > 70) qualityColor = 'var(--success)';
            else if(stats.quality < 40) qualityColor = 'var(--danger)';
        }

        row.innerHTML = `
            <td style="padding: 12px 10px; font-weight: 500;">${p.label}</td>
            <td style="padding: 12px 10px; text-align: center;">${stats.count}</td>
            <td style="padding: 12px 10px; text-align: center;">${(stats.minutes/60).toFixed(1)}h</td>
            <td style="padding: 12px 10px; text-align: center; color: ${qualityColor}; font-weight:bold;">${stats.count > 0 ? stats.quality + '%' : '-'}</td>
            <td style="padding: 12px 10px; text-align: center;">${stats.count > 0 ? stats.density : '-'}</td>
        `;
        tbody.appendChild(row);
    });
}

       renderProAnalytics(resetDates = false) {
    if (!document.getElementById('proWeeklyChart')) return;

    // --- 1. SETUP DATES & RANGES ---
    const rangeSelect = document.getElementById('pro-range-select');
    const rangeMode = rangeSelect ? rangeSelect.value : 'this_week';
    const now = new Date();
    
    const realCurrentDay = now.getDay() || 7; 
    const realThisWeekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - realCurrentDay + 1);
    const realThisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    if (resetDates) {
        if (rangeMode === 'last_week') {
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
            this.currentMonth = new Date(this.currentWeekStart.getFullYear(), this.currentWeekStart.getMonth(), 1);
        } 
        else if (rangeMode === 'last_month') {
            this.currentMonth = new Date(realThisMonthStart);
            this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            this.currentWeekStart = this.getStartOfWeek(new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1));
        }
        else {
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentMonth = new Date(realThisMonthStart);
        }
    }

    // Calculate Breakdown Range
    let filterStart = 0;
    let filterEnd = Date.now() + 86400000;
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    if (rangeMode === 'today') filterStart = todayStart;
    else if (rangeMode === 'yesterday') {
        filterEnd = todayStart;
        filterStart = todayStart - 86400000; 
    }
    else if (rangeMode === 'this_week') filterStart = realThisWeekStart.getTime();
    else if (rangeMode === 'last_week') {
        filterEnd = realThisWeekStart.getTime();
        filterStart = realThisWeekStart.getTime() - (7 * 24 * 60 * 60 * 1000);
    } else if (rangeMode === 'this_month') filterStart = realThisMonthStart.getTime();
    else if (rangeMode === 'last_month') {
        filterEnd = realThisMonthStart.getTime();
        filterStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    }

    // Ranges for Weekly/Monthly Charts
    const weekStartMs = this.currentWeekStart.getTime();
    const weekEndMs = weekStartMs + (7 * 24 * 60 * 60 * 1000);
    const weekEndDisp = new Date(weekEndMs - 1);
    document.getElementById('pro-weekly-title').innerText = `Tuần (${this.currentWeekStart.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})} - ${weekEndDisp.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})})`;

    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({length: new Date(mYear, mMonth + 1, 0).getDate()}, (_, i) => i + 1);
    document.getElementById('pro-monthly-title').innerText = `Tháng ${new Date(mYear, mMonth).toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' })}`;

    // --- 2. PREPARE DATA CONTAINERS (STORING MINUTES) ---
    const qualities = {
        1: { label: 'Cao', color: '#34d399' },
        2: { label: 'Tốt', color: '#60a5fa' },
        3: { label: 'Trung bình', color: '#fbbf24' },
        4: { label: 'Thấp', color: '#f87171' },
        5: { label: 'Tỉnh giác', color: '#a78bfa' }, // Added Level 5 for Awareness
        0: { label: 'Thất niệm', color: '#6b7280' } 
    };

    // Initialize with 0 for levels 1-5 and 0
    const breakdownData = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 0: 0 };
    const weeklyData = { 
        1: new Array(7).fill(0), 
        2: new Array(7).fill(0), 
        3: new Array(7).fill(0), 
        4: new Array(7).fill(0),
        5: new Array(7).fill(0),
        0: new Array(7).fill(0) 
    };
    const monthlyData = { 
        1: new Array(monthlyLabels.length).fill(0), 
        2: new Array(monthlyLabels.length).fill(0), 
        3: new Array(monthlyLabels.length).fill(0), 
        4: new Array(monthlyLabels.length).fill(0),
        5: new Array(monthlyLabels.length).fill(0),
        0: new Array(monthlyLabels.length).fill(0) 
    };

    // --- 3. DATA AGGREGATION LOGIC ---
    this.data.logs.forEach(log => {
        // Skip logs without touches (or handle standard logs differently if needed, but Pro view focuses on touches)
        if (!log.touches || log.touches.length === 0) return;

        // 1. Calculate Total Mindful Time vs Distracted Time (in Seconds)
        const analysis = this.analyzeSingleSession(log);
        const totalSec = log.minutes * 60;
        const distractedSec = analysis.distractedSec;

        // Calculate Recovery Time (Tỉnh giác)
        const holdDurationSec = (this.data.medSettings.holdDuration || 500) / 1000;
        const recoverySec = (log.awarenessCount || 0) * holdDurationSec;

        // Pure Mindful Time = Total - Distracted - Recovery
        // (Note: analyzeSingleSession already reduces distractedSec by recoverySec, so Total - Distracted includes Recovery. We subtract it here to separate them.)
        const mindfulSec = Math.max(0, totalSec - distractedSec - recoverySec);

        // 2. Count Pro touches to calculate ratios for Mindful Time
        const logCounts = { 1: 0, 2: 0, 3: 0, 4: 0 };
        let totalLogProTouches = 0;

        log.touches.forEach(t => {
            if (t.v) {
                logCounts[t.v]++;
                totalLogProTouches++;
            }
        });

        // 3. Prepare Time Buckets
        const logTime = log.timestamp;
        const logDateObj = new Date(logTime);
        
        // Determine array indices
        let weekDayIdx = -1;
        if (logTime >= weekStartMs && logTime < weekEndMs) {
            let d = logDateObj.getDay();
            weekDayIdx = (d === 0 ? 6 : d - 1);
        }
        
        let monthDayIdx = -1;
        if (logDateObj.getFullYear() === mYear && logDateObj.getMonth() === mMonth) {
            monthDayIdx = logDateObj.getDate() - 1;
        }

        // Helper to add minutes
        const addMinutes = (level, minutes) => {
            if (logTime >= filterStart && logTime < filterEnd) {
                breakdownData[level] += minutes;
            }
            if (weekDayIdx !== -1) weeklyData[level][weekDayIdx] += minutes;
            if (monthDayIdx !== -1) monthlyData[level][monthDayIdx] += minutes;
        };

        // 4. Distribute "Distracted" Time (Level 0)
        if (distractedSec > 0) {
            addMinutes(0, distractedSec / 60);
        }

        // 5. Distribute "Awareness" Time (Level 5 - Tỉnh giác)
        if (recoverySec > 0) {
            addMinutes(5, recoverySec / 60);
        }

        // 6. Distribute "Mindful" Time (Levels 1-4)
        if (totalLogProTouches > 0) {
            [1, 2, 3, 4].forEach(level => {
                if (logCounts[level] > 0) {
                    const levelSeconds = (logCounts[level] / totalLogProTouches) * mindfulSec;
                    addMinutes(level, levelSeconds / 60);
                }
            });
        }
    });

    const formatTime = (mins) => {
        if (mins >= 60) return (mins / 60).toFixed(1) + 'h';
        return mins.toFixed(0) + 'p';
    };

    const formatTimeDetailed = (mins) => {
        if (mins >= 60) return (mins / 60).toFixed(1) + 'h';
        return mins.toFixed(1) + 'p';
    };
    const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    
    // --- 4. RENDER BREAKDOWN CHART ---
    const ctxBreakdown = document.getElementById('proBreakdownChart').getContext('2d');
    if (this.charts.proBreakdown) this.charts.proBreakdown.destroy();

    // Total Minutes (Mindful + Awareness + Distracted)
    const totalBreakdown = Object.values(breakdownData).reduce((a, b) => a + b, 0);

    // Calculate Average Score (Only based on Mindful time, i.e., levels 1-4)
    let averageScore = 0;
    const totalMindfulMinutes = breakdownData[1] + breakdownData[2] + breakdownData[3] + breakdownData[4];
    
    if (totalMindfulMinutes > 0) {
        const weightedSum = (breakdownData[1] * 4) + 
                            (breakdownData[2] * 3) + 
                            (breakdownData[3] * 2) + 
                            (breakdownData[4] * 1);
        averageScore = (weightedSum / totalMindfulMinutes).toFixed(2);
    }

    this.charts.proBreakdown = new Chart(ctxBreakdown, {
        type: 'bar',
        data: {
            labels: ['Mức chú tâm'],
            datasets: [
                { label: qualities[1].label, data: [breakdownData[1]], backgroundColor: qualities[1].color, borderRadius: { topLeft: 8, bottomLeft: 8 } },
                { label: qualities[2].label, data: [breakdownData[2]], backgroundColor: qualities[2].color },
                { label: qualities[3].label, data: [breakdownData[3]], backgroundColor: qualities[3].color },
                { label: qualities[4].label, data: [breakdownData[4]], backgroundColor: qualities[4].color },
                { label: qualities[5].label, data: [breakdownData[5]], backgroundColor: qualities[5].color }, // Awareness
                { label: qualities[0].label, data: [breakdownData[0]], backgroundColor: qualities[0].color, borderRadius: { topRight: 8, bottomRight: 8 } }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true, display: true,
                    grid: { display: true, color: 'rgba(55, 65, 81, 0.5)' },
                    ticks: { 
                        display: true, color: '#9ca3af', font: { size: 10 },
                        callback: function(value) { return formatTime(value); }
                    }
                },
                y: { stacked: true, display: false }
            },
            plugins: {
                legend: {
                    display: true, position: 'bottom',
                    labels: {
                        color: '#9ca3af', usePointStyle: true, padding: 20, font: { size: 12 },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            return data.datasets.map((dataset, i) => {
                                const val = dataset.data[0];
                                const pct = totalBreakdown > 0 ? ((val / totalBreakdown) * 100).toFixed(1) : 0;
                                const isHidden = !chart.isDatasetVisible(i);
                                return {
                                    text: `${dataset.label} (${pct}%)`,
                                    fillStyle: dataset.backgroundColor, strokeStyle: 'transparent',
                                    fontColor: isHidden ? '#6b7280' : '#9ca3af',
                                    pointStyle: 'circle', datasetIndex: i, hidden: isHidden
                                };
                            });
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    callbacks: {
                        label: function(context) {
                            const val = context.raw; 
                            const pct = totalBreakdown > 0 ? ((val / totalBreakdown) * 100).toFixed(1) : 0;
                            return ` ${context.dataset.label}: ${formatTimeDetailed(val)} (${pct}%)`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: totalBreakdown === 0 ? 'Chưa có dữ liệu ghi nhận' : `Mức chú tâm trung bình: ${averageScore} / 4.0`,
                    color: totalBreakdown === 0 ? '#6b7280' : '#f3f4f6',
                    font: { size: 14, style: 'italic', weight: totalBreakdown === 0 ? 'normal' : '600' },
                    padding: { top: 10, bottom: 10 }
                },
            }
        }
    });

    // --- 5. RENDER WEEKLY & MONTHLY CHARTS ---
    const commonOptions = {
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, grid: { color: '#374151' }, ticks: { color: '#9ca3af', font: { size: 11 } } },
            y: { 
                stacked: true, 
                grid: { color: '#374151' }, 
                title: { display: false }, 
                ticks: { 
                    color: '#9ca3af', font: { size: 10 },
                    callback: function(value) { return formatTime(value); }
                } 
            }
        },
        plugins: {
            legend: { labels: { color: '#9ca3af', font: {size: 11} } },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        let total = 0;
                        context.chart.data.datasets.forEach((dataset, i) => {
                            if (context.chart.isDatasetVisible(i)) {
                                total += dataset.data[context.dataIndex];
                            }
                        });
                        const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                        return `${label}: ${formatTimeDetailed(value)} (${percentage}%)`;
                    }
                }
            }
        }
    };

    // Weekly Chart
    const weeklyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: (context) => {
                        const dayIndex = context[0].dataIndex;
                        const date = new Date(this.currentWeekStart);
                        date.setDate(date.getDate() + dayIndex);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        return `${context[0].label} (${day}/${month})`;
                    }
                }
            }
        }
    };

    const ctxWeekly = document.getElementById('proWeeklyChart').getContext('2d');
    if (this.charts.proWeekly) this.charts.proWeekly.destroy();
    this.charts.proWeekly = new Chart(ctxWeekly, {
        type: 'bar',
        data: {
            labels: weekDays,
            datasets: [
                { label: qualities[1].label, data: weeklyData[1], backgroundColor: qualities[1].color },
                { label: qualities[2].label, data: weeklyData[2], backgroundColor: qualities[2].color },
                { label: qualities[3].label, data: weeklyData[3], backgroundColor: qualities[3].color },
                { label: qualities[4].label, data: weeklyData[4], backgroundColor: qualities[4].color },
                { label: qualities[5].label, data: weeklyData[5], backgroundColor: qualities[5].color }, // Awareness
                { label: qualities[0].label, data: weeklyData[0], backgroundColor: qualities[0].color }
            ]
        },
        options: weeklyOptions 
    });

    // Monthly Chart
    const monthlyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: (context) => {
                         const d = context[0].label;
                         return `${String(d).padStart(2, '0')}/${String(mMonth + 1).padStart(2, '0')}`;
                    }
                }
            }
        }
    };

    const ctxMonthly = document.getElementById('proMonthlyChart').getContext('2d');
    if (this.charts.proMonthly) this.charts.proMonthly.destroy();
    this.charts.proMonthly = new Chart(ctxMonthly, {
        type: 'bar',
        data: {
            labels: monthlyLabels,
            datasets: [
                { label: qualities[1].label, data: monthlyData[1], backgroundColor: qualities[1].color },
                { label: qualities[2].label, data: monthlyData[2], backgroundColor: qualities[2].color },
                { label: qualities[3].label, data: monthlyData[3], backgroundColor: qualities[3].color },
                { label: qualities[4].label, data: monthlyData[4], backgroundColor: qualities[4].color },
                { label: qualities[5].label, data: monthlyData[5], backgroundColor: qualities[5].color }, // Awareness
                { label: qualities[0].label, data: monthlyData[0], backgroundColor: qualities[0].color }
            ]
        },
        options: monthlyOptions
    });

    this.renderProTrendChart();
}
renderProTrendChart() {
    const ctxTrend = document.getElementById('proTrendChart');
    if (!ctxTrend) return;
    const ctx = ctxTrend.getContext('2d');

    // 1. Determine Time Range
    const selectEl = document.getElementById('pro-trend-select');
    const rangeVal = selectEl ? selectEl.value : '30';
    
    let filterStart = 0;
    const now = Date.now();

    if (rangeVal === 'all') {
        filterStart = 0;
    } else {
        const days = parseInt(rangeVal);
        filterStart = now - (days * 24 * 60 * 60 * 1000);
    }

    // 2. Filter Logs (Only logs with Pro data)
    let trendLogs = this.data.logs
        .filter(l => l.timestamp >= filterStart)
        .filter(l => l.touches && l.touches.some(t => t.v)) 
        .sort((a, b) => a.timestamp - b.timestamp);

    if (trendLogs.length === 0) {
        if (this.charts.proTrend) this.charts.proTrend.destroy();
        return;
    }

    // 3. Pre-calculate score for every valid session
    const sessionData = trendLogs.map(log => {
        const proTouches = log.touches.filter(t => t.v);
        const totalScore = proTouches.reduce((sum, t) => sum + (5 - t.v), 0);
        const avg = proTouches.length > 0 ? (totalScore / proTouches.length) : 0;
        
        const d = new Date(log.timestamp);
        // Formats for tooltip and labels
        const timeStr = d.getHours().toString().padStart(2, '0') + ':' + 
                        d.getMinutes().toString().padStart(2, '0');
        const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                        (d.getMonth() + 1).toString().padStart(2, '0');

        return {
            timestamp: log.timestamp,
            date: dateStr,
            fullDateTime: `${timeStr}, ${dateStr}`, 
            score: avg
        };
    });

    // 4. Data Aggregation (Time-Window Averaging)
    // Similar to analyticsTrend: Bin data into buckets to show a true trend
    let chartData = [];
    const maxPoints = 30; // Match analytics chart density

    if (sessionData.length <= maxPoints) {
        // If we have fewer logs than maxPoints, show them all directly
        chartData = sessionData.map(d => ({
            label: d.date,
            score: parseFloat(d.score.toFixed(2)),
            tooltipTitle: d.fullDateTime
        }));
    } else {
        // Otherwise, bucket them by time
        const startTime = sessionData[0].timestamp;
        const endTime = sessionData[sessionData.length - 1].timestamp;
        const totalDuration = endTime - startTime;
        const step = totalDuration / maxPoints;

        for (let i = 0; i < maxPoints; i++) {
            const bucketStart = startTime + (i * step);
            const bucketEnd = bucketStart + step;

            // Find all sessions in this time window
            const bucketLogs = sessionData.filter(d => 
                d.timestamp >= bucketStart && d.timestamp < bucketEnd
            );

            // Ensure the very last log is included
            if (i === maxPoints - 1) {
                const lastLog = sessionData[sessionData.length - 1];
                if (!bucketLogs.includes(lastLog)) bucketLogs.push(lastLog);
            }

            if (bucketLogs.length > 0) {
                // Calculate Average Score for this bucket
                const totalQ = bucketLogs.reduce((sum, item) => sum + item.score, 0);
                const avgQ = totalQ / bucketLogs.length;

                const d = new Date(bucketStart);
                const dateStr = d.getDate().toString().padStart(2, '0') + '/' + 
                                (d.getMonth() + 1).toString().padStart(2, '0');

                chartData.push({
                    label: dateStr,
                    score: parseFloat(avgQ.toFixed(2)),
                    // Tooltip indicates this is an average
                    tooltipTitle: `${dateStr} (TB ${bucketLogs.length} thời)` 
                });
            }
        }
    }

    // 5. Render Chart
    if (this.charts.proTrend) this.charts.proTrend.destroy();

    this.charts.proTrend = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.map(d => d.label),
            datasets: [
                {
                    label: 'Điểm chú tâm TB',
                    data: chartData.map(d => d.score),
                    borderColor: '#818cf8', // Emerald-500 equivalent style
                    backgroundColor: 'rgba(129, 140, 248, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: true
            },
            elements: {
                point: {
                    hitRadius: 30,     
                    hoverRadius: 4     
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    min: 0,
                    max: 4.2, 
                    grid: { color: '#374151' },
                    ticks: {
                        color: '#9ca3af',
                        font: { size: 10 },
                        stepSize: 1,
                        padding: 0.1,
                        callback: function(value) {
                            if(value === 1) return 'Thấp (1)';
                            if(value === 2) return 'TB (2)';
                            if(value === 3) return 'Tốt (3)';
                            if(value === 4) return 'Cao (4)';
							if(value === 0) return '☁️ (0)';
                            return '';
                        }
                    }
                },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 } },
                    grid: { color: 'rgba(55, 65, 81, 0.5)' }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        title: (context) => chartData[context[0].dataIndex].tooltipTitle,
                        label: function(context) {
                            return `Mức chú tâm: ${context.parsed.y} / 4.0`;
                        }
                    }
                }
            }
        }
    });
}
// Change parameter default to 4 (Thấp)
triggerMindfulnessSuccess(quality = 4) {
    const settings = this.data.medSettings;
    const now = Date.now();
    
    // Logic Combo & Auto Level (Tự động tăng mức độ khó/chất lượng theo thời gian)
    const thresholdMs = this.meditationState.threshold * 1000;
    const timeDiff = now - this.meditationState.lastTouchTime;

    let nextAutoLevel = this.meditationState.currentAutoLevel;
    let nextComboCounter = this.meditationState.comboCounter;

    // Nếu khoảng cách giữa 2 lần chạm quá lâu (thất niệm) -> Reset về mức thấp
    if (timeDiff > thresholdMs) {
        nextAutoLevel = 4;
        nextComboCounter = 0;
    } else {
        // Nếu duy trì tốt, tăng combo
        if (nextAutoLevel > 1) {
            nextComboCounter++;
            const hitsRequired = 15;
            if (nextComboCounter >= hitsRequired) {
                nextAutoLevel--; // Giảm số Level (1 là cao nhất)
                nextComboCounter = 0;
            }
        }
    }

    // --- LOGIC PRO THỐNG NHẤT ---
    let finalQuality = nextAutoLevel; 
    let potentialProQuality = quality;
    
    finalQuality = Math.min(potentialProQuality, nextAutoLevel);

    // --- LOGIC XÁC NHẬN (CONFIRM MODE) ---
    const isLowQuality = (finalQuality === 4);
    let needConfirm = false;

    if (settings.confirmMode && isLowQuality) {
        if (this.meditationState.pendingConfirmation) {
            needConfirm = true; 
        } else {
            const chance = settings.confirmProbability || 100;
            const roll = Math.random() * 100;
            if (roll <= chance) {
                needConfirm = true;
            }
        }
    }

    if (needConfirm) {
        const counterEl = document.getElementById('med-counter');

        if (!this.meditationState.pendingConfirmation) {
            this.meditationState.pendingConfirmation = true;
            this.meditationState.pendingTouchData = { 
                quality: finalQuality, 
                timestamp: now 
            };
            
            counterEl.style.transition = "all 0.2s";
            counterEl.style.borderColor = "var(--warning)";
            counterEl.style.color = "var(--warning)";
            counterEl.style.transform = "scale(0.85)";
          
            this.meditationState.confirmationTimeout = setTimeout(() => {
                this.meditationState.pendingConfirmation = false;
                this.meditationState.pendingTouchData = null;
                
                counterEl.style.borderColor = "transparent";
                counterEl.style.color = "white";
                counterEl.style.transform = "scale(1)";
            }, 3000); 

            return; // Dừng lại chờ xác nhận
        } else {
            clearTimeout(this.meditationState.confirmationTimeout);
            this.meditationState.pendingConfirmation = false;
        }
    }

    // Cập nhật trạng thái
    this.meditationState.currentAutoLevel = nextAutoLevel;
    this.meditationState.comboCounter = nextComboCounter;
    this.meditationState.lastTouchTime = now;

    // Đếm combo Good cho Pro
    if (quality === 2) {
        this.meditationState.consecutiveGoodCount = (this.meditationState.consecutiveGoodCount || 0) + 1;
    } else {
        this.meditationState.consecutiveGoodCount = 0;
    }

    this.handleMeditationTouch(finalQuality);

    // Rung phản hồi
    if (settings.vibration && navigator.vibrate) {
        switch(finalQuality) {
            case 1: navigator.vibrate([80, 50, 80]); break; 
            case 2: navigator.vibrate([60, 40, 60]); break; 
            case 3: navigator.vibrate([40, 30, 40]); break; 
            case 4: navigator.vibrate(50); break;           
            default: navigator.vibrate(50);
        }
    }

    // Hiệu ứng Visual
    const counterEl = document.getElementById('med-counter');
    const colors = { 1: 'var(--q-1)', 2: 'var(--q-2)', 3: 'var(--q-3)', 4: 'var(--q-4)' }; 
    const pulseColor = colors[finalQuality] || 'var(--q-4)';

    counterEl.style.transition = "transform 0.1s";
    counterEl.style.transform = "scale(1.3)";
    counterEl.style.borderColor = pulseColor;
    counterEl.style.color = pulseColor; 

    setTimeout(() => {
        counterEl.style.transform = "scale(1)";
        counterEl.style.borderColor = "transparent";
        counterEl.style.color = "white";
    }, 200);
}
            
            save() {
               
                dbHelper.saveAll(this.data).catch(err => {
                    console.error("Save failed:", err);
                    this.showToast("Lỗi lưu dữ liệu!");
                });
                
                this.updateStats();
            }
get totalMindfulnessCounts() {
    return this.data.logs.reduce((sum, log) => {

        return sum + (log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0));
    }, 0);
}

            playBell() {
                const audio = document.getElementById('bell');
                if (audio) {
                    audio.currentTime = 0;
                    audio.play().catch(e => console.log("Audio play failed (autoplay blocked):", e));
                }
            }

            saveGoal(e) {
                e.preventDefault();
                const id = document.getElementById('g-id').value;
                const type = document.getElementById('g-type').value || 'standard';
                const name = document.getElementById('g-name').value;
                const category = document.getElementById('g-cat').value;
                const color = document.getElementById('g-color').value;
                const lifetimeTarget = parseInt(document.getElementById('g-lifetime-target').value);
                const dailyTarget = parseInt(document.getElementById('g-daily-target').value);

                if (id) {
                    const goal = this.data.goals.find(g => g.id === id);
                    if (goal) {
                        goal.name = name; goal.category = category; goal.color = color;
                        goal.lifetimeTargetMinutes = lifetimeTarget; goal.dailyTargetMinutes = dailyTarget;
						goal.lastUpdated = Date.now();
                        this.showToast('Đã cập nhật mục tiêu!');
                    }
                } else {
                    const newGoal = {
                        id: Date.now().toString(), type, name, category, color,
                        lifetimeTargetMinutes: lifetimeTarget, dailyTargetMinutes: dailyTarget || 0,
						dailySessionTarget: 8,
						lastUpdated: Date.now(),
                        totalMinutes: 0, totalMindfulness: 0, sessionTargetSeconds: 0,
                        remainingSeconds: 0, currentSessionStartTime: null, isActive: false
                    };
                    this.data.goals.push(newGoal);
                    this.showToast('Đã tạo mục tiêu!');
                }
                this.save();
                this.renderGoals();
                this.closeModal();
            }

          

toggleTimer(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    // Tắt các timer khác đang chạy (để chỉ chạy 1 cái một lúc)
    this.data.goals.forEach(g => {
        if (g.isActive && g.id !== id && g.type === 'standard') this.toggleTimer(g.id);
    });

    // Nếu là Thiền (Meditation) -> Chuyển sang hàm khác (không áp dụng fix này ở đây)
    if (goal.type === 'meditation') {
        this.startMeditationSetup(goal);
        return;
    }

    if (goal.isActive) {
        // --- KHI BẤM DỪNG (STOP) ---
        clearInterval(this.timers[id]);
        goal.isActive = false;

        // [QUAN TRỌNG] Tắt âm thanh nền để tiết kiệm pin khi không đếm giờ
        if (this.noSleepAudio) {
            this.noSleepAudio.pause();
            this.noSleepAudio.currentTime = 0;
        }
        
        // Tính toán thời gian đã trôi qua
        const spentSeconds = goal.sessionTargetSeconds - goal.remainingSeconds;
        const minutesSpent = Math.floor(spentSeconds / 60);
        const startTime = goal.currentSessionStartTime || Date.now();
        
        // Reset
        goal.sessionTargetSeconds = 0; 
        goal.remainingSeconds = 0; 
        goal.currentSessionStartTime = null;
        goal.targetEndTime = null;

        if (minutesSpent > 0) this.openSessionModal(id, minutesSpent, null, startTime);
        else this.showToast('Phiên quá ngắn.');

    } else {
        // --- KHI BẮT ĐẦU (START) ---
        const defaultTime = goal.lastDuration || '20';
        const minStr = prompt('Thời lượng (phút):', defaultTime);
        
        if (!minStr) return;
        const min = parseInt(minStr);
        if (isNaN(min) || min <= 0) return;

        goal.lastDuration = min; 
        this.save(); 

        // [QUAN TRỌNG] Bật âm thanh nền để giữ trình duyệt thức
        if (this.noSleepAudio) {
            this.noSleepAudio.play().catch(e => console.log("Audio block: cần tương tác"));
        }

        goal.sessionTargetSeconds = min * 60;
        goal.remainingSeconds = goal.sessionTargetSeconds;
        goal.isActive = true;
        goal.currentSessionStartTime = Date.now(); 
        
        // [FIX] Tính thời điểm kết thúc (Target Time)
        goal.targetEndTime = Date.now() + (goal.remainingSeconds * 1000);

        this.timers[id] = setInterval(() => {
            // [FIX] Tính giây còn lại dựa trên thời gian thực
            const now = Date.now();
            const secondsLeft = Math.ceil((goal.targetEndTime - now) / 1000);
            
            goal.remainingSeconds = secondsLeft > 0 ? secondsLeft : 0;

            if (secondsLeft <= 0) {
                // --- HOÀN THÀNH ---
                clearInterval(this.timers[id]);
                
                // Chuông sẽ reo đúng giờ nhờ Audio giữ trình duyệt thức
                this.playBell(); 
                
                // Tắt âm thanh nền
                if (this.noSleepAudio) {
                    this.noSleepAudio.pause();
                    this.noSleepAudio.currentTime = 0;
                }

                goal.isActive = false;
                goal.targetEndTime = null;
                
                const minutesSpent = Math.floor(goal.sessionTargetSeconds / 60);
                const startTime = goal.currentSessionStartTime;
                goal.sessionTargetSeconds = 0; 
                goal.remainingSeconds = 0; 
                goal.currentSessionStartTime = null;
                
                this.openSessionModal(id, minutesSpent, null, startTime);
                this.showToast('Hoàn thành!');
                this.renderGoals(); 
            }
        }, 1000);
    }
    this.renderGoals();
}

startMeditationSetup(goal) {
    const defaultTime = goal.lastDuration || '20';
    const minStr = prompt('Thời gian thiền (phút):', defaultTime);
    
    if (!minStr) return;
    const min = parseInt(minStr);
    if (isNaN(min) || min <= 0) return;

    const defaultThreshold = goal.lastThreshold || '9';
    const threshStr = prompt('Ngưỡng mất tập trung (giây):\n(thời gian tối đa cho 1 lần chánh niệm)', defaultThreshold);
    let threshold = 9; 
    
    if (threshStr && !isNaN(parseInt(threshStr)) && parseInt(threshStr) > 0) {
        threshold = parseInt(threshStr);
    }

    goal.lastDuration = min;
    goal.lastThreshold = threshold;
    this.save(); 
    
    if (typeof Website2APK !== 'undefined') {
        Website2APK.keepScreenOn(true); 
    }

    this.meditationState = {
        active: true, paused: false, goalId: goal.id, 
        count: 0,           // Đếm Chánh niệm (Tap)
        awarenessCount: 0,  // Đếm Tỉnh giác (Hold) - MỚI
        startTime: Date.now(), totalDurationSeconds: min * 60,
        remainingSeconds: min * 60, touches: [],
        threshold: threshold, 
        quoteInterval: null,
        
        currentAutoLevel: 4,      
        comboCounter: 0,          
        lastTouchTime: Date.now(), 
        
        consecutiveGoodCount: 0, 

        pendingConfirmation: false,
        pendingTouchData: null,
        confirmationTimeout: null
    };

    document.getElementById('meditation-overlay').style.display = 'flex';
    document.getElementById('med-counter').innerText = '0';
    this.updateMedTimerDisplay();

    this.updateMeditationQuote(true); 
    this.meditationState.quoteInterval = setInterval(() => {
        if(!this.meditationState.paused) {
            this.updateMeditationQuote(false);
        }
    }, 8000); 

    this.meditationState.timerRef = setInterval(() => {
        if (!this.meditationState.paused) {
            if (this.meditationState.remainingSeconds > 0) {
                this.meditationState.remainingSeconds--;
                this.updateMedTimerDisplay();
            } else {
                this.concludeMeditationSession('auto');
            }
        }
    }, 1000);
}

            updateMedTimerDisplay() {
                const s = this.meditationState.remainingSeconds;
                const m = Math.floor(s / 60);
                const sec = s % 60;
                document.getElementById('med-timer').innerText = `${m}:${sec.toString().padStart(2, '0')}`;
            }

            handleMeditationTouch(value = 1, customTimestamp = null) {
    if (!this.meditationState.active || this.meditationState.paused) return;
    this.meditationState.count++;

    const touchTime = customTimestamp || Date.now();
    const touchData = { t: touchTime };
    touchData.v = value;

    this.meditationState.touches.push(touchData);
    
    const el = document.getElementById('med-counter');
    el.innerText = this.meditationState.count;
}

            
       updateMeditationQuote(isFirstTime = false) {
    const container = document.getElementById('med-quote-container');
    const txt = document.getElementById('med-quote-text');

    if (isFirstTime) {

        const randomItem = DHAMMAPADA[Math.floor(Math.random() * DHAMMAPADA.length)];
        txt.innerHTML = randomItem.t;
        container.style.opacity = '1';
    } else {

        container.style.opacity = '0';
        setTimeout(() => {
            const randomItem = DHAMMAPADA[Math.floor(Math.random() * DHAMMAPADA.length)];
            txt.innerHTML = randomItem.t;
            container.style.opacity = '1';
        }, 1000);
    }
}   

            concludeMeditationSession(type = 'manual') {
				if (type === 'manual') {
        // If user clicks "Cancel" (Hủy), return immediately to keep the session running
        if (!confirm("Bạn có chắc muốn kết thúc thời thiền không?")) {
            return;
        }
    }
    clearInterval(this.meditationState.timerRef);

    if (this.meditationState.quoteInterval) {
        clearInterval(this.meditationState.quoteInterval);
    }
    if (typeof Website2APK !== 'undefined') {
        Website2APK.keepScreenOn(false); 
    }

    if (type === 'auto') {
        this.playBell();
    }
    
    document.getElementById('meditation-overlay').style.display = 'none';
    
    const durationSeconds = this.meditationState.totalDurationSeconds - this.meditationState.remainingSeconds;
    const minutes = Math.ceil(durationSeconds / 60);
    
    if (minutes <= 0) {
        this.showToast("Phiên quá ngắn");
        this.meditationState.active = false;
        return;
    }
    
    document.getElementById('med-finish-count').innerText = this.meditationState.count;
    document.getElementById('med-finish-time').innerText = minutes + 'p';
    document.getElementById('med-finish-notes').value = '';
	this.renderQuickTags('finish-tags', 'med-finish-notes');
	
	const discardBtn = document.getElementById('btn-med-discard');
    const actionContainer = document.getElementById('med-finish-actions');

    if (discardBtn && actionContainer) {
        if (type === 'auto') {
            // Khi hết giờ: Ẩn nút Hủy và căn giữa nút Lưu
            discardBtn.style.display = 'none';
            actionContainer.style.justifyContent = 'center';
        } else {
            // Khi bấm dừng thủ công: Hiện đầy đủ và căn phải như cũ
            discardBtn.style.display = 'block';
            actionContainer.style.justifyContent = 'flex-end';
        }
    }
    document.getElementById('meditation-finish-modal').style.display = 'flex';
	
	
}
            
            discardMeditation() {
                document.getElementById('meditation-finish-modal').style.display = 'none';
                this.meditationState.active = false;
                this.showToast("Đã ngưng thời thiền");
            }

            saveMeditationLog() {
    const durationSeconds = this.meditationState.totalDurationSeconds - this.meditationState.remainingSeconds;
    const minutes = Math.ceil(durationSeconds / 60);
    const notes = document.getElementById('med-finish-notes').value;

    const goal = this.data.goals.find(g => g.id === this.meditationState.goalId);
    
    // Định dạng ghi chú tự động
    const autoNote = `Chánh niệm: ${this.meditationState.count} | Tỉnh giác: ${this.meditationState.awarenessCount}.`;

    const log = {
        goalId: goal.id,
        date: this.toIsoDate(new Date(this.meditationState.startTime)),
        timestamp: this.meditationState.startTime,
        minutes: minutes,
        notes: `${autoNote} ${notes}`,
        
        count: this.meditationState.count,                  // Chỉ lưu số Chánh niệm (Tap)
        awarenessCount: this.meditationState.awarenessCount,// Lưu số Tỉnh giác (Hold)
        
        touches: this.meditationState.touches.map(t => {
            const delta = Math.max(0, t.t - this.meditationState.startTime);
            return t.v ? { d: delta, v: t.v } : delta;
        }),
        threshold: this.meditationState.threshold 
    };

    this.data.logs.push(log);
    goal.totalMinutes += minutes;
    if (!goal.totalMindfulness) goal.totalMindfulness = 0;
    goal.totalMindfulness += this.meditationState.count;

    this.meditationState.active = false;
    this.save();
    this.recalculateStreak();
    this.renderGoals();
    this.renderReports();
    const newBadges = this.checkAchievements(true);
    
    document.getElementById('meditation-finish-modal').style.display = 'none';
    this.showToast(`Đã lưu! +${this.meditationState.count} Chánh niệm, +${this.meditationState.awarenessCount} Tỉnh giác.`);
	if (newBadges.length > 0) {
        setTimeout(() => {
            newBadges.forEach((title, index) => {
                // Nếu mở khóa nhiều cái cùng lúc, hiện lần lượt cách nhau 3.5s
                setTimeout(() => {
                    this.showToast(`💎 Mở khoá Pāramī: ${title}`, true);
                }, index * 3500); 
            });
        }, 1000); 
    }
}


            updateTimerUI() {
                const todayStr = this.toIsoDate(new Date());
                this.data.goals.forEach(goal => {
                    if (goal.type === 'meditation') return; 
                    let activeSessionMins = 0;
                    let sessionPctVal = 0;
                    if (goal.isActive) {
                        const display = document.getElementById(`timer-${goal.id}`);
                        if (display) display.innerText = this.formatTime(goal.remainingSeconds);
                        const activeSessionSeconds = goal.sessionTargetSeconds - goal.remainingSeconds;
                        activeSessionMins = Math.floor(activeSessionSeconds / 60);
                        sessionPctVal = goal.sessionTargetSeconds > 0 ? (activeSessionSeconds / goal.sessionTargetSeconds) * 100 : 0;
                    }
                    const sessionBar = document.getElementById(`bar-session-${goal.id}`);
                    const sessionText = document.getElementById(`prog-text-session-${goal.id}`);
                    if (sessionBar) sessionBar.style.width = `${sessionPctVal}%`;
                    if (sessionText) sessionText.innerText = goal.isActive ? `${activeSessionMins} / ${Math.floor(goal.sessionTargetSeconds / 60)} phút` : "Sẵn sàng";
                });
                this.updateStats(); 
            }


// Cập nhật hàm openMedSettings
openMedSettings() {
    const s = this.data.medSettings;
    
    // Gán giá trị vào input
    document.getElementById('inp-hold-time').value = s.holdDuration || 500;
    document.getElementById('disp-hold-time').innerText = ((s.holdDuration || 500) / 1000) + 's';
    
    document.getElementById('inp-vibrate').checked = s.vibration;
    document.getElementById('inp-confirm-mode').checked = s.confirmMode || false;
    
    const prob = (typeof s.confirmProbability !== 'undefined') ? s.confirmProbability : 100;
    document.getElementById('inp-confirm-prob').value = prob;
    document.getElementById('disp-confirm-prob').innerText = prob + '%';
    
    this.toggleConfirmSlider(); 
    
    // Hiển thị modal
    const modal = document.getElementById('med-settings-modal');
    modal.style.display = 'flex';
}

// Cập nhật hàm saveMedSettings
saveMedSettings() {
    this.data.medSettings = {
        mode: 'unified', // Luôn cố định
        holdDuration: parseInt(document.getElementById('inp-hold-time').value),
        vibration: document.getElementById('inp-vibrate').checked,
        confirmMode: document.getElementById('inp-confirm-mode').checked,
        confirmProbability: parseInt(document.getElementById('inp-confirm-prob').value)
    };

    this.save();
}

toggleConfirmSlider() {
    const isChecked = document.getElementById('inp-confirm-mode').checked;
    document.getElementById('confirm-slider-group').style.display = isChecked ? 'block' : 'none';
}


closeMedSettings() {
    this.saveMedSettings();
    document.getElementById('med-settings-modal').style.display = 'none';
}


// Thêm hàm này vào trong class GoalTracker
setDailySessionTarget(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    let dataChanged = false;

    // --- PROMPT 1: Daily Sessions (Số thời/phiên) ---
    const currentSession = goal.dailySessionTarget || 8;
    const inputSession = prompt(`(1/2) Đặt số thời thực hành hàng ngày cho "${goal.name}":`, currentSession);

    if (inputSession !== null) {
        const val = parseInt(inputSession);
        if (!isNaN(val) && val >= 0) {
            goal.dailySessionTarget = val;
            dataChanged = true;
        }
    }

    // --- PROMPT 2: Daily Target Amount (Minutes or Mindfulness Count) ---
    const isMeditation = goal.type === 'meditation';
    const unitLabel = isMeditation ? 'số chánh niệm' : 'số phút';
    const currentTarget = goal.dailyTargetMinutes || 100;

    const inputTarget = prompt(`(2/2) Đặt mục tiêu ${unitLabel} hàng ngày:`, currentTarget);

    if (inputTarget !== null) {
        const val = parseInt(inputTarget);
        if (!isNaN(val) && val >= 0) {
            goal.dailyTargetMinutes = val;
            dataChanged = true;
        }
    }

    // --- Save & Render if any changes occurred ---
    if (dataChanged) {
		goal.lastUpdated = Date.now();
        this.save();
        this.renderGoals();
        this.showToast(`Đã cập nhật mục tiêu ngày!`);
    }
}



// 3. Hàm Helper mới (Thay thế updateConfirmDisplay cũ)
updateConfirmProbDisplay() {
    const val = document.getElementById('inp-confirm-prob').value;
    document.getElementById('disp-confirm-prob').innerText = val + '%';
}

updateMedSettingDisplay() {
    const ms = document.getElementById('inp-hold-time').value;
    document.getElementById('disp-hold-time').innerText = (ms / 1000) + 's';

    this.data.medSettings.holdDuration = parseInt(ms);
}

toggleProModeUI() {
    const isPro = document.getElementById('inp-pro-mode').checked;
    document.getElementById('simple-tap-options').style.display = isPro ? 'none' : 'block';
    document.getElementById('pro-tap-options').style.display = isPro ? 'block' : 'none';
}

setDailyMinMedTarget(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    const current = goal.dailyMinMedTarget || 120;
    const input = prompt(`Đặt mục tiêu thời gian hàng ngày (phút) cho "${goal.name}":`, current);

    if (input !== null) {
        const val = parseInt(input);
        if (!isNaN(val) && val > 0) {
            goal.dailyMinMedTarget = val;
            this.save();
            this.renderGoals();
            this.showToast(`Đã cập nhật: ${val} phút/ngày`);
        }
    }
}
            renderGoals() {
    const container = document.getElementById('active-goals-container');
    const emptyMsg = document.getElementById('empty-msg');
    container.innerHTML = '';
    if (this.data.goals.length === 0) { emptyMsg.style.display = 'block'; return; }
    emptyMsg.style.display = 'none';
    const todayStr = this.toIsoDate(new Date());

    const sortedGoals = [...this.data.goals].sort((a, b) => {
            return (b.lastUpdated || 0) - (a.lastUpdated || 0);
        });

        sortedGoals.forEach(goal => {
        const isMeditation = goal.type === 'meditation';
        const unitLabel = isMeditation ? 'chánh niệm' : 'phút';
        const targetProp = isMeditation ? 'totalMindfulness' : 'totalMinutes';
        const overallPct = goal.lifetimeTargetMinutes > 0 ? Math.min((goal[targetProp] / goal.lifetimeTargetMinutes) * 100, 100) : 0;

        // 1. Calculate Today's Primary Value (Counts for Med, Mins for Standard)
        let todayVal = 0;
        if (isMeditation) {
            todayVal = this.data.logs
                .filter(l => l.goalId === goal.id && l.date === todayStr)
                .reduce((sum, l) => sum + (l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0)), 0);
        } else {
            todayVal = this.data.logs.filter(l => l.goalId === goal.id && l.date === todayStr).reduce((sum, l) => sum + l.minutes, 0);
        }
        
        const todayMinutes = this.data.logs
            .filter(l => l.goalId === goal.id && l.date === todayStr)
            .reduce((sum, l) => sum + l.minutes, 0);

        const dailyTarget = goal.dailyTargetMinutes || 0;
		const dailyminmedTarget = goal.dailyMinMedTarget || 120;
        let dailyPct = 0;
        let dailyBarColor = goal.color;
        
        // Calculate percentage for the Primary Bar
        if (dailyTarget > 0) {
            dailyPct = Math.min((todayVal / dailyTarget) * 100, 100);
            if (todayVal >= dailyTarget) dailyBarColor = 'var(--success)';
        }
        
        const div = document.createElement('div');
        div.className = 'card goal-card';
        div.style.borderLeft = `5px solid ${goal.color}`;
        
        let controlsHtml = '', dailySectionHtml = '', sessionSectionHtml = '';
        
        // --- DAILY SECTIONS ---
        if (dailyTarget > 0) {
            // 1. TÍNH TOÁN CHO PHẦN GRID (Ô VUÔNG)
            const todaySessionCount = this.data.logs.filter(l => l.goalId === goal.id && l.date === todayStr).length;
            const sessionTarget = goal.dailySessionTarget || 8;
            let sessionGridHtml = '';

            if (sessionTarget > 0) {
                sessionGridHtml = `<div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px; max-height: 85px; overflow-y: auto;">`;
                for (let i = 1; i <= sessionTarget; i++) {
                    const isDone = i <= todaySessionCount;
                    // Nếu hoàn thành: Có viền màu goal.color, chữ đậm.
                    // Nếu chưa: Không viền, nền mờ, chữ nhạt.
                    const boxStyle = isDone 
                        ? `border: 1px solid ${goal.color}; color: ${goal.color}; font-weight: bold; background: rgba(0,0,0,0.1);` 
                        : `border: 1px solid transparent; background: rgba(255,255,255,0.05); color: var(--text-light);`;
                    
                    sessionGridHtml += `
                        <div style="
                            width: 24px; height: 24px; 
                            display: flex; align-items: center; justify-content: center; 
                            font-size: 11px; border-radius: 4px;
                            ${boxStyle}
                        ">${i}</div>`;
                }
				// --- NEW CODE START: Add Green Tick if Completed ---
                if (todaySessionCount >= sessionTarget) {
                    sessionGridHtml += `
                        <div style="
                            width: 24px; height: 24px; 
                            display: flex; align-items: center; justify-content: center; 
                            color: var(--success); font-size: 16px; margin-left: 2px;
                            animation: fadeIn 0.5s ease;"
                            title="Đã hoàn thành mục tiêu số thời hàng ngày!">
                            <i class="fas fa-check-circle"></i>
                        </div>`;
                }
                // --- NEW CODE END ---
                sessionGridHtml += `</div>`;
            }

            // 2. CẬP NHẬT ORIGINAL BAR VỚI CLICK EVENT & GRID
            dailySectionHtml = `
                <div 
                    onclick="app.setDailySessionTarget('${goal.id}')"
                    title="Đặt số thời thực hành hàng ngày"
                    style="margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; cursor: pointer; transition: background 0.2s;"
                    onmouseover="this.style.background='rgba(0,0,0,0.3)'"
                    onmouseout="this.style.background='rgba(0,0,0,0.2)'"
                >
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; align-items:center;">
                        <strong style="color:var(--text);">Hôm nay</strong>
                        <span style="font-weight:600;">${todayVal} / ${dailyTarget} ${unitLabel} <i class="fas fa-pen" style="font-size:10px; opacity:0.5; margin-left:4px;"></i></span>
                    </div>
                    <div class="progress-container" style="height: 6px;"><div class="progress-bar" style="width: ${dailyPct}%; background: ${dailyBarColor}"></div></div>
                    
                    ${sessionGridHtml}
                </div>`;

            // 2. NEW BAR (Minutes) - Only for Meditation Goals
            if (isMeditation) {
                const minPct = Math.min((todayMinutes / dailyminmedTarget) * 100, 100);
                let minBarColor = goal.color;
                if (todayMinutes >= dailyminmedTarget) minBarColor = 'var(--success)';

                // CHANGE 2: Added onclick event, cursor pointer, and hover visual cues
                dailySectionHtml += `
                <div 
                    onclick="app.setDailyMinMedTarget('${goal.id}')"
                    title="Thay đổi mục tiêu thời gian"
                    style="margin-bottom: 15px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; cursor: pointer; transition: background 0.2s;"
                    onmouseover="this.style.background='rgba(0,0,0,0.3)'"
                    onmouseout="this.style.background='rgba(0,0,0,0.2)'"
                >
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; align-items:center;">
                        <strong style="color:var(--text);">Thời gian</strong>
                        <span style="font-weight:600;">${todayMinutes} / ${dailyminmedTarget} phút <i class="fas fa-pen" style="font-size:10px; opacity:0.5; margin-left:4px;"></i></span>
                    </div>
                    <div class="progress-container" style="height: 6px;"><div class="progress-bar" style="width: ${minPct}%; background: ${minBarColor}"></div></div>
                </div>`;
            }
        }

        if (isMeditation) {
            controlsHtml = `
                 <div class="timer-controls">
                    <div style="font-size: 14px; color: var(--text-light); text-transform: uppercase;">Hành Thiền</div>
                    <div style="display:flex; gap: 10px;">
                        <button class="btn-icon btn-play" style="background: var(--zen); color: white;" onclick="app.toggleTimer('${goal.id}')" title="Hành thiền"><i class="fas fa-om"></i></button>
                        
                        <button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')" title="Nhập thủ công"><i class="fas fa-plus"></i></button>
                    </div>
                </div>`;
        } else {
            sessionSectionHtml = `
                <div class="section-label">Phiên hiện tại</div>
                <div class="progress-container"><div id="bar-session-${goal.id}" class="progress-bar" style="background:var(--success); width:0%;"></div></div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-light);"><span id="prog-text-session-${goal.id}">Sẵn sàng</span></div>`;
            controlsHtml = `
                <div class="timer-controls">
                    <div id="timer-${goal.id}" class="timer-display">00:00</div>
                    <div style="display:flex; gap: 10px;">
                        <button class="btn-icon ${goal.isActive ? 'btn-stop' : 'btn-play'}" onclick="app.toggleTimer('${goal.id}')"><i class="fas ${goal.isActive ? 'fa-stop' : 'fa-play'}"></i></button>
                        <button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')"><i class="fas fa-plus"></i></button>
                    </div>
                </div>`;
        }

        div.innerHTML = `
            <div class="goal-header">
                <div><div class="goal-title">${goal.name}</div><span class="goal-tag" style="color:#b1b1c9 ; background: rgba(255,255,255,0.1)">${goal.category}</span></div>
                <div style="display:flex; gap: 5px;">
                    <button class="btn-icon" style="color: var(--text-light)" onclick="app.openModal('${goal.id}', '${goal.type}')"><i class="fas fa-pencil-alt"></i></button>
                    <button class="btn-icon" style="color: var(--text-light)" onclick="app.deleteGoal('${goal.id}')"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            ${dailySectionHtml}
            <div class="section-label">Mức độ thành tựu</div>
            <div class="progress-container"><div class="progress-bar" style="width: ${overallPct}%; background: ${goal.color}"></div></div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-light); margin-bottom: 15px;"><span>${goal[targetProp]} / ${goal.lifetimeTargetMinutes} ${unitLabel}</span><span>${(overallPct).toFixed(1)}%</span></div>
            ${sessionSectionHtml} ${controlsHtml}
            <div class="sessions-list" style="margin-top: 15px; max-height: 150px; overflow-y: auto;"><div id="sessions-${goal.id}"></div></div>
        `;
        container.appendChild(div);
        this.renderSessions(goal.id, isMeditation);
    });
}
            loadMoreSessions(goalId, isMeditation) {
    if (!this.sessionLimits[goalId]) this.sessionLimits[goalId] = 80;
    this.sessionLimits[goalId] += 80; 
    this.renderSessions(goalId, isMeditation);
}
           renderSessions(goalId, isMeditation) {
    const container = document.getElementById(`sessions-${goalId}`);
    if (!container) return;
    container.innerHTML = '';

    // 1. Get all sessions for this goal sorted by date (newest first)
    const allSessions = this.data.logs
        .filter(l => l.goalId === goalId)
        .sort((a, b) => b.timestamp - a.timestamp);
    
    if (allSessions.length === 0) { 
        container.innerHTML = '<p style="font-size:12px; color:var(--text-light);">Chưa có phiên nào</p>'; 
        return; 
    }

    // 2. Pagination Setup
    // Initialize limit to 100 if not set
    if (!this.sessionLimits[goalId]) this.sessionLimits[goalId] = 80;
    
    const limit = this.sessionLimits[goalId];
    
    // Slice only the visible portion based on current limit
    const visibleSessions = allSessions.slice(0, limit);
    
    const ol = document.createElement('ol');
    
    // 3. Render visible sessions
    visibleSessions.forEach((log) => {
        const sLi = document.createElement('li');
        sLi.className = 'session-item';
        
        const notesDisplay = log.notes ? `<span class="session-notes">"${log.notes}"</span>` : '';

        let actionButtons = '<div style="display:flex; gap:5px;">';

                    if (isMeditation && log.touches && log.touches.length > 0) {
                        actionButtons += `<button class="btn-icon" style="background:transparent; color:var(--zen); height:24px; width:24px;" onclick="app.showSessionGraph('${log.timestamp}')" title="Xem biểu đồ"><i class="fas fa-chart-area" style="font-size:12px;"></i></button>`;
                    }

                    actionButtons += `<button class="btn-icon" style="background:transparent; color:var(--text-light); height:24px; width:24px;" onclick="app.openSessionModal('${goalId}', ${log.minutes}, ${log.timestamp}, ${log.timestamp})" title="Sửa chi tiết"><i class="fas fa-edit" style="font-size:12px;"></i></button>`;
                    
                    actionButtons += '</div>';


                    sLi.innerHTML = `
                        <div class="session-content">
                            <span class="session-date">${this.toDisplayDate(log.timestamp)}</span>: ${log.minutes} phút 
                            ${notesDisplay}
                        </div>
                        ${actionButtons}
                    `;
                    ol.appendChild(sLi);
               });
    container.appendChild(ol);

    // 4. Render "Load More" Button if there are more items
    if (allSessions.length > limit) {
        const remaining = allSessions.length - limit;
        const nextBatch = Math.min(remaining, 80); // Calculate how many will actually load next
        
        const btnDiv = document.createElement('div');
        btnDiv.style.textAlign = 'center';
        btnDiv.style.marginTop = '10px';
        
        const btn = document.createElement('button');
        btn.className = 'btn btn-secondary';
        btn.style.width = '100%';
        btn.style.padding = '8px';
        btn.style.fontSize = '12px';
        
        // Updated Text: Shows clearly we are loading the next batch, not everything
        btn.innerHTML = `<i class="fas fa-chevron-down"></i> Tải thêm (${nextBatch} phiên)`;
        
        btn.onclick = () => this.loadMoreSessions(goalId, isMeditation);
        
        btnDiv.appendChild(btn);
        container.appendChild(btnDiv);
    }
}


showSessionGraph(timestamp) {
    const exportBtn = document.getElementById('btn-export-session');
    if (exportBtn) {
        exportBtn.onclick = () => this.exportSessionData(timestamp);
    }

    const log = this.data.logs.find(l => l.timestamp == timestamp);
    if (!log || !log.touches) {
        this.showToast("Chưa có dữ liệu chi tiết cho thời thiền này");
        return;
    }

    this.currentGraphLog = log;

    document.getElementById('graph-modal').style.display = 'flex';
    document.getElementById('graph-date').innerText = new Date(log.timestamp).toLocaleString('vi-VN');

    document.getElementById('graph-type-select').value = 'interval';
    this.updateSessionChart();
}

updateSessionChart() {
    if (!this.currentGraphLog) return;
    const type = document.getElementById('graph-type-select').value;
    const ctx = document.getElementById('sessionGraph').getContext('2d');
    
    if (this.charts.session) this.charts.session.destroy();

    if (type === 'interval') this.renderIntervalChart(ctx, this.currentGraphLog);
    else if (type === 'pro') this.renderProChart(ctx, this.currentGraphLog);
    else this.renderIntensityChart(ctx, this.currentGraphLog);
}
renderProChart(ctx, log) {
    // 1. Calculate Mindfulness vs Distraction
    const analysis = this.analyzeSingleSession(log); 
    const totalSec = log.minutes * 60;
    
    // Distracted Seconds (Thất niệm)
    const distractedSec = analysis.distractedSec;
    const holdDurationSec = (this.data.medSettings.holdDuration || 500) / 1000;
    const recoverySec = (log.awarenessCount || 0) * holdDurationSec;
    // Mindful Seconds (Tỉnh thức)
    const mindfulSec = Math.max(0, totalSec - distractedSec - recoverySec);

    // 2. Count Pro Touches
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    let proCount = 0;
    
    if (log.touches && log.touches.length > 0) {
        log.touches.forEach(t => {
            if (t.v) {
                counts[t.v]++;
                proCount++;
            }
        });
    }

    // 3. Distribute Mindful Time
    // We use key '0' for Standard/Basic mindfulness (No Pro data)
    const dataSeconds = { 1: 0, 2: 0, 3: 0, 4: 0 };

    
        dataSeconds[1] = (counts[1] / proCount) * mindfulSec;
        dataSeconds[2] = (counts[2] / proCount) * mindfulSec;
        dataSeconds[3] = (counts[3] / proCount) * mindfulSec;
        dataSeconds[4] = (counts[4] / proCount) * mindfulSec;
   

// --- NEW: Calculate Average Score for Title ---
    let titleText = `Tổng thời gian: ${log.minutes} phút`;
    let titleWeight = 'normal';
    let titleColor = '#9ca3af';

    if (proCount > 0) {
        // Weighted Sum: Level 1 (Cao)=4, Level 2 (Tốt)=3, Level 3 (TB)=2, Level 4 (Thấp)=1
        const weightedSum = (counts[1] * 4) + (counts[2] * 3) + (counts[3] * 2) + (counts[4] * 1);
        const averageScore = (weightedSum / proCount).toFixed(2);
        
        titleText = `Mức chú tâm trung bình: ${averageScore} / 4.0`;
        titleWeight = '600';
        titleColor = '#f3f4f6';
    }
    const qualities = {
        1: { label: 'Cao', color: '#34d399' },      // Green
        2: { label: 'Tốt', color: '#60a5fa' },      // Blue
        3: { label: 'Trung bình', color: '#fbbf24' },       // Yellow
        4: { label: 'Thấp', color: '#f87171' },     // Red
        0: { label: 'Tỉnh giác',  color: '#a78bfa' },      // Purple (New Standard Level)
        5: { label: 'Thất niệm', color: '#6b7280' }     // Gray (Updated from White)
    };

    // 5. Cleanup Old Chart
    if (this.charts.session) this.charts.session.destroy();

    // 6. Render Chart
    this.charts.session = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Phân bổ phiên thiền'],
            datasets: [
                // Only show Pro levels if Pro data exists, otherwise show Basic
               
                    {
                        label: qualities[1].label,
                        data: [dataSeconds[1]],
                        backgroundColor: qualities[1].color,
                        barPercentage: 0.6,
                        borderRadius: { topLeft: 8, bottomLeft: 8 }
                    },
                    {
                        label: qualities[2].label,
                        data: [dataSeconds[2]],
                        backgroundColor: qualities[2].color,
                        barPercentage: 0.6
                    },
                    {
                        label: qualities[3].label,
                        data: [dataSeconds[3]],
                        backgroundColor: qualities[3].color,
                        barPercentage: 0.6
                    },
                    {
                        label: qualities[4].label,
                        data: [dataSeconds[4]],
                        backgroundColor: qualities[4].color,
                        barPercentage: 0.6
                    },
					{
                        label: qualities[0].label,
                        data: [recoverySec],
                        backgroundColor: qualities[0].color,
                        barPercentage: 0.6,
                        borderRadius: { topLeft: 8, bottomLeft: 8 }
                    },
               
                {
                    label: qualities[5].label,
                    data: [distractedSec],
                    backgroundColor: qualities[5].color,
                    barPercentage: 0.6,
                    borderRadius: { topRight: 8, bottomRight: 8 }
                },
            ]
        },
        options: {
            indexAxis: 'y', 
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    display: true, 
                    max: totalSec, 
					grid: {
            color: 'rgba(156, 163, 175, 0.1)' 
        },
        ticks: {
            color: '#9ca3af',
            callback: function(value) {
                return (value / 60).toFixed(0) + 'p';
            }
        }
    },
                
                y: {
                    stacked: true,
                    display: false 
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#9ca3af',
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 11 },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            return data.datasets.map((dataset, i) => {
                                const val = dataset.data[0];
                                const pct = totalSec > 0 ? ((val / totalSec) * 100).toFixed(1) : 0;
                                const isHidden = !chart.isDatasetVisible(i);
                                return {
                                    text: `${dataset.label}: ${pct}%`,
                                    fillStyle: dataset.backgroundColor,
                                    strokeStyle: 'transparent',
                                    fontColor: isHidden ? '#6b7280' : '#9ca3af',
                                    pointStyle: 'circle',
                                    datasetIndex: i,
                                    hidden: isHidden
                                };
                            });
                        }
                    }
                },
                tooltip: {
                    backgroundColor: '#1f2937',
                    titleColor: '#f3f4f6',
                    bodyColor: '#f3f4f6',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        title: () => null,
                        label: function(context) {
                            const val = context.raw;
                            const pct = totalSec > 0 ? ((val / totalSec) * 100).toFixed(1) : 0;
                            let timeStr = "";
                            if (val < 60) timeStr = Math.round(val) + "s";
                            else timeStr = (val/60).toFixed(1) + "p";
                            
                            const rawLabel = context.dataset.label;

                            // IF Level 0 (Cơ bản) OR Level 5 (Thất niệm) -> Show label as is
                            if (rawLabel.includes('Chánh niệm') || rawLabel.includes('Thất niệm')) {
                                return `${rawLabel}: ${pct}% (${timeStr})`;
                            } 
                            
                            // ELSE (Levels 1-4) -> Add prefix and lowercase
                            return `Mức chú tâm: ${rawLabel} - ${pct}% (${timeStr})`;
                        }
                    }
                },
                title: {
                    display: true,
                    text: titleText,
                    color: titleColor,
                    font: { size: 13, style: 'italic', weight: titleWeight },
                    padding: { bottom: 10 }
                }
            }
        }
    });
}
renderIntensityChart(ctx, log) {
    const startTime = log.timestamp;
    const durationSeconds = (log.minutes * 60) || Math.ceil((Date.now() - startTime) / 1000);
    
    const dataPoints = [];
    const labels = [];
    const totalPoints = 30; 
    const step = durationSeconds / totalPoints; 

    for (let s = 0; s <= durationSeconds; s += step) {
        labels.push(durationSeconds < 120 ? Math.round(s) + 's' : (s / 60).toFixed(0));
        const windowSizeMs = 60000; 
        const windowStart = (s * 1000) - (windowSizeMs / 2);
        const windowEnd = (s * 1000) + (windowSizeMs / 2);

        const intensity = log.touches.filter(t => {

            const touchTime = this.getTouchTimestamp(t, log.timestamp) - startTime;
            return touchTime >= windowStart && touchTime <= windowEnd;
        }).length;
        dataPoints.push(intensity);
    }

    const chartHeight = ctx.canvas.clientHeight || 300; 
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, 'rgba(167, 139, 250, 0.6)'); 
    gradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.3)'); 
    gradient.addColorStop(1, 'rgba(167, 139, 250, 0.05)');   

    this.charts.session = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Chánh niệm',
                data: dataPoints,
                borderColor: '#a78bfa', 
                backgroundColor: gradient,
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 5,
                pointBackgroundColor: '#c7b6fc',
                pointBorderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { title: { display: true, text: 'Thời điểm (phút)', font: { size: 11 }, color: '#9ca3af' }, grid: { display: true }, ticks: { maxTicksLimit: 20, color: '#9ca3af' } },
                y: { beginAtZero: true, title: { display: true, font: { size: 11 }, text: 'Số lần Chánh niệm', color: '#9ca3af', padding: 0.1 }, grid: { color: 'rgba(55, 65, 81, 0.5)' }, ticks: { color: '#9ca3af', precision: 0, } }
            },
            plugins: {
                tooltip: {
                    mode: 'index', intersect: false, displayColors: false,
                    callbacks: { title: () => '', 
            // This is your custom text
            label: (c) => c.raw >= 1 ? "🌱 Chánh niệm (" + c.raw + ")" : "☁️ Thất niệm" }
                },
                legend: { display: false }
            }
        }
    });
}

renderIntervalChart(ctx, log) {

    const timestamps = log.touches
        .map(t => this.getTouchTimestamp(t, log.timestamp))
        .sort((a, b) => a - b);
        
    const startTime = log.timestamp;

    const dataPoints = [];
    const labels = [];
    let previousTime = startTime;

    timestamps.forEach(t => {
        const gapSeconds = (t - previousTime) / 1000;
        const timeFromStartMins = ((t - startTime) / 1000 / 60).toFixed(0);
        
        dataPoints.push(gapSeconds.toFixed(1));
        labels.push(timeFromStartMins);
        previousTime = t;
    });

    const endTime = startTime + (log.minutes * 60 * 1000);
    if (endTime > previousTime) {
        const finalGap = (endTime - previousTime) / 1000;
        dataPoints.push(finalGap.toFixed(1));
        labels.push(log.minutes.toFixed(1));
    }

    const chartHeight = ctx.canvas.clientHeight || 300;
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, 'rgba(248, 113, 113, 0.6)'); 
    gradient.addColorStop(0.5, 'rgba(248, 113, 113, 0.3)'); 
    gradient.addColorStop(1, 'rgba(248, 113, 113, 0.05)'); 

    this.charts.session = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels, 
            datasets: [{
                label: 'Khoảng cách thất niệm',
                data: dataPoints,
                borderColor: '#f87171', 
                backgroundColor: gradient,
                borderWidth: 2,
                fill: true,
                tension: 0.2, 
                pointRadius: 0,
                pointBackgroundColor: '#f87171',
                pointHoverRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { 
                    title: { display: true, text: 'Thời điểm (phút)', font: { size: 11 }, color: '#9ca3af' }, 
                    grid: { display: true }, 
                    ticks: { color: '#9ca3af', maxTicksLimit: 15 } 
                },
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Độ trễ', font: { size: 11 }, color: '#9ca3af', padding: 0.1 }, 
                    ticks: { color: '#9ca3af' } 
                }
            },
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (items) => `Phút thứ ${items[0].label}`,
                        label: (c) => `Độ trễ: ${c.raw} giây`
                    }
                },
                legend: { display: false }
            }
        }
    });
}

exportSessionData(timestamp) {
    const log = this.data.logs.find(l => l.timestamp == timestamp);
    if (!log) {
        this.showToast('Không tìm thấy dữ liệu!');
        return;
    }

    const dataStr = JSON.stringify(log);

    if (navigator.clipboard) {
        navigator.clipboard.writeText(dataStr).then(() => {
            this.showToast('Đã sao chép dữ liệu JSON!');
        }).catch((err) => {
            console.error('Async: Could not copy text: ', err);
            this.fallbackCopyText(dataStr);
        });
    } else {
        this.fallbackCopyText(dataStr);
    }
}

fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if(successful) this.showToast('Đã sao chép dữ liệu JSON!');
        else this.showToast('Không thể sao chép');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        this.showToast('Lỗi sao chép');
    }
    
    document.body.removeChild(textArea);
}
            openChoiceModal() { document.getElementById('choice-modal').style.display = 'flex'; }
            closeChoiceModal() { document.getElementById('choice-modal').style.display = 'none'; }

            openModal(goalId = null, type = 'standard') { 
                this.closeChoiceModal(); 
                const modal = document.getElementById('goal-modal');
                const title = document.getElementById('modal-title');
                const btn = document.getElementById('btn-save-goal');
                const catSelect = document.getElementById('g-cat');
                catSelect.innerHTML = '';
                const cats = type === 'meditation' ? ['Thiền Toạ', 'Thiền Hành', 'Thiền Quán', 'Tu Tập'] : ['Công việc', 'Học tập', 'Sức khỏe', 'Sáng tạo', 'Tạo phước', 'Khác'];
                cats.forEach(c => { const opt = document.createElement('option'); opt.value = c; opt.innerText = c; catSelect.appendChild(opt); });

                const dailyHint = document.getElementById('g-daily-hint');
                const lifeHint = document.getElementById('g-life-hint');
                if (type === 'meditation') { dailyHint.innerText = "chánh niệm"; lifeHint.innerText = "chánh niệm"; } 
                else { dailyHint.innerText = "phút"; lifeHint.innerText = "phút"; }
                document.getElementById('g-type').value = type;

                if (goalId) {
                    const goal = this.data.goals.find(g => g.id === goalId);
                    if (goal) {
                        document.getElementById('g-id').value = goal.id;
                        document.getElementById('g-name').value = goal.name;
                        document.getElementById('g-cat').value = goal.category;
                        document.getElementById('g-color').value = goal.color;
                        document.getElementById('g-lifetime-target').value = goal.lifetimeTargetMinutes;
                        document.getElementById('g-daily-target').value = goal.dailyTargetMinutes;
                        document.getElementById('g-type').value = goal.type || 'standard';
                        title.innerText = 'Sửa mục tiêu'; btn.innerText = 'Lưu';
                    }
                } else {
                    document.getElementById('g-id').value = '';
                    document.getElementById('g-name').value = '';
                    document.getElementById('g-color').value = type === 'meditation' ? '#a78bfa' : '#818cf8';
                    document.getElementById('g-lifetime-target').value = 1000;
                    document.getElementById('g-daily-target').value = 100;
                    title.innerText = type === 'meditation' ? 'Mục tiêu Mới' : 'Mục tiêu Mới'; btn.innerText = 'Tạo';
                }
                modal.style.display = 'flex'; 
            }
            closeModal() { document.getElementById('goal-modal').style.display = 'none'; }
            
            renderCalendar() {
                const grid = document.getElementById('calendar-grid');
                grid.innerHTML = '';
                const y = this.currentMonth.getFullYear(); const m = this.currentMonth.getMonth();
                document.getElementById('cal-month-year').innerText = new Date(y, m).toLocaleString('vi-VN', { month: 'long', year: 'numeric' });

                const headerDiv = document.createElement('div');
                headerDiv.className = 'calendar-header';
                ['T2','T3','T4','T5','T6','T7','CN'].forEach(d => {
                    const h = document.createElement('div'); h.className = 'cal-head-day'; h.innerText = d;
                    grid.appendChild(h);
                });

                const firstDayRaw = new Date(y, m, 1).getDay();

                const blankSlots = firstDayRaw === 0 ? 6 : firstDayRaw - 1;

                const daysInMonth = new Date(y, m + 1, 0).getDate();
                
                for(let i=0; i<blankSlots; i++) { grid.appendChild(document.createElement('div')); }
                for(let i=1; i<=daysInMonth; i++) {
                    const dStr = `${y}-${String(m+1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
                    const dayEl = document.createElement('div');
                    dayEl.className = 'calendar-day'; dayEl.innerText = i;
                    const totalMins = this.data.logs.filter(l => l.date === dStr).reduce((sum, l) => sum + l.minutes, 0);
if(totalMins > 0) {
    dayEl.classList.add('has-data');

    if (totalMins >= 240) dayEl.classList.add('level-8');      
    else if (totalMins >= 180) dayEl.classList.add('level-7'); 
    else if (totalMins >= 150) dayEl.classList.add('level-6'); 
    else if (totalMins >= 120) dayEl.classList.add('level-5'); 
    else if (totalMins >= 90) dayEl.classList.add('level-4');  
    else if (totalMins >= 60) dayEl.classList.add('level-3');  
    else if (totalMins >= 30) dayEl.classList.add('level-2');  
    else dayEl.classList.add('level-1');                     
}
                    dayEl.onclick = () => this.openDayStats(dStr);
                    grid.appendChild(dayEl);
                }
				const quoteBox = document.getElementById('dhammapada-display');
    if (quoteBox && !quoteBox.hasAttribute('data-loaded')) {
        this.renderRandomQuote();
    }
            }
renderRandomQuote() {
    const display = document.getElementById('dhammapada-display');
    const sourceDisplay = document.getElementById('dhammapada-source'); 
    
    if (!display) return;

    display.style.opacity = '0';
    if(sourceDisplay) sourceDisplay.style.opacity = '0';

    setTimeout(() => {

        const randomIndex = Math.floor(Math.random() * DHAMMAPADA.length);
        const verse = DHAMMAPADA[randomIndex];

        display.innerHTML = verse.t;

        if (sourceDisplay) {

            sourceDisplay.innerText = `Pháp Cú ${randomIndex + 1}`;
            sourceDisplay.style.opacity = '0.7'; 
        }

        display.setAttribute('data-loaded', 'true');

        display.style.opacity = '1';
    }, 200); 
}
            openDayStats(dateStr) {
    this.currentViewDate = dateStr;
    const modal = document.getElementById('day-details-modal');
    document.getElementById('day-modal-title').innerText = new Date(dateStr).toLocaleDateString('vi-VN', {weekday: 'long', day: 'numeric', month: 'numeric'});

    this.switchDayChart('time'); 

    const dayLogs = this.data.logs.filter(l => l.date === dateStr).sort((a,b) => b.timestamp - a.timestamp);
    const listContainer = document.getElementById('day-session-list');
    listContainer.innerHTML = dayLogs.length ? '' : '<p class="empty-state">Không có hoạt động.</p>';
    
    const ul = document.createElement('ul'); 
    ul.style.listStyle = 'none';
    
    dayLogs.forEach(log => {
        const goal = this.data.goals.find(g => g.id === log.goalId);
        const li = document.createElement('li');
        li.style.cssText = 'padding: 8px 0; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 13px; align-items:center;';

        let graphBtnHtml = '';
        if (goal && goal.type === 'meditation' && log.touches && log.touches.length > 0) {
            graphBtnHtml = `<button class="btn-icon" style="background:transparent; color:var(--zen); height:24px; width:24px; margin-right:5px; cursor:pointer;" onclick="app.showSessionGraph('${log.timestamp}')"><i class="fas fa-chart-area" style="font-size:12px;"></i></button>`;
        }

        const satiCount = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        const satiInfo = satiCount > 0 ? `<span style="color: var(--zen); font-size: 11px; margin-left: 5px; font-weight:bold;">(${satiCount} Chánh Niệm)</span>` : '';

        const leftSide = `<div>
                           <span style="font-weight:600; color:${goal?goal.color:'#ccc'}">${goal?goal.name:'Đã xóa'}</span>
                           <span style="margin-left:5px;">${log.minutes}p</span>
                           ${satiInfo}
                         </div>`;
        
        const rightSide = `<div style="display:flex; align-items:center;">
                               ${graphBtnHtml}
                               <div style="font-size: 11px; color: var(--text-light); width:35px; text-align:right;">
                                   ${new Date(log.timestamp).toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})}
                               </div>
                           </div>`;

        li.innerHTML = leftSide + rightSide;
        ul.appendChild(li);
    });
    listContainer.appendChild(ul);
    
    modal.style.display = 'flex';
}

renderDayChartOnly(dateStr) {
    const ctx = document.getElementById('dayBreakdownChart').getContext('2d');
    const isMindfulness = this.dayChartMode === 'mindfulness';
    const unitLabel = isMindfulness ? 'Chánh niệm' : 'Phút';

    const dayLogs = this.data.logs.filter(l => l.date === dateStr);
    const goalStats = {};

    dayLogs.forEach(log => {
        if (isMindfulness) {
             const val = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
             if (val === 0) return;
        }

        if(!goalStats[log.goalId]) {
            const goal = this.data.goals.find(g => g.id === log.goalId);
            goalStats[log.goalId] = { 
                name: goal ? goal.name : 'Đã xóa', 
                color: goal ? goal.color : '#ccc', 
                value: 0 
            };
        }
        
        if (isMindfulness) {
            goalStats[log.goalId].value += (log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0));
        } else {
            goalStats[log.goalId].value += log.minutes;
        }
    });

    if(this.charts.dayChart) this.charts.dayChart.destroy();
    
    const dataValues = Object.values(goalStats).map(s => s.value);

    const centerTextPlugin = {
        id: 'centerText',
        afterDatasetsDraw: function(chart) {
            const { ctx, chartArea: { top, bottom, left, right } } = chart;
            
            ctx.save();

            let total = 0;
            const data = chart.data.datasets[0].data;
            if(data.length > 0) {
                data.forEach(val => total += val);
            }

            let mainText = "";
            if (!isMindfulness) {
                // Hour/Minute logic
                if (total < 60) {
                    mainText = total + "p";
                } else {
                    mainText = (total / 60).toFixed(1) + "h";
                }
            } else {
                mainText = total.toLocaleString(); 
            }

            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;

            const chartHeight = bottom - top;
            const fontSizeMain = chartHeight / 10; // Larger for the number
            const fontSizeSub = chartHeight / 20;  // Smaller for the label

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (isMindfulness) {
                // --- LINE 1: The Value (White/Bold) ---
                ctx.font = `bold ${fontSizeMain}px sans-serif`;
                ctx.fillStyle = "#FFFFFF"; 
                // Offset slightly upwards
                ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));

                // --- LINE 2: The Unit Label (Gray/Normal) ---
                ctx.font = `normal ${fontSizeSub}px sans-serif`;
                ctx.fillStyle = "#9ca3af"; 
                // Offset slightly downwards
                ctx.fillText(unitLabel, centerX, centerY + (fontSizeMain * 0.65));
           } else {
            // --- TIME MODE: Only draw the number in the center ---
            ctx.font = `bold ${fontSizeMain}px sans-serif`;
            ctx.fillStyle = "#FFFFFF"; 
            ctx.fillText(mainText, centerX, centerY); 
        }

        ctx.restore();
    }
};

    this.charts.dayChart = new Chart(ctx, {
        type: 'doughnut',
        data: { 
            labels: Object.values(goalStats).map(s => s.name), 
            datasets: [{ 
                data: dataValues, 
                backgroundColor: Object.values(goalStats).map(s => s.color), 
                borderWidth: 1, 
                borderColor: '#1f2937' 
            }] 
        },
        options: { 
        maintainAspectRatio: false, 
        plugins: { 
            legend: { 
                position: 'right', 
                labels: { color: '#9ca3af', font: {size: 11} } 
            },
            title: { 
                display: dataValues.length === 0, 
                text: 'Chưa có dữ liệu', 
                position: 'bottom', 
                color: '#6b7280' 
            },
            tooltip: {
				backgroundColor: '#121821', // Màu Solid (Hex) trùng với var(--surface), chắn hoàn toàn chữ bên dưới
                titleColor: '#f3f4f6',      // Màu chữ sáng (var(--text))
                bodyColor: '#f3f4f6',
                borderColor: '#374151',     // Viền xám (var(--border)) để tooltip nổi bật hơn
                borderWidth: 1,
                padding: 10,
				z: 999,
                callbacks: {
                    label: function(context) {
                        const value = context.raw || 0;
                        
                        // 1. Calculate the total sum of the dataset
                        const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
                        
                        // 2. Calculate percentage (prevent division by zero)
                        const percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;

                        // 3. Return the formatted string
                        if (!isMindfulness) {
                            return ` ${value} ${unitLabel} (${percentage}%)`;
                        }
                        return ` ${value} ${unitLabel} (${percentage}%)`;
                    }
                }
            }
        } 
    },
        plugins: [centerTextPlugin]
    });
}
switchDayChart(mode) {
    this.dayChartMode = mode;

    const btnTime = document.getElementById('btn-modal-time');
    const btnMind = document.getElementById('btn-modal-mind');
    
    if (mode === 'time') {
        btnTime.className = 'btn';
        btnMind.className = 'btn btn-secondary';
    } else {
        btnTime.className = 'btn btn-secondary';
        btnMind.className = 'btn';
    }

    if (this.currentViewDate) {
        this.renderDayChartOnly(this.currentViewDate);
    }
}
            closeDayModal() { document.getElementById('day-details-modal').style.display = 'none'; }
setReportMode(mode) {
    this.reportMode = mode;

    const btnTime = document.getElementById('btn-rep-time');
    const btnMind = document.getElementById('btn-rep-mind');
    
    if (mode === 'time') {
        btnTime.className = 'btn'; 
        btnMind.className = 'btn btn-secondary';
    } else {
        btnTime.className = 'btn btn-secondary';
        btnMind.className = 'btn'; 
    }

    this.renderReports();
}

renderReports(resetDates = false) {
    if (!document.getElementById('weeklyChart')) return;

    const isMindfulness = this.reportMode === 'mindfulness';
    const unitLabel = isMindfulness ? 'Lần' : 'Phút'; // Đổi đơn vị hiển thị

    document.getElementById('breakdown-title').innerText = isMindfulness ? 'Biểu đồ Chánh niệm' : 'Biểu đồ Thời gian';

    const rangeSelect = document.getElementById('report-range-select');
    const rangeMode = rangeSelect ? rangeSelect.value : 'all';

    const now = new Date();
    const realCurrentDay = now.getDay() || 7;
    const realThisWeekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() - realCurrentDay + 1);
    const realThisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);

    // --- Xử lý Reset ngày tháng khi đổi filter ---
    if (resetDates) {
        if (rangeMode === 'last_week') {
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentWeekStart.setDate(this.currentWeekStart.getDate() - 7);
            this.currentMonth = new Date(this.currentWeekStart.getFullYear(), this.currentWeekStart.getMonth(), 1);
        } else if (rangeMode === 'last_month') {
            this.currentMonth = new Date(realThisMonthStart);
            this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            this.currentWeekStart = this.getStartOfWeek(new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1));
        } else if (rangeMode === 'this_week' || rangeMode === 'this_month' || rangeMode === 'today') {
            this.currentWeekStart = new Date(realThisWeekStart);
            this.currentMonth = new Date(realThisMonthStart);
        }
    }

    // --- Định nghĩa khoảng thời gian Filter cho biểu đồ Tròn ---
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    let filterStart = 0;
    let filterEnd = Date.now() + 86400000;

    if (rangeMode === 'today') filterStart = todayStart;
    else if (rangeMode === 'yesterday') {
        filterEnd = todayStart;
        filterStart = todayStart - 86400000;
    } else if (rangeMode === 'this_week') {
        filterStart = realThisWeekStart.getTime();
    } else if (rangeMode === 'last_week') {
        filterEnd = realThisWeekStart.getTime();
        filterStart = realThisWeekStart.getTime() - (7 * 24 * 60 * 60 * 1000);
    } else if (rangeMode === 'this_month') {
        filterStart = realThisMonthStart.getTime();
    } else if (rangeMode === 'last_month') {
        filterEnd = realThisMonthStart.getTime();
        filterStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    }

    // --- Định nghĩa khoảng thời gian cho biểu đồ Tuần/Tháng ---
    const weekStartMs = this.currentWeekStart.getTime();
    const weekEndMs = weekStartMs + (7 * 24 * 60 * 60 * 1000);
    const weekEndDisp = new Date(weekEndMs - 1);
    document.getElementById('weekly-report-title').innerText = `Tuần (${this.currentWeekStart.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})} - ${weekEndDisp.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})})`;

    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({ length: new Date(mYear, mMonth + 1, 0).getDate() }, (_, i) => i + 1);
    document.getElementById('monthly-report-title').innerText = `Tháng ${new Date(mYear, mMonth).toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' })}`;

    // --- CHUẨN BỊ DỮ LIỆU ---
    let datasets = [];

    if (isMindfulness) {
        // === CHẾ ĐỘ CHÁNH NIỆM: GỘP TOÀN BỘ GOAL, CHIA THEO LOẠI TÂM ===
        // Tạo 2 nhóm dữ liệu cố định
        const mindData = {
            id: 'mindfulness', name: 'Chánh niệm', color: '#34d399', // Xanh ngọc
            breakdownTotal: 0, weekly: new Array(7).fill(0), monthly: new Array(monthlyLabels.length).fill(0)
        };
        const awareData = {
            id: 'awareness', name: 'Tỉnh giác', color: '#818cf8', // Tím
            breakdownTotal: 0, weekly: new Array(7).fill(0), monthly: new Array(monthlyLabels.length).fill(0)
        };

        this.data.logs.forEach(log => {
            // Lấy thời gian log
            let logTime = log.timestamp;
            let logDateObj;
            if (!logTime) { logDateObj = new Date(log.date); logTime = logDateObj.getTime(); }
            else { logDateObj = new Date(logTime); }

            // Lấy giá trị Chánh niệm & Tỉnh giác
            const countVal = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
            const awareVal = log.awarenessCount || 0;

            // 1. Cộng tổng cho biểu đồ Tròn (theo filter range)
            if (logTime >= filterStart && logTime < filterEnd) {
                mindData.breakdownTotal += countVal;
                awareData.breakdownTotal += awareVal;
            }

            // 2. Cộng vào biểu đồ Tuần
            if (logTime >= weekStartMs && logTime < weekEndMs) {
                let dayIdx = logDateObj.getDay();
                dayIdx = (dayIdx === 0 ? 6 : dayIdx - 1);
                mindData.weekly[dayIdx] += countVal;
                awareData.weekly[dayIdx] += awareVal;
            }

            // 3. Cộng vào biểu đồ Tháng
            if (logDateObj.getFullYear() === mYear && logDateObj.getMonth() === mMonth) {
                mindData.monthly[logDateObj.getDate() - 1] += countVal;
                awareData.monthly[logDateObj.getDate() - 1] += awareVal;
            }
        });

        datasets = [mindData, awareData];

    } else {
        // === CHẾ ĐỘ THỜI GIAN: CHIA THEO MỤC TIÊU (GOAL) ===
        const goalDatasets = {};
        this.data.goals.forEach(goal => {
            goalDatasets[goal.id] = {
                name: goal.name, color: goal.color,
                breakdownTotal: 0, weekly: new Array(7).fill(0), monthly: new Array(monthlyLabels.length).fill(0)
            };
        });

        this.data.logs.forEach(log => {
            if (!goalDatasets[log.goalId]) return;

            const value = log.minutes; // Lấy số phút
            let logTime = log.timestamp;
            let logDateObj;
            if (!logTime) { logDateObj = new Date(log.date); logTime = logDateObj.getTime(); }
            else { logDateObj = new Date(logTime); }

            if (logTime >= filterStart && logTime < filterEnd) {
                goalDatasets[log.goalId].breakdownTotal += value;
            }
            if (logTime >= weekStartMs && logTime < weekEndMs) {
                let dayIdx = logDateObj.getDay();
                dayIdx = (dayIdx === 0 ? 6 : dayIdx - 1);
                goalDatasets[log.goalId].weekly[dayIdx] += value;
            }
            if (logDateObj.getFullYear() === mYear && logDateObj.getMonth() === mMonth) {
                goalDatasets[log.goalId].monthly[logDateObj.getDate() - 1] += value;
            }
        });
        datasets = Object.values(goalDatasets);
    }

    // Lọc dữ liệu hiển thị
    // Biểu đồ tròn: Chỉ hiện những cái > 0
    const activeDataForDoughnut = datasets.filter(d => d.breakdownTotal > 0);
    // Biểu đồ cột: Hiện tất cả (hoặc lọc nếu muốn gọn)
    const allDataForBars = datasets; 

    const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

    // --- CẤU HÌNH CHART CHUNG ---
    const commonOptions = {
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true, grid: { color: '#374151' }, ticks: { color: '#9ca3af', font: { size: 11 } } },
            y: {
                stacked: true,
                grid: { color: '#374151' },
                title: { display: false },
                ticks: { color: '#9ca3af', font: { size: 11 } }
            }
        },
        plugins: {
            legend: { labels: { color: '#9ca3af', font: { size: 11 } } },
            tooltip: {
                
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        let value = context.raw || 0;
                        let total = 0;
                        
                        // Calculate the total of the stack (Sum of all visible datasets at this index)
                        context.chart.data.datasets.forEach((dataset, i) => {
                            if (context.chart.isDatasetVisible(i)) {
                                total += dataset.data[context.dataIndex] || 0;
                            }
                        });

                        // Calculate percentage
                        let percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;
                        
                        // Format the value (Minutes vs Hours)
                        let formattedValue = "";
                        if (unitLabel === 'Phút') {
                            if (value < 60) formattedValue = value + " phút";
                            else formattedValue = (value / 60).toFixed(1) + " giờ";
                        } else {
                            formattedValue = value.toLocaleString() + " " + unitLabel;
                        }
                        
                        return `${label}: ${formattedValue} (${percentage}%)`;
                    }
                }
            }
        }
    };

    // --- VẼ BIỂU ĐỒ TRÒN (BREAKDOWN) ---
    const ctxBreakdown = document.getElementById('goalBreakdownChart').getContext('2d');
    if (this.charts.breakdown) this.charts.breakdown.destroy();

    const centerTextPlugin = {
        id: 'centerText',
        afterDatasetsDraw: function(chart) {
            const { ctx, chartArea: { top, bottom, left, right } } = chart;
            ctx.save();
            let total = 0;
            const data = chart.data.datasets[0].data;
            data.forEach(val => total += val);

            let mainText = "";
            let currentUnit = typeof unitLabel !== 'undefined' ? unitLabel : '';

            if (currentUnit === 'Phút') {
                if (total < 60) mainText = total + "p";
                else mainText = (total / 60).toFixed(1) + "h";
            } else {
                mainText = total.toLocaleString();
            }

            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;
            const chartHeight = bottom - top;
            const fontSizeMain = chartHeight / 13;
            const fontSizeSub = chartHeight / 22;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            if (isMindfulness) {
                ctx.font = `bold ${fontSizeMain}px sans-serif`;
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));
                ctx.font = `normal ${fontSizeSub}px sans-serif`;
                ctx.fillStyle = "#9ca3af";
                ctx.fillText("Tổng", centerX, centerY + (fontSizeMain * 0.75));
            } else {
                ctx.font = `bold ${fontSizeMain}px sans-serif`;
                ctx.fillStyle = "#FFFFFF";
                ctx.fillText(mainText, centerX, centerY);
            }
            ctx.restore();
        }
    };

    this.charts.breakdown = new Chart(ctxBreakdown, {
        type: 'doughnut',
        data: {
            labels: activeDataForDoughnut.map(d => d.name),
            datasets: [{
                data: activeDataForDoughnut.map(d => d.breakdownTotal),
                backgroundColor: activeDataForDoughnut.map(d => d.color),
                borderWidth: 1, borderColor: '#1f2937'
            }]
        },
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#9ca3af' } },
                title: { display: activeDataForDoughnut.length === 0, text: 'Chưa có dữ liệu', position: 'bottom', color: '#6b7280' },
                tooltip: {
                    backgroundColor: '#121821', titleColor: '#f3f4f6', bodyColor: '#f3f4f6', borderColor: '#374151', borderWidth: 1, padding: 10, z: 999,
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            let formattedValue = "";
                            const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;
                            if (unitLabel === 'Phút') {
                                if (value < 60) formattedValue = value + " phút";
                                else formattedValue = (value / 60).toFixed(1) + " giờ";
                            } else {
                                formattedValue = value.toLocaleString() + " " + unitLabel;
                            }
                            return ` ${formattedValue} (${percentage}%)`;
                        }
                    }
                }
            }
        },
        plugins: [centerTextPlugin]
    });

    // --- VẼ BIỂU ĐỒ TUẦN ---
    const ctxWeek = document.getElementById('weeklyChart').getContext('2d');
    if (this.charts.weekly) this.charts.weekly.destroy();

    const weeklyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: (context) => {
                        const index = context[0].dataIndex;
                        const date = new Date(this.currentWeekStart);
                        date.setDate(date.getDate() + index);
                        return `${context[0].label} (${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')})`;
                    }
                }
            }
        }
    };

    this.charts.weekly = new Chart(ctxWeek, {
        type: 'bar',
        data: {
            labels: weekDays,
            datasets: allDataForBars.map(d => ({ label: d.name, data: d.weekly, backgroundColor: d.color, stack: '0' }))
        },
        options: weeklyOptions
    });

    // --- VẼ BIỂU ĐỒ THÁNG ---
    const ctxMonth = document.getElementById('monthlyChart').getContext('2d');
    if (this.charts.monthly) this.charts.monthly.destroy();

    const monthlyOptions = {
        ...commonOptions,
        plugins: {
            ...commonOptions.plugins,
            tooltip: {
                ...commonOptions.plugins.tooltip,
                callbacks: {
                    ...commonOptions.plugins.tooltip.callbacks,
                    title: (context) => `${String(context[0].label).padStart(2, '0')}/${String(mMonth + 1).padStart(2, '0')}`
                }
            }
        }
    };

    this.charts.monthly = new Chart(ctxMonth, {
        type: 'bar',
        data: {
            labels: monthlyLabels,
            datasets: allDataForBars.map(d => ({ label: d.name, data: d.monthly, backgroundColor: d.color, stack: '0' }))
        },
        options: monthlyOptions
    });

   
    const ctxDensity = document.getElementById('reportDensityChart');
    if (ctxDensity) {
        // 1. Update the Title
        const densityTitle = document.getElementById('density-month-title');
        if (densityTitle) {
            densityTitle.innerText = `Tháng ${new Date(mYear, mMonth).toLocaleDateString('vi-VN', { month: 'numeric', year: 'numeric' })}`;
        }

        // 2. Prepare Data (Calculate this BEFORE checking chart existence)
        const daysInMonth = monthlyLabels.length;
        const dailyMinutes = new Array(daysInMonth).fill(0);
        const dailyCounts = new Array(daysInMonth).fill(0);
        const dailyAwareCounts = new Array(daysInMonth).fill(0); // MỚI: Mảng chứa dữ liệu Tỉnh giác

        this.data.logs.forEach(log => {
            const goal = this.data.goals.find(g => g.id === log.goalId);
            if (!goal || goal.type !== 'meditation') return;

            const logDateObj = new Date(log.timestamp || log.date);
            if (logDateObj.getFullYear() !== mYear || logDateObj.getMonth() !== mMonth) return;

            const dayIdx = logDateObj.getDate() - 1;

            const minutes = log.minutes;
            const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
            const awareCount = log.awarenessCount || 0; // MỚI: Lấy số liệu Tỉnh giác

            if (minutes > 0) {
                dailyMinutes[dayIdx] += minutes;
                dailyCounts[dayIdx] += count;
                dailyAwareCounts[dayIdx] += awareCount; // MỚI: Cộng dồn
            }
        });

        // Tính tỷ lệ Chánh niệm/phút
        const densityData = dailyMinutes.map((mins, i) => {
            return mins > 0 ? (dailyCounts[i] / mins).toFixed(1) : 0;
        });

        // MỚI: Tính tỷ lệ Tỉnh giác/phút
        const awareDensityData = dailyMinutes.map((mins, i) => {
            return mins > 0 ? (dailyAwareCounts[i] / mins).toFixed(1) : 0;
        });

        // 3. Logic: Update if exists, Create if new
        if (this.charts.reportDensity) {
            // SMOOTH UPDATE: Swap data and call update()
            this.charts.reportDensity.data.labels = monthlyLabels;
            this.charts.reportDensity.data.datasets[0].data = densityData;
            this.charts.reportDensity.data.datasets[1].data = awareDensityData; // Update dataset 2
            this.charts.reportDensity.update();
        } else {
            // INITIAL CREATE
            const ctxD = ctxDensity.getContext('2d');
            this.charts.reportDensity = new Chart(ctxD, {
                type: 'line',
                data: {
                    labels: monthlyLabels,
                    datasets: [
                        {
                            label: 'Chánh niệm/phút',
                            data: densityData,
                            borderColor: '#34d399', // Màu xanh (Emerald) cho Chánh niệm
                            backgroundColor: 'rgba(52, 211, 153, 0.1)',
                            borderWidth: 1.5,
                            fill: true,
                            tension: 0.3,
                            yAxisID: 'y', // Gắn vào trục trái
                        },
                        {
                            label: 'Tỉnh giác/phút', // Dataset MỚI
                            data: awareDensityData,
                            borderColor: '#818cf8',
                            backgroundColor: 'rgba(129, 140, 248, 0.1)',
                            borderWidth: 1.5,
                            fill: true,
                            tension: 0.3,
                            yAxisID: 'y', // Gắn vào trục phải
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: true
                    },
                    elements: {
                        point: {
                            hitRadius: 30,
                            hoverRadius: 3,
                            radius: 1.3,
                        }
                    },
                    plugins: {
                        legend: { 
                            display: true, // Hiển thị chú thích để phân biệt 2 đường
                            labels: { color: '#9ca3af', font: { size: 10 }, boxWidth: 10 }
                        },
                        tooltip: {
                            callbacks: {
                                title: function(context) {
                                    const d = context[0].label;
                                    return `${String(d).padStart(2, '0')}/${String(mMonth + 1).padStart(2, '0')}`;
                                },
                                label: function(context) {
                                    // Hiển thị label tương ứng với dataset
                                    return ` ${context.dataset.label}: ${context.raw}`;
                                },
                                labelColor: function(context) {
                                    return {
                                        borderColor: context.dataset.borderColor,
                                        backgroundColor: context.dataset.borderColor,
                                        borderWidth: 0,
                                        borderRadius: 2,
                                    };
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: { color: '#9ca3af', font: { size: 10 } },
                            grid: { color: 'rgba(55, 65, 81, 0.3)' }
                        },
                        y: {
                            type: 'linear',
                            display: true,
                            position: 'left',
                            beginAtZero: true,
                            grid: { color: '#374151' },
                            ticks: { color: '#9ca3af', font: { size: 10 } },
                            title: { display: false } // Ẩn tên trục để tiết kiệm chỗ
                        },
                        
                    }
                }
            });
        }
    } }
changeReportWeek(dir) { this.currentWeekStart.setDate(this.currentWeekStart.getDate() + (dir * 7)); this.renderReports(); }
            changeReportMonth(dir) { this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); this.renderReports(); }
            changeMonth(dir) { this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); this.renderCalendar(); }

updateStats() {
    this.recalculateStreak();

    const totalMindfulness = this.data.logs.reduce((sum, log) => {

        return sum + (log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0));
    }, 0);

    this.data.xp = totalMindfulness; 

    document.getElementById('streak-disp').innerText = `${this.data.streak} 🔥`;
    document.getElementById('xp-disp').innerText = `${this.data.xp}`;

   
   
}
            
            recalculateStreak() {
                const activeDates = [...new Set(this.data.logs.filter(l => l.minutes > 0).map(l => l.date))].sort();
                if (activeDates.length === 0) { this.data.streak = 0; return; }
                let streak = 1;
                for (let i = activeDates.length - 2; i >= 0; i--) {
                    const prev = new Date(activeDates[i]);
                    const next = new Date(activeDates[i + 1]);
                    if ((next - prev) < (1000 * 60 * 60 * 48) && (next - prev) > 0) streak++; else break;
                }
                const now = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
                const last = new Date(activeDates[activeDates.length - 1]);
                if ((now - last) / (1000 * 60 * 60 * 24) > 1) this.data.streak = 0; else this.data.streak = streak;
            }

            checkAchievements(silent = false) {
    let newUnlock = false;
    const unlockedTitles = []; // Danh sách các huy hiệu vừa mở

    BADGES.forEach(badge => {
        // Bỏ qua các badge thủ công
        if (badge.id === 'explorer' || badge.id === 'safe_keeper') return;

        if (!this.data.achievements.includes(badge.id) && badge.condition(this.data)) {
            this.data.achievements.push(badge.id);
            unlockedTitles.push(badge.title);
            
            // Chỉ hiện toast nếu không bật chế độ im lặng
            if (!silent) {
                this.showToast(`💎 Mở khoá Pāramī: ${badge.title}`, true);
            }
            newUnlock = true;
        }
    });

    if (newUnlock) this.save();
    this.renderAchievementsUI();
    
    return unlockedTitles; // Trả về danh sách để xử lý hiển thị sau
}

// 2. Manual trigger for "Explorer" and "Safe Keeper"
unlockBadge(id) {
    if (!this.data.achievements.includes(id)) {
        this.data.achievements.push(id);
        const badge = BADGES.find(b => b.id === id);
        this.showToast(`💎 Mở khoá Pāramī: ${badge.title}`);
        this.save();
        this.renderAchievementsUI();
    }
}
renderAchievementsUI() {
    const container = document.getElementById('achievement-list');
    if (!container) return;
    container.innerHTML = '';

    // [FIX] Sorting Logic
    // 1. Get unlocked badges in order of acquisition (from data.achievements array)
    const unlockedIds = this.data.achievements;
    const unlockedBadges = unlockedIds
        .map(id => BADGES.find(b => b.id === id))
        .filter(b => b); // Safety check in case ID doesn't exist in constant

    // 2. Get locked badges (filter out those already in unlockedIds)
    const lockedBadges = BADGES.filter(b => !unlockedIds.includes(b.id));

    // 3. Merge: Unlocked first, then Locked
    const sortedBadges = [...unlockedBadges, ...lockedBadges];
    const LOCKED_COLOR = '#4b5563';

   sortedBadges.forEach(badge => {
        const isUnlocked = this.data.achievements.includes(badge.id);
        
        const badgeColor = isUnlocked ? badge.color : LOCKED_COLOR;
        
        // Dynamic Styles based on the specific badge color
        const bgColor = this.hexToRgba(badgeColor, 0.1);
        const borderColor = badgeColor;
        const iconColor = isUnlocked ? badge.color : '#6b7280';
        const textColor = isUnlocked ? '#f3f4f6' : '#9ca3af';

        const div = document.createElement('div');
        div.style.cssText = `
            display: flex; 
            align-items: center; 
            gap: 15px; 
            padding: 12px;
            background: ${isUnlocked ? bgColor : 'rgba(255,255,255,0.03)'};
            border: 1px solid ${isUnlocked ?  borderColor: 'var(--border)'};
            border-radius: 8px; 
            margin-bottom: 10px;
            transition: all 0.4s ease;
			opacity: ${isUnlocked ? '1' : '0.7'};
        `;

        div.innerHTML = `
            <div style="
                min-width: 42px; height: 42px; border-radius: 10px;
                display: flex; align-items: center; justify-content: center;
                border: 2px solid ${iconColor}; 
                color: ${iconColor}; 
                font-size: 18px;
                background: rgba(0,0,0,0.2);
                ${isUnlocked ? `box-shadow: 0 0 10px ${this.hexToRgba(badgeColor, 0.4)};` : ''}
            ">
                <i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: ${textColor}; font-size: 14px; display: flex; justify-content: space-between;">
                    ${badge.title}
                    <span style="font-size: 10px; color: ${iconColor}; text-transform: uppercase; letter-spacing: 1px; font-weight:bold;">
                        ${isUnlocked ? 'Đã đạt' : ''}
                    </span>
                </div>
                <div style="font-size: 11px; color: #9ca3af; margin-top: 2px;">
                    ${badge.desc}
                </div>
            </div>
        `;
        container.appendChild(div);
    });
}

openBadgePicker() {
    this.lastSelectedBadgeTitle = null;
    if (document.getElementById('badge-picker-modal')) {
        document.getElementById('badge-picker-modal').remove();
    }

    // [FIX] Sorting Logic (Same as renderAchievementsUI)
    const unlockedIds = this.data.achievements;
    const unlockedBadges = unlockedIds
        .map(id => BADGES.find(b => b.id === id))
        .filter(b => b); 
    const lockedBadges = BADGES.filter(b => !unlockedIds.includes(b.id));
    const sortedBadges = [...unlockedBadges, ...lockedBadges];

    const modalHtml = `
        <div id="badge-picker-modal" class="modal" style="display:flex; z-index: 3000; align-items: center; justify-content: center;">
            <div class="modal-content" style="max-width: 550px; width: 95%; max-height: 85vh; display: flex; flex-direction: column; padding: 0; border-radius: 16px;">
                
                <div style="padding: 15px 20px; border-bottom: 1px solid var(--border); position: relative; display: flex; justify-content: center; align-items: center; background: var(--surface); border-radius: 16px 16px 0 0;">
                    <h3 style="margin: 0; font-size: 18px;"><i class="fas fa-gem"></i> Chọn Pāramī</h3>
                    <button class="btn-icon" onclick="app.closeBadgePicker()" style="position: absolute; right: 20px; color: var(--text-light); background: transparent;"><i class="fas fa-times"></i></button>
                </div>

                <div style="padding: 20px; overflow-y: auto; background: var(--bg);">
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); gap: 12px;">
                        ${sortedBadges.map(badge => {
                            const isUnlocked = this.data.achievements.includes(badge.id);
                            const isActive = this.data.activeBadge === badge.id;
                            
                            // Color Logic
                            const badgeColor = isUnlocked ? (badge.color || '#cd7f32') : '#4b5563';
                            let opacity = isUnlocked ? '1' : '0.4';
                            let cursor = isUnlocked ? 'pointer' : 'pointer';
                            
                            // Active State
                            let bg = isActive ? this.hexToRgba(badgeColor, 0.15) : 'rgba(255, 255, 255, 0.03)';
                            let border = isActive ? `2px solid ${badgeColor}` : '1px solid var(--border)';
                            let transformHover = 'translateY(-2px)';
                            
                            const checkMarkDisplay = isActive ? 'block' : 'none';

                            return `
                                <div id="badge-option-${badge.id}"
                                     class="badge-option-item"
                                     onclick="app.selectBadge('${badge.id}')" 
                                     style="
                                        position: relative;
                                        display: flex; flex-direction: column; align-items: center; justify-content: center;
                                        padding: 15px 5px;
                                        background: ${bg};
                                        border: ${border};
                                        border-radius: 12px;
                                        opacity: ${opacity};
                                        cursor: ${cursor};
                                        transition: all 0.2s ease;
                                        text-align: center;
                                        min-height: 90px;
                                     "
                                     onmouseover="this.style.transform='${transformHover}'"
                                     onmouseout="this.style.transform='translateY(0)'"
                                     title="${badge.title} - ${badge.desc}"
                                >
                                    <div id="check-${badge.id}" style="display: ${checkMarkDisplay}; position:absolute; top:5px; right:5px; color:${badgeColor}; font-size:12px;">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div style="font-size: 24px; color: ${badgeColor}; margin-bottom: 8px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">
                                    <i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>
                                    </div>
                                    <div style="font-size: 11px; font-weight: 600; color: var(--text); line-height: 1.3;">${badge.title}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div style="padding: 15px 20px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; background: var(--surface); border-radius: 0 0 16px 16px;">
                    <button class="btn" onclick="app.closeBadgePicker()">Lưu & Áp dụng</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}
selectBadge(badgeId) {
    const badge = BADGES.find(b => b.id === badgeId);
    if (!badge) return;

    const isUnlocked = this.data.achievements.includes(badgeId);

    // --- 1. RESET PREVIOUS PREVIEWS ---
    // Finds any badge currently in "preview" mode and resets it to the locked styling
    document.querySelectorAll('.badge-option-item.is-previewing').forEach(el => {
        el.classList.remove('is-previewing');
        
        // Revert Visuals to Locked State
        el.style.transform = '';
        el.style.zIndex = '';
        el.style.opacity = '0.4';
        el.style.borderColor = 'var(--border)';
        el.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
        el.style.boxShadow = '';
        
        // Revert Icon Color to Gray (#4b5563)
        // We look for the div containing the icon which has the font-size style
        const iconDiv = el.querySelector('div[style*="font-size: 24px"]'); 
        if(iconDiv) iconDiv.style.color = '#4b5563';

        // Remove the temporary description
        const descEl = el.querySelector('.temp-desc');
        if (descEl) descEl.remove();
    });

    // --- 2. HANDLE LOCKED BADGE CLICK ---
    if (!isUnlocked) {
        const el = document.getElementById(`badge-option-${badgeId}`);
        if(el) {
            el.classList.add('is-previewing');
            
            // Use the specific badge color
            const realColor = badge.color || '#cd7f32';

            // Pop Out Animation & Styling
            el.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            el.style.transform = 'scale(1.1)';
            el.style.zIndex = '100';
            el.style.opacity = '1';
            
            // Apply TRUE Badge Color
            el.style.borderColor = realColor;
            el.style.boxShadow = `0 10px 25px -5px ${this.hexToRgba(realColor, 0.5)}`;
            el.style.backgroundColor = '#1f2937'; // Dark background to stand out

            // Change Icon Color to TRUE Badge Color
            const iconDiv = el.querySelector('div[style*="font-size: 24px"]');
            if(iconDiv) iconDiv.style.color = realColor;

            // Append Description Below
            const descDiv = document.createElement('div');
            descDiv.className = 'temp-desc';
            descDiv.style.marginTop = '10px';
            descDiv.style.paddingTop = '8px';
            descDiv.style.borderTop = `1px solid ${this.hexToRgba(realColor, 0.3)}`;
            descDiv.style.fontSize = '11px';
            descDiv.style.lineHeight = '1.3';
            descDiv.style.color = '#d1d5db';
            descDiv.style.width = '100%';
            descDiv.style.textAlign = 'center';
            descDiv.innerHTML = `
                <div style="color:${realColor}; font-weight:bold; margin-bottom:3px;">${badge.desc}</div>
                <div style="font-size:10px; opacity:0.6; font-style:italic;">🔒 Chưa mở khóa</div>
            `;
            el.appendChild(descDiv);
        }
        return; // Stop here (do not select as active)
    }

    // --- 3. HANDLE UNLOCKED BADGE CLICK (Standard Selection) ---
    this.data.activeBadge = badgeId;
    this.save();
    this.loadActiveBadge(); 
	this.renderBadgeAltar();
    this.lastSelectedBadgeTitle = badge.title;

    // Reset styles for all items (to clear selection highlight)
    document.querySelectorAll('.badge-option-item').forEach(el => {
        el.style.borderColor = 'var(--border)';
        el.style.borderWidth = '1px';
        el.style.background = 'rgba(255, 255, 255, 0.03)';
        const check = el.querySelector('div[id^="check-"]');
        if(check) check.style.display = 'none';
    });

    // Highlight the selected active badge
    const activeEl = document.getElementById(`badge-option-${badgeId}`);
    if (activeEl) {
        const color = badge.color || '#cd7f32';
        activeEl.style.borderColor = color;
        activeEl.style.borderWidth = '2px';
        activeEl.style.background = this.hexToRgba(color, 0.15);
        const activeCheck = document.getElementById(`check-${badgeId}`);
        if(activeCheck) activeCheck.style.display = 'block';
    }
}

closeBadgePicker() {
    const modal = document.getElementById('badge-picker-modal');
    if (modal) {
        modal.remove();
        
        // Only show toast if a badge was actually picked during this session
        if (this.lastSelectedBadgeTitle) {
            this.showToast(`Đã chọn Pāramī: ${this.lastSelectedBadgeTitle}`);
            this.lastSelectedBadgeTitle = null; // Reset
        }
    }
}

loadActiveBadge() {
    const container = document.getElementById('current-active-badge');
    if (!container) return;

    if (this.data.activeBadge) {
        const badge = BADGES.find(b => b.id === this.data.activeBadge);
        if (badge) {
            const color = badge.color || '#cd7f32'; 

            container.innerHTML = `<i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>`;
            
            
            container.style.color = '#ffffff'; 
            
            container.style.textShadow = `0 0 5px ${color}`;

            container.style.borderColor = color;

            container.style.backgroundColor = this.hexToRgba(color, 0.2); 
            
            container.style.boxShadow = `0 0 15px ${this.hexToRgba(color, 0.6)}`;
            
          
            container.classList.remove('silver');
        }
    } else {
        container.innerHTML = `<i class="fas fa-gem"></i>`;
        
        container.style.color = '#ffffff';
        container.style.textShadow = 'none'; // Reset text shadow
        container.style.borderColor = '#c0c0c0'; // Silver border
        container.style.backgroundColor = 'rgba(192, 192, 192, 0.2)';
        container.style.boxShadow = '0 0 15px rgba(192, 192, 192, 0.4)';
    }
}
renderBadgeAltar() {
    const container = document.getElementById('parami-altar');
    const iconEl = document.getElementById('altar-icon');
    const titleEl = document.getElementById('altar-title');
    const bgGlow = document.querySelector('.altar-bg-glow');
    
    if (!container || !iconEl) return;

    if (this.data.activeBadge) {
        const badge = BADGES.find(b => b.id === this.data.activeBadge);
        if (badge) {
            const color = badge.color || '#cd7f32';
            
            // Icon logic
            iconEl.innerHTML = `<i class="${badge.icon.includes('fab') ? badge.icon : 'fas ' + badge.icon}"></i>`;
            iconEl.style.color = color;
            iconEl.classList.add('altar-floating'); // Add floating animation
            
            // Text logic
            titleEl.innerText = badge.title;
            titleEl.style.color = color;
            titleEl.style.textShadow = `0 0 10px ${this.hexToRgba(color, 0.3)}`;
            
           
            
            // Background visual effects
            container.style.borderColor = color;
            container.style.boxShadow = `0 0 20px ${this.hexToRgba(color, 0.1)} inset`;
            
            bgGlow.style.background = `radial-gradient(circle, ${this.hexToRgba(color, 0.2)} 0%, rgba(0,0,0,0) 70%)`;
            
            return;
        }
    }

    // Default state (No badge selected)
    iconEl.innerHTML = `<i class="fas fa-gem"></i>`;
    iconEl.style.color = 'var(--text-light)';
    iconEl.classList.remove('altar-floating');
    
    titleEl.innerText = 'Chọn Pāramī';
    titleEl.style.color = 'var(--text)';
    titleEl.style.textShadow = 'none';
    
    
    
    container.style.borderColor = 'var(--border)';
    container.style.boxShadow = 'none';
    bgGlow.style.background = 'transparent';
}
   formatTime(seconds) {
                const h = Math.floor(seconds / 3600);
                const m = Math.floor((seconds % 3600) / 60);
                const s = seconds % 60;
                return `${h > 0 ? h+':' : ''}${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            }
            toIsoDate(date) {
    const y = date.getFullYear();

    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
            toDateTimeInput(timestamp) {
    const date = new Date(timestamp);
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${d}T${hh}:${mm}`;
}
            toDisplayDate(timestamp) { const d = new Date(timestamp); return `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`; }
            showToast(msg, isAchievement = false) {
                const t = document.getElementById('toast');
                document.getElementById('toast-msg').innerText = msg;
                t.classList.remove('achievement'); if (isAchievement) t.classList.add('achievement');
                t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 3000);
            }
            
            switchView(viewName) {
                document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
                document.getElementById(`view-${viewName}`).classList.add('active');
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                event.currentTarget.classList.add('active');
                
                const titles = {
                    'dashboard': 'Nhật ký',
                    'calendar': 'Lịch trình',
                    'reports': 'Tổng hợp',
					'analytics': 'Phân tích',
					'pro': 'Chuyên sâu',
					'achievements': 'Pāramī'
                };
                
                document.getElementById('page-title').innerText = titles[viewName] || 'Nhật ký';
                if (viewName === 'reports') { this.renderReports(); }
                if (viewName === 'calendar') this.renderCalendar();
				if (viewName === 'analytics') this.renderAnalytics();
			    if (viewName === 'pro') this.renderProAnalytics();
				if (viewName === 'achievements') {
        this.renderAchievementsUI();
        this.renderBadgeAltar();
            }}

    exportData() {
        const dataStr = JSON.stringify(this.data);
        const modal = document.getElementById('backup-modal');
        modal.style.display = 'flex';
    }

    closeBackupModal() {
        document.getElementById('backup-modal').style.display = 'none';
    }

  shareBackup() {
    const dataStr = JSON.stringify(this.data);

    const now = new Date();
    const datePart = now.toISOString().split('T')[0];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const fileName = `backup_${datePart}-${hours}h${minutes}.txt`;

    if (typeof Website2APK !== 'undefined' && Website2APK.shareIntent) {
        Website2APK.shareIntent(dataStr, "Backup", "");
        return;
    }

    if (navigator.share) {
        const file = new File([dataStr], fileName, { type: "application/json" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            navigator.share({
                files: [file],
                title: 'Sao lưu Nhật Ký Hành Giả',
                text: 'File dữ liệu sao lưu.'
            })
            .then(() => this.showToast('Đã chia sẻ thành công!'))
            .catch((error) => {

                if (error.name !== 'AbortError') this.copyToClipboard(dataStr);
            });
            return;
        } 
    } 

    this.copyToClipboard(dataStr);
}

copyToClipboard(text) {

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Đã chép dữ liệu vào bộ nhớ tạm!');
        }).catch(err => {
            this.fallbackCopyText(text);
        });
    } else {
        this.fallbackCopyText(text);
    }
}

fallbackCopyText(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; 
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            this.showToast('Đã chép dữ liệu sao lưu!');
        } else {
            this.showToast('Không thể chép, hãy dùng nút Sao lưu tải file.');
        }
    } catch (err) {
        this.showToast('Lỗi khi sao chép dữ liệu.');
    }
    document.body.removeChild(textArea);
}

   downloadFile() {
    const dataStr = JSON.stringify(this.data);

    const now = new Date();
    const datePart = now.toISOString().split('T')[0];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const fileName = `backup_${datePart}-${hours}h${minutes}.txt`;

    if (typeof Website2APK !== 'undefined') {

        if (Website2APK.saveBackup) {

            const base64 = btoa(unescape(encodeURIComponent(dataStr)));

            Website2APK.saveBackup(base64, fileName);
            this.showToast('Đang lưu file vào thư mục Download...');
        } 
    } else {

        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
        this.showToast('Đã tải xuống file!');
    }
}

    handleFileUpload(inputElement) {
        const file = inputElement.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {

            this.processRestoreData(e.target.result);
        };
        reader.readAsText(file);

        inputElement.value = '';
    }

    async processRestoreData(jsonString) {
        try {
            const json = JSON.parse(jsonString);

            if (!json.goals || !Array.isArray(json.goals) || !json.logs) {
                throw new Error("Cấu trúc file không hợp lệ (Thiếu goals/logs).");
            }

            if (confirm(`Tìm thấy ${json.goals.length} mục tiêu và ${json.logs.length} nhật ký.\nBạn có chắc muốn ghi đè dữ liệu hiện tại không?`)) {
                // Save to IndexedDB
                await dbHelper.saveAll(json);
                alert("Khôi phục thành công. Ứng dụng sẽ tải lại.");
                location.reload(); 
            }
        } catch (err) {
            alert("Lỗi khôi phục: " + err.message);
        }
    }


            resetApp() {
    if (confirm('Xóa TẤT CẢ dữ liệu? Hành động này không thể hoàn tác.')) {
        // 1. QUAN TRỌNG: Đóng kết nối DB đang mở
        // Nếu không đóng, trình duyệt sẽ chặn (block) lệnh xóa và chờ mãi mãi.
        if (dbHelper.db) {
            dbHelper.db.close();
        }

        // 2. Xóa dữ liệu LocalStorage (Legacy & Config)
        localStorage.removeItem('chronoData');
        localStorage.removeItem('chronoData_backup');
        localStorage.removeItem('anaGoalFilter');
        localStorage.removeItem('intro_seen'); // Tùy chọn: Xóa cái này để hiện lại intro

        // 3. Gửi yêu cầu xóa IndexedDB
        const req = indexedDB.deleteDatabase(DB_CONFIG.name);

        // Xử lý khi thành công
        req.onsuccess = () => {
            console.log("DB Deleted successfully");
            location.reload();
        };

        // Xử lý khi bị lỗi
        req.onerror = () => {
            console.error("Could not delete DB");
            location.reload(); // Vẫn reload để đảm bảo UI được làm mới
        };

        // Xử lý khi bị chặn (Blocked) - Đây là trường hợp dự phòng
        req.onblocked = () => {
            console.warn("DB Delete blocked - forcing reload");
            location.reload();
        };
    }
}
			
deleteSession() {
    const logId = document.getElementById('s-log-id').value;
    const goalId = document.getElementById('s-goal-id').value;

    if (!logId) return; 

    if (confirm('Bạn có chắc chắn muốn xóa vĩnh viễn phiên này khỏi lịch sử?')) {

        const logIndex = this.data.logs.findIndex(l => l.timestamp == logId);
        if (logIndex === -1) return;
        
        const log = this.data.logs[logIndex];
        const goal = this.data.goals.find(g => g.id === goalId);

        if (goal) {
            goal.totalMinutes -= log.minutes;
            if (goal.totalMinutes < 0) goal.totalMinutes = 0;

            if (goal.type === 'meditation') {
                const count = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
                goal.totalMindfulness -= count;
                if (goal.totalMindfulness < 0) goal.totalMindfulness = 0;
            }
        }

        this.data.logs.splice(logIndex, 1);

      dbHelper.deleteLog(parseInt(logId)).then(() => {
            this.showToast('Đã xóa phiên!');
        }).catch(err => console.error(err));
        
        this.save();
        this.renderGoals();      
        this.renderCalendar();   
        this.renderReports();    
        this.updateStats();      
        
        this.closeSessionModal();
        this.showToast('Đã xóa phiên!');
    }
}
showInteractionInfo() {
    const msg = "• CHÁNH NIỆM: Là giữ tâm, ghi nhận sự chú tâm vào đề mục thiền. Ví dụ: 1 lần chạm cho 1 hơi thở vào/ra.\n\n" +
                "• TỈNH GIÁC: Là nhận biết trạng thái tâm, phát hiện xao nhãng (phóng tâm) & quay trở lại đề mục.\n Thời gian chánh niệm của 1 lần tỉnh giác = thời gian ấn giữ";
    alert(msg);
    // Hoặc nếu bạn có hàm showToast hoặc modal thông báo riêng thì có thể dùng thay cho alert
}			
openSessionModal(goalId, minutes = 0, logId = null, startTime = Date.now()) {
    document.getElementById('session-modal').style.display = 'flex';
    document.getElementById('s-goal-id').value = goalId;
    document.getElementById('s-log-id').value = logId || '';
    document.getElementById('s-date').value = this.toDateTimeInput(startTime);
    document.getElementById('s-minutes').value = minutes;

    const deleteBtn = document.getElementById('btn-delete-session');
    if (logId) deleteBtn.style.display = 'block'; 
    else deleteBtn.style.display = 'none';  
    
    const goal = this.data.goals.find(g => g.id === goalId);
    const mindGroup = document.getElementById('s-mindfulness-group');
    const mindInput = document.getElementById('s-mindfulness');
    const thresholdInput = document.getElementById('s-threshold');
    
    if (goal && goal.type === 'meditation') {
        mindGroup.style.display = 'block';
        let currentCount = 0;
        let currentThreshold = 6; 

        if (logId) {
            const log = this.data.logs.find(l => l.timestamp == logId);
            if (log) {
                currentCount = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);

                if(log.threshold) currentThreshold = log.threshold;
            }
        }
        mindInput.value = currentCount;
        thresholdInput.value = currentThreshold;
    } else {
        mindGroup.style.display = 'none';
        mindInput.value = 0;
    }

    let notes = ''; 
    if(logId) { 
        const log = this.data.logs.find(l => l.timestamp == logId); 
        if(log && log.notes) notes = log.notes; 
    }
    document.getElementById('s-notes').value = notes;
	this.renderQuickTags('session-tags', 's-notes');
    document.getElementById('session-title').innerText = logId ? 'Chỉnh sửa' : 'Nhập thủ công';
}
            closeSessionModal() { document.getElementById('session-modal').style.display = 'none'; }
logSessionConfirm(e) {
        e.preventDefault();
        const goalId = document.getElementById('s-goal-id').value;
        const logId = document.getElementById('s-log-id').value;
        const dateTimeStr = document.getElementById('s-date').value;
        const minutes = parseInt(document.getElementById('s-minutes').value);
        
        const mindfulness = parseInt(document.getElementById('s-mindfulness').value) || 0;
        const threshold = parseInt(document.getElementById('s-threshold').value) || 6; 
        let notes = document.getElementById('s-notes').value;
        
        if (minutes <= 0) return;
        
        const goal = this.data.goals.find(g => g.id === goalId);
        
        if (goal && goal.type === 'meditation') {
            let cleanNotes = notes.replace(/^Chánh niệm: \d+(\.\s*)?/, '').trim();
            if (mindfulness > 0) {
                notes = `Chánh niệm: ${mindfulness}. ${cleanNotes}`;
            } else {
                notes = cleanNotes;
            }
    
            goal.lastThreshold = threshold;
        }
    
        const dateObj = new Date(dateTimeStr);
        const timestamp = dateObj.getTime();
        const dateKey = dateTimeStr.split('T')[0]; 
        
        if (logId) {
            const log = this.data.logs.find(l => l.timestamp == logId);
            if (log) {
                const oldMinutes = log.minutes;
                const oldMindfulness = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
                
                // --- FIX: Check if timestamp changed ---
                // If the time changed, the DB Key changes. We must delete the old Key manually
                // because save() will only insert the new Key, leaving the old one as a duplicate.
                if (Number(logId) !== timestamp) {
                    dbHelper.deleteLog(logId);
                }
                // ---------------------------------------

                log.minutes = minutes; 
                log.date = dateKey; 
                log.timestamp = timestamp; 
                log.notes = notes; 
                log.count = mindfulness;
                log.threshold = threshold; 
                
                if (goal) {
                    goal.totalMinutes += (minutes - oldMinutes);
                    if (goal.type === 'meditation') {
                        if (!goal.totalMindfulness) goal.totalMindfulness = 0;
                        goal.totalMindfulness = goal.totalMindfulness - oldMindfulness + mindfulness;
                    }
                }
            }
        } else {
            this.data.logs.push({ 
                goalId, 
                date: dateKey, 
                timestamp, 
                minutes, 
                notes, 
                count: mindfulness, 
                touches: [],
                threshold: threshold 
            });
            
            if (goal) {
                goal.totalMinutes += minutes;
                if (goal.type === 'meditation') {
                    if (!goal.totalMindfulness) goal.totalMindfulness = 0;
                    goal.totalMindfulness += mindfulness;
                }
            }
        }
        
        this.save(); 
        this.renderGoals(); 
        this.renderCalendar(); 
        this.renderReports(); 
        const newBadges = this.checkAchievements(true);
        this.closeSessionModal(); 
        this.showToast(logId ? 'Đã cập nhật!' : 'Đã ghi!');
        if (newBadges.length > 0) {
        setTimeout(() => {
            newBadges.forEach((title, index) => {
                setTimeout(() => {
                    this.showToast(`💎 Mở khoá Pāramī: ${title}`, true);
                }, index * 3500);
            });
        }, 1000);
    }
}
         deleteGoal(id) {
    if(confirm('Xóa mục tiêu này và TOÀN BỘ lịch sử liên quan? Hành động này không thể hoàn tác.')) {
        
        this.data.goals = this.data.goals.filter(g => g.id !== id);
        this.data.logs = this.data.logs.filter(log => log.goalId !== id);
        
        this.updateStats(); 

        dbHelper.deleteGoalData(id)
            .then(() => {
                
                dbHelper.saveAll({
                    goals: this.data.goals,
                    logs: [], 
                    xp: this.data.xp,
                    streak: this.data.streak,
                    achievements: this.data.achievements,
                    medSettings: this.data.medSettings
                }).catch(e => console.log("Meta save update")); 

                // 3. Update UI
                this.renderGoals(); 
                this.renderReports(); 
                this.renderCalendar(); 
                
                this.showToast('Đã xóa mục tiêu và lịch sử!');
            })
            .catch(err => {
                console.error(err);
                this.showToast('Lỗi khi xóa dữ liệu trong DB!');
            });
    }
}
            renderDate() {
                 document.getElementById('current-date').innerText = new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }
        }

        const app = new GoalTracker();