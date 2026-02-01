const BADGES = [
    // --- Log Counts (Effort/Viriya) ---
    { id: 'log_1', icon: 'fas fa-fingerprint', color: '#a29bfe', title: 'Non-Self', desc: 'Complete your first meditation session', condition: (data) => data.logs.length >= 1 },
    { id: 'log_10', icon: 'fas fa-seedling', color: '#00b894', title: 'Dependent Co-arising', desc: 'Complete 10 meditation sessions', condition: (data) => data.logs.length >= 10 },
    { id: 'log_25', icon: 'fab fa-pagelines', color: '#55efc4', title: 'Wholesome Roots', desc: 'Complete 25 meditation sessions', condition: (data) => data.logs.length >= 25 },
    { id: 'log_50', icon: 'fab fa-envira', color: '#fdcb6e', title: 'Kusala Dhamma', desc: 'Complete 50 meditation sessions', condition: (data) => data.logs.length >= 50 },
    { id: 'log_100', icon: 'fas fa-trees', color: '#badc58', title: 'Good Action', desc: 'Complete 100 meditation sessions', condition: (data) => data.logs.length >= 100 },
    { id: 'log_150', icon: 'far fa-cloud-sun', color: '#ff7675', title: 'Detachment', desc: 'Complete 150 meditation sessions', condition: (data) => data.logs.length >= 150 },
    { id: 'log_200', icon: 'fas fa-rainbow', color: '#e056fd', title: 'Good Destination', desc: 'Complete 200 meditation sessions', condition: (data) => data.logs.length >= 200 },
    { id: 'log_250', icon: 'fas fa-mountains', color: '#48dbfb', title: 'Mountain', desc: 'Complete 250 meditation sessions', condition: (data) => data.logs.length >= 250 },
    { id: 'log_300', icon: 'fas fa-gopuram', color: '#fd79a8', title: 'Leading Onwards', desc: 'Complete 300 meditation sessions', condition: (data) => data.logs.length >= 300 },
    { id: 'log_350', icon: 'far fa-vihara', color: '#ff9f43', title: 'Vihara', desc: 'Complete 350 meditation sessions', condition: (data) => data.logs.length >= 350 },
    { id: 'log_400', icon: 'fas fa-archway', color: '#fab1a0', title: 'Deathless Gate', desc: 'Complete 400 meditation sessions', condition: (data) => data.logs.length >= 400 },
    { id: 'log_450', icon: 'fas fa-kaaba', color: '#74b9ff', title: 'Dhamma Pillar', desc: 'Complete 450 meditation sessions', condition: (data) => data.logs.length >= 450 },
    { id: 'log_500', icon: 'fas fa-monument', color: '#ffbe76', title: 'Relics', desc: 'Complete 500 meditation sessions', condition: (data) => data.logs.length >= 500 },
    { id: 'log_600', icon: 'fab fa-fort-awesome', color: '#a29bfe', title: 'Dhamma Fortress', desc: 'Complete 600 meditation sessions', condition: (data) => data.logs.length >= 600 },
    { id: 'log_700', icon: 'fa-dungeon', color: '#6ab04c', title: 'Solitude', desc: 'Complete 700 meditation sessions', condition: (data) => data.logs.length >= 700 },
    { id: 'log_800', icon: 'fas fa-dove', color: '#dfe6e9', title: 'Stainless', desc: 'Complete 800 meditation sessions', condition: (data) => data.logs.length >= 800 },
    { id: 'log_1000', icon: 'far fa-dharmachakra', color: '#f9ca24', title: 'Wheel Turner', desc: 'Complete 1000 meditation sessions', condition: (data) => data.logs.length >= 1000 },

    // --- Streaks (Consistency) ---
    { id: 'streak_3', icon: 'fas fa-shoe-prints', color: '#bdc3c7', title: 'Walking Path', desc: 'Practice for 3 consecutive days', condition: (data) => data.streak >= 3 },
    { id: 'streak_5', icon: 'fas fa-bridge-water', color: '#48dbfb', title: 'Noble Quest', desc: 'Practice for 5 consecutive days', condition: (data) => data.streak >= 5 },
    { id: 'streak_7', icon: 'fas fa-clover', color: '#2ecc71', title: 'Blessings', desc: 'Practice for 7 consecutive days', condition: (data) => data.streak >= 7 },
    { id: 'streak_14', icon: 'fas fa-certificate', color: '#f1c40f', title: 'Virtue', desc: 'Practice for 14 consecutive days', condition: (data) => data.streak >= 14 },
	{ id: 'streak_21', icon: 'fas fa-caduceus', color: '#a29bfe', title: 'Discipline', desc: 'Practice for 21 consecutive days', condition: (data) => data.streak >= 21 },
    { id: 'streak_30', icon: 'fab fa-sketch', color: '#ff9f43', title: 'Willpower', desc: 'Practice for 30 consecutive days', condition: (data) => data.streak >= 30 },
    { id: 'streak_49', icon: 'fab fa-jira', color: '#54a0ff', title: 'Satipaṭṭhāna', desc: 'Practice for 49 consecutive days', condition: (data) => data.streak >= 49 },
    { id: 'streak_60', icon: 'fab fa-d-and-d', color: '#ff9f43', title: 'Naga', desc: 'Practice for 60 consecutive days', condition: (data) => data.streak >= 60 },
    { id: 'streak_90', icon: 'fab fa-brave', color: '#ff6b6b', title: 'Great Hero', desc: 'Practice for 90 consecutive days', condition: (data) => data.streak >= 90 },
    { id: 'streak_100', icon: 'fab fa-brave-reverse', color: '#d63031', title: 'Lion’s Roar', desc: 'Practice for 100 consecutive days', condition: (data) => data.streak >= 100 },
    { id: 'streak_180', icon: 'fab fa-wolf-pack-battalion', color: '#81ecec', title: 'The Great Tamer', desc: 'Practice for 180 consecutive days', condition: (data) => data.streak >= 180 },
{ id: 'streak_365', icon: 'fas fa-candle-holder', color: '#ff9f43', title: 'Dhamma Heir', desc: 'Practice for 365 consecutive days', condition: (data) => data.streak >= 365 },
    // --- Time Accumulation ---
    { id: 'time_1h', icon: 'fas fa-hourglass-half', color: '#f1c40f', title: 'Present', desc: 'Accumulate 1 hour of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 60 },
    { id: 'time_5h', icon: 'fas fa-circle-notch', color: '#ffbe76', title: 'Emptiness', desc: 'Accumulate 5 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 300 },
    { id: 'time_10h', icon: 'fas fa-record-vinyl', color: '#badc58', title: 'Mindfulness', desc: 'Accumulate 10 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 600 },
    { id: 'time_20h', icon: 'fab fa-files-pinwheel', color: '#686de0', title: 'Right Action', desc: 'Accumulate 20 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 1200 },
    { id: 'time_30h', icon: 'fas fa-snowflake', color: '#48dbfb', title: 'Stillness', desc: 'Accumulate 30 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 1800 },
    { id: 'time_50h', icon: 'fas fa-water', color: '#0abde3', title: 'Stream Entry', desc: 'Accumulate 50 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 3000 },
    { id: 'time_80h', icon: 'fas fa-wind', color: '#c7ecee', title: 'The Breath', desc: 'Accumulate 80 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 4800 },
    { id: 'time_100h', icon: 'fas fa-fire-burner', color: '#ee5253', title: 'Ardor', desc: 'Accumulate 100 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 6000 },
    { id: 'time_250h', icon: 'fas fa-fire-flame', color: '#f368e0', title: 'Zeal', desc: 'Accumulate 150 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 9000 },
    { id: 'time_150h', icon: 'far fa-fire', color: '#ff6b6b', title: 'Wisdom Fire', desc: 'Accumulate 200 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 12000 },
    { id: 'time_200h', icon: 'fas fa-fire-flame-curved', color: '#ff9f43', title: 'Jhana Fire', desc: 'Accumulate 250 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 15000 },
    { id: 'time_300h', icon: 'fas fa-bolt-lightning', color: '#feca57', title: 'Wisdom Root', desc: 'Accumulate 300 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 18000 },
    { id: 'time_400h', icon: 'fas fa-bullseye-arrow', color: '#ff9ff3', title: 'Wisdom Power', desc: 'Accumulate 400 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 24000 },
    { id: 'time_500h', icon: 'fas fa-sun', color: '#ffaf40', title: 'Clear Seeing', desc: 'Accumulate 500 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 30000 },
    { id: 'time_800h', icon: 'fas fa-moon-cloud', color: '#dfe6e9', title: 'Auspicious Night', desc: 'Accumulate 800 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 48000 },
    { id: 'time_1000h', icon: 'fab fa-skyatlas', color: '#74b9ff', title: 'The Void', desc: 'Accumulate 1000 hours of practice', condition: (data) => data.logs.reduce((s, l) => s + l.minutes, 0) >= 60000 },

    { id: 'sit_20', icon: 'fas fa-hand-holding-hand', color: '#cd84f1', title: 'Compassion', desc: 'Session length ≥ 20 minutes', condition: (data) => data.logs.some(l => l.minutes >= 20) },

    { id: 'sit_30', icon: 'fab fa-medapps', color: '#feca57', title: 'The Lamp', desc: 'Session length ≥ 30 minutes', condition: (data) => data.logs.some(l => l.minutes >= 30) },
	    { id: 'sit_45', icon: 'fab fa-deskpro', color: '#48dbfb', title: 'The Elephant', desc: 'Session length ≥ 45 minutes', condition: (data) => data.logs.some(l => l.minutes >= 45) },
    { id: 'sit_60', icon: 'fas fa-gem', color: '#7d5fff', title: 'Composure', desc: 'Session length ≥ 60 minutes', condition: (data) => data.logs.some(l => l.minutes >= 60) },
    { id: 'sit_90', icon: 'fab fa-ethereum', color: '#dfe6e9', title: 'Joyful Mind', desc: 'Session length ≥ 90 minutes', condition: (data) => data.logs.some(l => l.minutes >= 90) },
    { id: 'sit_120', icon: 'fas fa-anchor', color: '#ff9ff3', title: 'The Anchor', desc: 'Session length ≥ 2 hours', condition: (data) => data.logs.some(l => l.minutes >= 120) },
    { id: 'sit_180', icon: 'far fa-sailboat', color: '#74b9ff', title: 'Letting Go', desc: 'Session length ≥ 3 hours', condition: (data) => data.logs.some(l => l.minutes >= 180) },
    { id: 'sit_240', icon: 'fab fa-jedi-order', color: '#d980fa', title: 'Samadhi', desc: 'Session length ≥ 4 hours', condition: (data) => data.logs.some(l => l.minutes >= 240) },

    // --- Mindfulness Counts ---
    { id: 'mind_100', icon: 'fas fa-bullseye', color: '#ff7675', title: 'One-Pointedness', desc: 'Recorded 100 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 100 },
    { id: 'mind_500', icon: 'fas fa-circle-half-stroke', color: '#dfe6e9', title: 'Purification', desc: 'Recorded 500 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 500 },
    { id: 'mind_1k', icon: 'fab fa-superpowers', color: '#f1c40f', title: 'Contentment', desc: 'Recorded 1,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 1000 },
    { id: 'mind_2k', icon: 'fab fa-servicestack', color: '#74b9ff', title: 'Crossing the Flood', desc: 'Recorded 2,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 2000 },
    { id: 'mind_3k', icon: 'fas fa-layer-group', color: '#a29bfe', title: 'Five Aggregates', desc: 'Recorded 3,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 3000 },
    { id: 'mind_4k', icon: 'fab fa-schlix', color: '#d980fa', title: 'Right Speech', desc: 'Recorded 4,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 4000 },
    { id: 'mind_5k', icon: 'fab fa-modx', color: '#81ecec', title: 'Gratitude', desc: 'Recorded 5,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 5000 },
    { id: 'mind_6k', icon: 'fab fa-fulcrum', color: '#55efc4', title: 'The Recluse', desc: 'Recorded 6,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 6000 },
    { id: 'mind_7k', icon: 'fab fa-first-order', color: '#fab1a0', title: 'Sense Bases', desc: 'Recorded 7,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 7000 },
    { id: 'mind_8k', icon: 'fab fa-first-order-alt', color: '#e17055', title: 'Conscience', desc: 'Recorded 8,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 8000 },
    { id: 'mind_10k', icon: 'fab fa-medrt', color: '#eb4d4b', title: 'Offering', desc: 'Recorded 10,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 10000 },
    { id: 'mind_15k', icon: 'fab fa-studiovinari', color: '#00cec9', title: 'Dispassion', desc: 'Recorded 15,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 15000 },
    { id: 'mind_20k', icon: 'fab fa-connectdevelop', color: '#74b9ff', title: 'Investigation', desc: 'Recorded 20,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 20000 },
    { id: 'mind_25k', icon: 'fab fa-linktree', color: '#00b894', title: 'Sorrowless', desc: 'Recorded 25,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 25000 },
    { id: 'mind_30k', icon: 'fas fa-hexagon-nodes', color: '#e056fd', title: 'Insight', desc: 'Recorded 30,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 30000 },
    { id: 'mind_40k', icon: 'fab fa-slack', color: '#ff7675', title: 'Virtue Fragrance', desc: 'Recorded 40,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 40000 },
    { id: 'mind_50k', icon: 'fab fa-hornbill', color: '#feca57', title: 'Bliss', desc: 'Recorded 50,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 50000 },
    { id: 'mind_80k', icon: 'fas fa-dragon', color: '#d63031', title: 'Mastery', desc: 'Recorded 80,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 80000 },
    { id: 'mind_100k', icon: 'fas fa-om', color: '#f9ca24', title: 'Suchness', desc: 'Recorded 100,000 mindfulness', condition: (data) => data.logs.reduce((s, l) => s + (l.count||0), 0) >= 100000 },

    // --- DAILY MINDFULNESS (Intensity) ---
    { id: 'mindf_200', icon: 'fab fa-linode', color: '#48dbfb', title: 'Middle Way', desc: 'Recorded ≥ 600 mindfulness in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 600); }},
    { id: 'mindf_400', icon: 'fab fa-shoelace', color: '#a29bfe', title: 'Patience', desc: 'Recorded ≥ 1200 mindfulness in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 1200); }},
    { id: 'mindf_600', icon: 'fas fa-people-roof', color: '#f1c40f', title: 'Harmony', desc: 'Recorded ≥ 2000 mindfulness in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 2000); }},
    { id: 'mindf_1000', icon: 'fas fa-user-shield', color: '#686de0', title: 'Self-Control', desc: 'Recorded ≥ 3000 mindfulness in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => { const c = l.count || (l.touches ? l.touches.length : 0); daily[l.date] = (daily[l.date]||0) + c; }); return Object.values(daily).some(c => c >= 3000); }},

    // --- QUALITY (Qualities/Phẩm Chất) ---
    { id: 'focus_5_min', icon: 'fas fa-feather-pointed', color: '#81ecec', title: 'Tranquillity', desc: 'Achieved ≥ 5 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 5) },
    { id: 'focus_6_min', icon: 'fas fa-shield-alt', color: '#badc58', title: 'Guardian', desc: 'Achieved ≥ 6 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 6) },
    { id: 'focus_7_min', icon: 'fas fa-bahai', color: '#ffeaa7', title: 'Awakening', desc: 'Achieved ≥ 7 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 7) },
    { id: 'focus_8_min', icon: 'fas fa-life-ring', color: '#fab1a0', title: 'Eightfold Path', desc: 'Achieved ≥ 8 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 8) },
    { id: 'focus_9_min', icon: 'fab fa-debian', color: '#e17055', title: 'Kamma', desc: 'Achieved ≥ 9 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 9) },
    { id: 'focus_10_min', icon: 'fas fa-hands-holding-circle', color: '#ff7675', title: 'Generosity', desc: 'Achieved ≥ 10 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 10) },
    { id: 'focus_12_min', icon: 'fas fa-ranking-star', color: '#f9ca24', title: 'Sublime Dhamma', desc: 'Achieved ≥ 12 mindfulness/minute (session ≥ 20m)', condition: (data) => data.logs.some(l => l.minutes >= 20 && (l.count/l.minutes) >= 12) },

    // --- FOCUS SCORES (Samadhi Levels) ---
    { id: 'sfocus_1_5', icon: 'fab fa-free-code-camp', color: '#ff7979', title: 'Right Effort', desc: 'Avg Focus ≥ 1.5 in session ≤ 20m', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 1.5; }) },
    { id: 'sfocus_2_0', icon: 'fab fa-react', color: '#7ed6df', title: 'Name & Form', desc: 'Avg Focus ≥ 2 in session ≤ 20m', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.0; }) },
    { id: 'sfocus_2_5', icon: 'fa-meteor', color: '#badc58', title: 'Viriya', desc: 'Avg Focus ≥ 2.5 in session ≤ 20m', condition: (data) => data.logs.some(l => { if (l.minutes > 20 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.5; }) },
   

    { id: 'sfocus_2a', icon: 'fas fa-globe-asia', color: '#22a6b3', title: 'The Island', desc: 'Avg Focus ≥ 2 in session ≥ 45m', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.0; }) },
    { id: 'sfocus_2_5a', icon: 'fab fa-drupal', color: '#2ed573', title: 'Cultivation', desc: 'Avg Focus ≥ 2.5 in session ≥ 45m', condition: (data) => data.logs.some(l => { if (l.minutes < 45 || !l.touches) return false; const proT = l.touches.filter(t => t.v); if(proT.length < 5) return false; const score = proT.reduce((s, t) => s + (5-t.v), 0) / proT.length; return score >= 2.5; }) },
  

    { id: 'note_long', icon: 'fa-raindrops', color: '#74b9ff', title: 'Heedfulness', desc: 'Write a note longer than 50 chars', condition: (data) => data.logs.some(l => l.notes && l.notes.length > 50) },
    { id: 'note_many', icon: 'fa-book-open-reader', color: '#ff9f43', title: 'Great Learning', desc: '50 sessions with notes ≥ 50 chars', condition: (data) => data.logs.filter(l => l.notes && l.notes.length > 100).length >= 50 },
    
    // --- MISC / SPECIAL ---
    { id: 'goal-early_4am', icon: 'fas fa-star-half-stroke', color: '#ff6b6b', title: 'Morning Star', desc: 'Complete a session before 4:00 AM', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() < 4) },
    { id: 'goal-early_5am', icon: 'fa-diamonds-4', color: '#7ed6df', title: 'Four Noble Truths', desc: 'Complete a session before 5:00 AM', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() < 5) },
    { id: 'goal-early_3d', icon: 'fas fa-stars', color: '#ffbe76', title: 'Aspiration', desc: '3 consecutive days meditating before 5:00 AM', condition: (data) => { const earlyLogs = data.logs.filter(l => new Date(l.timestamp).getHours() < 5).map(l => l.date); const uniqueDays = [...new Set(earlyLogs)].sort(); let streak = 0; for(let i=0; i<uniqueDays.length-1; i++) { const d1 = new Date(uniqueDays[i]); const d2 = new Date(uniqueDays[i+1]); if ((d2-d1) <= 86400000) streak++; else streak = 0; if(streak >= 2) return true; } return false; }},
    { id: 'goal-early_7d', icon: 'fa-ribbon', color: '#ff9f43', title: 'Ultimate Goal', desc: '7 consecutive days meditating before 5:00 AM', condition: (data) => { const earlyLogs = data.logs.filter(l => new Date(l.timestamp).getHours() < 5).map(l => l.date); const uniqueDays = [...new Set(earlyLogs)].sort(); let streak = 0; for(let i=0; i<uniqueDays.length-1; i++) { const d1 = new Date(uniqueDays[i]); const d2 = new Date(uniqueDays[i+1]); if ((d2-d1) <= 86400000) streak++; else streak = 0; if(streak >= 6) return true; } return false; }},
    { id: 'lunch', icon: 'fab fa-viadeo', color: '#badc58', title: 'Fruit of Wisdom', desc: 'Meditate during lunch break (11h-13h)', condition: (data) => data.logs.some(l => { const h = new Date(l.timestamp).getHours(); return h >= 11 && h <= 13; }) },
    { id: 'goal-evening', icon: 'fas fa-cloud-showers-heavy', color: '#0984e3', title: 'Rain Retreat', desc: 'Meditate in the evening (17h-19h)', condition: (data) => data.logs.some(l => { const h = new Date(l.timestamp).getHours(); return h >= 17 && h <= 19; }) },
    { id: 'goal-night', icon: 'fab fa-squarespace', color: '#a29bfe', title: 'Causality', desc: 'Meditate after 22:00 PM', condition: (data) => data.logs.some(l => new Date(l.timestamp).getHours() >= 22) },
    { id: 'goal_100', icon: 'fab fa-think-peaks', color: '#f9ca24', title: 'Seclusion', desc: 'Achieve 100% of a meditation goal', condition: (data) => data.goals.some(g => { const target = g.type === 'meditation' ? g.totalMindfulness : g.totalMinutes; return g.lifetimeTargetMinutes > 0 && target >= g.lifetimeTargetMinutes; }) },
    { id: 'goal_80', icon: 'fas fa-heart', color: '#ff7675', title: 'Loving-Kindness', desc: 'Achieve 80% of a meditation goal', condition: (data) => data.goals.some(g => { const target = g.type === 'meditation' ? g.totalMindfulness : g.totalMinutes; return g.lifetimeTargetMinutes > 0 && target >= (g.lifetimeTargetMinutes / 2); }) },
    
    { id: 'daily_volume_30p', icon: 'fab fa-canadian-maple-leaf', color: '#e58e26', title: 'Impermanence', desc: 'Total meditation ≥ 30 minutes in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 30); }},
    { id: 'daily_volume_1h', icon: 'fab fa-phoenix-framework', color: '#fa983a', title: 'Restraint', desc: 'Total meditation ≥ 1 hour in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 60); }},
    { id: 'daily_volume_2h', icon: 'fab fa-battle-net', color: '#6a89cc', title: 'Wise Attention', desc: 'Total meditation ≥ 2 hours in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 120); }},
    { id: 'daily_volume_3h', icon: 'fab fa-gripfire', color: '#e55039', title: 'Diligence', desc: 'Total meditation ≥ 3 hours in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 180); }},
    { id: 'daily_volume_4h', icon: 'fas fa-flower', color: '#74b9ff', title: 'Non-Violence', desc: 'Total meditation ≥ 4 hours in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 240); }},
    { id: 'daily_volume_5h', icon: 'fab fa-sith', color: '#badc58', title: 'Wakefulness', desc: 'Total meditation ≥ 5 hours in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 300); }},
    { id: 'daily_volume_8h', icon: 'far fa-crystal-ball', color: '#a29bfe', title: 'Timeless', desc: 'Total meditation ≥ 8 hours in a day', condition: (data) => { const daily = {}; data.logs.forEach(l => daily[l.date] = (daily[l.date]||0) + l.minutes); return Object.values(daily).some(m => m >= 480); }},
    { id: 'freq_3_day', icon: 'fas fa-hand-sparkles', color: '#f0932b', title: 'Five Precepts', desc: 'Meditate 5 times in one day', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 5); }},
    { id: 'freq_5_day', icon: 'fas fa-hands-praying', color: '#48dbfb', title: 'Pure Faith', desc: 'Meditate 10 times in one day', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 10); }},
    { id: 'freq_10_day', icon: 'fas fa-users', color: '#ffbe76', title: 'Sangha', desc: 'Meditate 20 times in one day', condition: (data) => { const counts = {}; data.logs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 20); }},
    { id: 'dedicated_day', icon: 'far fa-sparkles', color: '#badc58', title: 'Three Jewels', desc: 'Complete 3 separate sessions total ≥ 60m in a day', condition: (data) => { const goodLogs = data.logs.filter(l => l.minutes >= 60); const counts = {}; goodLogs.forEach(l => counts[l.date] = (counts[l.date]||0)+1); return Object.values(counts).some(c => c >= 3); }},
    { id: 'quick_fix', icon: 'fas fa-user-plus', color: '#f6e58d', title: 'Self-Victory', desc: 'Complete 10 short sessions (≤ 10m)', condition: (data) => data.logs.filter(l => l.minutes < 10).length >= 10 },
    { id: 'quick_fix2', icon: 'fa-fan', color: '#a29bfe', title: 'Disenchantment', desc: 'Complete 30 short sessions (≤ 10m)', condition: (data) => data.logs.filter(l => l.minutes < 10).length >= 30 },
    { id: 'long_haul', icon: 'far fa-wreath-laurel', color: '#badc58', title: 'Perseverance', desc: 'Complete 10 long sessions (≥ 60m)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 10 },
    { id: 'long_haul2', icon: 'fab fa-watchman-monitoring', color: '#ff6b6b', title: 'Lighthouse', desc: 'Complete 20 long sessions (≥ 60m)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 20 },
    { id: 'long_haul3', icon: 'fab fa-codepen', color: '#55efc4', title: 'Non-Ill Will', desc: 'Complete 50 long sessions (≥ 60m)', condition: (data) => data.logs.filter(l => l.minutes >= 60).length >= 50 },
	{ id: 'overachiever', icon: 'fa-hanukiah', color: '#f9ca24', title: 'Virtuous', desc: 'Complete 200% of daily goal', condition: (data) => { const today = new Date().toISOString().split('T')[0]; return data.goals.some(g => { const target = g.dailyTargetMinutes || 0; if (target <= 0) return false; const progress = data.logs.filter(l => l.goalId === g.id && l.date === today).reduce((s, l) => s + (g.type === 'meditation' ? (l.count !== undefined ? l.count : (l.touches ? l.touches.length : 0)) : (l.minutes || 0)), 0); return progress >= (target * 2); }); }},
    
	 { 
        id: 'cert_basic_pass', 
        icon: 'fas fa-award-simple', 
        color: '#74b9ff', // Blue (Matches Basic Course)
        title: 'Seeker', 
        desc: 'Passed the Basic Meditation final exam', 
        condition: (data) => data.goals.some(g => g.id === 'cert_basic_1' && g.certified === true) 
    },
	
	{ 
        id: 'cert_inter_pass', 
        icon: 'fas fa-award', 
        color: '#ff9f43', 
        title: 'Practitioner', 
        desc: 'Passed the Intermediate Meditation final exam', 
        condition: (data) => data.goals.some(g => g.id === 'cert_inter_1' && g.certified === true) 
    },
	
	{ 
        id: 'cert_adv_pass', 
        icon: 'far fa-award-simple', 
        color: '#8b5cf6', 
        title: 'Yogi', 
        desc: 'Passed the Advanced Meditation final exam', 
        condition: (data) => data.goals.some(g => g.id === 'cert_adv_1' && g.certified === true) 
    },
    { 
        id: 'cert_master_pass', 
        icon: 'far fa-award', 
        color: '#ff6b6b', 
        title: 'Meditator', 
        desc: 'Passed the Intensive Meditation final exam', 
        condition: (data) => data.goals.some(g => g.id === 'cert_master_1' && g.certified === true) 
    }
];