/**
 * مائارىپ ۋە بالىلار پىسخىكىسى Chrome قىستۇرمىسى
 * بىخەتەر، نۆل ئىز قوغلاش، پەقەت يەرلىك ساقلىغۇچ ئىشلىتىلىدۇ.
 */

'use strict';

// ئاساسىي سانلىق مەلۇمات ئامبىرى (ئەڭ يېڭى 3 كۈنلۈك قىلىپ ھېسابلىنىدۇ)
const NOW = Date.now();
const ONE_HOUR = 3600 * 1000;
const ONE_DAY = 24 * ONE_HOUR;

const INITIAL_ARTICLES = [
  {
    id: "edu_01",
    category: "edu",
    categoryName: "ئىلغار مائارىپ",
    title: "سۈنئىي ئىدراكنىڭ تەرەققىياتى ۋە بالىلارنىڭ مۇستەقىل تەپەككۇر قىلىش ئىقتىدارى",
    timestamp: NOW - (3 * ONE_HOUR), // 3 سائەت ئىلگىرى
    author: "ئىلمىي تەتقىقات گۇرۇپپىسى",
    summary: "بۈگۈنكى يۇقىرى تېخنىكا دەۋرىدە سۈنئىي ئەقىل بالىلارنىڭ تەييار جاۋابقا تايىنىۋېلىشىنى ئاسانلاشتۇرماقتا. ئىلغار مائارىپچىلارنىڭ قارىشىچە، بالىلارغا جاۋابنى تېپىشنى ئەمەس، توغرا سوئال قويۇش ۋە مەسىلىنى چوڭقۇر تەھلىل قىلىش قابىلىيىتىنى ئۆگىتىش مائارىپنىڭ بىرىنچى دەرىجىلىك ۋەزىپىسىدۇر.",
    content: `بۈگۈنكى زامانىۋى تېخنىكا دەۋرىدە سۈنئىي ئىدراك قوراللىرى تۇرمۇشىمىزنىڭ ھەممە ساھەسىگە سىڭىپ كىرمەكتە. بۇ تەرەققىيات بالىلارنىڭ ئۇچۇرغا ئېرىشىشىنى تېزلەتكەن بىلەن، ئۇلارنىڭ مۇستەقىل ئويلىنىش ۋە ئىزدەنگۈچىلىك روھىغا بىر قاتار خىرىسلارنى ئېلىپ كېلىۋاتىدۇ.

ئىلغار مائارىپ نەزەرىيەلىرىدە ئوتتۇرىغا قويۇلۇشىچە، بالىلارغا پەقەت ئۇچۇرلارنى ئەستە تۇتۇشنى تاپشۇرۇش ئەمەس، بەلكى بېرىلگەن ئۇچۇرلارنى سۈزۈش، توغرا-خاتاسىنى پەرقلەندۈرۈش ۋە ئۆز تەپەككۇرى ئارقىلىق يېڭى ھەل قىلىش چارىسى يارىتىش كۆرسىتىلمەكتە. 

مەكتەپ ۋە ئائىلە بىرلەشمە ھالدا بالىلارنى ئىزدىنىشكە يېتەكلەيدىغان ئوچۇق سوئاللار بىلەن رىغبەتلەندۈرۈشى لازىم. بۇ ئۇسۇل بالىلارنىڭ ھەرگىز تېخنىكىنىڭ تۇتقۇنى بولۇپ قالماستىن، ئەكسىچە ئەخلاقلىق ۋە پەم-پاراسەتلىك ئىزباسارلاردىن بولۇپ يېتىشىپ چىقىشىغا يول ئاچىدۇ.`
  },
  {
    id: "psych_01",
    category: "psych",
    categoryName: "بالىلار پىسخىكىسى",
    title: "بالىلاردىكى بېسىم ۋە ئۇنى توغرا باشقۇرۇشتا ئاتا-ئانىنىڭ ئەخلاقىي پوزىتسىيەسى",
    timestamp: NOW - (14 * ONE_HOUR), // 14 سائەت ئىلگىرى
    author: "بالىلار پىسخولوگىيە مەركىزى",
    summary: "بالىلاردىكى سۈكۈت قىلىش ياكى زىيادە ئاچچىقلىنىش ئۇلارنىڭ ئىچكى پسىخىكىلىق بېسىمىنىڭ ئىپادىسى بولۇشى مۇمكىن. ئاتا-ئانىلارنىڭ بالىغا سەۋرچانلىق، مېھرىبانلىق ۋە سەمىمىيلىك بىلەن قۇلاق سېلىشى ئۇلارنىڭ روھىي بىخەتەرلىك ھېس قىلىشىدىكى ئەڭ چوڭ كاپالەتتۇر.",
    content: `بالىلىق دەۋرى پەقەت جىسمانىي جەھەتتىنلا ئەمەس، بەلكى روھىي ۋە پسىخىكىلىق جەھەتتىن دۇنيانى تونۇيدىغان ئەڭ نازۇك دەۋردۇر. كۆپىنچە ئەھۋالدا چوڭلار ئۆز بېسىمىنى بىلمەستىن بالىلارغا ئارتىپ قويىدۇ.

پسىخولوگلارنىڭ تەتقىقاتىغا قارىغاندا، بالىلاردىكى زىيادە چېكىنىش ياكى تاجاۋۇزكار خاراكتېر كۆپىنچە ئائىلىدىكى تەڭپۇڭسىز مۇناسىۋەت ياكى چۈشىنىلمەسلىكتىن كېلىپ چىقىدۇ. ئەھلى سۈننەت تەلىماتىدىكى بالىغا مېھرىبانلىق قىلىش، ئۇلارنى كىچىك دەپ قارىماي ئىززەت-ھۆرمىتىنى ساقلاش ئەخلاقى بۇ جەھەتتە ئەڭ مۇكەممەل داۋادۇر.

بالا بىلەن ھەر كۈنى ئاز دېگەندە 20 مىنۇت قەلب سىردىشىش ۋە ئۇنىڭ گېپىنى بۆلمەي ئاڭلاش ئۇنىڭ روھىي تەرەققىياتىغا ئاجايىپ ئىجابىي كۈچ بېغىشلايدۇ.`
  },
  {
    id: "admin_01",
    category: "admin",
    categoryName: "مەكتەپ باشقۇرۇش",
    title: "زامانىۋى مائارىپ ئورگانلىرىدا ئەخلاققا تايانغان رەھبەرلىك ۋە ئوقۇتقۇچىلار روھى",
    timestamp: NOW - (1.2 * ONE_DAY), // 1.2 كۈن ئىلگىرى
    author: "مائارىپ باشقۇرۇش مۇنبىرى",
    summary: "مۇۋەپپەقىيەتلىك مەكتەپ پەقەت بىنالارنىڭ ھەيۋىتى بىلەن ئەمەس، بەلكى كۈچلۈك مەكتەپ مەدەنىيىتى ۋە ئوقۇتقۇچىلارغا بولغان ھۆرمەت ئاساسىدا قۇرۇلىدۇ. ئادىل باشقۇرۇش سىستېمىسى ئوقۇتقۇچىلارنىڭ مەسئۇلىيەتچانلىقىنى بىر قاتلايدۇ.",
    content: `مەكتەپ باشقۇرۇشتا پەقەتلا بۇيرۇقۋازلىققا تايىنىش بۈگۈنكى كۈندە ئۆز دەۋرىنى تاماملىدى. بۈگۈنكى ئىلغار مائارىپ ئورگانلىرىدا رەھبەرلىك دېگەنلىك خىزمەتداشلىرىغا ئۈلگە بولۇش ۋە ئۇلارنىڭ كەسپىي يۈكسىلىشىگە سەھنە ھازىرلاپ بېرىش دەپ قارالماقتا.

مەكتەپ مەسئۇللىرى ئەڭ ئاۋۋال ئوقۇتقۇچىلارنىڭ پسىخولوگىيەلىك راھەتلىكىنى كاپالەتلەندۈرۈشى، ئۇلارغا ئىلمىي ئەركىنلىك بېرىشى ھەمدە ئادىل باھالاش تۈزۈمى ئورنىتىشى زۆرۈردۇر.

ئوقۇتقۇچىسى قەدىرلەنگەن، ئوقۇغۇچىسى مېھىر بىلەن تەربىيەلەنگەن بىر مائارىپ ئورگىنى ھەمىشە جەمئىيەتكە ياراملىق، ئەركىن پىكىرلىك ۋە يۈكسەك مىللىي ئاڭغا ئىگە شەخسلەرنى يېتىشتۈرۈپ چىقالايدۇ.`
  },
  {
    id: "edu_02",
    category: "edu",
    categoryName: "ئىلغار مائارىپ",
    title: "مۇتەئەللىق ئەمەس ئىزدىنىش: بالىلارغا ئۆگىنىشنى قانداق سۆيدۈرۈش كېرەك؟",
    timestamp: NOW - (2 * ONE_DAY), // 2 كۈن ئىلگىرى
    author: "پىداگوگىكا يېڭىلىقلىرى",
    summary: "بالىلارغا دەرسلىكنى مەجبۇرىي يادلىتىش ئۇلارنىڭ ئۆگىنىش ھەۋىسىنى ئۆلتۈرىدۇ. كۆزىتىش، تەجرىبە قىلىش ۋە تەبىئەت بىلەن ئۇچرىشىش ئارقىلىق ئۆگىتىش ئۇسۇلى بالىلارنى ئۆمۈرلۈك ئۆگەنگۈچىگە ئايلاندۇرىدۇ.",
    content: `نۇرغۇن مائارىپ تەتقىقاتلىرى ئىسپاتلىدىكى، ئىمتىھان ئۈچۈنلا ئۆگىتىلگەن بىلىملەر بالىنىڭ زېھنىدە ئۇزاق مەزگىللىك قىممەت يارىتالمايدۇ. ئىلغار مائارىپ ئۇسۇلى بالىلارنىڭ تەبىئىي قىزىقىشىنى قوزغاشنى تەلەپ قىلىدۇ.

بالىلار بىر مەسىلىنى ئۆز قولى بىلەن تەجرىبە قىلىپ كۆرگەندە، خاتالىشىش ئارقىلىق توغرىسىنى تاپقاندا، ئۇلاردا ھەقىقىي بىلىم قۇرۇلمىسى شەكىللىنىدۇ. 

شۇڭلاشقا، مەيلى ئائىلىدە بولسۇن ياكى سىنىپتا بولسۇن، كىتاب يۈزىدىكى نەزەرىيەلەرنى كۈندىلىك ھايات مىساللىرى بىلەن تۇتاشتۇرۇش تەۋسىيە قىلىنىدۇ.`
  },
  {
    id: "psych_02",
    category: "psych",
    categoryName: "بالىلار پىسخىكىسى",
    title: "ئېكرانغا بېقىنىپ قېلىش ۋە بالىلارنىڭ ھېسسىيات قۇرۇلمىسىدىكى سۇنۇقلار",
    timestamp: NOW - (2.5 * ONE_DAY), // 2.5 كۈن ئىلگىرى
    author: "يەرلىك پىسخىكا گۇرۇپپىسى",
    summary: "ئۇزۇن ۋاقىت تېلېفون ياكى تاختا كومپيۇتېرغا قاراش بالىلارنىڭ تاقەتسىزلىكىنى ئاشۇرۇپ، باشقىلارنىڭ ھېسسىياتىنى چۈشىنىش قابىلىيىتىنى ئاجىزلاشتۇرىدۇ. بۇ ئەھۋالنى توغرا پىسخولوگىيەلىك ئۇسۇل بىلەن تۈزىتىش قەدەممۇقەدەم ئېلىپ بېرىلىشى كېرەك.",
    content: `ھازىرقى دەۋردە رەقەملىك دۇنيا بالىلارغا ئىنتايىن تېز ۋە مول مەۋھۇم ھۇزۇر بېغىشلىماقتا. بۇ خىل ئۈزلۈكسىز غىدىقلىنىش بالىلارنىڭ رېئال تۇرمۇشتىكى ئاددىي ۋە سۈرئىتى ئاستا جەريانلارغا بەرداشلىق بېرەلمەسلىكىنى كەلتۈرۈپ چىقىرىدۇ.

ئاتا-ئانىلار تېلېفوننى بالىنىڭ قولىدىن بىرلا ۋاقىتتا جېدەل-ماجەرا بىلەن تارتىۋالسا، بالىدا قارشىلىشىش پسىخىكىسى كۈچىيىدۇ. ئەكسىچە، تېلېفوننىڭ ئورنىنى باسالايدىغان ھەقىقىي ئويۇنلار، كىتاب ئوقۇش سائەتلىرى ياكى تەنتەربىيە پائالىيەتلىرى بىلەن ئالماشتۇرۇش لازىم.

بۇ جەرياندا بالىغا چەكلىمىنىڭ سەۋەبىنى چىرايلىق ۋە چۈشىنىشلىك ھالدا شەرھلەپ بېرىش پىسخىكىلىق يېقىنلىقنى كۈچەيتىدۇ.`
  }
];

// دۆلەت ۋە ھالەت ئۆزگەرگۈچىلىرى
let currentArticles = [];
let currentCategory = 'all';
let searchQuery = '';
let bookmarkedIds = new Set();

// دەسلەپكى ئىجرا قىلىش
document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initStorage();
    setupEventListeners();
    renderArticles();
  } catch (error) {
    console.error("سىستېما قوزغىلىشتا خاتالىق يۈز بەردى:", error);
  }
});

/**
 * يەرلىك ساقلىغۇچنى دەسلەپلەشتۈرۈش (بىخەتەر ھەم تاشقى دۇنياغا باغلانمىغان)
 */
async function initStorage() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['savedBookmarks'], (result) => {
      if (result.savedBookmarks && Array.isArray(result.savedBookmarks)) {
        bookmarkedIds = new Set(result.savedBookmarks);
      }
      // 3 كۈن ئىچىدىكى سۈزگۈچ: پەقەت ئەڭ يېڭى 3 كۈنلۈك (72 سائەت) ماقالىلەر
      const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
      currentArticles = INITIAL_ARTICLES.filter(item => (NOW - item.timestamp) <= THREE_DAYS_MS);
      resolve();
    });
  });
}

/**
 * ئېكران ئېلېمېنتلىرىنىڭ ھەرىكەتلىرىنى ئۇلاش
 */
function setupEventListeners() {
  // تۈر تاللاش كۇنۇپكىلىرى
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCategory = e.target.getAttribute('data-cat');
      renderArticles();
    });
  });

  // ئىزدەش قۇتىسى
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderArticles();
    });
  }

  // ئوقۇش كۆزنىكىنى تاقاش
  const closeBtn = document.getElementById('closeReaderBtn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeReader);
  }
}

/**
 * ماقالىلەر تىزىملىكىنى ئېكرانغا سىزىش
 */
function renderArticles() {
  const feed = document.getElementById('articlesFeed');
  const countLabel = document.getElementById('articleCount');
  if (!feed) return;

  feed.innerHTML = '';

  // تۈر ۋە ئىزدەش بويىچە سۈزۈش
  const filtered = currentArticles.filter(item => {
    const matchCat = (currentCategory === 'all') || (item.category === currentCategory);
    const matchSearch = !searchQuery || 
      item.title.toLowerCase().includes(searchQuery) || 
      item.summary.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  // سانىنى يېڭىلاش
  if (countLabel) {
    countLabel.textContent = `${filtered.length} پارچە تەۋسىيە`;
  }

  if (filtered.length === 0) {
    feed.innerHTML = `
      <div class="empty-state">
        <p>مەزمۇن تېپىلمىدى.</p>
        <p>باشقا ئاچقۇچلۇق سۆز ئارقىلىق ئىزدەپ بېقىڭ ياكى تۈرنى ئالماشتۇرۇڭ.</p>
      </div>
    `;
    return;
  }

  // ھەر بىر كارتىنى بىخەتەر ھالدا ھاسىل قىلىش
  filtered.forEach(article => {
    const card = document.createElement('article');
    card.className = 'article-card';

    const isSaved = bookmarkedIds.has(article.id);
    const categoryClass = getCategoryClass(article.category);
    const timeAgo = formatTimeAgo(article.timestamp);

    card.innerHTML = `
      <div class="card-top">
        <span class="badge-category ${categoryClass}">${escapeHTML(article.categoryName)}</span>
        <span class="card-date">${timeAgo}</span>
      </div>
      <h3 class="card-title">${escapeHTML(article.title)}</h3>
      <p class="card-summary">${escapeHTML(article.summary)}</p>
      <div class="card-actions">
        <button class="action-btn bookmark-trigger ${isSaved ? 'bookmarked' : ''}" data-id="${article.id}">
          <svg viewBox="0 0 24 24"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
          <span>${isSaved ? 'ساقلاندى' : 'ساقلاش'}</span>
        </button>
        <button class="action-btn read-trigger" data-id="${article.id}">
          <svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
          <span>تولۇق ئوقۇش</span>
        </button>
      </div>
    `;

    // ماقالىنى تولۇق ئوقۇش كۇنۇپكىسى
    const readBtn = card.querySelector('.read-trigger');
    readBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openReader(article);
    });

    // ساقلاش (Bookmark) كۇنۇپكىسى
    const bookmarkBtn = card.querySelector('.bookmark-trigger');
    bookmarkBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(article.id);
    });

    // كارتىنىڭ ئۆزىنى باسسىمۇ بىۋاسىتە ئوقۇش
    card.addEventListener('click', () => {
      openReader(article);
    });

    feed.appendChild(card);
  });
}

/**
 * ماقالىنى تاشقى ئېلانسىز پاكىز ئوقۇش كۆزنىكى
 */
function openReader(article) {
  const modal = document.getElementById('readerModal');
  const catBadge = document.getElementById('modalCategory');
  const titleEl = document.getElementById('modalTitle');
  const metaEl = document.getElementById('modalMeta');
  const bodyEl = document.getElementById('modalBody');

  if (!modal || !article) return;

  catBadge.textContent = article.categoryName;
  catBadge.className = `badge-category ${getCategoryClass(article.category)}`;
  titleEl.textContent = article.title;
  metaEl.textContent = `ئاپتورى: ${article.author} | يوللانغان ۋاقتى: ${formatTimeAgo(article.timestamp)}`;
  
  // پاراگرافلارنى ئابزاس قائىدىسىگە ئۇيغۇن تەقسىملەش
  const paragraphs = article.content.split('\n\n');
  bodyEl.innerHTML = '';
  paragraphs.forEach(pText => {
    if (pText.trim()) {
      const p = document.createElement('p');
      p.textContent = pText.trim();
      bodyEl.appendChild(p);
    }
  });

  modal.classList.add('active');
}

/**
 * ئوقۇش كۆزنىكىنى تاقاش
 */
function closeReader() {
  const modal = document.getElementById('readerModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

/**
 * قىستۇرما ئىچىدە ساقلاش (Bookmark)
 */
function toggleBookmark(articleId) {
  if (bookmarkedIds.has(articleId)) {
    bookmarkedIds.delete(articleId);
  } else {
    bookmarkedIds.add(articleId);
  }

  // chrome.storage.local غا بىخەتەر يېزىش
  chrome.storage.local.set({ savedBookmarks: Array.from(bookmarkedIds) }, () => {
    renderArticles();
  });
}

/**
 * تۈر ئۇسلۇب كودىنى قايتۇرۇش
 */
function getCategoryClass(category) {
  switch (category) {
    case 'edu': return 'cat-edu';
    case 'psych': return 'cat-psych';
    case 'admin': return 'cat-admin';
    default: return 'cat-edu';
  }
}

/**
 * ئۇيغۇرچە يېقىنقى ۋاقىت پەرقىنى ھېسابلاش
 */
function formatTimeAgo(time) {
  const diff = Date.now() - time;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return 'ئەمدىلا تەۋسىيە قىلىندى';
  if (hours < 24) return `${hours} سائەت بۇرۇن`;
  const days = Math.floor(hours / 24);
  return `${days} كۈن بۇرۇن`;
}

/**
 * XSS ھۇجۇملىرىدىن مۇداپىئەلىنىش ئۈچۈن قاچۇرۇش
 */
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}