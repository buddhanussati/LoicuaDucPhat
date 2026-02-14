const DB_CONFIG = {
    name: 'HanhGiaDB',
    version: 2, // <--- UPDATE VERSION TO 2
    stores: {
        goals: 'id',
        logs: 'timestamp',
        meta: 'key'
    }
};
const COURSES = [
    {
        id: 'c_basics',
        title: 'Basic Meditation',
        desc: 'Get familiar with posture, breath, and basic mindfulness.',
        icon: 'fas fa-award-simple',
        color: '#74b9ff', // Green
        steps: [
            {
                id: 's_0_intro',
                title: 'Why Choose the Breath?',
                desc: 'Understand the importance of the breath - the anchor of the present.',
                content: `
                    <p>Breath is not only the essence of life but also the bridge that connects the body and the mind. In the practice of meditation, it serves as the core foundation:</p>
                    <ul>
                        <li><strong>The Anchor of the Present:</strong> The mind often runs to the past or the future or wanders aimlessly. The breath happens only <strong>right now</strong>. Returning to the breath is returning to reality.</li>
                        <li><strong>Objective & Natural:</strong> Breath flows naturally and is always present; it does not judge or evoke craving or aversion, it is a safe object for the mind to rely upon.</li>
                        <li><strong>The Mind's Mirror:</strong> When angry, the breath is rough; when peaceful, the breath is light. Observing the breath helps us understand our mental state.</li>
                    </ul>
                    <p><em>Answer the 3 questions below correctly to unlock the next lesson.</em></p>
                `,
                quiz: [
                    {
                        q: "Why is the breath the most common basic meditation object?",
                        options: ["Because it doesn't cost money", "Because it is always present in the here & now and is objective & natural", "Because it helps us think about the past"],
                        correct: 1
                    },
                    {
                        q: "What is the connection between breath and mind?",
                        options: ["The breath reflects the state of the mind", "There is no connection", "The breath determines personality"],
                        correct: 0
                    },
                    {
                        q: "What is the main function of the breath in meditation?",
                        options: ["Helps sleep better", "Helps cure diseases", "Acts as an anchor to keep the mind with the body"],
                        correct: 2
                    }
                ]
            },
            // --- UPDATE LESSON 1: POSTURE (ADDED QUIZ) ---
            { 
                id: 's_1_posture', 
                title: 'Correct Posture', 
                desc: 'How to sit so the back is straight and the mind is at peace.', 
                content: '<p>Find a quiet place. Sit cross-legged (half-lotus or full-lotus) or sit on a chair.</p><ul><li><strong>Back:</strong> Keep it naturally straight, do not tense up.</li><li><strong>Shoulders:</strong> Relax and lower naturally.</li><li><strong>Hands:</strong> Stacked on top of each other or resting on the knees.</li><li><strong>Eyes:</strong> Half-closed or gently closed.</li></ul><p><em>Complete the quiz to finish the lesson.</em></p>',
                quiz: [
                    {
                        q: "What is the most important principle for the back when meditating?",
                        options: ["Must lean against a wall", "Curved as much as possible", "Naturally straight, not tense"],
                        correct: 2
                    },
                    {
                        q: "How should the shoulders be?",
                        options: ["Relaxed and lowered naturally", "Hunched up near the ears", "Tensed to maintain strength"],
                        correct: 0
                    },
                    {
                        q: "What is the benefit of a straight back?",
                        options: ["Helps the mind stay alert and energy flow", "Helps fall asleep easier", "Has no effect"],
                        correct: 0
                    }
                ]
            },
            // --- UPDATE LESSON 2: BREATH (ADDED QUIZ) ---
            { 
                id: 's_2_breath', 
                title: 'Recognizing the Breath', 
                desc: 'Observe the natural breath coming in and going out.', 
                content: '<p>Do not try to control the breath. Simply <strong>know</strong>:</p><ul><li>When inhaling, know you are inhaling.</li><li>When exhaling, know you are exhaling.</li></ul><p>Focus your attention at the entrance of the nostrils or the rising and falling of the abdomen.</p>',
                quiz: [
                    {
                        q: "What is the correct attitude when observing the breath?",
                        options: ["Try to control the rhythm", "Simply note (know) it as it is", "Hold breath to quiet the mind"],
                        correct: 1
                    },
                    {
                        q: "If the breath is short or rough, what should we do?",
                        options: ["Force it to be long", "Blame yourself for meditating wrong", "Note that it is short or rough"],
                        correct: 2
                    },
                    {
                        q: "Which location is commonly used to observe the breath?",
                        options: ["Nostrils or abdomen", "Top of the head", "Soles of the feet"],
                        correct: 0
                    }
                ]
            },
            { 
                id: 's_3_count', 
                title: 'Counting Method & Mindfulness Noting', 
                desc: 'How to use the app to note Mindfulness via the breath.', 
                content: `<p><strong>To use the app effectively, you need to understand the following concepts:</strong></p>
            <ul style="padding-left: 20px; margin-bottom: 15px;">
                <li><strong>Mindfulness:</strong> A unit for measuring awareness; it is the act of keeping the mind and noting attention on the meditation object. In this app, every time you recognize the breath and tap the screen, one "Mindfulness" point is recorded.</li>
                
                <li><strong>Distraction:</strong> A state where the mind wanders or becomes drowsy, leading to no or very few recordings over a period of time.</li> <li style="margin-top: 10px;">
                    <strong> Distraction Threshold:</strong>
                    <p style="font-size: 13px; color: var(--text-light); margin-top: 5px;">
                        This is the most important concept for calculating "Meditation Quality".
                    </p>
                    <div style="background: rgba(255, 255, 255, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid var(--warning); margin: 5px 0;">
                        <em>"Distraction Threshold" is the maximum allowed time between two mindfulness logs; if this time is exceeded, the system considers you were distracted.</em>
                    </div>
					<p style="font-size: 13px; color: var(--text-light); margin-top: 5px;">
                        A normal breathing cycle is 4 to 6 seconds. The threshold is usually this range + 2-3 seconds. The app defaults to 9 seconds, but you can adjust it.
                    </p>
					</ul>
					<p><strong>Practice: Step 1, to avoid wandering, count silently:</strong></p><ul><li>Inhale, exhale, count "One".</li><li>Inhale, exhale, count "Two".</li><li>Continue to "Ten" then return to "One".</li></ul><p>If you forget or get confused, gently return to counting from "One".</p> <p><strong>Step 2, combine silent counting with noting on the app.</strong></p><ul><li><strong>Tap:</strong> Every time you exhale and finish a count, gently tap the screen.</li><li><strong>Goal:</strong> Maintain continuous noting without interruption.</li></ul><p><em>To complete this lesson, practice a short 5-minute session.</em></p>`,
                practiceParams: { duration: 5 }
            },
            {
                id: 's_3_awareness',
                title: 'Noting Alertness',
                desc: 'Learn to clearly recognize the state of mind.',
                content: `<p>Alertness (sampajañña) is when you <b>recognize</b> your mental state (e.g., suddenly realizing you are wandering, having distracted thoughts, or losing focus). This is the moment of recognition & return. In the app, we note <strong>Alertness</strong> by <strong>Pressing and Holding</strong>:</p><ul><li><b>Alertness</b> is likened to a wise gatekeeper—intelligent and sharp—stopping strangers and allowing acquaintances in to protect those inside <em>(mindfulness)</em> and resist those outside <em>(stray thoughts)</em>. </li><li><b>To practice</b>, when you realize your mind has wandered in its thoughts and distracted from the object, press and hold the screen until you see the green circle <em>(shield)</em> appear, and one "Alertness" will be recorded.</li></ul><p><strong>Completion Requirement:</strong> Perform a 10-minute session with at least 5 Alertness.</p>`,
                practiceParams: { duration: 10, minAwareness: 5 }
            },
            {
    id: 's_3_confirm',
    title: 'Confirmation Mode',
    desc: 'Break unconscious reflex habits and train honesty.',
    content: `
        <p>In meditation, it is easy to fall into "automation"—tapping while the mind has drifted elsewhere. <strong>Confirmation Mode</strong> is a "checkpoint" to challenge your true presence.</p>
        
        <div style="background: rgba(251, 191, 36, 0.1); border-left: 3px solid var(--warning); padding: 10px; margin: 15px 0; font-size: 14px;">
            <strong style="color: var(--warning);"><i class="fas fa-microchip"></i> Mechanism:</strong>
            <p style="margin-top: 5px;">When you note a breath (tap once), the system will randomly trigger a challenge:</p>
            <ul>
                <li><strong>Sign:</strong> The counting circle will <strong>shrink</strong> and turn <strong>warning yellow</strong>.</li>
                <li><strong>Action:</strong> You must tap a second time within <strong>3 seconds</strong> to confirm this was a conscious act.</li>
                <li><strong>Note:</strong> The app records the time of the <em>first</em> tap to ensure breathing data accuracy.</li>
            </ul>
        </div>

        <h4 style="color: var(--primary); margin-top: 15px;"><i class="fas fa-eye"></i> Meditation Significance:</h4>
        <ul style="font-size: 13px; color: var(--text-light);">
            <li><strong>Train Honesty:</strong> Do you truly know you are breathing, or are you just tapping mechanically?</li>
            <li><strong>Gap of Alertness:</strong> Creates a gap between "intention" and "action". If you fail to confirm, your mind lacked alertness at that moment.</li>
            <li><strong>Countering Wandering:</strong> Being occasionally "questioned" helps pull the mind back to reality, reminding you that every tap needs full witnessing.</li>
        </ul>

        <p style="margin-top: 15px;"><strong>Practice Guide:</strong></p>
        <ol>
            <li>Tap the <strong>Settings (gear)</strong> icon in the Meditation goal.</li>
            <li>Turn on <strong>"Confirmation Mode"</strong>.</li>
            <li>Perform a session ready to face the app's "questions".</li>
        </ol>

        <p style="border-top: 1px solid var(--border); padding-top: 10px; font-size: 13px;">
            <strong>Completion Requirement:</strong> Perform a session of at least 10 minutes, record at least 20 Mindfulness, 5 Alertness, and Confirmation Mode must be enabled.
        </p>
    `,
    practiceParams: { 
        duration: 10, 
        minAwareness: 5, 
        minMindfulness: 20, 
        requireConfirmMode: true 
    }
},
			{
    id: 's_3_levels',
    title: 'Focus Levels: From "Knowing" to "Insight"',
    desc: 'Classify noting quality to train the subtlety of mindfulness.',
    content: `
        <p>In meditation, mindfulness is not just "yes" or "no", but has <strong>depth</strong>. The app provides two mechanisms for you to note and train this subtlety:</p>
        
        <div style="background: var(--surface); padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--primary);">
            <h4 style="margin-top:0; color: var(--primary);"><i class="fas fa-hand-pointer"></i> 1. Manual Mode: Self-Recognition</h4>
            <p>You actively evaluate the quality of mind at the moment of noting by the number of taps:</p>
            <ul style="list-style: none; padding-left: 0;">
                <li><span class="text-q4"><strong>1 Tap (Low):</strong></span> Mind just returned from wandering, or recognition is faint, many distracted thoughts.</li>
                <li><span class="text-q3"><strong>2 Taps (Medium):</strong></span> Mind recognizes object clearer but not deeply, distracted thoughts exist but less than Low.</li>
                <li><span class="text-q2"><strong>3 Taps (Good):</strong></span> Attention is steady, recognizing the breath clearly, very little disturbance.</li>
            </ul>
        </div>

        <div style="background: var(--surface); padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid var(--zen);">
            <h4 style="margin-top:0; color: var(--zen);"><i class="fas fa-bolt"></i> 2. Combo Mechanism: Momentum of Focus</h4>
            <p>If you maintain continuous noting (1 tap per breath) with regular intervals, the system automatically upgrades the focus level:</p>
            <ul>
                <li>Every session starts at <span class="text-q4"><strong>Low</strong></span>.</li>
                <li><strong>Every 15 continuous notes</strong> (≤ distraction threshold), focus level increases: <strong><span class="text-q4">Low</span> → <span class="text-q3">Medium</span> → <span class="text-q2">Good</span> → <span class="text-q1">High</span></strong>.</li>
                <li><span class="text-q4"><i class="fas fa-exclamation-triangle"></i> <strong>Reset:</strong></span> If you forget to note for too long (wandering), the chain resets to <strong><span class="text-q4">Low</span></strong>. This should be a fresh start.</li>
            </ul>
        </div>

        <p><strong>Meditation Significance:</strong> Classification helps avoid mechanical tapping. When the mind recognizes its own quality, mindfulness and alertness become sharper.</p>
        
        <p><strong>Completion Requirement:</strong> Perform a 10-minute session. Strive to maintain mindfulness to achieve at least 1 <strong><span class="text-q3">Medium</span></strong> focus level and 1 <strong><span class="text-q2">Good</span></strong> focus level (via multi-taps or accumulating combos).</p>
    `,
    practiceParams: { 
        duration: 10,  // 10 mins to experience combos
        minAverage: 1, // At least 1 Medium (quality = 3)
        minGood: 1     // At least 1 Good (quality = 2)
    }
},
			{
    id: 's_4_cert',
    title: 'Certification Program',
    desc: 'Basic Meditation Course',
    content: `
        <p>Congratulations on completing the theory and getting used to basic tools. However, meditation lies not in "knowing", but in <strong>"doing"</strong>.</p>
        
        <div style="background: var(--surface); padding: 18px; border-radius: 12px; margin: 15px 0; border: 1px solid var(--primary); box-shadow: 0 4px 12px rgba(139, 92, 246, 0.1);">
            <h4 style="margin-top:0; color: var(--primary); display: flex; align-items: center; gap: 8px;">
                <i class="fas fa-scroll"></i> Certification Program: Basic Meditation
            </h4>
            <p>By clicking confirm below, you officially enter the <strong>"Basic Meditation"</strong> program with specific disciplines:</p>
            
            <ul style="padding-left: 20px; line-height: 1.6;">
                <li><strong>Goal:</strong> Accumulate <span class="text-q1"><strong>10,000 Mindfulness points</strong></span>. This is the foundational number to achieve a new insight awareness.</li>
                <li><strong>Self-Discipline:</strong> This goal <strong>cannot be edited</strong> and <strong>cannot be manually entered</strong>. All records must come from actual "real-time" sittings.</li>
                <li><strong>Final Exam:</strong> After completing 10,000 mindfulness points, you will perform a <strong>60-minute session (Final Exam)</strong>. Passing this, you will receive a <strong>Badge of Distinction</strong> and a <strong>Meditation Certificate</strong> marking a milestone on your path.</li>
            </ul>
        </div>

        <p style="font-style: italic; color: var(--text-light); text-align: center;">"The journey of mindfulness begins with a single step of alertness."</p>
        
        <p><strong>Are you ready to practice?</strong></p>
    `,
    isCertAction: true // Flag to render "Start Roadmap" button
}
        ]
    },
   
{
        id: 'c_intermediate',
        title: 'Intermediate Meditation',
        desc: 'Improve mindfulness ability and mental stability.',
        icon: 'fas fa-award',
        color: '#ff9f43',
        steps: [
            { 
                id: 's_inter_cert', 
                title: 'Certification Program', 
                desc: 'Intermediate Meditation Course', 
                content: '<p>Enter a stage of firmer concentration.</p><ul><li><strong>Goal:</strong> Reach 20,000 Mindfulness points.</li><li><strong>Final Exam:</strong> 60 minutes.</li></ul>',
                isCertAction: true 
            }
        ]
    },
    {
        id: 'c_advanced',
        title: 'Advanced Meditation',
        desc: 'Deepen focus and endurance.',
        icon: 'far fa-award-simple',
        color: '#8b5cf6', // Purple
        steps: [
            { 
                id: 's_adv_cert', 
                title: 'Certification Program', 
                desc: 'Advanced Meditation Course', 
                content: '<p>Train perseverance and deep concentration.</p><ul><li><strong>Goal:</strong> Reach 30,000 Mindfulness points.</li><li><strong>Final Exam:</strong> 120 minutes.</li></ul>',
                isCertAction: true 
            }
        ]
    },
    {
        id: 'c_intensive',
        title: 'Intensive Meditation',
        desc: 'Achieve complete mindfulness.',
        icon: 'far fa-award',
        color: '#ff6b6b', // Red
        steps: [
            { 
                id: 's_master_cert', 
                title: 'Certification Program', 
                desc: 'Intensive Meditation Course', 
                content: '<p>High level of practice.</p><ul><li><strong>Goal:</strong> Reach 40,000 Mindfulness points.</li><li><strong>Final Exam:</strong> 120 minutes.</li></ul>',
                isCertAction: true 
            }
        ]
    }
];

const dbHelper = {
    db: null,
    
    open() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(DB_CONFIG.name, DB_CONFIG.version);
            
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                const tx = e.target.transaction;

                // Create stores if they don't exist
                if (!db.objectStoreNames.contains('goals')) db.createObjectStore('goals', { keyPath: 'id' });
                if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta', { keyPath: 'key' });
                
                let logStore;
                if (!db.objectStoreNames.contains('logs')) {
                    logStore = db.createObjectStore('logs', { keyPath: 'timestamp' });
                } else {
                    logStore = tx.objectStore('logs');
                }

                // --- NEW: Create Index for fast deletion ---
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

    // --- OPTIMIZED DELETE FUNCTION ---
    async deleteGoalData(goalId) {
        if (!this.db) await this.open();
        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs'], 'readwrite');
            
            // 1. Delete the Goal itself
            const goalStore = tx.objectStore('goals');
            goalStore.delete(goalId);

            // 2. Delete related Logs using the INDEX (Instant)
            const logStore = tx.objectStore('logs');
            
            try {
                // Use the index we created in version 2
                const index = logStore.index('goalId');
                const req = index.openKeyCursor(IDBKeyRange.only(goalId));

                req.onsuccess = (e) => {
                    const cursor = e.target.result;
                    if (cursor) {
                        logStore.delete(cursor.primaryKey); // Delete by specific key
                        cursor.continue();
                    }
                };
            } catch (err) {
                // Fallback for safety if index is missing (rare)
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
    // ------------------------------------------

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
			metaStore.put({ key: 'courseProgress', value: data.courseProgress });
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => reject(e);
        });
    },

    async loadAll() {
        if (!this.db) await this.open();

        return new Promise((resolve, reject) => {
            const tx = this.db.transaction(['goals', 'logs', 'meta'], 'readonly');
            const data = { goals: [], logs: [], xp: 0, streak: 0, achievements: [], medSettings: {}, courseProgress: {} };
            
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
						if (item.key === 'courseProgress') data.courseProgress = item.value;
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
                // We define the structure but don't load data yet
                this.data = {
                    goals: [],
                    logs: [],
                    xp: 0,
                    streak: 0,
                    achievements: [],
                    medSettings: { mode: 'tap', holdDuration: 500, tapRequired: 1, vibration: true },
					courseProgress: {},
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

    'Awake', 'Calm/Still', 'Peaceful', 'Joyful', 
    'Tranquil', 'Relaxed', 'Clear/Lucid', 'Spacious', 'Deep Concentration', 
    'Letting Go', 'Grateful', 'Gentle', 'Inner Light',

    'Wandering Mind', 'Delusion', 'Restlessness', 'Dullness', 'Sleepy', 
    'Drowsiness', 'Scattered Mind', 'Anxious', 'Anger/Irritation', 'Cravings',
    'Doubt', 'Overthinking', 'Reminiscing', 'Stressed',

    'Back Pain', 'Numb Legs', 'Itchy', 'Neck Pain', 'Hot', 'Cold'
];

                this.activeCourseId = null;
                this.expandedStepId = null;
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
        
        if (!this.data.courseProgress) this.data.courseProgress = {};
        this.data.medSettings.mode = 'unified'; 
        
        // Đảm bảo các chỉ số khác có giá trị mặc định
        if (!this.data.medSettings.holdDuration) this.data.medSettings.holdDuration = 500;
        if (typeof this.data.medSettings.vibration === 'undefined') this.data.medSettings.vibration = true;
        if (typeof this.data.medSettings.confirmMode === 'undefined') this.data.medSettings.confirmMode = false;
        if (typeof this.data.medSettings.confirmProbability === 'undefined') this.data.medSettings.confirmProbability = 100;
        
       

        this.data.goals.forEach(goal => {
            if (!goal.type) goal.type = 'standard';
            if (!goal.sessionTargetSeconds) goal.sessionTargetSeconds = 0;
            if (!goal.remainingSeconds) goal.remainingSeconds = 0;
            if (typeof goal.dailyTargetMinutes === 'undefined') goal.dailyTargetMinutes = 100;
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
        console.error("Error loading data!", err);
        this.showToast("Error loading data!");
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


   enrollCertification(courseId = 'c_basics') {
    let certConfig = {};
    
    // Define configuration for each course
    switch(courseId) {
        case 'c_intermediate':
            certConfig = {
                id: 'cert_inter_1',
                name: 'Intermediate Meditation',
				dailyTarget: 800,
				dailyMinMed: 90,
                target: 20000,
                color: '#ff9f43'
            };
            break;
        case 'c_advanced':
            certConfig = {
                id: 'cert_adv_1',
                name: 'Advanced Meditation',
				dailyTarget: 1000,
				dailyMinMed: 120,
                target: 30000,
                color: '#8b5cf6'
            };
            break;
        case 'c_intensive':
            certConfig = {
                id: 'cert_master_1',
                name: 'Intensive Meditation',
				dailyTarget: 1200,
				dailyMinMed: 150,
                target: 40000,
                color: '#ff6b6b'
            };
            break;
        case 'c_basics':
        default:
            certConfig = {
                id: 'cert_basic_1',
                name: 'Basic Meditation',
				dailyTarget: 600,
				dailyMinMed: 60,
                target: 10000,
                color: '#74b9ff'
            };
            break;
    }

    // Check if exists
    if (this.data.goals.find(g => g.id === certConfig.id)) {
        this.showToast("You have already enrolled!");
        return;
    }

    const newGoal = {
        id: certConfig.id,
        type: 'meditation',
        name: certConfig.name,
        category: 'Certification Program',
        color: certConfig.color,
        
        // Locked Targets
        dailyTargetMinutes: certConfig.dailyTarget, 
        lifetimeTargetMinutes: certConfig.target, // Dynamic Target
        dailySessionTarget: 8,
        dailyMinMedTarget: certConfig.dailyMinMed, 
        
        // System Flags
        isCertification: true,
        certified: false, 
        
        // Standard Props
        lastUpdated: Date.now(),
        totalMinutes: 0, 
        totalMindfulness: 0, 
        sessionTargetSeconds: 0,
        remainingSeconds: 0, 
        currentSessionStartTime: null, 
        isActive: false
    };

    this.data.goals.unshift(newGoal); 
    this.save();
    this.renderGoals();
    this.showToast(`Enrolled: ${certConfig.name}`);
    
    // Close course view
    this.activeCourseId = null;
    this.renderRoadmap();
    app.switchView('dashboard');
}

    renderRoadmap() {
        const container = document.getElementById('roadmap-container');
        if (!container) return;
        container.innerHTML = '';

        if (!this.activeCourseId) {
            this.renderCourseList(container);
        } else {
            this.renderCourseDetail(container, this.activeCourseId);
        }
    }

    renderCourseList(container) {
        // Render Level 1: List of Courses
        COURSES.forEach(course => {
            // Calculate Progress
            const courseData = this.data.courseProgress[course.id] || {};
            const completedSteps = Object.keys(courseData).length;
            const totalSteps = course.steps.length;
            const progressPct = Math.round((completedSteps / totalSteps) * 100);
            const isFinished = progressPct === 100;

            const div = document.createElement('div');
            div.className = 'card';
            // Styling similar to Achievements but clickable
            div.style.cssText = `
                display: flex; align-items: center; gap: 15px; padding: 20px;
                margin-bottom: 15px; cursor: pointer; transition: transform 0.2s;
                border-left: 5px solid ${course.color};
            `;
            div.onmouseover = () => div.style.transform = 'translateY(-3px)';
            div.onmouseout = () => div.style.transform = 'translateY(0)';
            div.onclick = () => {
                this.activeCourseId = course.id;
                this.expandedStepId = null; // Reset step expansion
                this.renderRoadmap();
            };

            div.innerHTML = `
                <div style="
                    min-width: 50px; height: 50px; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    background: ${this.hexToRgba(course.color, 0.1)};
                    color: ${course.color}; font-size: 24px;
                ">
                    <i class="${course.icon}"></i>
                </div>
                <div style="flex: 1;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="margin: 0; font-size: 16px; color: var(--text);">${course.title}</h3>
                        ${isFinished ? `<i class="fas fa-check-circle" style="color: var(--success);"></i>` : ''}
                    </div>
                    <p style="margin: 5px 0 0; font-size: 12px; color: var(--text-light);">${course.desc}</p>
                    
                    <div style="margin-top: 10px; display: flex; align-items: center; gap: 10px;">
                        <div class="progress-container" style="flex:1; height: 6px;">
                            <div class="progress-bar" style="width: ${progressPct}%; background: ${course.color};"></div>
                        </div>
                        <span style="font-size: 11px; color: var(--text-light);">${completedSteps}/${totalSteps} lessons</span>
                    </div>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-light); opacity: 0.5;"></i>
            `;
            container.appendChild(div);
        });
    }
renderCourseList(container) {
        // Render Level 1: List of Courses
        COURSES.forEach(course => {
            // Calculate Progress
            const courseData = this.data.courseProgress[course.id] || {};
            const completedSteps = Object.keys(courseData).length;
            const totalSteps = course.steps.length;
            const progressPct = Math.round((completedSteps / totalSteps) * 100);
            const isFinished = progressPct === 100;

            const div = document.createElement('div');
            div.className = 'card';
            // Styling similar to Achievements but clickable
            div.style.cssText = `
                display: flex; align-items: center; gap: 15px; padding: 20px;
                margin-bottom: 15px; cursor: pointer; transition: transform 0.2s;
                border-left: 5px solid ${course.color};
            `;
            div.onmouseover = () => div.style.transform = 'translateY(-3px)';
            div.onmouseout = () => div.style.transform = 'translateY(0)';
            div.onclick = () => {
                this.activeCourseId = course.id;
                this.expandedStepId = null; // Reset step expansion
                this.renderRoadmap();
            };

            div.innerHTML = `
                <div style="
                    min-width: 50px; height: 50px; border-radius: 12px;
                    display: flex; align-items: center; justify-content: center;
                    background: ${this.hexToRgba(course.color, 0.1)};
                    color: ${course.color}; font-size: 24px;
                ">
                    <i class="${course.icon}"></i>
                </div>
                <div style="flex: 1;">
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <h3 style="margin: 0; font-size: 16px; color: var(--text);">${course.title}</h3>
                        ${isFinished ? `<i class="fas fa-check-circle" style="color: var(--success);"></i>` : ''}
                    </div>
                    <p style="margin: 5px 0 0; font-size: 12px; color: var(--text-light);">${course.desc}</p>
                    
                    <div style="margin-top: 10px; display: flex; align-items: center; gap: 10px;">
                        <div class="progress-container" style="flex:1; height: 6px;">
                            <div class="progress-bar" style="width: ${progressPct}%; background: ${course.color};"></div>
                        </div>
                        <span style="font-size: 11px; color: var(--text-light);">${completedSteps}/${totalSteps} lessons</span>
                    </div>
                </div>
                <i class="fas fa-chevron-right" style="color: var(--text-light); opacity: 0.5;"></i>
            `;
            container.appendChild(div);
        });
    }
    renderCourseDetail(container, courseId) {
        const course = COURSES.find(c => c.id === courseId);
        if (!course) { this.activeCourseId = null; this.renderRoadmap(); return; }

        // 1. Header with Back Button
        const header = document.createElement('div');
        header.style.cssText = "display:flex; align-items:center; margin-bottom: 20px; gap: 15px;";
        header.innerHTML = `
            <button class="btn btn-secondary" onclick="app.exitCourseView()">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div>
                <h3 style="margin:0; color:${course.color}">${course.title}</h3>
                <span style="font-size:12px; color:var(--text-light)">Course Curriculum</span>
            </div>
        `;
        container.appendChild(header);

        // 2. Render Steps
        const progress = this.data.courseProgress[courseId] || {};
        
        course.steps.forEach((step, index) => {
            const isCompleted = progress[step.id];
            
            // Logic Locked: If previous step is NOT complete, this one is locked.
            // First step (index 0) is always unlocked.
            let isLocked = false;
            if (index > 0) {
                const prevStepId = course.steps[index - 1].id;
                if (!progress[prevStepId]) isLocked = true;
            }

            const isExpanded = this.expandedStepId === step.id;

            // Styles
            const opacity = isLocked ? '0.5' : '1';
            const cursor = isLocked ? 'not-allowed' : 'pointer';
            const icon = isCompleted ? 'fa-check-circle' : (isLocked ? 'fa-lock' : 'fa-play-circle');
            const iconColor = isCompleted ? 'var(--success)' : (isLocked ? 'var(--text-light)' : course.color);
            const borderStyle = isExpanded ? `1px solid ${course.color}` : '1px solid var(--border)';

            const card = document.createElement('div');
            card.className = 'card';
            card.style.cssText = `
                margin-bottom: 15px; padding: 0; overflow: hidden;
                opacity: ${opacity}; border: ${borderStyle}; transition: all 0.3s ease;
            `;

            // Card Header (Clickable)
            const cardHead = document.createElement('div');
            cardHead.style.cssText = `padding: 15px; display: flex; align-items: center; gap: 15px; cursor: ${cursor}; background: var(--surface);`;
            
            cardHead.onclick = () => {
                if (isLocked) {
                    this.showToast("Complete the previous lesson!");
                    return;
                }
                // Toggle Expansion
                this.expandedStepId = isExpanded ? null : step.id;
                this.renderRoadmap(); // Re-render to show expansion
            };

            cardHead.innerHTML = `
                <div style="font-size: 20px; color: ${iconColor}; width: 30px; text-align: center;">
                    <i class="fas ${icon}"></i>
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 3px;">${step.title}</div>
                    <div style="font-size: 12px; color: var(--text-light);">${step.desc}</div>
                </div>
                <i class="fas fa-chevron-down" style="font-size: 12px; color: var(--text-light); transition: transform 0.3s; transform: ${isExpanded ? 'rotate(180deg)' : 'rotate(0)'}"></i>
            `;
            card.appendChild(cardHead);

            // Card Body (Instructions) - Only if expanded
            if (isExpanded && !isLocked) {
                const cardBody = document.createElement('div');
                cardBody.style.cssText = `
                    padding: 15px; border-top: 1px solid var(--border); 
                    background: rgba(255,255,255,0.02); animation: fadeIn 0.3s;
                `;
                
                cardBody.innerHTML = `
                    <div style="font-size: 14px; line-height: 1.6; color: var(--text-light); margin-bottom: 20px;">
                        ${step.content}
                    </div>
                `;

                // Action Button
                const btnContainer = document.createElement('div');
        btnContainer.style.textAlign = 'right';

        const actionBtn = document.createElement('button');
        
        // --- MODIFIED HERE ---
        if (step.isCertAction) {
    // Determine the Goal ID associated with this course
    let targetGoalId = 'cert_basic_1';
    if(courseId === 'c_intermediate') targetGoalId = 'cert_inter_1';
    else if(courseId === 'c_advanced') targetGoalId = 'cert_adv_1';
    else if(courseId === 'c_intensive') targetGoalId = 'cert_master_1';

    const existingGoal = this.data.goals.find(g => g.id === targetGoalId);
    if (existingGoal) {
            actionBtn.className = 'btn btn-secondary';
            actionBtn.innerHTML = '<i class="fas fa-check"></i> Enrolled';
            actionBtn.disabled = true;
    } else {
            actionBtn.className = 'btn';
            actionBtn.style.background = 'var(--warning)';
            actionBtn.style.color = '#000';
            actionBtn.innerHTML = 'Get Certified';
            actionBtn.onclick = (e) => {
                e.stopPropagation();
                this.enrollCertification(courseId); // Pass courseId here
                this.toggleStepCompletion(courseId, step.id); 
            };
    }
} else if (step.practiceParams) {
    // Nút dành cho các bài học yêu cầu thực hành
    actionBtn.className = isCompleted ? 'btn btn-secondary' : 'btn';
    actionBtn.innerHTML = isCompleted ? '<i class="fas fa-check"></i> Completed' : `Start the exercise (${step.practiceParams.duration} minutes)`;
    if (!isCompleted) actionBtn.style.background = course.color;
    
    actionBtn.onclick = (e) => {
        e.stopPropagation();
        if (isCompleted) {
            this.showToast("You have completed this exercise.");
        } else {
            this.startCoursePractice(course.id, step.id);
        }
    };
} else {
                // --- SỬA ĐOẠN NÀY: Logic cho bài học lý thuyết & Quiz ---
                actionBtn.className = isCompleted ? 'btn btn-secondary' : 'btn';
                
                if (isCompleted) {
                    actionBtn.innerHTML = '<i class="fas fa-check"></i> Completed';
                    actionBtn.style.color = 'var(--success)';
                    actionBtn.style.borderColor = 'var(--success)';
                    // Cho phép làm lại quiz nếu muốn
                    if(step.quiz) {
                         actionBtn.onclick = (e) => {
                            e.stopPropagation();
                            if(confirm("You have completed this quiz. Do you want to try again?")) {
                                this.openQuizModal(courseId, step.id);
                            }
                        };
                    }
                } else {
                    // Nếu có Quiz, nút sẽ mở Quiz
                    if (step.quiz) {
                        actionBtn.innerHTML = '<i class="fas fa-question-circle"></i> Start Quiz';
                        actionBtn.style.background = course.color;
                        actionBtn.style.color = '#fff';
                        actionBtn.onclick = (e) => {
                            e.stopPropagation();
                            this.openQuizModal(courseId, step.id);
                        };
                   } else {
                        // Logic cũ cho bài đọc không có quiz (nếu có)
                        actionBtn.innerHTML = 'Mark as Completed';
                        actionBtn.style.background = course.color;
                        actionBtn.style.color = '#fff';
                        actionBtn.onclick = (e) => {
                            e.stopPropagation();
                            this.toggleStepCompletion(courseId, step.id);
                        };
                    }
                }
                // --------------------------------------------------------
            }
        // ---------------------

        btnContainer.appendChild(actionBtn);
                cardBody.appendChild(btnContainer);
                card.appendChild(cardBody);
            }

            container.appendChild(card);
        });
    }

    exitCourseView() {
        this.activeCourseId = null;
        this.expandedStepId = null;
        this.renderRoadmap();
    }

    toggleStepCompletion(courseId, stepId) {
        if (!this.data.courseProgress[courseId]) {
            this.data.courseProgress[courseId] = {};
        }

        const isCurrentlyDone = this.data.courseProgress[courseId][stepId];
        
        if (isCurrentlyDone) {
            // Optional: Toggle OFF (Un-complete)
            delete this.data.courseProgress[courseId][stepId];
        } else {
            // Toggle ON
            this.data.courseProgress[courseId][stepId] = true;
           
            
        }

        this.save();
        this.renderRoadmap();
    }
openQuizModal(courseId, stepId) {
    const course = COURSES.find(c => c.id === courseId);
    const step = course.steps.find(s => s.id === stepId);
    
    if (!step || !step.quiz) return;

    // Lưu state hiện tại để dùng khi submit
    this.currentQuiz = { courseId, stepId, data: step.quiz };

    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    step.quiz.forEach((item, index) => {
        const qDiv = document.createElement('div');
        qDiv.style.marginBottom = '20px';
        qDiv.style.padding = '15px';
        qDiv.style.background = 'rgba(255,255,255,0.05)';
        qDiv.style.borderRadius = '8px';
        
        const qTitle = document.createElement('div');
        qTitle.style.fontWeight = 'bold';
        qTitle.style.marginBottom = '10px';
        qTitle.innerText = `Question ${index + 1}: ${item.q}`;
        qDiv.appendChild(qTitle);

        item.options.forEach((opt, optIndex) => {
            const label = document.createElement('label');
            label.style.display = 'block';
            label.style.padding = '5px 0';
            label.style.cursor = 'pointer';
            label.style.fontSize = '14px';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q-${index}`;
            radio.value = optIndex;
            radio.style.marginRight = '10px';
            
            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt));
            qDiv.appendChild(label);
        });

        container.appendChild(qDiv);
    });

    document.getElementById('quiz-modal').style.display = 'flex';
}

submitQuiz() {
    if (!this.currentQuiz) return;
    
    const { courseId, stepId, data } = this.currentQuiz;
    let correctCount = 0;
    let allAnswered = true;

    // Kiểm tra từng câu
    data.forEach((item, index) => {
        const radios = document.getElementsByName(`q-${index}`);
        let selected = -1;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selected = parseInt(radios[i].value);
                break;
            }
        }

        if (selected === -1) {
            allAnswered = false;
        } else if (selected === item.correct) {
            correctCount++;
        }
    });

    if (!allAnswered) {
        this.showToast("Please answer all the questions!");
        return;
    }

    if (correctCount === data.length) {
        // Đúng hết
        document.getElementById('quiz-modal').style.display = 'none';
        this.showToast("🎉 Perfect! You answered all questions correctly.");
        
        // Đánh dấu hoàn thành bài học
        // Kiểm tra xem đã hoàn thành chưa để tránh toggle tắt đi
        if (!this.data.courseProgress[courseId] || !this.data.courseProgress[courseId][stepId]) {
             this.toggleStepCompletion(courseId, stepId);
        }
    } else {
        // Sai
        this.showToast(`You answered ${correctCount}/${data.length} questions correctly. Try again!`);
    }
}	
	startCoursePractice(courseId, stepId) {
    const course = COURSES.find(c => c.id === courseId);
    const step = course.steps.find(s => s.id === stepId);
    const params = step.practiceParams;
    
    // Tìm hoặc tạo mục tiêu ảo để chạy timer
    let goal = this.data.goals.find(g => g.type === 'meditation') || { id: 'temp_practice', name: 'Practice exercise', type: 'meditation' , lastDuration: params.duration};

    // --- THAY ĐỔI Ở ĐÂY: Truyền params vào hàm setup ---
    this.startMeditationSetup(goal, params);
    
    // Ghi nhận ID bài học để xử lý logic hoàn thành sau này
    this.meditationState.courseId = courseId;
    this.meditationState.courseStepId = stepId;
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
                else qualityVal = 2;                 
                
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
    const thresholdSec = log.threshold || 6;
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

    goalSelect.innerHTML = '<option value="all">All Sessions</option>';
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
        document.getElementById('ana-comparison-table').innerHTML = '<tr><td colspan="5" style="text-align:center; padding:20px;">There is no meditation goals.</td></tr>';
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
        document.getElementById('ana-comparison-table').innerHTML = '<tr><td colspan="5" style="padding:20px; text-align:center;">No meditation data for this period.</td></tr>';
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
                    fullDateTime: `${dateStr} (Avg ${bucketLogs.length} sessions)`, // Indication of averaging
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
                    label: 'Mindfulness Quality (%)',
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
                if (label === 'Mindfulness Quality (%)') {
                    label = 'Mindful quality';
                }

                // 3. Construct the final string
                if (label) {
                    label += ': ';
                }
                
                if (context.parsed.y !== null) {
                    label += context.parsed.y;

                    // 4. Add the % sign if it corresponds to the quality dataset
                    if (context.dataset.label === 'Mindfulness Quality (%)') {
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
	this.renderDensityChart();
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
                    label: 'Quality',
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
                    label: 'Time practiced ', 
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
                                        label += Math.round(totalHours * 60) + ' minutes';
                                    } else {
                                        label += totalHours.toFixed(1) + ' hours';
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
                            if (value < 1) return Math.round(value * 60) + 'm';
                            return value + 'h'; 
                        }
                    }
                },
                x: {
                    ticks: { color: '#9ca3af', font: { size: 10 }, },
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
        { label: 'Today', start: todayStart, end: Date.now() },
        { label: 'Yester&#8203;day', start: startOfYesterday, end: todayStart },
		{ label: 'Day Before', start: startOfDaybefore, end: startOfYesterday },
        { label: 'This Week', start: startOfThisWeek, end: Date.now() },
        { label: 'Last Week', start: startOfLastWeek, end: startOfThisWeek },
		{ label: 'Week Before', start: startOfWeekBefore, end: startOfLastWeek },
        { label: 'This Month', start: startOfThisMonth, end: Date.now() },
        { label: 'Last Month', start: startOfLastMonth, end: startOfThisMonth },
		{ label: 'Month Before', start: startOfMonthBefore, end: startOfLastMonth }
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
    document.getElementById('pro-weekly-title').innerText = `Week (${this.currentWeekStart.toLocaleDateString('en-GB', {month:'numeric', day:'numeric'})} - ${weekEndDisp.toLocaleDateString('vi-VN', {month:'numeric', day:'numeric'})})`;

    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({length: new Date(mYear, mMonth + 1, 0).getDate()}, (_, i) => i + 1);
    document.getElementById('pro-monthly-title').innerText = `Month ${new Date(mYear, mMonth).toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' })}`;

    // --- 2. PREPARE DATA CONTAINERS (STORING MINUTES) ---
    const qualities = {
		
        1: { label: 'High', color: '#34d399' },
        2: { label: 'Good', color: '#60a5fa' },
        3: { label: 'Medium', color: '#fbbf24' },
        4: { label: 'Low', color: '#f87171' },
        5: { label: 'Alertness', color: '#a78bfa' }, // Added Level 5 for Awareness
        0: { label: 'Distraction', color: '#6b7280' }, 
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
        return mins.toFixed(0) + 'm';
    };

    const formatTimeDetailed = (mins) => {
        if (mins >= 60) return (mins / 60).toFixed(1) + 'h';
        return mins.toFixed(1) + 'm';
    };
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
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
            labels: ['Focus level'],
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
                    text: totalBreakdown === 0 ? 'No data available' : `Average focus level: ${averageScore} / 4.0`,
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
                    tooltipTitle: `${dateStr} (Avg ${bucketLogs.length} Sessions)` 
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
                    label: 'Average focus level',
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
                            if(value === 1) return 'Low (1)';
                            if(value === 2) return 'Med (2)';
                            if(value === 3) return 'Good (3)';
                            if(value === 4) return 'High (4)';
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
                            return `Focus level: ${context.parsed.y} / 4.0`;
                        }
                    }
                }
            }
        }
    });
}
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
                // We perform a "fire and forget" save to DB
                dbHelper.saveAll(this.data).catch(err => {
                    console.error("Save failed:", err);
                    this.showToast("Save failed!");
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
				const unit = document.getElementById('g-unit').value || 'time';

                if (id) {
                    const goal = this.data.goals.find(g => g.id === id);
                    if (goal) {
                        goal.name = name; goal.category = category; goal.color = color;
                        goal.lifetimeTargetMinutes = lifetimeTarget; goal.dailyTargetMinutes = dailyTarget;
						goal.unit = unit;
						goal.lastUpdated = Date.now();
                        this.showToast('Goal Updated!');
                    }
                } else {
                    const newGoal = {
                        id: Date.now().toString(), type, name, category, color,
						unit: unit,
                        lifetimeTargetMinutes: lifetimeTarget, dailyTargetMinutes: dailyTarget || 0,
						dailySessionTarget: 8,
						lastUpdated: Date.now(),
                        totalMinutes: 0, totalMindfulness: 0, sessionTargetSeconds: 0,
                        remainingSeconds: 0, currentSessionStartTime: null, isActive: false
                    };
                    this.data.goals.push(newGoal);
                    this.showToast('Goal Created!');
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
        else this.showToast('Session too short.');

    } else {
        const defaultTime = goal.lastDuration || '20';
        const minStr = prompt('Duration (mins):', defaultTime);
        
        if (!minStr) return;
        const min = parseInt(minStr);
        if (isNaN(min) || min <= 0) return;

        goal.lastDuration = min; 
        this.save(); 

        // [QUAN TRỌNG] Bật âm thanh nền để giữ trình duyệt thức
        if (this.noSleepAudio) {
            this.noSleepAudio.play().catch(e => console.log("Audio block: need interaction"));
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

startMeditationSetup(goal, overrideParams = null) {
    let min = 0;
    let threshold = 9;

    // --- LOGIC MỚI: Kiểm tra xem có phải bài học (có overrideParams) không ---
    if (overrideParams) {
        // Nếu là bài học: Lấy trực tiếp thông số, KHÔNG hiện prompt
        min = overrideParams.duration;
        // Nếu bài học quy định ngưỡng thì dùng, không thì lấy ngưỡng mặc định của user
        threshold = overrideParams.threshold || (parseInt(goal.lastThreshold) || 9);
    } else {
    const defaultTime = goal.lastDuration || '20';
    const minStr = prompt('Meditation duration (mins):', defaultTime);
    
    if (!minStr) return;
     min = parseInt(minStr);
    if (isNaN(min) || min <= 0) return;

    const defaultThreshold = goal.lastThreshold || '9';
    const threshStr = prompt('Distraction Threshold (secs):\n(max allowed time for 1 mindfulness log)', defaultThreshold);
    
    
    if (threshStr && !isNaN(parseInt(threshStr)) && parseInt(threshStr) > 0) {
        threshold = parseInt(threshStr);
    }

    goal.lastDuration = min;
    goal.lastThreshold = threshold;
    this.save(); 
    }
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
        if (!confirm("Do you want to stop meditating?")) {
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
        this.showToast("Session too short");
        this.meditationState.active = false;
        return;
    }
    
    // --- UPDATED CODE START ---
    // Reset Slider to 100%
    const slider = document.getElementById('med-efficiency-slider');
    const disp = document.getElementById('med-efficiency-disp');
    if (slider) slider.value = 100;
    if (disp) disp.innerText = '100%';
    // --- UPDATED CODE END ---

    document.getElementById('med-finish-count').innerText = this.meditationState.count;
    document.getElementById('med-finish-time').innerText = minutes + 'm';
    document.getElementById('med-finish-notes').value = '';
    this.renderQuickTags('finish-tags', 'med-finish-notes');
    
    const discardBtn = document.getElementById('btn-med-discard');
    const actionContainer = document.getElementById('med-finish-actions');

    if (discardBtn && actionContainer) {
        if (type === 'auto') {
            discardBtn.style.display = 'none';
            actionContainer.style.justifyContent = 'center';
        } else {
            discardBtn.style.display = 'block';
            actionContainer.style.justifyContent = 'flex-end';
        }
    }
    document.getElementById('meditation-finish-modal').style.display = 'flex';
}
            
            discardMeditation() {
                document.getElementById('meditation-finish-modal').style.display = 'none';
                this.meditationState.active = false;
                this.showToast("Session Discarded");
            }
updateEfficiencyDisplay() {
    const slider = document.getElementById('med-efficiency-slider');
    const disp = document.getElementById('med-efficiency-disp');
    const countDisp = document.getElementById('med-finish-count');
    
    if (!slider || !disp || !countDisp) return;

    const percentage = parseInt(slider.value);
    disp.innerText = percentage + '%';

    // Calculate based on the raw count stored in state
    const rawCount = this.meditationState.count || 0;
    const adjustedCount = Math.floor(rawCount * (percentage / 100));

    // Update the large number display
    countDisp.innerText = adjustedCount;
}
            saveMeditationLog() {
    const durationSeconds = this.meditationState.totalDurationSeconds - this.meditationState.remainingSeconds;
    const minutes = Math.ceil(durationSeconds / 60);
    const notes = document.getElementById('med-finish-notes').value;
    
    // --- UPDATED CODE START ---
    // Calculate Adjusted Count based on Slider
    const percentage = parseInt(document.getElementById('med-efficiency-slider').value) || 100;
    const rawCount = this.meditationState.count;
    const adjustedCount = Math.floor(rawCount * (percentage / 100));
    // --- UPDATED CODE END ---

    let goal = this.data.goals.find(g => g.id === this.meditationState.goalId);
    if (!goal && this.meditationState.courseStepId) {
        goal = { id: 'temp_practice', type: 'meditation', name: 'Practice exercise' };
    }

    if (!goal) return;
    if (this.meditationState.courseStepId) {
        const course = COURSES.find(c => c.id === this.meditationState.courseId);
        const step = course.steps.find(s => s.id === this.meditationState.courseStepId);
        const params = step.practiceParams;
        let isSuccess = true;

        // 1. Kiểm tra thời gian
        if (minutes < params.duration) isSuccess = false;

        // 2. Kiểm tra Tỉnh giác (Hold)
        if (params.minAwareness && this.meditationState.awarenessCount < params.minAwareness) isSuccess = false;

        // 3. Kiểm tra Chánh niệm (Tap)
        if (params.minMindfulness && this.meditationState.count < params.minMindfulness) isSuccess = false;

        // 4. Kiểm tra Chế độ xác nhận
        if (params.requireConfirmMode && !this.data.medSettings.confirmMode) isSuccess = false;

        // --- BỔ SUNG MỚI: Kiểm tra mức chú tâm ---
        if (params.minAverage || params.minGood) {
            let avgCount = 0;
            let goodCount = 0;
            
            this.meditationState.touches.forEach(t => {
                if (t.v === 3) avgCount++;  // v=3 tương ứng với 2 chạm (Trung bình)
                if (t.v === 2) goodCount++; // v=2 tương ứng với >2 chạm (Tốt)
            });

            if (params.minAverage && avgCount < params.minAverage) isSuccess = false;
            if (params.minGood && goodCount < params.minGood) isSuccess = false;
        }
        // ------------------------------------------

        if (isSuccess) {
        this.toggleStepCompletion(this.meditationState.courseId, this.meditationState.courseStepId);
        this.showToast("🙏 Awesome! You've met the goal and completed the lesson.");
    } else {
        this.showToast("This meditation session hasn't met the requirement yet. Try again!");
    }
}
    // --- 1. EXAM VALIDATION LOGIC ---
    if (this.meditationState.isExam) {
        // Construct a temp log object to use analyzeSingleSession
        const tempLog = {
        minutes: minutes,
        timestamp: this.meditationState.startTime,
        touches: this.meditationState.touches.map(t => {
            const delta = Math.max(0, t.t - this.meditationState.startTime);
            return t.v ? { d: delta, v: t.v } : delta;
        }),
        threshold: this.meditationState.threshold,
        awarenessCount: this.meditationState.awarenessCount
    };

    const analysis = this.analyzeSingleSession(tempLog);
    const qualityPct = analysis.qualityPct;
    const totalCount = this.meditationState.count;
    const density = minutes > 0 ? (totalCount / minutes) : 0;
    
    let weightedSum = 0;
    let proCount = 0;
    this.meditationState.touches.forEach(t => {
        if (t.v) {
            weightedSum += (5 - t.v); 
            proCount++;
        }
    });
    const avgScore = proCount > 0 ? (weightedSum / proCount) : 0;

    // --- NEW LOGIC: Dynamic Criteria based on Goal ID ---
    let reqMinTime = 59; // Allow 1 min buffer
    let reqQuality = 50;
    let reqScore = 1.2;
    let reqDensity = 5;
    let reqCount = 300;

    if (goal.id === 'cert_inter_1') {
        reqMinTime = 59;
        reqQuality = 55;
        reqScore = 1.3;
        reqDensity = 6;
        reqCount = 400;
    } else if (goal.id === 'cert_adv_1') {
        reqMinTime = 119;
        reqQuality = 60;
        reqScore = 1.4;
        reqDensity = 7;
        reqCount = 800;
    } else if (goal.id === 'cert_master_1') {
        reqMinTime = 119;
        reqQuality = 65;
        reqScore = 1.5;
        reqDensity = 8;
        reqCount = 900;
    }

    const passedDuration = minutes >= reqMinTime;
    const passedQuality = qualityPct >= reqQuality;
    const passedScore = avgScore >= reqScore;
    const passedDensity = density >= reqDensity;
    const passedCount = totalCount >= reqCount;

    const passed = passedDuration && passedQuality && passedScore && passedDensity && passedCount;

    if (passed) {
        goal.certified = true;
        this.showToast("🎉 CONGRATULATIONS! YOU ARE NOW CERTIFIED!", true);
        this.playBell(); 
    } else {
        alert(`❌ EXAM RESULT: FAILED\n\n` +
              `- Duration: ${minutes}p (Required ${reqMinTime+1}p) ${passedDuration ? '✅':'❌'}\n` +
              `- Quality: ${qualityPct}% (Required ≥ ${reqQuality}%) ${passedQuality ? '✅':'❌'}\n` +
              `- Focus Level: ${avgScore.toFixed(2)} (Required ≥ ${reqScore}) ${passedScore ? '✅':'❌'}\n` +
              `- Density: ${density.toFixed(1)} (Required ≥ ${reqDensity}) ${passedDensity ? '✅':'❌'}\n` +
              `- Total Mindfulness: ${totalCount} (Required ≥ ${reqCount}) ${passedCount ? '✅':'❌'}\n\n` +
              `Don't be discouraged! Take a rest and try again.`);
    }
}
    
    // Định dạng ghi chú tự động
    const autoNote = `Mindfulness: ${adjustedCount} | Alertness: ${this.meditationState.awarenessCount}. ${this.meditationState.isExam ? '[FINAL EXAM]' : ''}`;

    const log = {
        goalId: goal.id,
        date: this.toIsoDate(new Date(this.meditationState.startTime)),
        timestamp: this.meditationState.startTime,
        minutes: minutes,
        notes: `${autoNote} ${notes}`,
        count: adjustedCount, // SAVE THE ADJUSTED COUNT
        awarenessCount: this.meditationState.awarenessCount,
        touches: this.meditationState.touches.map(t => {
            const delta = Math.max(0, t.t - this.meditationState.startTime);
            return t.v ? { d: delta, v: t.v } : delta;
        }),
        threshold: this.meditationState.threshold 
    };

    this.data.logs.push(log);
    goal.totalMinutes += minutes;
    if (!goal.totalMindfulness) goal.totalMindfulness = 0;
    goal.totalMindfulness += adjustedCount; // ADD ADJUSTED COUNT TO TOTAL

    this.meditationState.active = false;
    this.save();
    this.recalculateStreak();
    this.renderGoals();
    this.renderReports();
    const newBadges = this.checkAchievements(true);
    
    document.getElementById('meditation-finish-modal').style.display = 'none';
    if (!this.meditationState.courseStepId) {
    this.showToast(`Saved! +${adjustedCount} Mindfulness, +${this.meditationState.awarenessCount} Alertness.`);
}
	if (newBadges.length > 0) {
        setTimeout(() => {
            newBadges.forEach((title, index) => {
                // Nếu mở khóa nhiều cái cùng lúc, hiện lần lượt cách nhau 3.5s
                setTimeout(() => {
                    this.showToast(`💎 Unlocked Pāramī: ${title}`, true);
                }, index * 3500); 
            });
        }, 1200); 
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
                    if (sessionText) sessionText.innerText = goal.isActive ? `${activeSessionMins} / ${Math.floor(goal.sessionTargetSeconds / 60)} mins` : "Ready";
                });
                this.updateStats(); 
            }


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

// Add this method inside the GoalTracker class
setDailySessionTarget(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    let dataChanged = false;

    // --- PROMPT 1: Daily Sessions ---
    const currentSession = goal.dailySessionTarget || 8;
    const inputSession = prompt(`(1/2) Set daily practice sessions for "${goal.name}":`, currentSession);

    if (inputSession !== null) {
        const val = parseInt(inputSession);
        if (!isNaN(val) && val >= 0) {
            goal.dailySessionTarget = val;
            dataChanged = true;
        }
    }

    // --- PROMPT 2: Daily Target Amount (Minutes or Mindfulness Count) ---
    const isMeditation = goal.type === 'meditation';
    const unitLabel = isMeditation ? 'mindfulness' : (goal.unit === 'count' ? 'points' : 'minutes');
    const currentTarget = goal.dailyTargetMinutes || 100;

    const inputTarget = prompt(`(2/2) Set daily ${unitLabel} goal:`, currentTarget);

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
        this.showToast(`Daily goals updated!`);
    }
}


toggleProModeUI() {
    const isPro = document.getElementById('inp-pro-mode').checked;
    document.getElementById('simple-tap-options').style.display = isPro ? 'none' : 'block';
    document.getElementById('pro-tap-options').style.display = isPro ? 'block' : 'none';
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
setDailyMinMedTarget(id) {
    const goal = this.data.goals.find(g => g.id === id);
    if (!goal) return;

    const current = goal.dailyMinMedTarget || 120;
    const input = prompt(`Set daily time goal (minutes) for "${goal.name}":`, current);

    if (input !== null) {
        const val = parseInt(input);
        if (!isNaN(val) && val > 0) {
            goal.dailyMinMedTarget = val;
            this.save();
            this.renderGoals();
            this.showToast(`Updated: ${val} minutes/day`);
        }
    }
}
calculateGoalTier(goal) {
    const scoreStr = this.calculateConsistencyScore(goal);
    const score = parseFloat(scoreStr);    
    if (score >= 9.0) {
        return { id: 'diamond', name: 'Diamond Class', class: 'tier-diamond', icon: 'fab fa-sketch' };
    }
    if (score >= 7.5) {
        return { id: 'gold', name: 'Gold Class', class: 'tier-gold', icon: 'fas fa-jedi' };
    }
    if (score >= 5.0) {
        return { id: 'silver', name: 'Silver Class', class: 'tier-silver', icon: 'fab fa-ethereum' };
    }   
    return { id: 'bronze', name: 'Bronze Class', class: 'tier-bronze', icon: 'fas fa-medal' };
}

calculateConsistencyScore(goal) {
    const logs = this.data.logs.filter(l => l.goalId === goal.id);
    if (logs.length === 0) return "0.0";

    const dailyStats = {};
    logs.forEach(l => {
        if (!dailyStats[l.date]) {
            dailyStats[l.date] = { sessions: 0, value: 0, minutes: 0 };
        }
        dailyStats[l.date].sessions++;
        
        const val = (goal.type === 'meditation') 
            ? (l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0))
            : l.minutes;
        
        dailyStats[l.date].value += val;
        dailyStats[l.date].minutes += l.minutes;
    });

    const activeDays = Object.keys(dailyStats).length;
    if (activeDays === 0) return "0.0";

    const targetSessions = goal.dailySessionTarget || 8;
    const targetValue = goal.dailyTargetMinutes || 100;
    const targetDuration = goal.dailyMinMedTarget || 120;

    let scoreSessions = 0;
    let scoreValue = 0;
    let scoreDuration = 0;

    Object.values(dailyStats).forEach(stat => {
    // Thay vì if, ta cộng dồn tỷ lệ hoàn thành (tối đa là 100% hay 1.0 cho mỗi ngày)
    scoreSessions += Math.min(1, stat.sessions / targetSessions);
    scoreValue += Math.min(1, stat.value / targetValue);
    
    if (goal.type === 'meditation' && targetDuration > 0) {
        scoreDuration += Math.min(1, stat.minutes / targetDuration);
    }
});

    const pctSessions = (scoreSessions / activeDays);
    const pctValue = (scoreValue / activeDays);
    
    let totalScore = 0;
    
    if (goal.type === 'meditation' && targetDuration > 0) {
        const pctDuration = (scoreDuration / activeDays);
        totalScore = (pctSessions + pctValue + pctDuration) / 3;
    } else {
        totalScore = (pctSessions + pctValue) / 2;
    }

    // Convert 0.0-1.0 to 0.0-10.0 scale
    return (totalScore * 10).toFixed(1);
}

             renderGoals() {
    const container = document.getElementById('active-goals-container');
    const emptyMsg = document.getElementById('empty-msg');
    if (!container || !emptyMsg) return;

    container.innerHTML = '';
    
    if (this.data.goals.length === 0) { 
        emptyMsg.style.display = 'block'; 
        return; 
    }
    emptyMsg.style.display = 'none';

    const todayStr = this.toIsoDate(new Date());

    const sortedGoals = [...this.data.goals].sort((a, b) => {
        // Prioritize Certification goals at top if not certified
        if (a.isCertification && !a.certified && (!b.isCertification || b.certified)) return -1;
        if (b.isCertification && !b.certified && (!a.isCertification || a.certified)) return 1;
        return (b.lastUpdated || 0) - (a.lastUpdated || 0);
    });

    sortedGoals.forEach(goal => {
        const isMeditation = goal.type === 'meditation';
        const targetProp = isMeditation ? 'totalMindfulness' : 'totalMinutes';
        
        // --- CHECK COMPLETION & EXAM LOGIC ---
        const targetMet = goal.lifetimeTargetMinutes > 0 && goal[targetProp] >= goal.lifetimeTargetMinutes;
        const isCertGoal = goal.isCertification === true;
        const isCertified = goal.certified === true;
        
        // Inspecting logic
        const isInspecting = this.inspectingGoalId === goal.id;

        // CASE 1: Certified (Show Badge)
        // For Cert goals: Must be targetMet AND isCertified
        // For Normal goals: Just targetMet
        const showBadge = (isCertGoal ? (targetMet && isCertified) : targetMet) && !isInspecting;

        if (showBadge) {
            const tier = this.calculateGoalTier(goal);
            
            // --- NEW LOGIC: Dynamic Icons for Certificates ---
            let certConfig = { icon: 'fas fa-award'};
            
            if (goal.id === 'cert_basic_1') {
                certConfig = { icon: 'fas fa-award-simple'};
            } else if (goal.id === 'cert_inter_1') {
                certConfig = { icon: 'fas fa-award'};
            } else if (goal.id === 'cert_adv_1') {
                certConfig = { icon: 'far fa-award-simple'};
            } else if (goal.id === 'cert_master_1') {
                certConfig = { icon: 'far fa-award'};
            }

            const displayTier = isCertGoal 
                ? { name: 'Meditation Certificate', icon: certConfig.icon, class: 'tier-diamond' } 
                : tier;
            
            const unitLabel = isMeditation ? 'Mindfulness' : 'Mins';
            const cScore = this.calculateConsistencyScore(goal);

            const badgeDiv = document.createElement('div');
            badgeDiv.className = `goal-medallion ${displayTier.class}`;
            
            
            badgeDiv.onclick = () => {
                this.inspectingGoalId = goal.id;
                this.renderGoals();
            };
            
            badgeDiv.innerHTML = `
                <div class="medallion-ribbon"><i class="fas fa-certificate"></i> ${isCertGoal ? 'Certification' : 'Achievement'}</div>
                <div class="medallion-icon-container">
                    <i class="${displayTier.icon}"></i>
                </div>
                <div class="medallion-title">${goal.name}</div>
                <div style="font-size: 12px; font-style:italic;">${displayTier.name}</div>
                
                <div class="medallion-stats">
                    <div class="medallion-stat-item" title="Total Mindfulness">
                        <i class="fas fa-check-double"></i> ${goal[targetProp].toLocaleString()} ${unitLabel}
                    </div>
                    <div class="medallion-stat-item" title="Dilligent Score">
                        🔥 ${cScore}/10
                    </div>
                </div>
            `;
            container.appendChild(badgeDiv);
            return; 
        }

        // CASE 2: Exam Ready (Only for Cert Goal)
        // Target Met but NOT certified
        if (isCertGoal && targetMet && !isCertified) {
     let reqHtml = '';
     let durationText = '60 minutes';

     if (goal.id === 'cert_inter_1') {
        reqHtml = `
		    <li>Threshold = 9s</li>
            <li>Quality ≥ 55%</li>
            <li>Avg. Focus level ≥ 1.3</li>
            <li>Density ≥ 6 mindfulness/min</li>
            <li>Total Mindfulness ≥ 400</li>`;
     } else if (goal.id === 'cert_adv_1') {
        durationText = '120 minutes';
        reqHtml = `
		    <li>Threshold = 9s</li>
            <li>Quality ≥ 60%</li>
            <li>Avg. Focus level ≥ 1.4</li>
            <li>Density ≥ 7 mindfulness/min</li>
            <li>Total Mindfulness ≥ 800</li>`;
     } else if (goal.id === 'cert_master_1') {
        durationText = '120 minutes';
        reqHtml = `
		    <li>Threshold = 9s</li>
            <li>Quality ≥ 65%</li>
            <li>Avg. Focus level ≥ 1.5</li>
            <li>Density ≥ 8 mindfulness/min</li>
            <li>Total Mindfulness ≥ 900</li>`;
     } else {
         // Basic Default
         reqHtml = `
		    <li>Threshold = 9s</li>
            <li>Quality ≥ 50%</li>
            <li>Avg. Focus level ≥ 1.2</li>
            <li>Density ≥ 5 mindfulness/min</li>
            <li>Total Mindfulness ≥ 300</li>`;
     }

     const div = document.createElement('div');
     div.className = 'card';
     div.style.cssText = "border: 2px solid var(--warning); text-align: center; padding: 30px;";
     div.innerHTML = `
        <div style="font-size: 40px; color: var(--warning); margin-bottom: 15px;">
            <i class="fas fa-scroll"></i>
        </div>
        <h3>Eligible for Final Exam!</h3>
        <p style="color: var(--text-light); font-size: 13px; margin-bottom: 20px;">
            You have completed ${goal.lifetimeTargetMinutes.toLocaleString()} mindfulness. Pass the final test to receive your certificate.
        </p>
        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; font-size: 12px; text-align: left; margin-bottom: 20px;">
            <strong><i class="fas fa-tasks"></i> Exam Requirements (${durationText}):</strong>
            <ul style="margin: 5px 0 0 15px; color: var(--text-light);">
                ${reqHtml}
            </ul>
        </div>
        <button class="btn" style="width: 100%; background: var(--warning); color: black; font-weight: bold;" onclick="app.startExamSession('${goal.id}')">
            <i class="fas fa-play-circle"></i> Start the Exam
        </button>
     `;
     container.appendChild(div);
     return;
}

        // CASE 3: Standard Goal Card (In Progress)
        // ... (Your existing card logic variables) ...
        const unitLabel = isMeditation ? 'mindfulness' : (goal.unit === 'count' ? 'points' : 'minutes');
        const overallPct = goal.lifetimeTargetMinutes > 0 ? Math.min((goal[targetProp] / goal.lifetimeTargetMinutes) * 100, 100) : 0;
        
        // Calculate Today's Values
        let todayVal = 0;
        let todayMinutes = 0;
        if (isMeditation) {
            const logs = this.data.logs.filter(l => l.goalId === goal.id && l.date === todayStr);
            todayVal = logs.reduce((sum, l) => sum + (l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0)), 0);
            todayMinutes = logs.reduce((sum, l) => sum + l.minutes, 0);
        } else {
            todayVal = this.data.logs.filter(l => l.goalId === goal.id && l.date === todayStr).reduce((sum, l) => sum + l.minutes, 0);
        }
        
        const dailyTarget = goal.dailyTargetMinutes || 100;
        const dailyminmedTarget = goal.dailyMinMedTarget || 120;
        let dailyPct = 0;
        let dailyBarColor = goal.color;
        
        if (dailyTarget > 0) {
            dailyPct = Math.min((todayVal / dailyTarget) * 100, 100);
            if (todayVal >= dailyTarget) dailyBarColor = 'var(--success)';
        }

        const div = document.createElement('div');
        div.className = 'card goal-card';
        if (isInspecting) div.classList.add('card-revealed'); 
        div.style.borderLeft = `5px solid ${goal.color}`;

        // Close Button
        let closeInspectHtml = '';
        if (isInspecting) {
            closeInspectHtml = `<div style="text-align: center; margin-bottom: 10px; padding-bottom:10px; border-bottom:1px solid var(--border);"><button class="btn btn-secondary" onclick="app.closeInspect('${goal.id}')" style="font-size:12px; padding: 5px 15px;"><i class="fas fa-medal"></i> Minimize</button></div>`;
        }
        
        let controlsHtml = '', dailySectionHtml = '', sessionSectionHtml = '';
        
        // Render Bars logic (Similar to old code but with LOCKED handlers for Cert Goals)
        if (dailyTarget > 0) {
             // Grid logic
            const todaySessionCount = this.data.logs.filter(l => l.goalId === goal.id && l.date === todayStr).length;
            const sessionTarget = goal.dailySessionTarget || 8;
            let sessionGridHtml = '';
            if (sessionTarget > 0) {
                sessionGridHtml = `<div style="margin-top: 10px; display: flex; flex-wrap: wrap; gap: 5px; max-height: 85px; overflow-y: auto;">`;
                for (let i = 1; i <= sessionTarget; i++) {
                    const isDone = i <= todaySessionCount;
                    const boxStyle = isDone ? `border: 1px solid ${goal.color}; color: ${goal.color}; font-weight: bold; background: rgba(0,0,0,0.1);` : `border: 1px solid transparent; background: rgba(255,255,255,0.05); color: var(--text-light);`;
                    sessionGridHtml += `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 11px; border-radius: 4px; ${boxStyle}">${i}</div>`;
                }
                if (todaySessionCount >= sessionTarget) sessionGridHtml += `<div style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; color: var(--success); font-size: 16px; margin-left: 2px;"><i class="fas fa-check-circle"></i></div>`;
                sessionGridHtml += `</div>`;
            }

            // Click Handler: Prevent editing if Cert Goal
            const sessionClick =  `onclick="app.setDailySessionTarget('${goal.id}')"`;
            const pointerStyle =  'cursor: pointer;';
            const iconDisplay =  '';

            dailySectionHtml = `
                <div ${sessionClick} style="margin-bottom: 10px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; ${pointerStyle} transition: background 0.2s;">
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; align-items:center;">
                        <strong style="color:var(--text);">Daily Goal:</strong>
                        <span style="font-weight:600;">${todayVal} / ${dailyTarget} ${unitLabel} <i class="fas fa-pen" style="font-size:10px; opacity:0.5; margin-left:4px; ${iconDisplay}"></i></span>
                    </div>
                    <div class="progress-container" style="height: 6px;"><div class="progress-bar" style="width: ${dailyPct}%; background: ${dailyBarColor}"></div></div>
                    ${sessionGridHtml}
                </div>`;

            if (isMeditation) {
                const minPct = Math.min((todayMinutes / dailyminmedTarget) * 100, 100);
                let minBarColor = goal.color;
                if (todayMinutes >= dailyminmedTarget) minBarColor = 'var(--success)';
                
                const minClick =  `onclick="app.setDailyMinMedTarget('${goal.id}')"`;

                dailySectionHtml += `
                <div ${minClick} style="margin-bottom: 15px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px; ${pointerStyle} transition: background 0.2s;">
                    <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; align-items:center;">
                        <strong style="color:var(--text);">Daily Goal:</strong>
                        <span style="font-weight:600;">${todayMinutes} / ${dailyminmedTarget} minutes <i class="fas fa-pen" style="font-size:10px; opacity:0.5; margin-left:4px; ${iconDisplay}"></i></span>
                    </div>
                    <div class="progress-container" style="height: 6px;"><div class="progress-bar" style="width: ${minPct}%; background: ${minBarColor}"></div></div>
                </div>`;
            }
        }

        // Controls Logic - HIDE MANUAL ENTRY FOR CERT
        if (isMeditation) {
            const manualBtn = isCertGoal ? '' : `<button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')" title="Add Manually"><i class="fas fa-plus"></i></button>`;
            
            controlsHtml = `
                 <div class="timer-controls">
                    <div style="font-size: 14px; color: var(--text-light); text-transform: uppercase;">${isCertGoal ? 'Meditate' : 'Meditate'}</div>
                    <div style="display:flex; gap: 10px;">
                        <button class="btn-icon btn-play" style="background: var(--zen); color: white;" onclick="app.toggleTimer('${goal.id}')" title="Start Meditate"><i class="fas fa-om"></i></button>
                        ${manualBtn}
                    </div>
                </div>`;
        } else {
    if (goal.unit === 'count') {
        // Giao diện nếu là đếm Số Lần
        sessionSectionHtml = `
            <div class="section-label">Practice</div>
            <div style="font-size:12px; color:var(--text-light); margin-bottom: 5px;">Manual entry via the (+) button</div>`;
        controlsHtml = `
            <div class="timer-controls">
                <div style="font-size: 14px; color: var(--text-light); text-transform: uppercase;">Cultivate</div>
                <div style="display:flex; gap: 10px;">
                    <button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')"><i class="fas fa-plus"></i></button>
                </div>
            </div>`;
    } else {
            sessionSectionHtml = `
                <div class="section-label">Current Session</div>
                <div class="progress-container"><div id="bar-session-${goal.id}" class="progress-bar" style="background:var(--success); width:0%;"></div></div>
                <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-light);"><span id="prog-text-session-${goal.id}">Ready</span></div>`;
            controlsHtml = `
                <div class="timer-controls">
                    <div id="timer-${goal.id}" class="timer-display">00:00</div>
                    <div style="display:flex; gap: 10px;">
                        <button class="btn-icon ${goal.isActive ? 'btn-stop' : 'btn-play'}" onclick="app.toggleTimer('${goal.id}')"><i class="fas ${goal.isActive ? 'fa-stop' : 'fa-play'}"></i></button>
                        <button class="btn-icon" style="background:var(--warning); color:#000;" onclick="app.openSessionModal('${goal.id}')"><i class="fas fa-plus"></i></button>
                    </div>
                </div>`;
         }
}
		const headerButtons = isCertGoal 
            ? `<span style="font-size:10px; background:var(--warning); color:#000; padding:2px 6px; border-radius:4px; font-weight:bold;">CERTIFICATE</span>`
            : `
            <div style="display:flex; gap: 5px;">
                <button class="btn-icon" style="color: var(--text-light)" onclick="app.openModal('${goal.id}', '${goal.type}')"><i class="fas fa-pencil-alt"></i></button>
                <button class="btn-icon" style="color: var(--text-light)" onclick="app.deleteGoal('${goal.id}')"><i class="fas fa-trash"></i></button>
            </div>`;
const consistencyScore = this.calculateConsistencyScore(goal);

// 2. Define color based on score (Optional visual touch)
let scoreColor = '#CD7F32';
if (parseFloat(consistencyScore) >= 9.0) scoreColor = '#34d399';
else if (parseFloat(consistencyScore) >= 7.5) scoreColor = '#D4AF37';
else if (parseFloat(consistencyScore) >= 5.0) scoreColor = '#BDC3C7';



        div.innerHTML = `
    ${closeInspectHtml}
    <div class="goal-header">
        <div><div class="goal-title">${goal.name}</div><span class="goal-tag" style="color:#b1b1c9 ; background: rgba(255,255,255,0.1)">${goal.category}</span></div>
        <div style="display:flex; gap: 5px;">
            <button class="btn-icon" style="color: var(--text-light)" onclick="app.openModal('${goal.id}', '${goal.type}')"><i class="fas fa-pencil-alt"></i></button>
            <button class="btn-icon" style="color: var(--text-light)" onclick="app.deleteGoal('${goal.id}')"><i class="fas fa-trash"></i></button>
        </div>
    </div>
    ${dailySectionHtml}
    
    <div class="section-label">Achievement Progress</div>
    <div class="progress-container">
        <div class="progress-bar" style="width: ${overallPct}%; background: ${goal.color}"></div>
    </div>
    
    <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-light); margin-bottom: 5px;">
        <span>${goal[targetProp]} / ${goal.lifetimeTargetMinutes} ${unitLabel}</span>
        <span>${(overallPct).toFixed(1)}%</span>
    </div>

    <div style="font-size: 11px; color: var(--text-light); margin-bottom: 15px; font-style: italic;">
        🔥 Dilligent score: <strong style="color: ${scoreColor}">${consistencyScore}</strong>/10
    </div>

    ${sessionSectionHtml} ${controlsHtml}
    <div class="sessions-list" style="margin-top: 15px; max-height: 150px; overflow-y: auto;"><div id="sessions-${goal.id}"></div></div>
`;
container.appendChild(div);
        if (isCertGoal) {
             // We need to modify renderSessions to not show edit buttons, 
             // or simply handle it in openSessionModal (easier security)
        }
        this.renderSessions(goal.id, isMeditation);
    });
}

startExamSession(goalId) {
    const goal = this.data.goals.find(g => g.id === goalId);
    if (!goal) return;

    // Determine Duration
    let durationMins = 60;
    if (goalId === 'cert_adv_1' || goalId === 'cert_master_1') {
        durationMins = 120;
    }

    if (!confirm(`⚠️ START FINAL EXAM ⚠️\n\n- Duration: ${durationMins} minutes.\n- Long pauses are not permitted.\n- Results will be calculated immediately after completion.\n\nAre you ready?`)) return;

    // Force settings
    if (typeof Website2APK !== 'undefined') Website2APK.keepScreenOn(true);

    this.meditationState = {
        active: true, paused: false, goalId: goal.id,
        count: 0, awarenessCount: 0,
        startTime: Date.now(), 
        totalDurationSeconds: durationMins * 60, // Set dynamic duration
        remainingSeconds: durationMins * 60, 
        touches: [],
        threshold: 9, // Standard threshold for exam
        quoteInterval: null,
        currentAutoLevel: 4, comboCounter: 0, lastTouchTime: Date.now(),
        consecutiveGoodCount: 0,
        
        // EXAM FLAGS
        isExam: true,
        examResult: null
    };

    document.getElementById('meditation-overlay').style.display = 'flex';
    document.getElementById('med-counter').innerText = '0';
    this.updateMedTimerDisplay();
    this.updateMeditationQuote(true); 

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

// Helper to close inspect mode
closeInspect(goalId) {
    if (this.inspectingGoalId === goalId) {
        this.inspectingGoalId = null;
        this.renderGoals();
    }
}
            loadMoreSessions(goalId, isMeditation) {
    if (!this.sessionLimits[goalId]) this.sessionLimits[goalId] = 80;
    this.sessionLimits[goalId] += 80; 
    this.renderSessions(goalId, isMeditation);
}
           renderSessions(goalId) {
    const container = document.getElementById(`sessions-${goalId}`);
    if (!container) return;
    container.innerHTML = '';

    // Lấy thông tin mục tiêu để kiểm tra loại
    const goal = this.data.goals.find(g => g.id === goalId);
    const isCertGoal = goal && goal.isCertification; // Kiểm tra nếu là khóa chứng chỉ
    const isMeditation = goal && goal.type === 'meditation';
    const allSessions = this.data.logs
        .filter(l => l.goalId === goalId)
        .sort((a, b) => b.timestamp - a.timestamp);
    
    if (allSessions.length === 0) { 
        container.innerHTML = '<p style="font-size:12px; color:var(--text-light);">No sessions yet</p>'; 
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
const unitText = (!isMeditation && goal && goal.unit === 'count') ? 'points' : 'minutes';
        let actionButtons = '<div style="display:flex; gap:5px;">';

                    if (isMeditation && log.touches && log.touches.length > 0) {
                        actionButtons += `<button class="btn-icon" style="background:transparent; color:var(--zen); height:24px; width:24px;" onclick="app.showSessionGraph('${log.timestamp}')" title="Show graph"><i class="fas fa-chart-area" style="font-size:12px;"></i></button>`;
                    }

                   
            actionButtons += `<button class="btn-icon" style="background:transparent; color:var(--text-light); height:24px; width:24px;" onclick="app.openSessionModal('${goalId}', ${log.minutes}, ${log.timestamp}, ${log.timestamp})" title="Edit details"><i class="fas fa-edit" style="font-size:12px;"></i></button>`;
   

        actionButtons += '</div>';


                    sLi.innerHTML = `
                        <div class="session-content">
                            <span class="session-date">${this.toDisplayDate(log.timestamp)}</span>: ${log.minutes} ${unitText} 
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
        btn.innerHTML = `<i class="fas fa-chevron-down"></i> Load more (${nextBatch} sessions)`;
        
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
        this.showToast("No data available for this session");
        return;
    }

    this.currentGraphLog = log;

    document.getElementById('graph-modal').style.display = 'flex';
    document.getElementById('graph-date').innerText = new Date(log.timestamp).toLocaleString('en-GB');

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
    let titleText = `Total duration: ${log.minutes} minutes`;
    let titleWeight = 'normal';
    let titleColor = '#9ca3af';

    if (proCount > 0) {
        // Weighted Sum: Level 1 (Cao)=4, Level 2 (Tốt)=3, Level 3 (TB)=2, Level 4 (Thấp)=1
        const weightedSum = (counts[1] * 4) + (counts[2] * 3) + (counts[3] * 2) + (counts[4] * 1);
        const averageScore = (weightedSum / proCount).toFixed(2);
        
        titleText = `Average focus level: ${averageScore} / 4.0`;
        titleWeight = '600';
        titleColor = '#f3f4f6';
    }
    // 4. Define Colors & Labels
    const qualities = {
        1: { label: 'High', color: '#34d399' },      // Green
        2: { label: 'Good', color: '#60a5fa' },      // Blue
        3: { label: 'Medium', color: '#fbbf24' },       // Yellow
        4: { label: 'Low', color: '#f87171' },     // Red
        0: { label: 'Alertness',  color: '#a78bfa' },      // Purple (New Standard Level)
        5: { label: 'Distraction', color: '#6b7280' }     // Gray (Updated from White)
    };

    // 5. Cleanup Old Chart
    if (this.charts.session) this.charts.session.destroy();

    // 6. Render Chart
    this.charts.session = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Meditation Session'],
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
            indexAxis: 'y', // Horizontal
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    display: true, 
                    max: totalSec, 
					grid: {
            color: 'rgba(156, 163, 175, 0.1)' // Light grid lines to match theme
        },
        ticks: {
            color: '#9ca3af',
            // This function converts the seconds value to a minute label
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
                            else timeStr = (val/60).toFixed(1) + "m";
                            
                            const rawLabel = context.dataset.label;

                            // IF Level 0 (Cơ bản) OR Level 5 (Thất niệm) -> Show label as is
                            if (rawLabel.includes('Mindfulness') || rawLabel.includes('Distraction')) {
                                return `${rawLabel}: ${pct}% (${timeStr})`;
                            } 
                            
                            // ELSE (Levels 1-4) -> Add prefix and lowercase
                            return `Focus level: ${rawLabel} - ${pct}% (${timeStr})`;
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
                label: 'Mindfulness',
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
                x: { title: { display: true, font: { size: 11 }, text: 'Time (mins)', color: '#9ca3af' }, grid: { display: true }, ticks: { maxTicksLimit: 20, color: '#9ca3af' } },
                y: { beginAtZero: true, title: { display: true, font: { size: 11 }, text: 'Mindfulness counts', color: '#9ca3af', padding: 0.1, }, grid: { color: 'rgba(55, 65, 81, 0.5)' }, ticks: { color: '#9ca3af', precision: 0, } }},
            plugins: {
                tooltip: {
                    mode: 'index', intersect: false, displayColors: false,
                    callbacks: {title: () => '',  label: (c) => c.raw >= 1 ? "🌱 Mindfulness (" + c.raw + ")" : "☁️ Unmindful" }
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
                label: 'Forgetfulness Interval',
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
                    title: { display: true, text: 'Time (mins)', color: '#9ca3af', font: { size: 11 } }, 
                    grid: { display: true }, 
                    ticks: { color: '#9ca3af', maxTicksLimit: 15 } 
                },
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Delays', color: '#9ca3af', padding: 0.1, font: { size: 11 } }, 
                    ticks: { color: '#9ca3af' } 
                }
            },
            plugins: {
                tooltip: {
                    displayColors: false,
                    callbacks: {
                        title: (items) => `Minute ${items[0].label}`,
                        label: (c) => `Delay: ${c.raw} secs`
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
        this.showToast('Could not copy text!');
        return;
    }

    const dataStr = JSON.stringify(log);

    if (navigator.clipboard) {
        navigator.clipboard.writeText(dataStr).then(() => {
            this.showToast('JSON data has been copied!');
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
        if(successful) this.showToast('JSON data has been copied!');
        else this.showToast('Oops, unable to copy');
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        this.showToast('Oops, unable to copy');
    }

    
    document.body.removeChild(textArea);
}
            openChoiceModal() { document.getElementById('choice-modal').style.display = 'flex'; }
            closeChoiceModal() { document.getElementById('choice-modal').style.display = 'none'; }

updateGoalHints() {
    const type = document.getElementById('g-type').value;
    const unit = document.getElementById('g-unit').value;
    const dailyHint = document.getElementById('g-daily-hint');
    const lifeHint = document.getElementById('g-life-hint');
    
    if (type === 'meditation') {
        dailyHint.innerText = "mindfulness";
        lifeHint.innerText = "mindfulness";
    } else {
        if (unit === 'count') {
            dailyHint.innerText = "points per day";
            lifeHint.innerText = "total points";
        } else {
            dailyHint.innerText = "minutes per day";
            lifeHint.innerText = "total minutes";
        }
    }
}
            openModal(goalId = null, type = 'standard') { 
    this.closeChoiceModal(); 
    const modal = document.getElementById('goal-modal');
    const title = document.getElementById('modal-title');
    const btn = document.getElementById('btn-save-goal');
    const catSelect = document.getElementById('g-cat');
    catSelect.innerHTML = '';
   const cats = type === 'meditation' ? ['Sitting', 'Walking', 'Mindfulness of Breath', 'Contemplation', 'Cultivation'] : ['Discipline', 'Cultivate', 'Work', 'Study', 'Health', 'Creative', 'Merit', 'Other'];
    cats.forEach(c => { const opt = document.createElement('option'); opt.value = c; opt.innerText = c; catSelect.appendChild(opt); });

    document.getElementById('g-type').value = type;

    // HIỂN THỊ/ẨN CHỌN ĐƠN VỊ
    const unitGroup = document.getElementById('g-unit-group');
    if (type === 'meditation') {
        unitGroup.style.display = 'none';
    } else {
        unitGroup.style.display = 'block';
    }

    if (goalId) {
        const goal = this.data.goals.find(g => g.id === goalId);
        if (goal && goal.isCertification) {
            alert("Certificate goal parameters cannot be edited.");
            return;
        }
        if (goalId) {
            document.getElementById('g-id').value = goal.id;
            document.getElementById('g-name').value = goal.name;
            document.getElementById('g-cat').value = goal.category;
            document.getElementById('g-color').value = goal.color;
            document.getElementById('g-lifetime-target').value = goal.lifetimeTargetMinutes;
            document.getElementById('g-daily-target').value = goal.dailyTargetMinutes;
            document.getElementById('g-type').value = goal.type || 'standard';
            document.getElementById('g-unit').value = goal.unit || 'time'; // Tải unit
            title.innerText = 'Edit Goal'; btn.innerText = 'Save';
        }
    } else {
        document.getElementById('g-id').value = '';
        document.getElementById('g-name').value = '';
        document.getElementById('g-color').value = type === 'meditation' ? '#a78bfa' : '#818cf8';
        document.getElementById('g-lifetime-target').value = 1000;
        document.getElementById('g-daily-target').value = 100;
        document.getElementById('g-unit').value = 'time'; // Mặc định
        title.innerText = type === 'meditation' ? 'New Goal' : 'New Goal'; btn.innerText = 'Create';
    }
    
    this.updateGoalHints(); // Cập nhật chữ
    modal.style.display = 'flex'; 
}
            closeModal() { document.getElementById('goal-modal').style.display = 'none'; }
            
                        renderCalendar() {
                const grid = document.getElementById('calendar-grid');
                grid.innerHTML = '';
                const y = this.currentMonth.getFullYear(); const m = this.currentMonth.getMonth();
                document.getElementById('cal-month-year').innerText = new Date(y, m).toLocaleString('en-GB', { month: 'long', year: 'numeric' });

                const headerDiv = document.createElement('div');
                headerDiv.className = 'calendar-header';
                ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].forEach(d => {
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

            sourceDisplay.innerText = `Dhammapada ${randomIndex + 1}`;
            sourceDisplay.style.opacity = '0.7'; 
        }

        display.setAttribute('data-loaded', 'true');

        display.style.opacity = '1';
    }, 200); 
}
switchDayChart(mode) {
    this.dayChartMode = mode;

    const btnTime = document.getElementById('btn-modal-time');
    const btnMind = document.getElementById('btn-modal-mind');
    const btnCount = document.getElementById('btn-modal-count');
    
    if (btnTime) btnTime.className = 'btn btn-secondary';
    if (btnMind) btnMind.className = 'btn btn-secondary';
    if (btnCount) btnCount.className = 'btn btn-secondary';

    if (mode === 'time' && btnTime) {
        btnTime.className = 'btn';
    } else if (mode === 'mindfulness' && btnMind) {
        btnMind.className = 'btn';
    } else if (mode === 'count' && btnCount) {
        btnCount.className = 'btn';
    }

    if (this.currentViewDate) {
        this.renderDayChartOnly(this.currentViewDate);
    }
}
openDayStats(dateStr) {
    this.currentViewDate = dateStr;
    const modal = document.getElementById('day-details-modal');
    document.getElementById('day-modal-title').innerText = new Date(dateStr).toLocaleDateString('en-GB', {weekday: 'long', day: 'numeric', month: 'numeric'});

    this.switchDayChart('time'); 

    const dayLogs = this.data.logs.filter(l => l.date === dateStr).sort((a,b) => b.timestamp - a.timestamp);
    const listContainer = document.getElementById('day-session-list');
    listContainer.innerHTML = dayLogs.length ? '' : '<p class="empty-state">No Activities.</p>';
    
    const ul = document.createElement('ul'); 
    ul.style.listStyle = 'none';
    
    dayLogs.forEach(log => {
        const goal = this.data.goals.find(g => g.id === log.goalId);
		const isMeditation = goal && goal.type === 'meditation'; // BỔ SUNG KHAI BÁO NÀY ĐỂ FIX LỖI
        const li = document.createElement('li');
        li.style.cssText = 'padding: 8px 0; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; font-size: 13px; align-items:center;';

        let graphBtnHtml = '';
        if (isMeditation && log.touches && log.touches.length > 0) {
            graphBtnHtml = `<button class="btn-icon" style="background:transparent; color:var(--zen); height:24px; width:24px; margin-right:5px; cursor:pointer;" onclick="app.showSessionGraph('${log.timestamp}')"><i class="fas fa-chart-area" style="font-size:12px;"></i></button>`;
        }

        const satiCount = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        const satiInfo = satiCount > 0 ? `<span style="color: var(--zen); font-size: 11px; margin-left: 5px; font-weight:bold;">(${satiCount} Mindfulness)</span>` : '';
const unitText = (!isMeditation && goal && goal.unit === 'count') ? ' points' : 'm';
        const leftSide = `<div>
                           <span style="font-weight:600; color:${goal?goal.color:'#ccc'}">${goal?goal.name:'Deleted'}</span>
                           <span style="margin-left:5px;">${log.minutes}${unitText}</span>
                           ${satiInfo}
                         </div>`;
        
        const rightSide = `<div style="display:flex; align-items:center;">
                               ${graphBtnHtml}
                               <div style="font-size: 11px; color: var(--text-light); width:35px; text-align:right;">
                                   ${new Date(log.timestamp).toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})}
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
    const mode = this.dayChartMode;
    
    let unitLabel = 'Minutes';
    if (mode === 'mindfulness') unitLabel = 'Mindfulness';
    else if (mode === 'count') unitLabel = 'points';

    const dayLogs = this.data.logs.filter(l => l.date === dateStr);
    const goalStats = {};

    dayLogs.forEach(log => {
        const goal = this.data.goals.find(g => g.id === log.goalId);
        
        const isCountGoal = goal && goal.type !== 'meditation' && goal.unit === 'count';
        const isMeditationGoal = goal && goal.type === 'meditation';
        const isTimeGoal = goal && goal.type !== 'meditation' && goal.unit !== 'count';

        let val = 0;
        
        // Phân loại dữ liệu theo Tab đang chọn
        if (mode === 'mindfulness') {
            if (!isMeditationGoal) return; 
            val = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);
        } else if (mode === 'count') {
            if (!isCountGoal) return;
            val = log.minutes; // Với mục tiêu số lượng, dữ liệu nằm ở trường minutes
        } else if (mode === 'time') {
            if (!isTimeGoal && !isMeditationGoal) return; // Thiền cũng có thời gian
            val = log.minutes;
        }

        if (val === 0) return;

        if(!goalStats[log.goalId]) {
            goalStats[log.goalId] = { 
                name: goal ? goal.name : 'Deleted', 
                color: goal ? goal.color : '#ccc', 
                value: 0 
            };
        }
        goalStats[log.goalId].value += val;
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
			 let subText = "";
            if (mode === 'time') {
                if (total < 60) {
                    mainText = total;
                    subText = "minutes";
                } else {
                    mainText = (total / 60).toFixed(1);
                    subText = "hours";
                }
            } else {
                mainText = total.toLocaleString(); 
            } 

		
			
            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;
            const chartHeight = bottom - top;
            const fontSizeMain = chartHeight / 10;
            const fontSizeSub = chartHeight / 20;

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            if (mode !== 'time') {
                ctx.font = `bold ${fontSizeMain}px sans-serif`;
                ctx.fillStyle = "#FFFFFF"; 
                ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));

                ctx.font = `normal ${fontSizeSub}px sans-serif`;
                ctx.fillStyle = "#9ca3af"; 
                ctx.fillText(unitLabel, centerX, centerY + (fontSizeMain * 0.65));
           } else {
                ctx.font = `bold ${fontSizeMain}px sans-serif`;
                ctx.fillStyle = "#FFFFFF"; 
                ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));

                ctx.font = `normal ${fontSizeSub}px sans-serif`;
                ctx.fillStyle = "#9ca3af"; 
                ctx.fillText(subText, centerX, centerY + (fontSizeMain * 0.65)); 
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
            legend: { position: 'right', labels: { color: '#9ca3af', font: {size: 11} } },
            title: { display: dataValues.length === 0, text: 'No data available', position: 'bottom', color: '#6b7280' },
            tooltip: {
                backgroundColor: '#121821', titleColor: '#f3f4f6', bodyColor: '#f3f4f6',
                borderColor: '#374151', borderWidth: 1, padding: 10, z: 999,
                callbacks: {
                    label: function(context) {
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
                        const percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;
                        return ` ${value} ${unitLabel} (${percentage}%)`;
                    }
                }
            }
        } 
    },
        plugins: [centerTextPlugin]
    });
}
            closeDayModal() { document.getElementById('day-details-modal').style.display = 'none'; }
setReportMode(mode) {
    this.reportMode = mode;

    const btnTime = document.getElementById('btn-rep-time');
    const btnMind = document.getElementById('btn-rep-mind');
    const btnCount = document.getElementById('btn-rep-count');
    
    // Đặt lại tất cả thành secondary
    if (btnTime) btnTime.className = 'btn btn-secondary';
    if (btnMind) btnMind.className = 'btn btn-secondary';
    if (btnCount) btnCount.className = 'btn btn-secondary';

    // Làm nổi bật nút được chọn
    if (mode === 'time' && btnTime) {
        btnTime.className = 'btn'; 
    } else if (mode === 'mindfulness' && btnMind) {
        btnMind.className = 'btn'; 
    } else if (mode === 'count' && btnCount) {
        btnCount.className = 'btn';
    }

    this.renderReports();
}

renderReports(resetDates = false) {
    if (!document.getElementById('weeklyChart')) return;

   const isMindfulness = this.reportMode === 'mindfulness';
const isCount = this.reportMode === 'count';

let unitLabel = 'Minutes';
let breakdownTitle = 'Time Chart';

if (isMindfulness) {
    unitLabel = 'logs';
    breakdownTitle = 'Mindfulness Chart';
} else if (isCount) {
    unitLabel = 'points';
    breakdownTitle = 'Cultivation Chart';
}

document.getElementById('breakdown-title').innerText = breakdownTitle;

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
    document.getElementById('weekly-report-title').innerText = `Week (${this.currentWeekStart.toLocaleDateString('en-GB', {month:'numeric', day:'numeric'})} - ${weekEndDisp.toLocaleDateString('en-GB', {month:'numeric', day:'numeric'})})`;

    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({ length: new Date(mYear, mMonth + 1, 0).getDate() }, (_, i) => i + 1);
    document.getElementById('monthly-report-title').innerText = `Month ${new Date(mYear, mMonth).toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' })}`;

    // --- CHUẨN BỊ DỮ LIỆU ---
    let datasets = [];

    if (isMindfulness) {
        // === CHẾ ĐỘ CHÁNH NIỆM: GỘP TOÀN BỘ GOAL, CHIA THEO LOẠI TÂM ===
        // Tạo 2 nhóm dữ liệu cố định
        const mindData = {
            id: 'mindfulness', name: 'Mindfulness', color: '#34d399', // Xanh ngọc
            breakdownTotal: 0, weekly: new Array(7).fill(0), monthly: new Array(monthlyLabels.length).fill(0)
        };
        const awareData = {
            id: 'awareness', name: 'Alertness', color: '#818cf8', // Tím
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
    // === CHẾ ĐỘ THỜI GIAN / SỐ LƯỢNG: CHIA THEO MỤC TIÊU (GOAL) ===
    const goalDatasets = {};
    this.data.goals.forEach(goal => {
        const isGoalCount = goal.type !== 'meditation' && goal.unit === 'count';
        
        // UPDATE: Allow 'meditation' type OR standard goals that are not 'count' unit
        const isGoalTime = goal.type === 'meditation' || goal.unit !== 'count';

        // Lọc hiển thị mục tiêu theo tab đang chọn (Số lượng HOẶC Thời gian)
        if ((this.reportMode === 'count' && isGoalCount) || 
            (this.reportMode === 'time' && isGoalTime)) {
            goalDatasets[goal.id] = {
                name: goal.name, color: goal.color,
                breakdownTotal: 0, weekly: new Array(7).fill(0), monthly: new Array(monthlyLabels.length).fill(0)
            };
        }
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

    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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
                        if (unitLabel === 'Minutes') {
                            if (value < 60) formattedValue = value + " minutes";
                            else formattedValue = (value / 60).toFixed(1) + " hours";
                        } else {
                            formattedValue = value.toLocaleString() + " " + unitLabel;
                        }
                        
                        return `${label}: ${formattedValue} (${percentage}%)`;
                    }
                }
            }
        }
    };

    const ctxBreakdown = document.getElementById('goalBreakdownChart').getContext('2d');
    if (this.charts.breakdown) this.charts.breakdown.destroy();

    const centerTextPlugin = {
        id: 'centerText',
        afterDatasetsDraw: function(chart) {
            const { ctx, chartArea: { top, bottom, left, right } } = chart;
            ctx.save();
            
            // 1. Calculate Total
            let total = 0;
            const data = chart.data.datasets[0].data;
            if (data) data.forEach(val => total += val);

            // 2. Determine Text Content
            let mainText = "";
            let subText = "";

            if (isMindfulness) {
                // Mindfulness: Number + "Tổng"
                mainText = total.toLocaleString();
                subText = "Total";
            } 
            else if (typeof unitLabel !== 'undefined' && unitLabel === 'Minutes') { 
                // Time Mode
                if (total < 60) {
                    mainText = total;
                    subText = "minutes";
                } else {
                    mainText = (total / 60).toFixed(1);
                    subText = "hours";
                }
            } 
            else { 
                // Count Mode (Default fallback)
                mainText = total.toLocaleString();
                subText = "points";
            }

            // 3. Layout & Styling
            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;
            const chartHeight = bottom - top;
            
            // Dynamic Font Sizes
            const fontSizeMain = chartHeight / 13; 
            const fontSizeSub = chartHeight / 22;

            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Draw Main Number (Centered, slightly up)
            ctx.font = `bold ${fontSizeMain}px sans-serif`;
            ctx.fillStyle = "#FFFFFF";
            ctx.fillText(mainText, centerX, centerY - (fontSizeMain * 0.15));

            // Draw Sub Label (Centered, below main number)
            ctx.font = `normal ${fontSizeSub}px sans-serif`;
            ctx.fillStyle = "#9ca3af";
            ctx.fillText(subText, centerX, centerY + (fontSizeMain * 0.75));

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
                title: { display: activeDataForDoughnut.length === 0, text: 'No data available', position: 'bottom', color: '#6b7280' },
                tooltip: {
                    backgroundColor: '#121821', titleColor: '#f3f4f6', bodyColor: '#f3f4f6', borderColor: '#374151', borderWidth: 1, padding: 10, z: 999,
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            let formattedValue = "";
                            const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(0) : 0;
                            if (unitLabel === 'Minutes') {
                                if (value < 60) formattedValue = value + " minutes";
                                else formattedValue = (value / 60).toFixed(1) + " hours";
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

   
    }


 renderDensityChart() {
    const ctxDensity = document.getElementById('reportDensityChart');
    if (!ctxDensity) return;

    // Recalculate Month Data locally since we are outside renderReports
    const mYear = this.currentMonth.getFullYear();
    const mMonth = this.currentMonth.getMonth();
    const monthlyLabels = Array.from({ length: new Date(mYear, mMonth + 1, 0).getDate() }, (_, i) => i + 1);

    // 1. Update the Title
    const densityTitle = document.getElementById('density-month-title');
    if (densityTitle) {
        densityTitle.innerText = `Month ${new Date(mYear, mMonth).toLocaleDateString('en-GB', { month: 'numeric', year: 'numeric' })}`;
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
                            label: 'Mindfulness/min',
                            data: densityData,
                            borderColor: '#34d399', // Màu xanh (Emerald) cho Chánh niệm
                            backgroundColor: 'rgba(52, 211, 153, 0.1)',
                            borderWidth: 1.5,
                            fill: true,
                            tension: 0.3,
                            yAxisID: 'y', // Gắn vào trục trái
                        },
                        {
                            label: 'Alertness/min', // Dataset MỚI
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
    }

changeReportWeek(dir) { this.currentWeekStart.setDate(this.currentWeekStart.getDate() + (dir * 7)); this.renderReports(); }
            changeReportMonth(dir) { this.currentMonth.setMonth(this.currentMonth.getMonth() + dir); this.renderReports();this.renderDensityChart(); }
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
                this.showToast(`💎 Unlocked Pāramī: ${badge.title}`, true);
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
        this.showToast(`💎 Unlocked Pāramī: ${badge.title}`);
        this.save();
        this.renderAchievementsUI();
    }
}
renderAchievementsUI() {
    const container = document.getElementById('achievement-list');
    if (!container) return;
    container.innerHTML = '';

    // [FIX] Sorting Logic: Newest Unlocked First
    // 1. Create a copy and reverse it so the most recently added IDs come first
    const unlockedIds = [...this.data.achievements].reverse();
    
    // 2. Map IDs to badge objects
    const unlockedBadges = unlockedIds
        .map(id => BADGES.find(b => b.id === id))
        .filter(b => b); // Safety check in case ID doesn't exist in constant

    // 3. Get locked badges (filter out those already in unlockedIds)
    // Note: We check against the original data.achievements to ensure we catch everything
    const lockedBadges = BADGES.filter(b => !this.data.achievements.includes(b.id));

    // 4. Merge: Newest Unlocked -> Oldest Unlocked -> Locked
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
                <i class="${ 
    ['fas', 'fab', 'far'].some(prefix => badge.icon.includes(prefix)) 
    ? badge.icon 
    : 'fas ' + badge.icon 
}"></i>
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 600; color: ${textColor}; font-size: 14px; display: flex; justify-content: space-between;">
                    ${badge.title}
                    <span style="font-size: 10px; color: ${iconColor}; text-transform: uppercase; letter-spacing: 1px; font-weight:bold;">
                        ${isUnlocked ? 'Achieved' : ''}
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

    // [FIX] Sorting Logic: Newest Unlocked First
    // 1. Reverse the order of unlocked IDs
    const unlockedIds = [...this.data.achievements].reverse();
    
    // 2. Map to badge objects
    const unlockedBadges = unlockedIds
        .map(id => BADGES.find(b => b.id === id))
        .filter(b => b); 
        
    // 3. Get locked badges
    const lockedBadges = BADGES.filter(b => !this.data.achievements.includes(b.id));
    
    // 4. Merge: Newest -> Oldest -> Locked
    const sortedBadges = [...unlockedBadges, ...lockedBadges];

    const modalHtml = `
        <div id="badge-picker-modal" class="modal" style="display:flex; z-index: 3000; align-items: center; justify-content: center;">
            <div class="modal-content" style="max-width: 550px; width: 95%; max-height: 85vh; display: flex; flex-direction: column; padding: 0; border-radius: 16px;">
                
                <div style="padding: 15px 20px; border-bottom: 1px solid var(--border); position: relative; display: flex; justify-content: center; align-items: center; background: var(--surface); border-radius: 16px 16px 0 0;">
                    <h3 style="margin: 0; font-size: 18px;"><i class="fas fa-wreath-laurel"></i> Select Pāramī</h3>
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
                                    <i class="${ 
    ['fas', 'fab', 'far'].some(prefix => badge.icon.includes(prefix)) 
    ? badge.icon 
    : 'fas ' + badge.icon 
}"></i>
                                    </div>
                                    <div style="font-size: 11px; font-weight: 600; color: var(--text); line-height: 1.3;">${badge.title}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div style="padding: 15px 20px; border-top: 1px solid var(--border); display: flex; justify-content: flex-end; background: var(--surface); border-radius: 0 0 16px 16px;">
                    <button class="btn" onclick="app.closeBadgePicker()">Save & Close</button>
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
                <div style="font-size:10px; opacity:0.6; font-style:italic;">🔒 Not Unlocked</div>
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
            this.showToast(`Active Pāramī set to: ${this.lastSelectedBadgeTitle}`);
            this.lastSelectedBadgeTitle = null; // Reset
        }
    }
}

// Update your refreshUI or init logic to load the saved badge
// FIND THIS FUNCTION IN nh.js
loadActiveBadge() {
    const container = document.getElementById('current-active-badge');
    if (!container) return;

    if (this.data.activeBadge) {
        const badge = BADGES.find(b => b.id === this.data.activeBadge);
        if (badge) {
            // Get color or fallback
            const color = badge.color || '#cd7f32'; 

            // Render Icon
            container.innerHTML = `<i class="${ 
    ['fas', 'fab', 'far'].some(prefix => badge.icon.includes(prefix)) 
    ? badge.icon 
    : 'fas ' + badge.icon 
}"></i>`;
            
            // --- UPDATED STYLING FOR GLOW EFFECT ---
            
            // 1. Keep the Icon White (Max brightness)
            container.style.color = '#fcfcfc'; 
            
            // 2. Add a text-shadow so the white icon glows with the badge color
            container.style.textShadow = `0 0 5px ${color}`;

            // 3. Keep the colored border
            container.style.borderColor = color;

            // 4. Increase background opacity slightly for richness
            container.style.backgroundColor = this.hexToRgba(color, 0.2); 
            
            // 5. Increase box-shadow radius back to 15px (matching default) or higher
            container.style.boxShadow = `0 0 15px ${this.hexToRgba(color, 0.6)}`;
            
            // ---------------------------------------
            
            // Remove old static class if it exists
            container.classList.remove('silver');
        }
    } else {
        // Default state (No badge selected) - Keep as is
        container.innerHTML = `<i class="fas fa-gem"></i>`;
        
        // Explicitly set default styles to match CSS .badge-display
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
            iconEl.innerHTML = `<i class="${ 
    ['fas', 'fab', 'far'].some(prefix => badge.icon.includes(prefix)) 
    ? badge.icon 
    : 'fas ' + badge.icon 
}"></i>`;
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
    iconEl.innerHTML = `<i class="fas fa-wreath-laurel"></i>`;
    iconEl.style.color = 'var(--text-light)';
    iconEl.classList.remove('altar-floating');
    
    titleEl.innerText = 'Select Pāramī';
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
                    'dashboard': 'Journal',
                    'calendar': 'Courses',
                    'reports': 'Activities',
					'analytics': 'Analytics',
					'pro': 'Exploration',
					'achievements': 'Pāramī'
                };
                
                document.getElementById('page-title').innerText = titles[viewName] || 'Journal';
                if (viewName === 'reports') { this.renderReports(); }
                if (viewName === 'calendar') this.renderRoadmap();
				if (viewName === 'analytics') this.renderAnalytics();
				if (viewName === 'pro') this.renderProAnalytics();
				if (viewName === 'achievements') {
        this.renderAchievementsUI();
        this.renderBadgeAltar(); 
    }
            }
            
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
                title: 'Meditator Journal Backup',
                text: 'Backup data file.'
            })
            .then(() => this.showToast('Shared successfully!'))
            .catch((error) => {

                if (error.name !== 'AbortError') this.copyToClipboard(dataStr);
            });
            return;
        } 
    } 

    this.copyToClipboard(dataStr);
}
showInteractionInfo() {
    const msg = "• MINDFULNESS: Maintaining awareness of the chosen object and noting each occurrence. E.g., one tap per breath cycle.\n\n" +
                "• ALERTNESS: Recognizing the state of mind, detecting distractions (mind-wandering) & returning to the object.\n Mindfulness time for a single moment of alertness = hold duration";
    alert(msg);
}
copyToClipboard(text) {

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Data copied to clipboard!');
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
            this.showToast('Backup data copied!');
        } else {
            this.showToast('Copy failed. Please use the Backup button to download the file.');
        }
    } catch (err) {
        this.showToast('Error copying data.');
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
            this.showToast('Saving file to Download...');
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
        this.showToast('File downloaded successfully!');
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
                throw new Error("Invalid file structure (Missing goals/logs).");
            }

            if (confirm(`Found ${json.goals.length} goals and ${json.logs.length} logs.\nAre you sure you want to overwrite current data?`)) {
                // Save to IndexedDB
                await dbHelper.saveAll(json);
                alert("Restore success. The app will reload.");
                location.reload(); 
            }
        } catch (err) {
            alert("Restore error: " + err.message);
        }
    }
            resetApp() {
    if (confirm('Delete ALL data & associated history? This action cannot be undone.')) {
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

    if (confirm('Permanently delete this session from history?')) {

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
            this.showToast('Session deleted!');
        }).catch(err => console.error(err));
        
        this.save();
        this.save();
        this.renderGoals();      
        this.renderCalendar();   
        this.renderReports();    
        this.updateStats();      
        
        this.closeSessionModal();
        this.showToast('Session deleted!');
    }
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
const minLabel = document.getElementById('s-minutes-label');
if (minLabel) {
    if (goal && goal.type === 'standard' && goal.unit === 'count') {
        minLabel.innerText = 'Points';
    } else {
        minLabel.innerText = 'Duration (Minutes)';
    }
}

    const mindGroup = document.getElementById('s-mindfulness-group');
    const mindInput = document.getElementById('s-mindfulness');
    const thresholdInput = document.getElementById('s-threshold');
    
    if (goal && goal.type === 'meditation') {
        mindGroup.style.display = 'block';
        
        // --- UPDATED: Clear any previous max constraints first ---
        mindInput.removeAttribute('max');
        mindInput.removeAttribute('title');
        
        let currentCount = 0;
        let currentThreshold = 6; 

        if (logId) {
            const log = this.data.logs.find(l => l.timestamp == logId);
            if (log) {
                currentCount = log.count !== undefined ? log.count : (log.touches ? log.touches.length : 0);

                if(log.threshold) currentThreshold = log.threshold;
                
                // --- UPDATED: Constrain max value based on actual touches ---
                if (log.touches && log.touches.length > 0) {
                    mindInput.max = log.touches.length;
                    mindInput.title = `Cannot exceed actual touch count (${log.touches.length})`;
                }
            }
        }
        mindInput.value = currentCount;
        thresholdInput.value = currentThreshold;
    } else {
        mindGroup.style.display = 'none';
        mindInput.value = 0;
        mindInput.removeAttribute('max'); // Ensure no limit for non-meditation goals if re-used
    }

    let notes = ''; 
    if(logId) { 
        const log = this.data.logs.find(l => l.timestamp == logId); 
        if(log && log.notes) notes = log.notes; 
    }
    document.getElementById('s-notes').value = notes;
    this.renderQuickTags('session-tags', 's-notes');
    document.getElementById('session-title').innerText = logId ? 'Update log' : 'Add log';
}
            closeSessionModal() { document.getElementById('session-modal').style.display = 'none'; }
           logSessionConfirm(e) {
    e.preventDefault();
    const goalId = document.getElementById('s-goal-id').value;
    const logId = document.getElementById('s-log-id').value;
    const dateTimeStr = document.getElementById('s-date').value;
    const minutes = parseInt(document.getElementById('s-minutes').value);
    
    const mindfulness = parseInt(document.getElementById('s-mindfulness').value) || 0;
    const threshold = parseInt(document.getElementById('s-threshold').value) || 10; 
    let notes = document.getElementById('s-notes').value;
    
    if (minutes <= 0) return;
    
    const goal = this.data.goals.find(g => g.id === goalId);
    
    if (goal && goal.type === 'meditation') {
        let cleanNotes = notes.replace(/^Mindfulness: \d+(\.\s*)?/, '').trim();
        if (mindfulness > 0) {
            notes = `Mindfulness: ${mindfulness}. ${cleanNotes}`;
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
                    
                if (Number(logId) !== timestamp) {
                    dbHelper.deleteLog(logId);
                }
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
    this.showToast(logId ? 'Session Updated!' : 'Session Logged!');
	if (newBadges.length > 0) {
        setTimeout(() => {
            newBadges.forEach((title, index) => {
                setTimeout(() => {
                    this.showToast(`💎 Unlocked Pāramī: ${title}`, true);
                }, index * 3500);
            });
        }, 1200);
    }
}
                      deleteGoal(id) {
    if(confirm('Delete this goal and ALL associated history? This action cannot be undone.')) {
        
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
                    medSettings: this.data.medSettings,
					activeBadge: this.data.activeBadge,
                    courseProgress: this.data.courseProgress
                }).catch(e => console.log("Meta save update")); 

                // 3. Update UI
                this.renderGoals(); 
                this.renderReports(); 
                this.renderCalendar(); 
                
                this.showToast('Goal and history deleted!');
            })
            .catch(err => {
                console.error(err);
                this.showToast('Error!');
            });
    }
}
            renderDate() {
                 document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }
        }

        const app = new GoalTracker();