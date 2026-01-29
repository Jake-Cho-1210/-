// App State
const state = {
  currentView: 'feed',
  currentCategory: 'all',
  currentSort: 'hot',
  currentLanguage: 'all',
  searchQuery: '',
  selectedPost: null,
  user: null,
  votes: {},
  likes: {},
  views: {},
  comments: {}
};

// DOM Elements
const elements = {
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  leftSidebar: document.getElementById('leftSidebar'),
  sidebarOverlay: document.getElementById('sidebarOverlay'),
  logoBtn: document.getElementById('logoBtn'),
  searchInput: document.getElementById('searchInput'),
  themeToggle: document.getElementById('themeToggle'),
  myPageBtn: document.getElementById('myPageBtn'),
  authButtons: document.getElementById('authButtons'),
  userMenu: document.getElementById('userMenu'),
  userName: document.getElementById('userName'),
  loginBtn: document.getElementById('loginBtn'),
  signupBtn: document.getElementById('signupBtn'),
  logoutBtn: document.getElementById('logoutBtn'),
  categoryList: document.getElementById('categoryList'),
  languageTabs: document.getElementById('languageTabs'),
  postsFeed: document.getElementById('postsFeed'),
  feedView: document.getElementById('feedView'),
  postDetailView: document.getElementById('postDetailView'),
  myPageView: document.getElementById('myPageView'),
  authModal: document.getElementById('authModal'),
  modalClose: document.getElementById('modalClose'),
  loginForm: document.getElementById('loginForm'),
  signupForm: document.getElementById('signupForm'),
  forgotPasswordForm: document.getElementById('forgotPasswordForm')
};

// Initialize App
function init() {
  loadState();
  loadTheme();
  setupEventListeners();
  renderPosts();
  checkAuth();
}

// Load state from localStorage
function loadState() {
  const saved = localStorage.getItem('travexlo_state');
  if (saved) {
    const parsed = JSON.parse(saved);
    state.user = parsed.user || null;
    state.votes = parsed.votes || {};
    state.likes = parsed.likes || {};
    state.views = parsed.views || {};
    state.comments = parsed.comments || {};
  }
}

// Save state to localStorage
function saveState() {
  localStorage.setItem('travexlo_state', JSON.stringify({
    user: state.user,
    votes: state.votes,
    likes: state.likes,
    views: state.views,
    comments: state.comments
  }));
}

// Theme Management
function loadTheme() {
  const theme = localStorage.getItem('travexlo_theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('travexlo_theme', next);
}

// Auth Management
function checkAuth() {
  if (state.user) {
    elements.authButtons.style.display = 'none';
    elements.userMenu.style.display = 'block';
    elements.userName.textContent = state.user.username;
  } else {
    elements.authButtons.style.display = 'flex';
    elements.userMenu.style.display = 'none';
  }
}

function login(email, password) {
  // Simulated login
  state.user = {
    id: Date.now(),
    email: email,
    username: email.split('@')[0],
    nickname: '',
    name: '',
    age: '',
    nationality: '',
    followers: 0,
    following: 0
  };
  saveState();
  checkAuth();
  closeModal();
}

function signup(email, username, password, nationality) {
  // Simulated signup
  state.user = {
    id: Date.now(),
    email: email,
    username: username,
    nickname: username,
    name: '',
    age: '',
    nationality: nationality,
    followers: 0,
    following: 0
  };
  saveState();
  checkAuth();
  closeModal();
}

function logout() {
  state.user = null;
  saveState();
  checkAuth();
  if (state.currentView === 'mypage') {
    showFeed();
  }
}

// Modal Management
function openModal(form) {
  elements.authModal.classList.add('active');
  elements.loginForm.style.display = form === 'login' ? 'block' : 'none';
  elements.signupForm.style.display = form === 'signup' ? 'block' : 'none';
  elements.forgotPasswordForm.style.display = form === 'forgot' ? 'block' : 'none';
}

function closeModal() {
  elements.authModal.classList.remove('active');
}

// Mobile Sidebar
function toggleMobileSidebar() {
  elements.leftSidebar.classList.toggle('active');
  elements.sidebarOverlay.classList.toggle('active');
}

function closeMobileSidebar() {
  elements.leftSidebar.classList.remove('active');
  elements.sidebarOverlay.classList.remove('active');
}

// Categories with language support
const categoriesWithLanguage = ['korean-language', 'audio-guides', 'restaurants', 'local-area'];

function setCategory(category) {
  state.currentCategory = category;
  state.currentLanguage = 'all';
  
  // Update active state
  document.querySelectorAll('.category-item').forEach(item => {
    item.classList.toggle('active', item.dataset.category === category);
  });
  
  // Show/hide language tabs
  if (categoriesWithLanguage.includes(category)) {
    elements.languageTabs.style.display = 'flex';
  } else {
    elements.languageTabs.style.display = 'none';
  }
  
  // Reset language tabs
  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.lang === 'all');
  });
  
  renderPosts();
  closeMobileSidebar();
}

function setSort(sort) {
  state.currentSort = sort;
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === sort);
  });
  renderPosts();
}

function setLanguage(lang) {
  state.currentLanguage = lang;
  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.lang === lang);
  });
  renderPosts();
}

// Post Management
const postsData = [
  // Sample data
  {
    id: 1,
    category: 'korean-language',
    categoryLabel: 'Korean Language',
    author: 'user1',
    title: 'Learning Korean',
    content: 'This is a post about learning Korean.',
    preview: 'This is a post about learning Korean.',
    image: '',
    time: '1 hour ago',
    votes: 10,
    likes: 5,
    views: 200,
    comments: 3
  },
  // More posts...
];

function getFilteredPosts() {
  let posts = [...postsData];
  
  // Filter by category
  if (state.currentCategory !== 'all') {
    posts = posts.filter(p => p.category === state.currentCategory);
  }
  
  // Filter by language
  if (state.currentLanguage !== 'all') {
    posts = posts.filter(p => p.language === state.currentLanguage);
  }
  
  // Filter by search
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    posts = posts.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.content.toLowerCase().includes(query) ||
      p.author.toLowerCase().includes(query)
    );
  }
  
  // Sort
  switch (state.currentSort) {
    case 'hot':
      posts.sort((a, b) => (b.votes + b.comments * 2) - (a.votes + a.comments * 2));
      break;
    case 'new':
      posts.sort((a, b) => b.timestamp - a.timestamp);
      break;
    case 'top':
      posts.sort((a, b) => b.votes - a.votes);
      break;
  }
  
  return posts;
}

function getPostVotes(postId) {
  const baseVotes = postsData.find(p => p.id === postId)?.votes || 0;
  const userVote = state.votes[postId] || 0;
  return baseVotes + userVote;
}

function getPostLikes(postId) {
  const baseLikes = postsData.find(p => p.id === postId)?.likes || 0;
  const userLiked = state.likes[postId] ? 1 : 0;
  return baseLikes + userLiked;
}

function getPostViews(postId) {
  const baseViews = postsData.find(p => p.id === postId)?.views || 0;
  const additionalViews = state.views[postId] || 0;
  return baseViews + additionalViews;
}

function getPostComments(postId) {
  return state.comments[postId] || [];
}

function vote(postId, direction, event) {
  event.stopPropagation();
  
  const currentVote = state.votes[postId] || 0;
  
  if (direction === 'up') {
    state.votes[postId] = currentVote === 1 ? 0 : 1;
  } else {
    state.votes[postId] = currentVote === -1 ? 0 : -1;
  }
  
  saveState();
  
  if (state.currentView === 'post') {
    renderPostDetail();
  } else {
    renderPosts();
  }
}

function toggleLike(postId, event) {
  event.stopPropagation();
  state.likes[postId] = !state.likes[postId];
  saveState();
  
  if (state.currentView === 'post') {
    renderPostDetail();
  } else {
    renderPosts();
  }
}

function incrementViews(postId) {
  if (!state.views[postId]) {
    state.views[postId] = 1;
    saveState();
  }
}

function addComment(postId, text) {
  if (!state.comments[postId]) {
    state.comments[postId] = [];
  }
  
  state.comments[postId].push({
    id: Date.now(),
    author: state.user?.username || 'Anonymous',
    text: text,
    time: 'Just now',
    timestamp: Date.now()
  });
  
  saveState();
  renderPostDetail();
}

// Render Functions
function renderPosts() {
  const posts = getFilteredPosts();
  
  if (posts.length === 0) {
    elements.postsFeed.innerHTML = `
      <div class="no-posts">
        <p>No posts found</p>
      </div>
    `;
    return;
  }
  
  elements.postsFeed.innerHTML = posts.map(post => {
    const votes = getPostVotes(post.id);
    const likes = getPostLikes(post.id);
    const views = getPostViews(post.id);
    const userVote = state.votes[post.id] || 0;
    const userLiked = state.likes[post.id];
    const comments = getPostComments(post.id);
    const totalComments = post.comments + comments.length;
    
    return `
      <article class="post-card" onclick="openPost(${post.id})">
        <div class="vote-section">
          <button class="vote-btn ${userVote === 1 ? 'upvoted' : ''}" onclick="vote(${post.id}, 'up', event)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="${userVote === 1 ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
          </button>
          <span class="vote-count ${votes > 0 ? 'positive' : votes < 0 ? 'negative' : ''}">${votes}</span>
          <button class="vote-btn ${userVote === -1 ? 'downvoted' : ''}" onclick="vote(${post.id}, 'down', event)">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="${userVote === -1 ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </button>
        </div>
        <div class="post-content">
          <div class="post-header">
            <span class="post-category">${post.categoryLabel}</span>
            <span>•</span>
            <span class="post-author">Posted by ${post.author}</span>
            <span class="post-time">${post.time}</span>
          </div>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-preview">${post.preview}</p>
          ${post.image ? `<img src="${post.image}" alt="" class="post-image" loading="lazy">` : ''}
          <div class="post-actions">
            <button class="action-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              ${totalComments} Comments
            </button>
            <button class="action-btn ${userLiked ? 'liked' : ''}" onclick="toggleLike(${post.id}, event)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="${userLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              ${likes}
            </button>
            <button class="action-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              ${views}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderPostDetail() {
  const post = postsData.find(p => p.id === state.selectedPost);
  if (!post) return;
  
  const votes = getPostVotes(post.id);
  const likes = getPostLikes(post.id);
  const views = getPostViews(post.id);
  const userVote = state.votes[post.id] || 0;
  const userLiked = state.likes[post.id];
  const comments = getPostComments(post.id);
  const totalComments = post.comments + comments.length;
  
  elements.postDetailView.innerHTML = `
    <div class="post-detail">
      <div class="post-detail-header">
        <button class="back-btn" onclick="showFeed()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Feed
        </button>
        <div class="post-detail-meta">
          <span class="post-category">${post.categoryLabel}</span>
          <span>•</span>
          <span>Posted by ${post.author}</span>
          <span>•</span>
          <span>${post.time}</span>
        </div>
        <h1 class="post-detail-title">${post.title}</h1>
      </div>
      <div class="post-detail-body">
        ${post.image ? `<img src="${post.image}" alt="" class="post-detail-image">` : ''}
        ${post.content.split('\n').map(p => p ? `<p>${p}</p>` : '').join('')}
      </div>
      <div class="post-detail-actions">
        <button class="vote-btn ${userVote === 1 ? 'upvoted' : ''}" onclick="vote(${post.id}, 'up', event)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${userVote === 1 ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
        <span class="vote-count ${votes > 0 ? 'positive' : votes < 0 ? 'negative' : ''}">${votes}</span>
        <button class="vote-btn ${userVote === -1 ? 'downvoted' : ''}" onclick="vote(${post.id}, 'down', event)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${userVote === -1 ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
        <button class="action-btn ${userLiked ? 'liked' : ''}" onclick="toggleLike(${post.id}, event)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${userLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          ${likes}
        </button>
        <button class="action-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          ${views}
        </button>
      </div>
      <div class="comments-section">
        <h3 class="comments-header">${totalComments} Comments</h3>
        <div class="comment-form">
          <textarea class="comment-input" id="commentInput" placeholder="${state.user ? 'What are your thoughts?' : 'Log in to comment'}"></textarea>
          <button class="comment-submit" id="commentSubmit" ${!state.user ? 'disabled' : ''}>Comment</button>
        </div>
        <div class="comments-list">
          ${comments.map(comment => `
            <div class="comment">
              <div class="comment-header">
                <div class="comment-avatar">${comment.author[0].toUpperCase()}</div>
                <span class="comment-author">${comment.author}</span>
                <span class="comment-time">• ${comment.time}</span>
              </div>
              <div class="comment-body">${comment.text}</div>
            </div>
          `).join('')}
          ${comments.length === 0 ? `<p style="color: var(--text-secondary); text-align: center; padding: 20px;">No comments yet. Be the first!</p>` : ''}
        </div>
      </div>
    </div>
  `;
  
  // Setup comment submission
  const commentInput = document.getElementById('commentInput');
  const commentSubmit = document.getElementById('commentSubmit');
  
  if (commentSubmit && commentInput) {
    commentSubmit.addEventListener('click', () => {
      const text = commentInput.value.trim();
      if (text && state.user) {
        addComment(post.id, text);
      }
    });
  }
}

function renderMyPage() {
  if (!state.user) {
    openModal('login');
    return;
  }
  
  elements.myPageView.innerHTML = `
    <div class="my-page">
      <div class="my-page-header">
        <div class="profile-section">
          <div class="profile-avatar">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="profile-info">
            <h2>${state.user.nickname || state.user.username}</h2>
            <p>@${state.user.username}</p>
            <div class="profile-stats">
              <div class="profile-stat">
                <span class="profile-stat-number">${state.user.followers}</span>
                <span class="profile-stat-label">Followers</span>
              </div>
              <div class="profile-stat">
                <span class="profile-stat-number">${state.user.following}</span>
                <span class="profile-stat-label">Following</span>
              </div>
            </div>
          </div>
        </div>
        <button class="back-btn" onclick="showFeed()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
      </div>
      <div class="my-page-content">
        <div class="edit-section">
          <h3>Edit Profile</h3>
          <div class="edit-form">
            <div class="edit-row">
              <label>Nickname</label>
              <input type="text" id="editNickname" value="${state.user.nickname || ''}" placeholder="Enter nickname">
            </div>
            <div class="edit-row">
              <label>Name</label>
              <input type="text" id="editName" value="${state.user.name || ''}" placeholder="Enter your name">
            </div>
            <div class="edit-row">
              <label>Age</label>
              <input type="number" id="editAge" value="${state.user.age || ''}" placeholder="Enter your age">
            </div>
          </div>
          <button class="save-btn" onclick="saveProfile()">Save Changes</button>
        </div>
        <div class="my-posts-section">
          <h3>My Activity</h3>
          <div class="no-posts">
            <p>Your posts and activity will appear here</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function saveProfile() {
  const nickname = document.getElementById('editNickname').value;
  const name = document.getElementById('editName').value;
  const age = document.getElementById('editAge').value;
  
  state.user.nickname = nickname;
  state.user.name = name;
  state.user.age = age;
  
  saveState();
  renderMyPage();
}

// View Management
function showFeed() {
  state.currentView = 'feed';
  elements.feedView.style.display = 'block';
  elements.postDetailView.style.display = 'none';
  elements.myPageView.style.display = 'none';
  renderPosts();
}

function openPost(postId) {
  state.currentView = 'post';
  state.selectedPost = postId;
  incrementViews(postId);
  
  elements.feedView.style.display = 'none';
  elements.postDetailView.style.display = 'block';
  elements.myPageView.style.display = 'none';
  
  renderPostDetail();
  window.scrollTo(0, 0);
}

function showMyPage() {
  if (!state.user) {
    openModal('login');
    return;
  }
  
  state.currentView = 'mypage';
  elements.feedView.style.display = 'none';
  elements.postDetailView.style.display = 'none';
  elements.myPageView.style.display = 'block';
  
  renderMyPage();
}

// Event Listeners
function setupEventListeners() {
  // Mobile menu
  elements.mobileMenuBtn.addEventListener('click', toggleMobileSidebar);
  elements.sidebarOverlay.addEventListener('click', closeMobileSidebar);
  
  // Logo click
  elements.logoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    setCategory('all');
    showFeed();
  });
  
  // Theme toggle
  elements.themeToggle.addEventListener('click', toggleTheme);
  
  // My Page
  elements.myPageBtn.addEventListener('click', showMyPage);
  
  // Auth
  elements.loginBtn.addEventListener('click', () => openModal('login'));
  elements.signupBtn.addEventListener('click', () => openModal('signup'));
  elements.logoutBtn.addEventListener('click', logout);
  elements.modalClose.addEventListener('click', closeModal);
  elements.authModal.addEventListener('click', (e) => {
    if (e.target === elements.authModal) closeModal();
  });
  
  // Auth form switches
  document.getElementById('showForgotPassword').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('forgot');
  });
  document.getElementById('showSignupFromLogin').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('signup');
  });
  document.getElementById('showLoginFromSignup').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('login');
  });
  document.getElementById('showLoginFromForgot').addEventListener('click', (e) => {
    e.preventDefault();
    openModal('login');
  });
  
  // Auth form submissions
  document.getElementById('loginFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    login(email, password);
  });
  
  document.getElementById('signupFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const nationality = document.getElementById('signupNationality').value;
    signup(email, username, password, nationality);
  });
  
  document.getElementById('forgotPasswordFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Password reset link sent to your email!');
    openModal('login');
  });
  
  // Categories
  elements.categoryList.addEventListener('click', (e) => {
    const item = e.target.closest('.category-item');
    if (item) {
      setCategory(item.dataset.category);
      showFeed();
    }
  });
  
  // Sort buttons
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => setSort(btn.dataset.sort));
  });
  
  // Language tabs
  document.querySelectorAll('.lang-tab').forEach(tab => {
    tab.addEventListener('click', () => setLanguage(tab.dataset.lang));
  });
  
  // Search
  let searchTimeout;
  elements.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.searchQuery = e.target.value;
      renderPosts();
    }, 300);
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);
