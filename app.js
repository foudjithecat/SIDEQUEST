(() => {
  'use strict';
  const STORAGE_KEY = 'sidequest-save-v1';
  const CATEGORIES = [
    {id:'all', name:'All quests', symbol:'sparkles'},
    {id:'adventure', name:'Adventure', symbol:'compass'},
    {id:'creative', name:'Creative', symbol:'pen'},
    {id:'social', name:'Social', symbol:'users'},
    {id:'chaos', name:'Chaos', symbol:'shuffle'},
    {id:'mind', name:'Mind', symbol:'brain'},
    {id:'wildcard', name:'Wildcard', symbol:'asterisk'}
  ];
  const ICONS = {
    sparkles:'<path d="m12 3 1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3Z"/><path d="m19 17 .7 1.6L21.5 19l-1.8.7L19 21.5l-.7-1.8L16.5 19l1.8-.4L19 17Z"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="m15.8 8.2-2.5 5.1-5.1 2.5 2.5-5.1 5.1-2.5Z"/>',
    pen:'<path d="M12 19h9"/><path d="m15.5 5.5 3 3L8 19l-4 1 1-4L15.5 5.5Z"/><path d="m14 7 3 3"/>',
    users:'<path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    shuffle:'<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h2c4 0 5-5 8-6s4-6 8-6h2M2 6h2c2 0 3 1 4 3m7 6c1 2 2 3 5 3h2"/>',
    brain:'<path d="M12 18V5.5a3.5 3.5 0 0 0-6.8-1.1A4 4 0 0 0 4 12a4.3 4.3 0 0 0 2 7.6A3.8 3.8 0 0 0 12 18ZM12 18V5.5a3.5 3.5 0 0 1 6.8-1.1A4 4 0 0 1 20 12a4.3 4.3 0 0 1-2 7.6A3.8 3.8 0 0 1 12 18Z"/><path d="M8 8c-2 0-3 1-3 3m14 0c0-2-1-3-3-3M8 16l4-2 4 2"/>',
    asterisk:'<path d="M12 2v20M4.5 6l15 12M19.5 6l-15 12"/>',
    heart:'<path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z"/>',
    home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10Z"/><path d="M9 21v-8h6v8"/>',
    chart:'<path d="M4 20V4M4 20h17M8 16l4-5 4 2 4-7"/>',
    settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.9l.06.05-2.5 2.5-.05-.06a1.7 1.7 0 0 0-1.9-.34 1.7 1.7 0 0 0-1 1.55V21h-3.5v-.4a1.7 1.7 0 0 0-1.05-1.55 1.7 1.7 0 0 0-1.9.34l-.05.06-2.5-2.5.06-.05A1.7 1.7 0 0 0 5.8 15a1.7 1.7 0 0 0-1.55-1H4v-3.5h.25A1.7 1.7 0 0 0 5.8 9a1.7 1.7 0 0 0-.34-1.9L5.4 7.05l2.5-2.5.05.06A1.7 1.7 0 0 0 9.85 5a1.7 1.7 0 0 0 1-1.55V3h3.5v.45a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.9-.34l.05-.06 2.5 2.5-.06.05A1.7 1.7 0 0 0 19.4 9a1.7 1.7 0 0 0 1.55 1H21v3.5h-.05A1.7 1.7 0 0 0 19.4 15Z"/>',
    arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    check:'<path d="m5 12 4 4L19 6"/>',
    trophy:'<path d="M8 4h8v8a4 4 0 0 1-8 0V4ZM8 6H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4M12 16v4m-4 0h8"/>',
    download:'<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
    upload:'<path d="M12 17V5m-5 5 5-5 5 5M4 17v4h16v-4"/>',
    shield:'<path d="m12 22-1.6-.7C5.5 18.8 4 15.3 4 10V5l8-3 8 3v5c0 5.3-1.5 8.8-6.4 11.3L12 22Z"/><path d="m9 12 2 2 4-4"/>',
    trash:'<path d="M4 7h16M10 11v7m4-7v7M6 7l1 14h10l1-14M9 7V4h6v3"/>',
    close:'<path d="M5 5l14 14M19 5 5 19"/>',
    lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
    star:'<path d="m12 2 3 6.5 7 1-5 5 .9 7-5.9-3.5L6.1 21.5 7 14.5l-5-5 7-1L12 2Z"/>'
  };
  const ico = (id, size=18) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[id] || ICONS.sparkles}</svg>`;
  const htmlEscape = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const fmtDate = timestamp => new Intl.DateTimeFormat('en',{month:'short',day:'numeric',year:'numeric'}).format(new Date(timestamp));
  const byId = Object.fromEntries(QUESTS.map(q => [q.id,q]));
  const DEFAULT = () => ({favorites:[],history:[],currentQuestId:null,activeQuestId:null,filters:{category:'all',time:'any',place:'any',company:'any'}});
  const validate = incoming => {
    const fallback=DEFAULT();
    if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) return fallback;
    const o={...fallback};
    o.favorites=Array.isArray(incoming.favorites)?[...new Set(incoming.favorites.filter(id=>typeof id==='string'&&byId[id]))]:[];
    o.history=Array.isArray(incoming.history)?incoming.history.filter(item=>item && byId[item.id] && item.type==='completed' && typeof item.when==='number' && Number.isFinite(item.when) && item.when>0 && item.when<Date.now()+86400000).slice(-2000).map(item=>({id:item.id,type:'completed',when:item.when,xp:typeof item.xp==='number'&&Number.isFinite(item.xp)?Math.max(0,Math.min(100,item.xp)):0})):[];
    o.currentQuestId=byId[incoming.currentQuestId]?incoming.currentQuestId:null;
    o.activeQuestId=byId[incoming.activeQuestId]?incoming.activeQuestId:null;
    if(o.activeQuestId)o.currentQuestId=o.activeQuestId;
    const f=incoming.filters||{};
    o.filters={category:CATEGORIES.some(c=>c.id===f.category)?f.category:'all',time:['any','5','10','15','20','30','60'].includes(f.time)?f.time:'any',place:['any','indoor','outdoor'].includes(f.place)?f.place:'any',company:['any','solo','friends'].includes(f.company)?f.company:'any'};
    return o;
  };
  let saved;
  try{saved=validate(JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'));}catch(err){saved=DEFAULT();}
  const app=document.getElementById('app');
  const modalRoot=document.getElementById('modal-root');
  const toastEl=document.getElementById('toast');
  let currentView='discover';
  let dialog=null;
  let toastTimeout=null;
  const save = () => { try {localStorage.setItem(STORAGE_KEY,JSON.stringify(saved));}catch(e){showToast('Could not save. Check your browser storage.');} };
  const completeIds=()=>new Set(saved.history.filter(i=>i.type==='completed').map(i=>i.id));
  const earnedXP=()=>[...completeIds()].reduce((sum,id)=>sum+byId[id].xp,0);
  const level=()=>Math.floor(earnedXP()/150)+1;
  const filtered = () => QUESTS.filter(q=>
    (saved.filters.category==='all'||q.category===saved.filters.category) &&
    (saved.filters.time==='any'||q.minutes<=Number(saved.filters.time)) &&
    (saved.filters.place==='any'||q.place==='either'||q.place===saved.filters.place) &&
    (saved.filters.company==='any'||q.company==='either'||q.company===saved.filters.company)
  );
  function generateQuest(){
    if(saved.activeQuestId){showToast('Finish or skip your active quest first.');return;}
    const pool=filtered();
    if(!pool.length){saved.currentQuestId=null;save();render();return;}
    const completed=completeIds();
    const withoutCurrent=pool.filter(q=>q.id!==saved.currentQuestId);
    const fresh=withoutCurrent.filter(q=>!completed.has(q.id));
    const choices=fresh.length?fresh:withoutCurrent.length?withoutCurrent:pool;
    saved.currentQuestId=choices[Math.floor(Math.random()*choices.length)].id;
    save();render();
  }
  const stats=()=>({xp:earnedXP(),count:completeIds().size,level:level(),favorites:saved.favorites.length});
  const categoryInfo = id => CATEGORIES.find(c=>c.id===id)||CATEGORIES[0];
  const navButton=(id,label,iconName)=>`<button class="nav-button ${currentView===id?'active':''}" data-nav="${id}" aria-label="${label}" ${currentView===id?'aria-current="page"':''}>${ico(iconName,21)}<span>${label}</span></button>`;
  function render(){
    const s=stats();
    const main= currentView==='discover'?discover():currentView==='saved'?savedPage():currentView==='journey'?journey():settingsPage();
    app.innerHTML=`<header class="topbar"><div class="brand"><span class="brand-mark">${ico('asterisk',21)}</span> SIDEQUEST<span style="color:#9ba396">.</span></div><div class="topbar-right"><span class="level-chip"><span class="orb"></span> LVL ${s.level}</span><button class="icon-button" data-nav="settings" aria-label="Settings">${ico('settings',17)}</button></div></header>${main}<nav class="bottom-nav" aria-label="Main navigation">${navButton('discover','Discover','compass')}${navButton('saved','Saved','heart')}${navButton('journey','Journey','chart')}${navButton('settings','Settings','settings')}</nav>`;
    renderModal();
  }
  const option=(val,title,selected)=>`<option value="${val}" ${selected===val?'selected':''}>${title}</option>`;
  function discover(){
    const s=stats();
    const catBtns=CATEGORIES.map(c=>`<button type="button" class="pill ${saved.filters.category===c.id?'active':''}" data-category="${c.id}" aria-pressed="${saved.filters.category===c.id}">${ico(c.symbol,13)} ${c.name}</button>`).join('');
    return `<section class="hero"><div class="eyebrow">YOUR EVERYDAY ADVENTURE</div><h1>Less scrolling.<br><span>More living.</span></h1><p>For the days when “I'm bored” is the only plan. A little adventure is one tap away.</p></section>
    <section class="stats-strip" aria-label="Your stats"><div class="stat"><div class="num">${s.count}</div><div class="lab">Quests done</div></div><div class="stat-sep"></div><div class="stat"><div class="num">${s.xp}</div><div class="lab">Total XP</div></div><div class="stat-sep"></div><div class="stat"><div class="num">${s.favorites}</div><div class="lab">Saved</div></div></section>
    <section aria-label="Choose your quest"><div class="section-top"><span class="section-title">Choose your vibe</span><span class="count-note">6 worlds · 120 quests</span></div><div class="category-scroll">${catBtns}</div>
    <div class="filter-box"><label><span class="filter-label">I have...</span><span class="select-wrap"><select data-filter="time" aria-label="Available time">${option('any','Any time',saved.filters.time)}${option('5','5 min',saved.filters.time)}${option('10','10 min',saved.filters.time)}${option('15','15 min',saved.filters.time)}${option('20','20 min',saved.filters.time)}${option('30','30 min',saved.filters.time)}${option('60','1 hour',saved.filters.time)}</select></span></label>
    <label><span class="filter-label">I'm...</span><span class="select-wrap"><select data-filter="place" aria-label="Location">${option('any','Anywhere',saved.filters.place)}${option('indoor','Inside',saved.filters.place)}${option('outdoor','Outside',saved.filters.place)}</select></span></label>
    <label><span class="filter-label">Playing...</span><span class="select-wrap"><select data-filter="company" aria-label="Company">${option('any','Any mode',saved.filters.company)}${option('solo','Solo',saved.filters.company)}${option('friends','With friends',saved.filters.company)}</select></span></label></div></section>
    ${questCard()}`;
  }
  function questCard(){
    const candidates=filtered();
    const q=saved.activeQuestId?byId[saved.activeQuestId]:byId[saved.currentQuestId];
    if(!candidates.length && !saved.activeQuestId){return `<section class="empty"><div class="empty-icon">${ico('compass',24)}</div><h3>No quests match... yet.</h3><p>Try a little more time, a different setting, or another category.</p><button class="btn btn-primary" data-action="reset-filters">Reset filters ${ico('arrow',15)}</button></section>`;}
    if(!q){return `<section class="empty"><div class="empty-icon">${ico('sparkles',25)}</div><h3>Ready for a side quest?</h3><p>${candidates.length} missions match your vibe. Your next little adventure starts here.</p><button class="btn btn-primary" data-action="roll">Find my quest ${ico('arrow',16)}</button></section>`;}
    const cat=categoryInfo(q.category),running=saved.activeQuestId===q.id,isFav=saved.favorites.includes(q.id),done=completeIds().has(q.id);
    return `<article class="quest-card" aria-label="Current quest"><div class="quest-head"><span class="quest-flag"><span class="dot"></span>${running?'IN PROGRESS':'NEW QUEST'}</span><span class="quest-tag">${htmlEscape(cat.name)}</span></div><div class="quest-body"><div class="quest-index">MISSION ${q.id.split('-')[1]} / 20</div><h2 class="quest-title">${htmlEscape(q.title)}</h2><p class="quest-desc">${htmlEscape(q.description)}</p></div>
    ${running?`<div class="active-banner">${ico('sparkles',15)} Quest accepted. Your adventure is underway!</div>`:''}
    <div class="quest-meta"><span class="meta-chip">${ico('clock',15)} ${q.minutes} min</span><span class="meta-chip">${ico('pin',15)} ${q.place==='either'?'Anywhere':q.place==='indoor'?'Indoor':'Outdoor'}</span><span class="meta-chip xp">${ico('star',15)} ${done?'Replay':'+'+q.xp+' XP'}</span></div>
    <div class="quest-actions"><button class="btn btn-light" data-action="${running?'skip':'roll'}">${ico('shuffle',17)} ${running?'Skip quest':'Another one'}</button><button class="btn ${running?'btn-accent':'btn-primary'}" data-action="${running?'complete':'start'}">${ico(running?'check':'arrow',17)} ${running?'Finish quest':'Accept quest'}</button></div></article>
    <div class="card-tools"><span class="tool-note">${candidates.length} matching quests · Do it at your own pace. You can always skip.</span><button class="heart-button ${isFav?'saved':''}" data-action="favorite" aria-pressed="${isFav}" aria-label="${isFav?'Remove from favorites':'Save to favorites'}">${ico('heart',19)}</button></div>`;
  }
  function savedPage(){
    const quests=saved.favorites.map(id=>byId[id]).filter(Boolean);
    return `<div class="eyebrow">YOUR COLLECTION</div><h1 class="page-title">Good ones.<br>Kept close.</h1><p class="page-sub">Save the adventures you want to try again. Your collection lives on this device.</p><div class="section-top"><span class="section-title">Favorite quests</span><span class="count-note">${quests.length} saved</span></div>${quests.length?quests.map(q=>`<button type="button" class="saved-item" data-open-quest="${q.id}"><span class="circle-symbol">${ico(categoryInfo(q.category).symbol,19)}</span><span class="saved-info"><strong>${htmlEscape(q.title)}</strong><small>${categoryInfo(q.category).name} · ${q.minutes} min · +${q.xp} XP</small></span>${ico('arrow',17)}</button>`).join(''):`<div class="empty"><div class="empty-icon">${ico('heart',25)}</div><h3>Your favorites are waiting.</h3><p>Find a quest you love and tap the heart to keep it here.</p><button class="btn btn-primary" data-nav="discover">Explore quests ${ico('arrow',15)}</button></div>`}`;
  }
  const achievementDefs=[
    {id:'first',name:'First Steps',desc:'Complete your first quest',icon:'compass',test:(d)=>d.count>=1},
    {id:'collector',name:'The Collector',desc:'Save 5 favorite quests',icon:'heart',test:(d)=>d.favorites>=5},
    {id:'five',name:'On a Roll',desc:'Complete 5 unique quests',icon:'sparkles',test:(d)=>d.count>=5},
    {id:'ten',name:'Quest Seeker',desc:'Complete 10 unique quests',icon:'trophy',test:(d)=>d.count>=10},
    {id:'explorer',name:'World Hopper',desc:'Try all six categories',icon:'compass',test:(d)=>d.distinctCategories>=6},
    {id:'xp',name:'Rising Star',desc:'Earn 500 XP',icon:'star',test:(d)=>d.xp>=500},
    {id:'twentyfive',name:'Adventure Mode',desc:'Complete 25 unique quests',icon:'asterisk',test:(d)=>d.count>=25},
    {id:'legend',name:'Living Legend',desc:'Complete 60 unique quests',icon:'trophy',test:(d)=>d.count>=60}
  ];
  function journey(){
    const s=stats(), ids=completeIds(), data={...s,distinctCategories:new Set([...ids].map(id=>byId[id].category)).size};
    const next=150-(s.xp%150),pct=((s.xp%150)/150)*100;
    const recent=[...saved.history].reverse().slice(0,20);
    return `<div class="eyebrow">PROGRESS IS PERSONAL</div><h1 class="page-title">The journey<br>is the point.</h1><p class="page-sub">Small missions add up. Every completed quest becomes a little story of your own.</p>
    <section class="xp-card"><div class="label">CURRENT LEVEL</div><div class="xp-big">${s.level} <small>Explorer</small></div><div class="meter" role="progressbar" aria-label="Progress to next level" aria-valuenow="${s.xp%150}" aria-valuemin="0" aria-valuemax="150"><div style="width:${pct}%"></div></div><div class="meter-caption"><span>${s.xp} total XP</span><span>${next} XP to level ${s.level+1}</span></div></section>
    <div class="stats-strip"><div class="stat"><div class="num">${s.count}</div><div class="lab">Quests done</div></div><div class="stat-sep"></div><div class="stat"><div class="num">${data.distinctCategories}/6</div><div class="lab">Categories</div></div><div class="stat-sep"></div><div class="stat"><div class="num">${achievementDefs.filter(a=>a.test(data)).length}/8</div><div class="lab">Badges</div></div></div>
    <h2 class="subheading">Achievements</h2><section class="badges">${achievementDefs.map(a=>`<div class="achievement ${a.test(data)?'earned':'locked'}"><div class="badge-icon">${ico(a.test(data)?a.icon:'lock',19)}</div><h3>${a.name}</h3><p>${a.desc}</p></div>`).join('')}</section>
    <h2 class="subheading">Quest history</h2>${recent.length?recent.map(h=>`<div class="history-item"><span class="circle-symbol">${ico(categoryInfo(byId[h.id].category).symbol,19)}</span><span class="saved-info"><strong>${htmlEscape(byId[h.id].title)}</strong><small>${fmtDate(h.when)} · ${categoryInfo(byId[h.id].category).name}</small></span><span class="xp-label">${h.xp?'+'+h.xp+' XP':'Replay'}</span></div>`).join(''):`<div class="empty"><div class="empty-icon">${ico('trophy',25)}</div><h3>Your story starts here.</h3><p>Complete your first quest and you'll see it in this journal.</p><button class="btn btn-primary" data-nav="discover">Find a quest ${ico('arrow',15)}</button></div>`}`;
  }
  function settingsPage(){
    return `<div class="eyebrow">YOUR SPACE</div><h1 class="page-title">Made for<br>real life.</h1><p class="page-sub">SIDEQUEST is free, private by design, and works without an account. Your progress is stored on this device.</p>
    <div class="page-card"><div class="settings-row"><div><strong>Export progress</strong><p>Download a backup of favorites, XP and history.</p></div><button class="btn btn-light btn-small" data-action="export">${ico('download',16)} Export</button></div><div class="settings-row"><div><strong>Import backup</strong><p>Restore a SIDEQUEST backup on this device.</p></div><label for="backup-input" class="btn btn-light btn-small" style="cursor:pointer">${ico('upload',16)} Import</label><input id="backup-input" type="file" accept=".json,application/json" class="hidden-file" aria-label="Import SIDEQUEST backup"></div></div>
    <div class="page-card"><div class="settings-row"><div><strong>Install on iPhone</strong><p>In Safari: Share → Add to Home Screen → Open as Web App.</p></div>${ico('home',21)}</div><div class="settings-row"><div><strong>Offline mode</strong><p>Open the app while online first, then it works without internet after the files are cached.</p></div>${ico('shield',21)}</div></div>
    <div class="page-card"><div class="settings-row"><div><strong>Clear all progress</strong><p>Erases your local XP, quest history, favorites and filters.</p></div><button class="text-button warn" data-action="clear">Reset</button></div></div>
    <p class="fineprint">SIDEQUEST v1.0 · 120 original quests · No login, ads, tracking, or paid APIs. Data is stored in this browser, so deleting website data or uninstalling the app may remove it. Export a backup to keep it safe.</p>`;
  }
  function renderModal(){
    if(!dialog){modalRoot.innerHTML='';return;}
    let content='';
    if(dialog.type==='complete'){
      content=`<div class="center"><div class="modal-symbol">${ico('trophy',29)}</div><div class="eyebrow">QUEST COMPLETE</div><h2>${dialog.reward?'Nicely done!':'A familiar victory!'}</h2><p>${htmlEscape(dialog.quest.title)} is now part of your adventure journal.${dialog.reward?' Your first completion earned experience points.':' Replays are for fun and do not award extra XP.'}</p><div class="reward">${dialog.reward?'+'+dialog.reward+' XP':'Quest replayed'}</div><div class="modal-actions"><button class="btn btn-primary btn-full" data-action="next-from-modal">Next adventure ${ico('arrow',17)}</button></div></div>`;
    }else if(dialog.type==='clear'){
      content=`<div class="modal-symbol">${ico('trash',27)}</div><h2>Reset your journey?</h2><p>This will permanently erase your local favorites, completed quests, XP and settings. Export your progress first if you want a backup.</p><div class="modal-actions"><button class="btn btn-light" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="confirm-clear">Yes, reset</button></div>`;
    }else if(dialog.type==='quest'){
      const q=byId[dialog.id];const savedHere=saved.favorites.includes(q.id);
      content=`<div class="modal-symbol">${ico(categoryInfo(q.category).symbol,26)}</div><div class="eyebrow">${categoryInfo(q.category).name} · ${q.minutes} MIN · +${q.xp} XP</div><h2>${htmlEscape(q.title)}</h2><p>${htmlEscape(q.description)}</p><div class="modal-actions"><button class="btn btn-light" data-action="modal-favorite" data-id="${q.id}">${ico('heart',16)} ${savedHere?'Unsave':'Save'}</button><button class="btn btn-primary" data-action="modal-play" data-id="${q.id}">${ico('arrow',16)} Play this</button></div>`;
    }
    modalRoot.innerHTML=`<div class="modal-backdrop" data-action="backdrop"><div class="modal-sheet" role="dialog" aria-modal="true" aria-label="${dialog.type==='complete'?'Quest complete':dialog.type==='clear'?'Reset progress':'Quest details'}"><div style="display:flex;justify-content:flex-end;margin:-10px -8px 7px"><button class="icon-button" data-action="close-modal" aria-label="Close dialog">${ico('close',17)}</button></div>${content}</div></div>`;
    modalRoot.querySelector('.icon-button')?.focus({preventScroll:true});
  }
  function showToast(message){
    toastEl.textContent=message;toastEl.classList.add('show');
    clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toastEl.classList.remove('show'),2800);
  }
  function updateFilter(key,value){
    if(saved.activeQuestId){showToast('Your active quest is still in progress.');render();return;}
    saved.filters[key]=value;saved.currentQuestId=null;save();render();
  }
  function toggleFavorite(id){
    if(!byId[id])return;
    const idx=saved.favorites.indexOf(id);
    if(idx<0){saved.favorites.push(id);showToast('Saved for later.');}
    else{saved.favorites.splice(idx,1);showToast('Removed from favorites.');}
    save();render();
  }
  function startQuest(id){
    if(saved.activeQuestId && saved.activeQuestId!==id){showToast('Finish or skip your active quest first.');return;}
    if(!byId[id])return;
    saved.currentQuestId=id;saved.activeQuestId=id;dialog=null;currentView='discover';save();render();showToast('Quest accepted. You got this!');
  }
  function completeQuest(){
    const id=saved.activeQuestId;
    if(!id||!byId[id])return;
    const reward=completeIds().has(id)?0:byId[id].xp;
    saved.history.push({id,type:'completed',when:Date.now(),xp:reward});
    saved.activeQuestId=null;saved.currentQuestId=null;
    save();dialog={type:'complete',reward,quest:byId[id]};render();
  }
  async function importBackup(file){
    if(!file)return;
    try{
      if(file.size>2_000_000)throw Error('Backup is too large.');
      const payload=JSON.parse(await file.text());
      if(!payload||payload.app!=='SIDEQUEST'||payload.version!==1||!payload.data)throw Error('This is not a SIDEQUEST v1 backup.');
      saved=validate(payload.data);save();currentView='journey';dialog=null;render();showToast('Backup imported!');
    }catch(e){showToast(e.message||'Could not import the backup.');}
  }
  function exportBackup(){
    const payload={app:'SIDEQUEST',version:1,exportedAt:new Date().toISOString(),data:saved};
    const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);const anchor=document.createElement('a');anchor.href=url;anchor.download='sidequest-backup-'+new Date().toISOString().slice(0,10)+'.json';document.body.append(anchor);anchor.click();anchor.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);showToast('Backup downloaded.');
  }
  function perform(action,el){
    switch(action){
      case 'roll':generateQuest();break;
      case 'reset-filters': saved.filters=DEFAULT().filters;saved.currentQuestId=null;save();render();break;
      case 'start':if(saved.currentQuestId)startQuest(saved.currentQuestId);break;
      case 'skip':saved.activeQuestId=null;save();generateQuest();showToast('Skipped. Find something that suits you.');break;
      case 'complete':completeQuest();break;
      case 'favorite':if(saved.currentQuestId)toggleFavorite(saved.currentQuestId);break;
      case 'modal-favorite':toggleFavorite(el.dataset.id);break;
      case 'modal-play':startQuest(el.dataset.id);break;
      case 'close-modal':dialog=null;render();break;
      case 'backdrop':if(el.classList.contains('modal-backdrop')){dialog=null;render();}break;
      case 'next-from-modal':dialog=null;currentView='discover';generateQuest();break;
      case 'clear':dialog={type:'clear'};renderModal();break;
      case 'confirm-clear':saved=DEFAULT();dialog=null;currentView='discover';save();render();showToast('Local progress cleared.');break;
      case 'export':exportBackup();break;
    }
  }
  function clickHandler(e){
    const nav=e.target.closest('[data-nav]');
    if(nav){const newView=nav.dataset.nav;if(!['discover','saved','journey','settings'].includes(newView))return;currentView=newView;dialog=null;render();window.scrollTo({top:0,behavior:'instant'});return;}
    const cat=e.target.closest('[data-category]');
    if(cat){updateFilter('category',cat.dataset.category);return;}
    const questLink=e.target.closest('[data-open-quest]');
    if(questLink){dialog={type:'quest',id:questLink.dataset.openQuest};renderModal();return;}
    const action=e.target.closest('[data-action]');
    if(action && (action.dataset.action!=='backdrop'||e.target===action)) perform(action.dataset.action,action);
  }
  app.addEventListener('click',clickHandler);
  modalRoot.addEventListener('click',clickHandler);
  app.addEventListener('change',e=>{
    if(e.target.matches('[data-filter]'))updateFilter(e.target.dataset.filter,e.target.value);
    if(e.target.id==='backup-input'){importBackup(e.target.files?.[0]);e.target.value='';}
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape' && dialog){dialog=null;render();}});
  if(!saved.currentQuestId && !saved.activeQuestId){
    const initial=QUESTS[Math.floor(Math.random()*QUESTS.length)];saved.currentQuestId=initial.id;save();
  }
  render();
  if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1')){
    window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}));
  }
})();
