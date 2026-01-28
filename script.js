// Mock Post Data
const posts = [
  {
    id: 1,
    title: "Ultimate Guide to Navigating Seoul's Subway System",
    content: "After living in Seoul for 3 years, I've compiled everything you need to know about the subway. From T-money cards to transfer tips, this guide covers it all. The Seoul Metro is one of the most efficient public transit systems in the world, and once you understand the basics, getting around becomes incredibly easy.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "SeoulExplorer",
    timestamp: "2 hours ago",
    votes: 342,
    comments: 47
  },
  {
    id: 2,
    title: "Hidden Hiking Trail Near Bukhansan - Incredible Views!",
    content: "Discovered this amazing trail that most tourists don't know about. The views of Seoul from the top are absolutely breathtaking, especially during sunset. I'll share the exact location and some tips for the hike. Bring plenty of water and wear proper hiking shoes!",
    category: "activities",
    categoryLabel: "Activities",
    author: "MountainHiker",
    timestamp: "5 hours ago",
    votes: 256,
    comments: 32,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80"
  },
  {
    id: 3,
    title: "Best Cafes in Ikseon-dong for Remote Work",
    content: "Working remotely in Korea? Ikseon-dong has some fantastic cafes with great wifi, plenty of outlets, and amazing coffee. Here are my top 5 picks after testing dozens of spots over the past month. Most have quiet corners perfect for video calls.",
    category: "local-area",
    categoryLabel: "Local Area",
    author: "DigitalNomadKR",
    timestamp: "8 hours ago",
    votes: 189,
    comments: 28
  },
  {
    id: 4,
    title: "Weekend Trip to Jeonju - Traditional Hanok Village",
    content: "Just got back from an incredible weekend in Jeonju. The Hanok Village is even more beautiful in person. I tried the famous bibimbap at the original restaurant and explored the traditional paper museum. Here's my complete itinerary for a perfect 2-day trip.",
    category: "travel-area",
    categoryLabel: "Travel Area",
    author: "KoreaWanderer",
    timestamp: "12 hours ago",
    votes: 421,
    comments: 56,
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80"
  },
  {
    id: 5,
    title: "Authentic Korean BBQ Spot in Mapo-gu - Local Secret",
    content: "Found this incredible Korean BBQ place that's been run by the same family for 40 years. No English menu, but the meat quality is unmatched and prices are very reasonable. The owner is super friendly and will help you grill if you're new to KBBQ.",
    category: "restaurants",
    categoryLabel: "Restaurants",
    author: "FoodieSeoul",
    timestamp: "1 day ago",
    votes: 534,
    comments: 72,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80"
  },
  {
    id: 6,
    title: "Korean Language Exchange Partners - Weekly Meetup",
    content: "We're organizing weekly language exchange meetups in Hongdae. Native Korean speakers looking to practice English, and English speakers wanting to learn Korean. Every Saturday at 3 PM. All levels welcome! Great way to make friends and improve your language skills.",
    category: "korean-language",
    categoryLabel: "Korean Language",
    author: "LanguageLearner",
    timestamp: "1 day ago",
    votes: 287,
    comments: 41
  },
  {
    id: 7,
    title: "New Audio Guide for Gyeongbokgung Palace Available",
    content: "Just released a comprehensive audio guide for Gyeongbokgung Palace covering all the major buildings and hidden stories. Available in English, French, German, and Russian. Perfect for history buffs who want more than the standard tour information.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "HistoryBuff",
    timestamp: "2 days ago",
    votes: 167,
    comments: 23
  },
  {
    id: 8,
    title: "Looking for Roommate - Gangnam Area, Modern Apartment",
    content: "Hi everyone! I have a room available in my 2-bedroom apartment near Gangnam Station. Modern building, great amenities including gym and rooftop. Looking for a clean, respectful roommate. Month-to-month lease available. DM for details and photos.",
    category: "rent",
    categoryLabel: "Rent",
    author: "GangnamResident",
    timestamp: "2 days ago",
    votes: 45,
    comments: 18
  },
  {
    id: 9,
    title: "Essential Korean Phrases for Your First Week",
    content: "Compiled a list of 50 essential Korean phrases that will help you survive your first week. From ordering food to asking for directions, these phrases are practical and easy to remember. Includes pronunciation guide and common responses you might hear.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "KoreanBasics",
    timestamp: "3 days ago",
    votes: 612,
    comments: 89
  },
  {
    id: 10,
    title: "Cherry Blossom Festival Dates Announced for Spring",
    content: "The official dates for this year's cherry blossom festivals have been announced! Seoul's Yeouido festival will be from April 5-11. I'll be posting a complete guide to all the best viewing spots across Korea, including some hidden gems away from the crowds.",
    category: "activities",
    categoryLabel: "Activities",
    author: "SpringWatcher",
    timestamp: "3 days ago",
    votes: 723,
    comments: 94,
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80"
  },
  {
    id: 11,
    title: "Affordable Studio Apartments in Hongdae Area",
    content: "Guide to finding affordable studio apartments (officetels) in Hongdae. Average prices, what to expect, dealing with real estate agents, and tips for negotiating key money. Updated for current market conditions.",
    category: "rent",
    categoryLabel: "Rent",
    author: "HousingHelper",
    timestamp: "4 days ago",
    votes: 234,
    comments: 45
  },
  {
    id: 12,
    title: "Best Seafood Market Tour in Busan",
    content: "Jagalchi Market in Busan is a must-visit for seafood lovers. Here's my guide on how to navigate the market, pick the freshest catches, and have them prepared on the spot. Also includes nearby restaurant recommendations if you prefer to sit down.",
    category: "travel-area",
    categoryLabel: "Travel Area",
    author: "SeafoodFan",
    timestamp: "4 days ago",
    votes: 389,
    comments: 52
  }
];

// Mock Chat Contacts
const mockContacts = [
  { id: 'user1', name: 'SeoulExplorer', lastMessage: 'Thanks for the tip!' },
  { id: 'user2', name: 'MountainHiker', lastMessage: 'See you on the trail!' },
  { id: 'user3', name: 'FoodieSeoul', lastMessage: 'That place was amazing!' },
  { id: 'user4', name: 'KoreaWanderer', lastMessage: 'Have a great trip!' }
];

// Category name mapping
const categoryNames = {
  'all': 'All Posts',
  'korea-starter-pack': 'Korea Starter Pack',
  'activities': 'Activities',
  'local-area': 'Local Area',
  'travel-area': 'Travel Area',
  'restaurants': 'Restaurants',
  'korean-language': 'Korean Language',
  'audio-guides': 'Audio Guides',
  'rent': 'Rent'
};

// State
let currentCategory = 'all';
let currentSort = 'hot';
let searchQuery = '';
let currentUser = null;
let currentChatContact = null;
let chatMessages = {};

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const feedTitle = document.getElementById('feedTitle');
const searchInput = document.getElementById('searchInput');
const navItems = document.querySelectorAll('.nav-item');
const sortButtons = document.querySelectorAll('.sort-btn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const leftSidebar = document.getElementById('leftSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Auth Elements
const authButtons = document.getElementById('authButtons');
const userMenu = document.getElementById('userMenu');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userMenuBtn = document.getElementById('userMenuBtn');
const userDropdown = document.getElementById('userDropdown');
const usernameDisplay = document.getElementById('usernameDisplay');
const authModalOverlay = document.getElementById('authModalOverlay');
const authModal = document.getElementById('authModal');
const authModalClose = document.getElementById('authModalClose');
const authModalTitle = document.getElementById('authModalTitle');
const authForm = document.getElementById('authForm');
const nameGroup = document.getElementById('nameGroup');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const authSwitch = document.getElementById('authSwitch');
const switchToSignup = document.getElementById('switchToSignup');

// Theme Elements
const themeToggleBtn = document.getElementById('themeToggleBtn');

// Chat Elements
const chatBtn = document.getElementById('chatBtn');
const chatPanel = document.getElementById('chatPanel');
const chatOverlay = document.getElementById('chatOverlay');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const chatContacts = document.getElementById('chatContacts');
const chatNoSelection = document.getElementById('chatNoSelection');
const chatThread = document.getElementById('chatThread');
const chatThreadName = document.getElementById('chatThreadName');
const chatMessages_ = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSendBtn = document.getElementById('chatSendBtn');

let isSignupMode = false;

// Initialize app
function init() {
  loadTheme();
  loadUser();
  loadChatMessages();
  renderPosts();
  renderChatContacts();
}

// Theme Functions
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Auth Functions
function loadUser() {
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateAuthUI();
  }
}

function updateAuthUI() {
  if (currentUser) {
    authButtons.style.display = 'none';
    userMenu.style.display = 'block';
    usernameDisplay.textContent = currentUser.name;
  } else {
    authButtons.style.display = 'flex';
    userMenu.style.display = 'none';
  }
}

function openAuthModal(signup = false) {
  isSignupMode = signup;
  authModalTitle.textContent = signup ? 'Sign up' : 'Log in';
  authSubmitBtn.textContent = signup ? 'Sign up' : 'Log in';
  nameGroup.style.display = signup ? 'flex' : 'none';
  authSwitch.innerHTML = signup 
    ? 'Already have an account? <button type="button" id="switchToLogin">Log in</button>'
    : 'Don\'t have an account? <button type="button" id="switchToSignup">Sign up</button>';
  
  // Reset form
  authForm.reset();
  
  authModalOverlay.classList.add('active');
  emailInput.focus();
  
  // Add event listener for switch
  const switchBtn = signup 
    ? document.getElementById('switchToLogin')
    : document.getElementById('switchToSignup');
  switchBtn.addEventListener('click', () => {
    openAuthModal(!signup);
  });
}

function closeAuthModal() {
  authModalOverlay.classList.remove('active');
  authForm.reset();
}

function handleAuthSubmit(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const name = isSignupMode ? nameInput.value.trim() : email.split('@')[0];
  
  if (!email || !password || (isSignupMode && !name)) {
    return;
  }
  
  // Mock auth - just store the user
  currentUser = {
    id: Date.now().toString(),
    name: name,
    email: email
  };
  
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  updateAuthUI();
  closeAuthModal();
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateAuthUI();
  userDropdown.classList.remove('active');
  
  // Close chat if open
  closeChatPanel();
}

function toggleUserDropdown() {
  userDropdown.classList.toggle('active');
}

// Chat Functions
function loadChatMessages() {
  const saved = localStorage.getItem('chatMessages');
  if (saved) {
    chatMessages = JSON.parse(saved);
  } else {
    // Initialize with some mock messages
    chatMessages = {
      'user1': [
        { id: 1, from: 'user1', text: 'Hey! Love your subway guide!', time: '10:30 AM' },
        { id: 2, from: 'me', text: 'Thanks! Let me know if you have questions.', time: '10:32 AM' },
        { id: 3, from: 'user1', text: 'Thanks for the tip!', time: '10:35 AM' }
      ],
      'user2': [
        { id: 1, from: 'user2', text: 'That hiking trail looks amazing!', time: 'Yesterday' },
        { id: 2, from: 'me', text: 'It really is! The views are incredible.', time: 'Yesterday' },
        { id: 3, from: 'user2', text: 'See you on the trail!', time: 'Yesterday' }
      ]
    };
    saveChatMessages();
  }
}

function saveChatMessages() {
  localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
}

function openChatPanel() {
  if (!currentUser) {
    openAuthModal(false);
    return;
  }
  chatPanel.classList.add('active');
  chatOverlay.classList.add('active');
}

function closeChatPanel() {
  chatPanel.classList.remove('active');
  chatOverlay.classList.remove('active');
  currentChatContact = null;
  chatThread.style.display = 'none';
  chatNoSelection.style.display = 'flex';
  
  // Remove active state from contacts
  document.querySelectorAll('.chat-contact').forEach(c => c.classList.remove('active'));
}

function renderChatContacts() {
  chatContacts.innerHTML = mockContacts.map(contact => {
    const messages = chatMessages[contact.id] || [];
    const lastMsg = messages.length > 0 ? messages[messages.length - 1].text : contact.lastMessage;
    return `
      <div class="chat-contact" data-contact-id="${contact.id}">
        <div class="chat-contact-name">${contact.name}</div>
        <div class="chat-contact-preview">${lastMsg}</div>
      </div>
    `;
  }).join('');
  
  // Add click listeners
  document.querySelectorAll('.chat-contact').forEach(el => {
    el.addEventListener('click', () => selectChatContact(el.dataset.contactId));
  });
}

function selectChatContact(contactId) {
  currentChatContact = mockContacts.find(c => c.id === contactId);
  if (!currentChatContact) return;
  
  // Update active state
  document.querySelectorAll('.chat-contact').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-contact-id="${contactId}"]`).classList.add('active');
  
  // Show thread
  chatNoSelection.style.display = 'none';
  chatThread.style.display = 'flex';
  chatThreadName.textContent = currentChatContact.name;
  
  renderChatMessages();
  chatInput.focus();
}

function renderChatMessages() {
  if (!currentChatContact) return;
  
  const messages = chatMessages[currentChatContact.id] || [];
  chatMessages_.innerHTML = messages.map(msg => `
    <div class="chat-message ${msg.from === 'me' ? 'sent' : 'received'}">
      ${msg.text}
      <div class="chat-message-time">${msg.time}</div>
    </div>
  `).join('');
  
  // Scroll to bottom
  chatMessages_.scrollTop = chatMessages_.scrollHeight;
}

function sendChatMessage() {
  if (!currentChatContact || !chatInput.value.trim()) return;
  
  const text = chatInput.value.trim();
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
  
  if (!chatMessages[currentChatContact.id]) {
    chatMessages[currentChatContact.id] = [];
  }
  
  chatMessages[currentChatContact.id].push({
    id: Date.now(),
    from: 'me',
    text: text,
    time: time
  });
  
  saveChatMessages();
  renderChatMessages();
  renderChatContacts();
  chatInput.value = '';
}

// Format vote count
function formatVotes(votes) {
  if (votes >= 1000) {
    return (votes / 1000).toFixed(1) + 'k';
  }
  return votes.toString();
}

// Create post card HTML
function createPostCard(post) {
  const imageHTML = post.image 
    ? `<div class="post-image-container">
        <img 
          src="${post.image}" 
          alt="${post.title}" 
          class="post-image" 
          loading="lazy"
        />
      </div>`
    : '';

  return `
    <article class="post-card" data-post-id="${post.id}">
      <div class="vote-section">
        <button class="vote-btn upvote" aria-label="Upvote">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-8 8h5v8h6v-8h5z"/>
          </svg>
        </button>
        <span class="vote-count">${formatVotes(post.votes)}</span>
        <button class="vote-btn downvote" aria-label="Downvote">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 20l8-8h-5v-8h-6v8h-5z"/>
          </svg>
        </button>
      </div>
      <div class="post-content">
        <div class="post-meta">
          <span class="post-category">${post.categoryLabel}</span>
          <span>Posted by</span>
          <span class="post-author">u/${post.author}</span>
          <span>•</span>
          <span>${post.timestamp}</span>
        </div>
        <h3 class="post-title">${post.title}</h3>
        ${imageHTML}
        <p class="post-preview">${post.content}</p>
        <div class="post-actions">
          <button class="action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            ${post.comments} Comments
          </button>
          <button class="action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            Share
          </button>
          <button class="action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            Save
          </button>
        </div>
      </div>
    </article>
  `;
}

// Filter and sort posts
function getFilteredPosts() {
  let filtered = [...posts];

  // Filter by category
  if (currentCategory !== 'all') {
    filtered = filtered.filter(post => post.category === currentCategory);
  }

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.content.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  }

  // Sort posts
  switch (currentSort) {
    case 'hot':
      filtered.sort((a, b) => (b.votes + b.comments * 2) - (a.votes + a.comments * 2));
      break;
    case 'new':
      // For mock data, we'll use the ID as a proxy for newness
      filtered.sort((a, b) => b.id - a.id);
      break;
    case 'top':
      filtered.sort((a, b) => b.votes - a.votes);
      break;
  }

  return filtered;
}

// Render posts
function renderPosts() {
  const filtered = getFilteredPosts();

  if (filtered.length === 0) {
    postsContainer.innerHTML = `
      <div class="empty-state">
        <h3>No posts found</h3>
        <p>Try adjusting your filters or search query.</p>
      </div>
    `;
    return;
  }

  postsContainer.innerHTML = filtered.map(createPostCard).join('');

  // Add vote button listeners
  document.querySelectorAll('.vote-btn').forEach(btn => {
    btn.addEventListener('click', handleVote);
  });
}

// Handle vote clicks
function handleVote(e) {
  const btn = e.currentTarget;
  const isUpvote = btn.classList.contains('upvote');
  const voteSection = btn.closest('.vote-section');
  const voteCount = voteSection.querySelector('.vote-count');
  const otherBtn = isUpvote 
    ? voteSection.querySelector('.downvote') 
    : voteSection.querySelector('.upvote');

  // Toggle active state
  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
  } else {
    btn.classList.add('active');
    otherBtn.classList.remove('active');
  }
}

// Handle category selection
function handleCategoryClick(e) {
  const navItem = e.currentTarget;
  const category = navItem.dataset.category;

  // Update active state
  navItems.forEach(item => item.classList.remove('active'));
  navItem.classList.add('active');

  // Update current category and title
  currentCategory = category;
  feedTitle.textContent = categoryNames[category];

  // Re-render posts
  renderPosts();

  // Close mobile sidebar
  closeMobileSidebar();
}

// Handle sort selection
function handleSortClick(e) {
  const btn = e.currentTarget;
  const sort = btn.dataset.sort;

  // Update active state
  sortButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Update current sort
  currentSort = sort;

  // Re-render posts
  renderPosts();
}

// Handle search
function handleSearch(e) {
  searchQuery = e.target.value;
  renderPosts();
}

// Mobile sidebar functions
function openMobileSidebar() {
  leftSidebar.classList.add('active');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  leftSidebar.classList.remove('active');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Event Listeners
navItems.forEach(item => {
  item.addEventListener('click', handleCategoryClick);
});

sortButtons.forEach(btn => {
  btn.addEventListener('click', handleSortClick);
});

searchInput.addEventListener('input', handleSearch);

mobileMenuBtn.addEventListener('click', openMobileSidebar);
closeSidebarBtn.addEventListener('click', closeMobileSidebar);
sidebarOverlay.addEventListener('click', closeMobileSidebar);

// Theme toggle
themeToggleBtn.addEventListener('click', toggleTheme);

// Auth event listeners
loginBtn.addEventListener('click', () => openAuthModal(false));
signupBtn.addEventListener('click', () => openAuthModal(true));
authModalClose.addEventListener('click', closeAuthModal);
authModalOverlay.addEventListener('click', (e) => {
  if (e.target === authModalOverlay) closeAuthModal();
});
authForm.addEventListener('submit', handleAuthSubmit);
userMenuBtn.addEventListener('click', toggleUserDropdown);
logoutBtn.addEventListener('click', logout);

// Chat event listeners
chatBtn.addEventListener('click', openChatPanel);
chatCloseBtn.addEventListener('click', closeChatPanel);
chatOverlay.addEventListener('click', closeChatPanel);
chatSendBtn.addEventListener('click', sendChatMessage);
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendChatMessage();
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!userMenu.contains(e.target)) {
    userDropdown.classList.remove('active');
  }
});

// Handle escape key to close modals/sidebars
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileSidebar();
    closeAuthModal();
    closeChatPanel();
    userDropdown.classList.remove('active');
  }
});

// Initial render
init();