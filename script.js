// Version 3.0 - Action bar order: Like -> Comments -> Views (updated 2026-01-29)
// Mock Post Data with language support
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
    comments: 47,
    language: "English"
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
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    activityType: "Hiking"
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
    comments: 23,
    language: "English"
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
    comments: 89,
    language: "English"
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
    image: "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80",
    activityType: "Party"
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
  },
  {
    id: 13,
    title: "Guide complet du metro de Seoul",
    content: "Apres 3 ans a Seoul, j'ai compile tout ce que vous devez savoir sur le metro. Des cartes T-money aux astuces de transfert, ce guide couvre tout. Le metro de Seoul est l'un des systemes de transport en commun les plus efficaces au monde.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "SeoulFrancais",
    timestamp: "1 day ago",
    votes: 156,
    comments: 23,
    language: "Francais"
  },
  {
    id: 14,
    title: "Phrases essentielles en coreen pour votre premiere semaine",
    content: "Liste de 50 phrases essentielles en coreen qui vous aideront a survivre votre premiere semaine. De la commande de nourriture aux demandes de direction, ces phrases sont pratiques et faciles a retenir.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "KoreanBasicsFR",
    timestamp: "2 days ago",
    votes: 134,
    comments: 19,
    language: "Francais"
  },
  {
    id: 15,
    title: "Ultimativer Leitfaden fur Seouls U-Bahn-System",
    content: "Nach 3 Jahren in Seoul habe ich alles zusammengestellt, was Sie uber die U-Bahn wissen mussen. Von T-Money-Karten bis hin zu Umsteigetipps deckt dieser Leitfaden alles ab. Die Seoul Metro ist eines der effizientesten offentlichen Verkehrssysteme der Welt.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "SeoulDeutsch",
    timestamp: "2 days ago",
    votes: 98,
    comments: 14,
    language: "Deutsch"
  },
  {
    id: 16,
    title: "Wichtige koreanische Satze fur Ihre erste Woche",
    content: "Eine Liste von 50 wichtigen koreanischen Satzen, die Ihnen helfen werden, Ihre erste Woche zu uberstehen. Vom Essen bestellen bis zur Wegbeschreibung - diese Satze sind praktisch und leicht zu merken.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "KoreanBasicsDE",
    timestamp: "3 days ago",
    votes: 87,
    comments: 11,
    language: "Deutsch"
  },
  {
    id: 17,
    title: "Polnoe rukovodstvo po metro Seula",
    content: "Posle 3 let zhizni v Seule ya sobral vse, chto vam nuzhno znat o metro. Ot kart T-money do sovetov po peresadkam - eto rukovodstvo okhvatyvaet vse. Metro Seula - odna iz samykh effektivnykh sistem obshchestvennogo transporta v mire.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "SeoulRussian",
    timestamp: "3 days ago",
    votes: 87,
    comments: 11,
    language: "Русский"
  },
  {
    id: 18,
    title: "Vazhnye koreyskie frazy dlya pervoy nedeli",
    content: "Spisok iz 50 vazhnykh koreyskikh fraz, kotorye pomogut vam perezhit pervuyu nedelyu. Ot zakaza edy do voprosov o napravlenii - eti frazy praktichny i legko zapominayutsya.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "KoreanBasicsRU",
    timestamp: "4 days ago",
    votes: 76,
    comments: 9,
    language: "Русский"
  },
  {
    id: 19,
    title: "Guide audio du palais Gyeongbokgung",
    content: "Nouveau guide audio complet pour le palais Gyeongbokgung couvrant tous les batiments majeurs et les histoires cachees. Parfait pour les passionnes d'histoire qui veulent plus que les informations standard de la visite.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "HistoireFR",
    timestamp: "3 days ago",
    votes: 78,
    comments: 12,
    language: "Francais"
  },
  {
    id: 20,
    title: "Guide audio de Bukchon Hanok Village",
    content: "Decouvrez l'histoire fascinante de Bukchon Hanok Village avec notre nouveau guide audio. Apprenez l'architecture traditionnelle coreenne et les histoires des familles qui y ont vecu pendant des generations.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "AudioGuideFR",
    timestamp: "5 days ago",
    votes: 65,
    comments: 8,
    language: "Francais"
  },
  {
    id: 21,
    title: "Audiofuhrer fur den Gyeongbokgung-Palast",
    content: "Neuer umfassender Audiofuhrer fur den Gyeongbokgung-Palast, der alle wichtigen Gebaude und verborgenen Geschichten abdeckt. Perfekt fur Geschichtsbegeisterte, die mehr als die Standard-Tourinformationen wollen.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "GeschichteDE",
    timestamp: "4 days ago",
    votes: 65,
    comments: 8,
    language: "Deutsch"
  },
  {
    id: 22,
    title: "Audiofuhrer fur Bukchon Hanok Village",
    content: "Entdecken Sie die faszinierende Geschichte von Bukchon Hanok Village mit unserem neuen Audiofuhrer. Erfahren Sie mehr uber die traditionelle koreanische Architektur und die Geschichten der Familien, die hier seit Generationen leben.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "AudioGuideDE",
    timestamp: "6 days ago",
    votes: 54,
    comments: 6,
    language: "Deutsch"
  },
  {
    id: 23,
    title: "Audiogid po dvortsu Kyongbokkung",
    content: "Novyy kompleksnyy audiogid po dvortsu Kyongbokkung, okhvatyvayushchiy vse osnovnye zdaniya i skrytye istorii. Idealno podkhodit dlya lyubiteley istorii, kotorym nuzhno bolshe, chem standartnaya turisticheskaya informatsiya.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "IstoriyaRU",
    timestamp: "5 days ago",
    votes: 54,
    comments: 6,
    language: "Русский"
  },
  {
    id: 24,
    title: "Audiogid po derevne Bukchon Hanok",
    content: "Otkroyte dlya sebya uvlekatelnuyu istoriyu derevni Bukchon Hanok s nashim novym audiogidom. Uznayte o traditsionnoy koreyskoy arkhitekture i istoriyakh semey, kotorye zhili zdes na protyazhenii pokoleniy.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "AudioGuideRU",
    timestamp: "7 days ago",
    votes: 43,
    comments: 5,
    language: "Русский"
  },
  {
    id: 25,
    title: "Audio Guide: Namsan Tower and Seoul Views",
    content: "Explore Namsan Tower with our detailed audio guide. Learn about the history of this iconic landmark, the love locks tradition, and get the best photo spots. Perfect for couples and solo travelers alike.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "SeoulGuides",
    timestamp: "3 days ago",
    votes: 145,
    comments: 19,
    language: "English"
  },
  {
    id: 26,
    title: "Weekly Running Group - Han River Path",
    content: "Join our weekly running group every Sunday at 8 AM! We meet at Yeouido Hangang Park and run along the beautiful Han River path. All paces welcome, typically 5-10km routes.",
    category: "activities",
    categoryLabel: "Activities",
    author: "SeoulRunners",
    timestamp: "1 day ago",
    votes: 189,
    comments: 34,
    activityType: "Running"
  },
  {
    id: 27,
    title: "Mountain Biking Trails Near Seoul",
    content: "Discovered some amazing mountain biking trails just 30 minutes from Seoul. Perfect for weekend adventures with varying difficulty levels from beginner to advanced.",
    category: "activities",
    categoryLabel: "Activities",
    author: "BikeKorea",
    timestamp: "2 days ago",
    votes: 156,
    comments: 28,
    activityType: "Biking"
  },
  {
    id: 28,
    title: "Lantern Festival in Cheonggyecheon - This Weekend!",
    content: "Don't miss the annual Lantern Festival along Cheonggyecheon Stream! Thousands of beautiful lanterns light up the stream every evening. Great photo opportunities and cultural performances.",
    category: "festival",
    categoryLabel: "Festival",
    author: "FestivalFinder",
    timestamp: "6 hours ago",
    votes: 445,
    comments: 67,
    image: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=800&q=80"
  },
  {
    id: 29,
    title: "Busan International Film Festival Dates Announced",
    content: "BIFF 2026 dates are out! October 4-13. Get ready for world premieres, celebrity appearances, and an incredible atmosphere in Haeundae.",
    category: "festival",
    categoryLabel: "Festival",
    author: "FilmBuff",
    timestamp: "1 day ago",
    votes: 312,
    comments: 45
  },
  {
    id: 30,
    title: "Sunset Yoga & Picnic Party at Olympic Park",
    content: "Monthly yoga and picnic gathering at Olympic Park. Bring a mat, some snacks to share, and good vibes! All levels welcome, we have experienced instructors.",
    category: "activities",
    categoryLabel: "Activities",
    author: "SeoulYogi",
    timestamp: "4 hours ago",
    votes: 98,
    comments: 15,
    activityType: "etc"
  }
];

// Category name mapping
const categoryNames = {
  'all': 'All Posts',
  'korea-starter-pack': 'Korea Starter Pack',
  'activities': 'Activities',
  'festival': 'Festival',
  'local-area': 'Local Area',
  'travel-area': 'Travel Area',
  'restaurants': 'Restaurants',
  'korean-language': 'Korean Language',
  'audio-guides': 'Audio Guides',
  'rent': 'Rent'
};

// Categories that use language tabs instead of sort tabs
const languageFilterCategories = ['korea-starter-pack', 'audio-guides'];

// State
let currentCategory = 'all';
let currentSort = 'hot';
let currentLanguage = 'English';
let currentActivityType = 'Running';
let searchQuery = '';
let currentUser = null;
let currentPostId = null;
let feedScrollPosition = 0;
let isDetailView = false;
let isMyPageView = false;

// Get vote state from localStorage
function getVoteState(postId) {
  const votes = JSON.parse(localStorage.getItem('postVotes') || '{}');
  return votes[postId] || { userVote: 0, voteCount: posts.find(p => p.id === postId)?.votes || 0 };
}

// Save vote state to localStorage
function saveVoteState(postId, userVote, voteCount) {
  const votes = JSON.parse(localStorage.getItem('postVotes') || '{}');
  votes[postId] = { userVote, voteCount };
  localStorage.setItem('postVotes', JSON.stringify(votes));
}

// Get comments from localStorage
function getComments(postId) {
  const comments = JSON.parse(localStorage.getItem('postComments') || '{}');
  return comments[postId] || [];
}

// Save comment to localStorage
function saveComment(postId, comment) {
  const comments = JSON.parse(localStorage.getItem('postComments') || '{}');
  if (!comments[postId]) comments[postId] = [];
  comments[postId].push(comment);
  localStorage.setItem('postComments', JSON.stringify(comments));
}

// Get like state from localStorage
function getLikeState(postId) {
  const likes = JSON.parse(localStorage.getItem('postLikes') || '{}');
  return likes[postId] || { liked: false, count: 0 };
}

// Save like state to localStorage
function saveLikeState(postId, liked, count) {
  const likes = JSON.parse(localStorage.getItem('postLikes') || '{}');
  likes[postId] = { liked, count };
  localStorage.setItem('postLikes', JSON.stringify(likes));
}

// Get view count from localStorage
function getViewCount(postId) {
  const views = JSON.parse(localStorage.getItem('postViews') || '{}');
  return views[postId] || 0;
}

// Increment view count in localStorage
function incrementViewCount(postId) {
  const views = JSON.parse(localStorage.getItem('postViews') || '{}');
  views[postId] = (views[postId] || 0) + 1;
  localStorage.setItem('postViews', JSON.stringify(views));
  return views[postId];
}

// Get flag emoji from nationality ISO code
function getFlagEmoji(nationalityCode) {
  if (!nationalityCode) return '';
  const codePoints = nationalityCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Get display name with flag emoji
function getDisplayNameWithFlag(user) {
  if (!user) return '';
  const nickname = user.nickname || user.name || '';
  if (!user.nationality) return nickname;
  const flag = getFlagEmoji(user.nationality);
  return flag ? `${flag} ${nickname}` : nickname;
}

// Toggle like for a post
function toggleLike(postId) {
  const state = getLikeState(postId);
  const newLiked = !state.liked;
  const newCount = newLiked ? state.count + 1 : state.count - 1;
  saveLikeState(postId, newLiked, newCount);
  return { liked: newLiked, count: newCount };
}

// DOM Elements
const postsContainer = document.getElementById('postsContainer');
const feedTitle = document.getElementById('feedTitle');
const feedHeader = document.querySelector('.feed-header');
const searchInput = document.getElementById('searchInput');
const navItems = document.querySelectorAll('.nav-item');
const sortButtons = document.querySelectorAll('.sort-btn');
const langTabs = document.querySelectorAll('.lang-tab');
const feedSort = document.getElementById('feedSort');
const feedLanguageTabs = document.getElementById('feedLanguageTabs');
const feedActivityTabs = document.getElementById('feedActivityTabs');
const activityTabs = document.querySelectorAll('.activity-tab');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const leftSidebar = document.getElementById('leftSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// My Page Button
const myPageBtn = document.getElementById('myPageBtn');

// Auth Elements
const authButtons = document.getElementById('authButtons');
const userMenu = document.getElementById('userMenu');
const loginBtn = document.getElementById('loginBtn');
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
const nationalityGroup = document.getElementById('nationalityGroup');
const nameInput = document.getElementById('nameInput');
const nationalitySelect = document.getElementById('nationalitySelect');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const authSubmitBtn = document.getElementById('authSubmitBtn');
const authSwitch = document.getElementById('authSwitch');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const resetEmailInput = document.getElementById('resetEmailInput');
const sendResetBtn = document.getElementById('sendResetBtn');
const resetSuccess = document.getElementById('resetSuccess');
const backToLoginBtn = document.getElementById('backToLoginBtn');

// Theme Elements
const themeToggleBtn = document.getElementById('themeToggleBtn');

let isSignupMode = false;

// Initialize app
function init() {
  loadTheme();
  loadUser();
  renderPosts();
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
    usernameDisplay.textContent = getDisplayNameWithFlag(currentUser);
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
  nationalityGroup.style.display = signup ? 'flex' : 'none';
  forgotPasswordLink.style.display = signup ? 'none' : 'block';
  authSwitch.innerHTML = signup 
    ? 'Already have an account? <button type="button" id="switchToLogin">Log in</button>'
    : 'Don\'t have an account? <button type="button" id="switchToSignup">Sign up</button>';
  
  authForm.reset();
  authForm.style.display = 'flex';
  forgotPasswordForm.style.display = 'none';
  authSwitch.style.display = 'block';
  resetSuccess.style.display = 'none';
  
  authModalOverlay.classList.add('active');
  emailInput.focus();
  
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
  forgotPasswordForm.style.display = 'none';
  authForm.style.display = 'flex';
  authSwitch.style.display = 'block';
  resetSuccess.style.display = 'none';
}

function handleAuthSubmit(e) {
  e.preventDefault();
  
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const name = isSignupMode ? nameInput.value.trim() : email.split('@')[0];
  const nationality = isSignupMode ? nationalitySelect.value : null;
  
  if (!email || !password || (isSignupMode && !name)) {
    return;
  }
  
  currentUser = {
    id: Date.now().toString(),
    name: name,
    email: email,
    nationality: nationality,
    nickname: name,
    age: null,
    followers: Math.floor(Math.random() * 100),
    following: Math.floor(Math.random() * 50)
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
}

function toggleUserDropdown() {
  userDropdown.classList.toggle('active');
}

// Forgot Password Functions
function showForgotPasswordForm() {
  authForm.style.display = 'none';
  authSwitch.style.display = 'none';
  forgotPasswordLink.style.display = 'none';
  forgotPasswordForm.style.display = 'block';
  resetSuccess.style.display = 'none';
  authModalTitle.textContent = 'Reset password';
  resetEmailInput.focus();
}

function handleSendResetLink() {
  const email = resetEmailInput.value.trim();
  if (!email) return;
  
  resetSuccess.style.display = 'block';
  resetEmailInput.value = '';
}

function backToLogin() {
  forgotPasswordForm.style.display = 'none';
  resetSuccess.style.display = 'none';
  openAuthModal(false);
}

// Open My Page view
function openMyPage() {
  if (!currentUser) {
    openAuthModal(false);
    return;
  }
  
  // Save scroll position
  feedScrollPosition = window.scrollY;
  isMyPageView = true;
  isDetailView = false;
  
  // Hide the feed header
  feedHeader.style.display = 'none';
  
  postsContainer.innerHTML = `
    <div class="my-page-view">
      <button class="back-btn" id="backFromMyPage">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back
      </button>
      <div class="my-page-card">
        <h2 class="my-page-title">${getDisplayNameWithFlag(currentUser)}</h2>
        <div class="my-page-stats">
          <div class="stat-item">
            <span class="stat-number">${currentUser.followers || 0}</span>
            <span class="stat-label">Followers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">${currentUser.following || 0}</span>
            <span class="stat-label">Following</span>
          </div>
        </div>
        <form class="my-page-form" id="myPageForm">
          <div class="form-group">
            <label for="nicknameInput">Nickname</label>
            <input type="text" id="nicknameInput" value="${currentUser.nickname || ''}" placeholder="Enter nickname">
          </div>
          <div class="form-group">
            <label for="profileNameInput">Name</label>
            <input type="text" id="profileNameInput" value="${currentUser.name || ''}" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="ageInput">Age</label>
            <input type="number" id="ageInput" value="${currentUser.age || ''}" placeholder="Enter age" min="1" max="120">
          </div>
          <button type="submit" class="form-submit">Save</button>
        </form>
      </div>
    </div>
  `;
  
  window.scrollTo(0, 0);
  
  // Add event listeners
  document.getElementById('backFromMyPage').addEventListener('click', closeMyPage);
  document.getElementById('myPageForm').addEventListener('submit', handleMyPageSave);
}

// Close My Page and return to feed
function closeMyPage() {
  isMyPageView = false;
  feedHeader.style.display = 'flex';
  renderPosts();
  setTimeout(() => {
    window.scrollTo(0, feedScrollPosition);
  }, 0);
}

// Handle My Page save
function handleMyPageSave(e) {
  e.preventDefault();
  
  currentUser.nickname = document.getElementById('nicknameInput').value.trim() || currentUser.nickname;
  currentUser.name = document.getElementById('profileNameInput').value.trim() || currentUser.name;
  const ageVal = document.getElementById('ageInput').value;
  currentUser.age = ageVal ? parseInt(ageVal) : null;
  
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  updateAuthUI();
  
  // Show success feedback
  const btn = document.querySelector('.my-page-form .form-submit');
  const originalText = btn.textContent;
  btn.textContent = 'Saved!';
  setTimeout(() => {
    btn.textContent = originalText;
  }, 1500);
}

// Format vote count
function formatVotes(votes) {
  if (votes >= 1000) {
    return (votes / 1000).toFixed(1) + 'k';
  }
  return votes.toString();
}

// Format timestamp for comments
function formatCommentTime(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  return `${days} day${days > 1 ? 's' : ''} ago`;
}

// Open post detail view (inline, not modal)
function openPostDetail(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  
  // Save scroll position before switching view
  feedScrollPosition = window.scrollY;
  
  // Increment view count
  const viewCount = incrementViewCount(postId);
  
  currentPostId = postId;
  isDetailView = true;
  const voteState = getVoteState(postId);
  const likeState = getLikeState(postId);
  const comments = getComments(postId);
  
  // Hide the feed header
  feedHeader.style.display = 'none';
  
  const imageHTML = post.image 
    ? `<img src="${post.image}" alt="${post.title}" class="post-detail-image" />`
    : '';
  
  const commentsHTML = comments.length > 0
    ? comments.map(c => `
        <div class="comment-item">
          <div class="comment-meta">
            <span class="comment-author">u/${c.author}</span>
            <span>•</span>
            <span>${formatCommentTime(c.createdAt)}</span>
          </div>
          <p class="comment-text">${c.text}</p>
        </div>
      `).join('')
    : '<p class="no-comments">No comments yet. Be the first to comment!</p>';
  
  postsContainer.innerHTML = `
    <div class="post-detail-inline">
      <button class="back-btn" id="backToFeedBtn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back
      </button>
      <div class="post-detail-card">
        <div class="post-detail-header">
          <div class="post-detail-vote">
            <button class="vote-btn upvote ${voteState.userVote === 1 ? 'active' : ''}" data-post-id="${post.id}" aria-label="Upvote">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-8 8h5v8h6v-8h5z"/>
              </svg>
            </button>
            <span class="vote-count" id="detailVoteCount">${formatVotes(voteState.voteCount)}</span>
            <button class="vote-btn downvote ${voteState.userVote === -1 ? 'active' : ''}" data-post-id="${post.id}" aria-label="Downvote">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 20l8-8h-5v-8h-6v8h-5z"/>
              </svg>
            </button>
          </div>
          <div class="post-detail-main">
            <div class="post-detail-meta">
              <span class="post-category">${post.categoryLabel}</span>
              <span>Posted by</span>
              <span class="post-author">u/${post.author}</span>
              <span>•</span>
              <span>${post.timestamp}</span>
            </div>
            <h2 class="post-detail-title">${post.title}</h2>
            ${imageHTML}
            <div class="post-detail-body">${post.content}</div>
<div class="post-detail-actions">
  <button class="action-btn like-btn ${likeState.liked ? 'liked' : ''}" id="detailLikeBtn" data-post-id="${post.id}" aria-label="Like">
  <svg viewBox="0 0 24 24" fill="${likeState.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
  <span class="like-count" id="detailLikeCount">${likeState.count}</span>
  </button>
  <span class="action-btn comments-btn">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
  ${comments.length + post.comments} Comments
  </span>
  <span class="action-btn view-count-display" aria-label="Views">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
  <circle cx="12" cy="12" r="3"></circle>
  </svg>
  ${viewCount}
  </span>
  </div>
          </div>
        </div>
        <div class="comments-section">
          <div class="comments-header">${comments.length + post.comments} Comments</div>
          <div class="comment-form">
            <textarea class="comment-input" id="commentInput" placeholder="What are your thoughts?"></textarea>
            <button class="comment-submit" id="commentSubmit" ${!currentUser ? 'disabled title="Log in to comment"' : ''}>Comment</button>
          </div>
          <div class="comments-list" id="commentsList">
            ${commentsHTML}
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Scroll to top
  window.scrollTo(0, 0);
  
  // Add event listeners
  const backBtn = document.getElementById('backToFeedBtn');
  const upvoteBtn = postsContainer.querySelector('.vote-btn.upvote');
  const downvoteBtn = postsContainer.querySelector('.vote-btn.downvote');
  const commentSubmit = document.getElementById('commentSubmit');
  const detailLikeBtn = document.getElementById('detailLikeBtn');
  
  backBtn.addEventListener('click', closePostDetail);
  upvoteBtn.addEventListener('click', () => handleDetailVote(postId, 1));
  downvoteBtn.addEventListener('click', () => handleDetailVote(postId, -1));
  commentSubmit.addEventListener('click', () => handleCommentSubmit(postId));
  detailLikeBtn.addEventListener('click', () => handleDetailLike(postId));
}

// Handle like in detail view
function handleDetailLike(postId) {
  const newState = toggleLike(postId);
  const btn = document.getElementById('detailLikeBtn');
  const svg = btn.querySelector('svg');
  
  btn.classList.toggle('liked', newState.liked);
  svg.setAttribute('fill', newState.liked ? 'currentColor' : 'none');
  document.getElementById('detailLikeCount').textContent = newState.count;
}

// Close post detail and return to feed
function closePostDetail() {
  isDetailView = false;
  currentPostId = null;
  
  // Show the feed header again
  feedHeader.style.display = 'flex';
  
  // Re-render posts
  renderPosts();
  
  // Restore scroll position
  setTimeout(() => {
    window.scrollTo(0, feedScrollPosition);
  }, 0);
}

// Handle vote in detail view
function handleDetailVote(postId, direction) {
  const voteState = getVoteState(postId);
  let newUserVote = voteState.userVote;
  let newVoteCount = voteState.voteCount;
  
  if (voteState.userVote === direction) {
    newUserVote = 0;
    newVoteCount -= direction;
  } else {
    newVoteCount -= voteState.userVote;
    newVoteCount += direction;
    newUserVote = direction;
  }
  
  saveVoteState(postId, newUserVote, newVoteCount);
  
  // Update UI
  const upvoteBtn = postsContainer.querySelector('.vote-btn.upvote');
  const downvoteBtn = postsContainer.querySelector('.vote-btn.downvote');
  const voteCountEl = document.getElementById('detailVoteCount');
  
  upvoteBtn.classList.toggle('active', newUserVote === 1);
  downvoteBtn.classList.toggle('active', newUserVote === -1);
  voteCountEl.textContent = formatVotes(newVoteCount);
}

// Handle comment submit
function handleCommentSubmit(postId) {
  const input = document.getElementById('commentInput');
  const text = input.value.trim();
  
  if (!text || !currentUser) return;
  
  const comment = {
    id: Date.now(),
    postId: postId,
    author: currentUser.name,
    text: text,
    createdAt: Date.now()
  };
  
  saveComment(postId, comment);
  input.value = '';
  
  // Re-render post detail to show new comment
  openPostDetail(postId);
}

// Create post card HTML
function createPostCard(post) {
  const voteState = getVoteState(post.id);
  const likeState = getLikeState(post.id);
  const viewCount = getViewCount(post.id);
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
    <article class="post-card" data-post-id="${post.id}" tabindex="0" role="button" aria-label="View post: ${post.title}">
      <div class="vote-section">
        <button class="vote-btn upvote ${voteState.userVote === 1 ? 'active' : ''}" aria-label="Upvote">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 4l-8 8h5v8h6v-8h5z"/>
          </svg>
        </button>
        <span class="vote-count">${formatVotes(voteState.voteCount)}</span>
        <button class="vote-btn downvote ${voteState.userVote === -1 ? 'active' : ''}" aria-label="Downvote">
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
  <button class="action-btn like-btn ${likeState.liked ? 'liked' : ''}" data-post-id="${post.id}" aria-label="Like">
  <svg viewBox="0 0 24 24" fill="${likeState.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
  <span class="like-count">${likeState.count}</span>
  </button>
  <button class="action-btn comments-btn">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
  ${post.comments + getComments(post.id).length} Comments
  </button>
  <span class="action-btn view-count-display" aria-label="Views">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
  <circle cx="12" cy="12" r="3"></circle>
  </svg>
  ${viewCount}
  </span>
  </div>
      </div>
    </article>
  `;
}

// Filter and sort posts
function getFilteredPosts() {
  let filtered = [...posts];

  if (currentCategory !== 'all') {
    filtered = filtered.filter(post => post.category === currentCategory);
  }

  if (languageFilterCategories.includes(currentCategory)) {
    filtered = filtered.filter(post => post.language === currentLanguage);
  }

  // Filter by activity type when viewing activities category
  if (currentCategory === 'activities') {
    filtered = filtered.filter(post => post.activityType === currentActivityType);
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.content.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  }

  if (!languageFilterCategories.includes(currentCategory)) {
    switch (currentSort) {
      case 'hot':
        filtered.sort((a, b) => (b.votes + b.comments * 2) - (a.votes + a.comments * 2));
        break;
      case 'new':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'top':
        filtered.sort((a, b) => b.votes - a.votes);
        break;
    }
  } else {
    filtered.sort((a, b) => b.votes - a.votes);
  }

  return filtered;
}

// Update feed tabs visibility based on category
function updateFeedTabs() {
  if (languageFilterCategories.includes(currentCategory)) {
    feedSort.style.display = 'none';
    feedLanguageTabs.style.display = 'flex';
    feedActivityTabs.style.display = 'none';
  } else if (currentCategory === 'activities') {
    feedSort.style.display = 'none';
    feedLanguageTabs.style.display = 'none';
    feedActivityTabs.style.display = 'flex';
  } else {
    feedSort.style.display = 'flex';
    feedLanguageTabs.style.display = 'none';
    feedActivityTabs.style.display = 'none';
  }
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
  document.querySelectorAll('.post-card .vote-btn').forEach(btn => {
    btn.addEventListener('click', handleVote);
  });

  // Add like button listeners
  document.querySelectorAll('.post-card .like-btn').forEach(btn => {
    btn.addEventListener('click', handleLikeClick);
  });

  // Add comments button listeners - clicking comment count opens detail
  document.querySelectorAll('.post-card .comments-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const postId = parseInt(btn.closest('.post-card').dataset.postId);
      openPostDetail(postId);
    });
  });

  // Add post card click listeners for opening detail view
  document.querySelectorAll('.post-card').forEach(card => {
    const postId = parseInt(card.dataset.postId);
    
    card.addEventListener('click', (e) => {
      // Block only vote and like buttons, allow comments-btn to open detail
      if (e.target.closest('.vote-btn') || e.target.closest('.like-btn')) {
        return;
      }
      openPostDetail(postId);
    });
    
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPostDetail(postId);
      }
    });
  });
}

// Handle vote clicks
function handleVote(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const isUpvote = btn.classList.contains('upvote');
  const voteSection = btn.closest('.vote-section');
  const otherBtn = isUpvote 
    ? voteSection.querySelector('.downvote') 
    : voteSection.querySelector('.upvote');

  if (btn.classList.contains('active')) {
    btn.classList.remove('active');
  } else {
    btn.classList.add('active');
    otherBtn.classList.remove('active');
  }
}

// Handle like button clicks
function handleLikeClick(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const postId = parseInt(btn.dataset.postId);
  const newState = toggleLike(postId);
  
  // Update UI
  btn.classList.toggle('liked', newState.liked);
  const svg = btn.querySelector('svg');
  svg.setAttribute('fill', newState.liked ? 'currentColor' : 'none');
  btn.querySelector('.like-count').textContent = newState.count;
}

// Handle category selection
function handleCategoryClick(e) {
  const navItem = e.currentTarget;
  const category = navItem.dataset.category;

  // If in detail view, close it first
  if (isDetailView) {
    isDetailView = false;
    currentPostId = null;
    feedHeader.style.display = 'flex';
  }

  navItems.forEach(item => item.classList.remove('active'));
  navItem.classList.add('active');

  currentCategory = category;
  feedTitle.textContent = categoryNames[category];

  if (languageFilterCategories.includes(category)) {
    currentLanguage = 'English';
    langTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.lang === 'English');
    });
  }

  updateFeedTabs();
  renderPosts();
  closeMobileSidebar();
}

// Handle sort selection
function handleSortClick(e) {
  const btn = e.currentTarget;
  const sort = btn.dataset.sort;

  sortButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  currentSort = sort;
  renderPosts();
}

// Handle language tab selection
function handleLanguageTabClick(e) {
  const tab = e.currentTarget;
  const lang = tab.dataset.lang;

  langTabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  currentLanguage = lang;
  renderPosts();
}

// Handle activity tab selection
function handleActivityTabClick(e) {
  const tab = e.currentTarget;
  const activity = tab.dataset.activity;

  activityTabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  currentActivityType = activity;
  renderPosts();
}

// Handle search
function handleSearch(e) {
  searchQuery = e.target.value;
  
  // If in detail view, close it first
  if (isDetailView) {
    isDetailView = false;
    currentPostId = null;
    feedHeader.style.display = 'flex';
  }
  
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

langTabs.forEach(tab => {
  tab.addEventListener('click', handleLanguageTabClick);
});

activityTabs.forEach(tab => {
  tab.addEventListener('click', handleActivityTabClick);
});

searchInput.addEventListener('input', handleSearch);

mobileMenuBtn.addEventListener('click', openMobileSidebar);
closeSidebarBtn.addEventListener('click', closeMobileSidebar);
sidebarOverlay.addEventListener('click', closeMobileSidebar);

// Theme toggle
themeToggleBtn.addEventListener('click', toggleTheme);

// My Page event listener
myPageBtn.addEventListener('click', openMyPage);

// Auth event listeners
loginBtn.addEventListener('click', () => openAuthModal(false));
authModalClose.addEventListener('click', closeAuthModal);
authModalOverlay.addEventListener('click', (e) => {
  if (e.target === authModalOverlay) closeAuthModal();
});
authForm.addEventListener('submit', handleAuthSubmit);
userMenuBtn.addEventListener('click', toggleUserDropdown);
logoutBtn.addEventListener('click', logout);

// Forgot password event listeners
forgotPasswordBtn.addEventListener('click', showForgotPasswordForm);
sendResetBtn.addEventListener('click', handleSendResetLink);
backToLoginBtn.addEventListener('click', backToLogin);

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
    if (isDetailView) {
      closePostDetail();
    }
    if (isMyPageView) {
      closeMyPage();
    }
    userDropdown.classList.remove('active');
  }
});

// Initial render
init();
