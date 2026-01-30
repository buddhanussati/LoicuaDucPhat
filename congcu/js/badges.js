const BADGES = [
    // --- Log Counts (Effort/Viriya) ---
    { id: 'log_1', icon: 'fas fa-fingerprint', color: '#a29bfe', title: 'Vô Ngã', desc: 'Hoàn thành thời thiền đầu tiên', condition: (data) => data.logs.length >= 1 },
    { id: 'log_10', icon: 'fas fa-seedling', color: '#00b894', title: 'Duyên Khởi', desc: 'Hoàn thành 10 thời thiền', condition: (data) => data.logs.length >= 10 },
    { id: 'log_25', icon: 'fab fa-pagelines', color: '#55efc4', title: 'Thiện Căn', desc: 'Hoàn thành 25 thời thiền', condition: (data) => data.logs.length >= 25 },
    { id: 'log_50', icon: 'fas fa-leaf', color: '#fdcb6e', title: 'Thiện Pháp', desc: 'Hoàn thành 50 thời thiền', condition: (data) => data.logs.length >= 50 },
    { id: 'log_100', icon: 'fab fa-envira', color: '#00cec9', title: 'Thiện Nghiệp', desc: 'Hoàn thành 100 thời thiền', condition: (data) => data.logs.length >= 100 },
    { id: 'log_150', icon: 'fas fa-cloud-sun', color: '#ff7675', title: 'Ly Cấu', desc: 'Hoàn thành 150 thời thiền', condition: (data) => data.logs.length >= 150 },
    { id: 'log_200', icon: 'fas fa-rainbow', color: '#e056fd', title: 'Thiện Thú', desc: 'Hoàn thành 200 thời thiền', condition: (data) => data.logs.length >= 200 },
    { id: 'log_250', icon: 'fas fa-mountain', color: '#48dbfb', title: 'Núi Tuyết', desc: 'Hoàn thành 250 thời thiền', condition: (data) => data.logs.length >= 250 },
    { id: 'log_300', icon: 'fas fa-gopuram', color: '#fd79a8', title: 'Hướng Thượng', desc: 'Hoàn thành 300 thời thiền', condition: (data) => data.logs.length >= 300 },
    { id: 'log_350', icon: 'fas fa-vihara', color: '#ff9f43', title: 'An Trú', desc: 'Hoàn thành 350 thời thiền', condition: (data) => data.logs.length >= 350 },
    { id: 'log_400', icon: 'fas fa-archway', color: '#fab1a0', title: 'Cửa Bất Tử', desc: 'Hoàn thành 400 thời thiền', condition: (data) => data.logs.length >= 400 },
    { id: 'log_450', icon: 'fas fa-kaaba', color: '#74b9ff', title: 'Thạch Trụ', desc: 'Hoàn thành 450 thời thiền', condition: (data) => data.logs.length >= 450 },
    { id: 'log_500', icon: 'fas fa-monument', color: '#ffbe76', title: 'Bảo Tháp', desc: 'Hoàn thành 500 thời thiền', condition: (data) => data.logs.length >= 500 },
    { id: 'log_600', icon: 'fab fa-fort-awesome', color: '#a29bfe', title: 'Pháp Thành', desc: 'Hoàn thành 600 thời thiền', condition: (data) => data.logs.length >= 600 },
    { id: 'log_700', icon: 'fa-dungeon', color: '#6ab04c', title: 'Độc Cư', desc: 'Hoàn thành 700 thời thiền', condition: (data) => data.logs.length >= 700 },
    { id: 'log_800', icon: 'fab fa-d-and-d', color: '#eb4d4b', title: 'Long Tượng', desc: 'Hoàn thành 800 thời thiền', condition: (data) => data.logs.length >= 800 },
    { id: 'log_1000', icon: 'fas fa-dharmachakra', color: '#f9ca24', title: 'Chuyển Pháp Luân', desc: 'Hoàn thành 1000 thời thiền', condition: (data) => data.logs.length >= 1000 },

    { id: 'streak_3', icon: 'fas fa-shoe-prints', color: '#bdc3c7', title: 'Kinh Hành', desc: 'Hành trì 3 ngày liên tục', condition: (data) => data.streak >= 3 },
    { id: 'streak_5', icon: 'fas fa-bridge-water', color: '#48dbfb', title: 'Thánh Cầu', desc: 'Hành trì 5 ngày liên tục', condition: (data) => data.streak >= 5 },
    { id: 'streak_7', icon: 'fas fa-clover', color: '#2ecc71', title: 'Phước Báu', desc: 'Hành trì 7 ngày liên tục', condition: (data) => data.streak >= 7 },
    { id: 'streak_14', icon: 'fas fa-certificate', color: '#f1c40f', title: 'Phạm Hạnh', desc: 'Hành trì 14 ngày liên tục', condition: (data) => data.streak >= 14 },
    { id: 'streak_21', icon: 'fas fa-book-open-reader', color: '#e17055', title: 'Đa Văn', desc: 'Hành trì 21 ngày liên tục', condition: (data) => data.streak >= 21 },
    { id: 'streak_30', icon: 'fab fa-sketch', color: '#ff9f43', title: 'Như Ý Túc', desc: 'Hành trì 30 ngày liên tục', condition: (data) => data.streak >= 30 },
    { id: 'streak_49', icon: 'fab fa-jira', color: '#54a0ff', title: 'Tứ Niệm Xứ', desc: 'Hành trì 49 ngày liên tục', condition: (data) => data.streak >= 49 },
    { id: 'streak_60', icon: 'fas fa-link', color: '#a29bfe', title: 'Khổ Đế', desc: 'Hành trì 60 ngày liên tục', condition: (data) => data.streak >= 60 },
    { id: 'streak_90', icon: 'fab fa-brave', color: '#ff6b6b', title: 'Đại Hùng', desc: 'Hành trì 90 ngày liên tục', condition: (data) => data.streak >= 90 },
    { id: 'streak_100', icon: 'fab fa-brave-reverse', color: '#d63031', title: 'Sư Tử Hống', desc: 'Hành trì 100 ngày liên tục', condition: (data) => data.streak >= 100 },
    { id: 'streak_180', icon: 'fab fa-wolf-pack-battalion', color: '#81ecec', title: 'Ngưu Vương', desc: 'Hành trì 180 ngày liên tục', condition: (data) => data.streak >= 180 },
    { id: 'streak_365', icon: 'fas fa-infinity', color: '#0984e3', title: 'Vô Thủy', desc: 'Hành trì 365 ngày liên tục', condition: (data) => data.streak >= 365 },

 { id: 'time_1h', icon: 'fas fa-hourglass-half', color: '#f1c40f', title: 'Hiện Tại', desc: 'Tích lũy 1 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 60 },
    { id: 'time_5h', icon: 'fas fa-circle-notch', color: '#ffbe76', title: 'Không Tánh', desc: 'Tích lũy 5 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 300 },
    { id: 'time_10h', icon: 'fas fa-record-vinyl', color: '#badc58', title: 'Chánh Niệm', desc: 'Tích lũy 10 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 600 },
    { id: 'time_20h', icon: 'fab fa-files-pinwheel', color: '#686de0', title: 'Chánh Nghiệp', desc: 'Tích lũy 20 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 1200 },
    { id: 'time_30h', icon: 'fas fa-snowflake', color: '#48dbfb', title: 'Tịch Tịnh', desc: 'Tích lũy 30 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 1800 },
    { id: 'time_50h', icon: 'fas fa-water', color: '#0abde3', title: 'Nhập Dòng', desc: 'Tích lũy 50 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 3000 },
    { id: 'time_80h', icon: 'fas fa-wind', color: '#c7ecee', title: 'Hơi Thở', desc: 'Tích lũy 80 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 4800 },
	{ id: 'time_100h', icon: 'fas fa-fire-burner', color: '#ee5253', title: 'Nhiệt Thành', desc: 'Tích lũy 100 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 6000 },
	    { id: 'time_250h', icon: 'fas fa-burn', color: '#f368e0', title: 'Nhiệt Tâm', desc: 'Tích lũy 150 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 9000 },
    { id: 'time_150h', icon: 'fas fa-fire', color: '#ff6b6b', title: 'Lửa Tuệ', desc: 'Tích lũy 200 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 12000 },
    { id: 'time_200h', icon: 'fas fa-fire-flame-curved', color: '#ff9f43', title: 'Lửa Thiền', desc: 'Tích lũy 250 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 15000 },
    { id: 'time_300h', icon: 'fas fa-bolt', color: '#feca57', title: 'Tuệ Căn', desc: 'Tích lũy 300 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 18000 },
    { id: 'time_400h', icon: 'fas fa-bolt-lightning', color: '#ff9ff3', title: 'Tuệ Lực', desc: 'Tích lũy 400 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 24000 },
    { id: 'time_500h', icon: 'fas fa-sun', color: '#ffaf40', title: 'Minh Sát', desc: 'Tích lũy 500 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 30000 },
    { id: 'time_800h', icon: 'fas fa-moon-cloud', color: '#dfe6e9', title: 'Nhất Dạ Hiền', desc: 'Tích lũy 800 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 48000 },
    { id: 'time_1000h', icon: 'fab fa-skyatlas', color: '#74b9ff', title: 'Hư Không', desc: 'Tích lũy 1000 giờ tu tập', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 60000 },

    { id: 'sit_15', icon: 'fab fa-deskpro', color: '#48dbfb', title: 'Voi Chúa', desc: 'Thời thiền ≥ 15 phút', condition: (data) => data.logs.some(l => l.minutes >= 15) },
    { id: 'sit_30', icon: 'fab fa-medapps', color: '#feca57', title: 'Ngọn Đèn', desc: 'Thời thiền ≥ 30 phút', condition: (data) => data.logs.some(l => l.minutes >= 30) },
    { id: 'sit_45', icon: 'fas fa-hand-holding-hand', color: '#cd84f1', title: 'Từ Bi', desc: 'Thời thiền ≥ 45 phút', condition: (data) => data.logs.some(l => l.minutes >= 45) },
    { id: 'sit_60', icon: 'fas fa-gem', color: '#7d5fff', title: 'Định Tĩnh', desc: 'Thời thiền ≥ 60 phút', condition: (data) => data.logs.some(l => l.minutes >= 60) },
    { id: 'sit_90', icon: 'fab fa-ethereum', color: '#dfe6e9', title: 'Hỷ Tâm', desc: 'Thời thiền ≥ 90 phút', condition: (data) => data.logs.some(l => l.minutes >= 90) },
    { id: 'sit_120', icon: 'fas fa-anchor', color: '#ff9ff3', title: 'Pháp Trụ', desc: 'Thời thiền ≥ 2 giờ', condition: (data) => data.logs.some(l => l.minutes >= 120) },
    { id: 'sit_180', icon: 'fas fa-balance-scale', color: '#00d2d3', title: 'Buông Xả', desc: 'Thời thiền ≥ 3 giờ', condition: (data) => data.logs.some(l => l.minutes >= 180) },
    { id: 'sit_240', icon: 'fab fa-jedi-order', color: '#d980fa', title: 'Định Lực', desc: 'Thời thiền ≥ 4 giờ', condition: (data) => data.logs.some(l => l.minutes >= 240) },

   
    { id: 'mind_100', icon: 'fas fa-bullseye', color: '#ff7675', title: 'Nhất Tâm', desc: 'Ghi nhận được 100 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 100 },
    { id: 'mind_500', icon: 'fas fa-circle-half-stroke', color: '#dfe6e9', title: 'Thanh Tịnh', desc: 'Ghi nhận được 500 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 500 },
    { id: 'mind_1k', icon: 'fab fa-superpowers', color: '#f1c40f', title: 'Biết Đủ', desc: 'Ghi nhận được 1.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 1000 },
    { id: 'mind_2k', icon: 'fab fa-servicestack', color: '#74b9ff', title: 'Vượt Bộc Lưu', desc: 'Ghi nhận được 2.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 2000 },
    { id: 'mind_3k', icon: 'fas fa-layer-group', color: '#a29bfe', title: 'Ngũ Uẩn', desc: 'Ghi nhận được 3.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 3000 },
    { id: 'mind_4k', icon: 'fab fa-schlix', color: '#d980fa', title: 'Chánh Ngữ', desc: 'Ghi nhận được 4.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 4000 },
    { id: 'mind_5k', icon: 'fab fa-modx', color: '#81ecec', title: 'Biết Ơn', desc: 'Ghi nhận được 5.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 5000 },
    { id: 'mind_6k', icon: 'fab fa-fulcrum', color: '#55efc4', title: 'Ẩn Sĩ', desc: 'Ghi nhận được 6.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 6000 },
    { id: 'mind_7k', icon: 'fab fa-first-order', color: '#fab1a0', title: 'Sáu Xúc Xứ', desc: 'Ghi nhận được 7.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 7000 },
    { id: 'mind_8k', icon: 'fab fa-first-order-alt', color: '#e17055', title: 'Tàm Quý', desc: 'Ghi nhận được 8.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 8000 },
    { id: 'mind_10k', icon: 'fab fa-medrt', color: '#eb4d4b', title: 'Cúng Dường', desc: 'Ghi nhận được 10.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 10000 },
    { id: 'mind_15k', icon: 'fab fa-studiovinari', color: '#00cec9', title: 'Ly Dục', desc: 'Ghi nhận được 15.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 15000 },
    { id: 'mind_20k', icon: 'fab fa-connectdevelop', color: '#74b9ff', title: 'Trạch Pháp', desc: 'Ghi nhận được 20.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 20000 },
    { id: 'mind_25k', icon: 'fab fa-linktree', color: '#00b894', title: 'Vô Ưu', desc: 'Ghi nhận được 25.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 25000 },
    { id: 'mind_30k', icon: 'fas fa-hexagon-nodes', color: '#e056fd', title: 'Tuệ Quán', desc: 'Ghi nhận được 30.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 30000 },
    { id: 'mind_40k', icon: 'fab fa-slack', color: '#ff7675', title: 'Giới Hạnh', desc: 'Ghi nhận được 40.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 40000 },
    { id: 'mind_50k', icon: 'fab fa-hornbill', color: '#feca57', title: 'An Lạc', desc: 'Ghi nhận được 50.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 50000 },
    { id: 'mind_80k', icon: 'fas fa-dragon', color: '#d63031', title: 'Nhiếp Phục', desc: 'Ghi nhận được 80.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 80000 },
    { id: 'mind_100k', icon: 'fas fa-om', color: '#f9ca24', title: 'Chân Như', desc: 'Ghi nhận được 100.000 Chánh niệm', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 100000 },

    // --- DAILY MINDFULNESS (Intensity) ---
    { id: 'mindf_200', icon: 'fab fa-linode', color: '#48dbfb', title: 'Trung Đạo', desc: 'Ghi nhận ≥ 600 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 600); }},
    { id: 'mindf_400', icon: 'fab fa-shoelace', color: '#a29bfe', title: 'Kham Nhẫn', desc: 'Ghi nhận ≥ 1200 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 1200); }},
    { id: 'mindf_600', icon: 'fas fa-people-roof', color: '#f1c40f', title: 'Hoà Hợp', desc: 'Ghi nhận ≥ 2400 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 2400); }},
    { id: 'mindf_1000', icon: 'fas fa-user-shield', color: '#686de0', title: 'Tự Điều Phục', desc: 'Ghi nhận ≥ 3600 Chánh niệm trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 3600); }},

   
	

    // --- QUALITY (Qualities/Phẩm Chất) ---
    { id: 'focus_5_min', icon: 'fas fa-feather-pointed', color: '#81ecec', title: 'Khinh An', desc: 'Đạt được ≥ 5 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 5) },
    { id: 'focus_6_min', icon: 'fas fa-shield-alt', color: '#badc58', title: 'Phòng Hộ', desc: 'Đạt được ≥ 6 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 6) },
    { id: 'focus_7_min', icon: 'fas fa-bahai', color: '#ffeaa7', title: 'Thất Giác Chi', desc: 'Đạt được ≥ 7 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 7) },
    { id: 'focus_8_min', icon: 'fas fa-life-ring', color: '#fab1a0', title: 'Bát Chánh Đạo', desc: 'Đạt được ≥ 8 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 8) },
    { id: 'focus_9_min', icon: 'fab fa-debian', color: '#e17055', title: 'Nghiệp', desc: 'Đạt được ≥ 9 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 9) },
    { id: 'focus_10_min', icon: 'fas fa-hands-holding-circle', color: '#ff7675', title: 'Bố Thí', desc: 'Đạt được ≥ 10 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 10) },
    { id: 'focus_12_min', icon: 'fas fa-ranking-star', color: '#f9ca24', title: 'Diệu Pháp', desc: 'Đạt được ≥ 12 chánh niệm/phút (thời ≥ 20p)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 12) },

    // --- FOCUS SCORES (Samadhi Levels) ---
    
		
		

	
	
    { id: 'sfocus_1_5', icon: 'fab fa-free-code-camp', color: '#ff7979', title: 'Chánh Cần', desc: 'Mức chú tâm TB ≥ 1.5 trong phiên ≤ 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 1.5; }) },
    { id: 'sfocus_2_0', icon: 'fab fa-react', color: '#7ed6df', title: 'Danh Sắc', desc: 'Mức chú tâm TB ≥ 2 trong phiên ≤ 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.0; }) },
    { id: 'sfocus_2_5', icon: 'fa-meteor', color: '#badc58', title: 'Tấn Lực', desc: 'Mức chú tâm TB ≥ 2.5 trong phiên ≤ 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.5; }) },
    { id: 'sfocus_3_0', icon: 'fas fa-jedi', color: '#e056fd', title: 'Chiến Sĩ', desc: 'Mức chú tâm TB ≥ 3 trong phiên ≤ 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.0; }) },
	{ id: 'sfocus_3_5', icon: 'fas fa-hanukiah', color: '#f9ca24', title: 'Không Phóng Dật', desc: 'Mức chú tâm TB ≥ 3.5 trong phiên ≤ 20p', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if (proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.5; }) },

	{ id: 'sfocus_2a', icon: 'fas fa-globe-asia', color: '#22a6b3', title: 'Hải Đảo', desc: 'Mức chú tâm TB ≥ 2 trong phiên ≥ 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.0; }) },
	{ id: 'sfocus_2_5a', icon: 'fab fa-drupal', color: '#2ed573', title: 'Tu Tập', desc: 'Mức chú tâm TB ≥ 2.5 trong phiên ≥ 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.5; }) },
    { id: 'sfocus_3a', icon: 'fa-spa', color: '#6c5ce7', title: 'Thiền Tịnh', desc: 'Mức chú tâm TB ≥ 2.5 trong phiên ≥ 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.0; }) },
	{ id: 'sfocus_3_5a', icon: 'fas fa-dove', color: '#dfe6e9', title: 'Vô Lậu', desc: 'Mức chú tâm TB ≥ 3.5 trong phiên ≥ 45p', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 3.5; }) },


{ id: 'note_long', icon: 'fa-pen-nib', color: '#ff9f43', title: 'Học Giới', desc: 'Viết ghi chú dài hơn 50 ký tự', condition: (data) => data.logs.some(l => l.notes && l.notes.length > 50) },
    { id: 'note_many', icon: 'fa-scroll', color: '#a29bfe', title: 'Thừa Tự Pháp', desc: 'Có 50 thời thiền đi kèm ghi chú ≥ 50 ký tự', condition: (data) => data.logs.filter(l => l.notes && l.notes.length > 100).length >= 50 },
    // --- MISC / SPECIAL ---
	{ id: 'goal-early_4am', icon: 'fas fa-star-half-stroke', color: '#ff6b6b', title: 'Sao Mai', desc: 'Hoàn thành thời thiền trước 4:00 sáng', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() < 4) },
    { id: 'goal-early_5am', icon: 'fab fa-tidal', color: '#7ed6df', title: 'Tứ Diệu Đế', desc: 'Hoàn thành thời thiền trước 5:00 sáng', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() < 5) },
    { id: 'goal-early_3d', icon: 'fas fa-star', color: '#ffbe76', title: 'Ước Nguyện', desc: '3 ngày liên tiếp thiền trước 5:00 sáng', condition: (data) => { const earlyLogs = data.logs.filter(l => new Date(l.timestamp).getHours() < 5).map(l => l.date); const uniqueDays = [...new Set(earlyLogs)].sort(); let streak = 0; for(let i=0; i<uniqueDays.length-1; i++) { const d1 = new Date(uniqueDays[i]); const d2 = new Date(uniqueDays[i+1]); if ((d2-d1) <= 86400000) streak++; else streak = 0; if(streak >= 2) return true; } return false; }},
	{ id: 'goal-early_7d', icon: 'fa-ribbon', color: '#2ecc71', title: 'Cứu Cánh', desc: '7 ngày liên tiếp thiền trước 5:00 sáng', condition: (data) => { const earlyLogs = data.logs.filter(l => new Date(l.timestamp).getHours() < 5).map(l => l.date); const uniqueDays = [...new Set(earlyLogs)].sort(); let streak = 0; for(let i=0; i<uniqueDays.length-1; i++) { const d1 = new Date(uniqueDays[i]); const d2 = new Date(uniqueDays[i+1]); if ((d2-d1) <= 86400000) streak++; else streak = 0; if(streak >= 6) return true; } return false; }},
    { id: 'lunch', icon: 'fab fa-viadeo', color: '#badc58', title: 'Quả Tuệ', desc: 'Thiền vào giờ nghỉ trưa (11h-13h)', condition: (data) => data.logs.some(l => { const h = new Date(l.timestamp).getHours(); return h >= 11 && h <= 13; }) },
    { id: 'goal-evening', icon: 'fas fa-cloud-showers-heavy', color: '#0984e3', title: 'Mùa An Cư', desc: 'Thiền vào chiều tối (17h-19h)', condition: (data) => data.logs.some(l => { const h = new Date(l.timestamp).getHours(); return h >= 17 && h <= 19; }) },
    { id: 'goal-night', icon: 'fab fa-squarespace', color: '#a29bfe', title: 'Nhân Duyên', desc: 'Thiền sau 22:00 đêm', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() >= 22) },
	 { id: 'goal_100', icon: 'fab fa-think-peaks', color: '#f9ca24', title: 'Viễn Ly', desc: 'Thành tựu 100% 1 mục tiêu thiền', condition: (data) => data.goals.some(g => { const target = g.type === 'meditation' ? g.totalMindfulness : g.totalMinutes; return g.lifetimeTargetMinutes > 0 && target >= g.lifetimeTargetMinutes; }) },
    { id: 'goal_80', icon: 'fas fa-heart', color: '#ff7675', title: 'Tâm Từ', desc: 'Thành tựu 80% mục tiêu thiền', condition: (data) => data.goals.some(g => { const target = g.type === 'meditation' ? g.totalMindfulness : g.totalMinutes; return g.lifetimeTargetMinutes > 0 && target >= (g.lifetimeTargetMinutes / 2); }) },
    
	
	 { id: 'daily_volume_30p', icon: 'fab fa-canadian-maple-leaf', color: '#e58e26', title: 'Vô Thường', desc: 'Tổng thời gian thiền ≥ 30 phút trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 30); }},
    { id: 'daily_volume_1h', icon: 'fab fa-phoenix-framework', color: '#fa983a', title: 'Chế Ngự', desc: 'Tổng thời gian thiền ≥ 1 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 60); }},
    { id: 'daily_volume_2h', icon: 'fab fa-phoenix-squadron', color: '#fc4214', title: 'Bất Tử', desc: 'Tổng thời gian thiền ≥ 2 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 120); }},
    { id: 'daily_volume_3h', icon: 'fab fa-gripfire', color: '#e55039', title: 'Tinh Cần', desc: 'Tổng thời gian thiền ≥ 3 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 180); }},
    { id: 'daily_volume_4h', icon: 'fa-flower', color: '#74b9ff', title: 'Bất Hại', desc: 'Tổng thời gian thiền ≥ 4 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 240); }},
    { id: 'daily_volume_5h', icon: 'fab fa-sith', color: '#badc58', title: 'Tỉnh Giác', desc: 'Tổng thời gian thiền ≥ 5 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 300); }},
    { id: 'daily_volume_8h', icon: 'fab fa-battle-net', color: '#6a89cc', title: 'Như lý Tác Ý', desc: 'Tổng thời gian thiền ≥ 8 giờ trong 1 ngày', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 480); }},
    { id: 'freq_3_day', icon: 'fas fa-hand-sparkles', color: '#f0932b', title: 'Ngũ Giới', desc: 'Thiền 5 lần trong một ngày', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 5); }},
    { id: 'freq_5_day', icon: 'fas fa-hands-praying', color: '#48dbfb', title: 'Tịnh Tín', desc: 'Thiền 10 lần trong một ngày', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 10); }},
    { id: 'freq_10_day', icon: 'fas fa-users', color: '#ffbe76', title: 'Tăng Bảo', desc: 'Thiền 20 lần trong một ngày', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 20); }},
    { id: 'dedicated_day', icon: 'fa-landmark', color: '#2ecc71', title: 'Tam Bảo', desc: 'Thực hiện 3 thời thiền riêng biệt tổng ≥ 60p trong ngày', condition: (data) => { const goodLogs = data.logs.filter(l => l.minutes >= 60); const counts = {}; goodLogs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 3); }},
    { id: 'quick_fix', icon: 'fas fa-user-plus', color: '#f6e58d', title: 'Tự Thắng', desc: 'Hoàn thành 10 phiên ngắn (≤ 10p)', condition: (data) => data.logs.filter(l => l.minutes < 10).length >= 10 },
	{ id: 'quick_fix2', icon: 'fa-fan', color: '#a29bfe', title: 'Quán Bất Tịnh', desc: 'Hoàn thành 30 phiên ngắn (≤ 10p)', condition: (data) => data.logs.filter(l => l.minutes < 10).length >= 30 },
    { id: 'long_haul', icon: 'fa-wreath-laurel', color: '#badc58', title: 'Kiên Trì', desc: 'Hoàn thành 10 phiên dài (≥ 60p)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 10 },
    { id: 'long_haul2', icon: 'fab fa-watchman-monitoring', color: '#ff6b6b', title: 'Hải Đăng', desc: 'Hoàn thành 20 phiên dài (≥ 60p)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 20 },
    { id: 'long_haul3', icon: 'fab fa-codepen', color: '#55efc4', title: 'Ly Sân', desc: 'Hoàn thành 50 phiên dài (≥ 60p)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 50 },
{ id: 'overachiever', icon: 'fa-sailboat', color: '#74b9ff', title: 'Hiền Thiện', desc: 'Hoàn thành 200% mục tiêu ngày', condition: (data) => { const today = new Date().toISOString().split('T')[0]; return data.goals.some(g => { const target = g.dailyTargetMinutes || 0; if (target <= 0) return false; const progress = data.logs.filter(l => l.goalId === g.id && l.date === today).reduce((s, l) => s + (g.type === 'meditation' ? (l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0)) : (l.minutes || 0)), 0); return progress >= (target * 2); }); }},
    
   
];


