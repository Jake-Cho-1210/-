// Version 3.0 - Action bar order: Like -> Comments -> Views (updated 2026-01-29)
// Mock Post Data with language support
const posts = [
  {
    id: 1,
    title: "ARC(Alien Registration Card)",
    content: "After living in Seoul for 3 years, I've compiled everything you need to know about the subway. From T-money cards to transfer tips, this guide covers it all. The Seoul Metro is one of the most efficient public transit systems in the world, and once you understand the basics, getting around becomes incredibly easy.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "Taylor Swift",
    authorNationality: "US",
    createdAt: Date.now() - 2 * 60 * 60 * 1000,
    likes: 342,
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
    authorNationality: "DE",
    createdAt: Date.now() - 5 * 60 * 60 * 1000,
    likes: 256,
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
    authorNationality: "GB",
    createdAt: Date.now() - 8 * 60 * 60 * 1000,
    likes: 189,
    comments: 28
  },
  {
    id: 4,
    title: "Weekend Trip to Jeonju - Traditional Hanok Village",
    content: "Just got back from an incredible weekend in Jeonju. The Hanok Village is even more beautiful in person. I tried the famous bibimbap at the original restaurant and explored the traditional paper museum. Here's my complete itinerary for a perfect 2-day trip.",
    category: "travel-area",
    categoryLabel: "Travel Area",
    author: "KoreaWanderer",
    authorNationality: "FR",
    createdAt: Date.now() - 12 * 60 * 60 * 1000,
    likes: 421,
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
    authorNationality: "CA",
    createdAt: Date.now() - 24 * 60 * 60 * 1000,
    likes: 534,
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
    authorNationality: "US",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    likes: 287,
    comments: 41
  },
  {
    id: 7,
    title: "New Audio Guide for Gyeongbokgung Palace Available",
    content: "Just released a comprehensive audio guide for Gyeongbokgung Palace covering all the major buildings and hidden stories. Available in English, French, German, and Russian. Perfect for history buffs who want more than the standard tour information.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "HistoryBuff",
    authorNationality: "GB",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes: 167,
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
    authorNationality: "US",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes: 45,
    comments: 18
  },
  {
    id: 9,
    title: "Essential Korean Phrases for Your First Week",
    content: "Compiled a list of 50 essential Korean phrases that will help you survive your first week. From ordering food to asking for directions, these phrases are practical and easy to remember. Includes pronunciation guide and common responses you might hear.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "KoreanBasics",
    authorNationality: "CA",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    likes: 612,
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
    authorNationality: "JP",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    likes: 723,
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
    authorNationality: "AU",
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    likes: 234,
    comments: 45
  },
  {
    id: 12,
    title: "Best Seafood Market Tour in Busan",
    content: "Jagalchi Market in Busan is a must-visit for seafood lovers. Here's my guide on how to navigate the market, pick the freshest catches, and have them prepared on the spot. Also includes nearby restaurant recommendations if you prefer to sit down.",
    category: "travel-area",
    categoryLabel: "Travel Area",
    author: "SeafoodFan",
    authorNationality: "NL",
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    likes: 389,
    comments: 52
  },
  {
    id: 13,
    title: "Guide complet du metro de Seoul",
    content: "Apres 3 ans a Seoul, j'ai compile tout ce que vous devez savoir sur le metro. Des cartes T-money aux astuces de transfert, ce guide couvre tout. Le metro de Seoul est l'un des systemes de transport en commun les plus efficaces au monde.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "SeoulFrancais",
    authorNationality: "FR",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    likes: 156,
    comments: 23,
    language: "Français"
  },
  {
    id: 14,
    title: "Phrases essentielles en coreen pour votre premiere semaine",
    content: "Liste de 50 phrases essentielles en coreen qui vous aideront a survivre votre premiere semaine. De la commande de nourriture aux demandes de direction, ces phrases sont pratiques et faciles a retenir.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "KoreanBasicsFR",
    authorNationality: "FR",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes: 134,
    comments: 19,
    language: "Français"
  },
  {
    id: 15,
    title: "Ultimativer Leitfaden fur Seouls U-Bahn-System",
    content: "Nach 3 Jahren in Seoul habe ich alles zusammengestellt, was Sie uber die U-Bahn wissen mussen. Von T-Money-Karten bis hin zu Umsteigetipps deckt dieser Leitfaden alles ab. Die Seoul Metro ist eines der effizientesten offentlichen Verkehrssysteme der Welt.",
    category: "korea-starter-pack",
    categoryLabel: "Korea Starter Pack",
    author: "SeoulDeutsch",
    authorNationality: "DE",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes: 98,
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
    authorNationality: "DE",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    likes: 87,
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
    authorNationality: "RU",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    likes: 87,
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
    authorNationality: "RU",
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    likes: 76,
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
    authorNationality: "FR",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    likes: 78,
    comments: 12,
    language: "Français"
  },
  {
    id: 20,
    title: "Guide audio de Bukchon Hanok Village",
    content: "Decouvrez l'histoire fascinante de Bukchon Hanok Village avec notre nouveau guide audio. Apprenez l'architecture traditionnelle coreenne et les histoires des familles qui y ont vecu pendant des generations.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "AudioGuideFR",
    authorNationality: "BE",
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
    likes: 65,
    comments: 8,
    language: "Français"
  },
  {
    id: 21,
    title: "Audiofuhrer fur den Gyeongbokgung-Palast",
    content: "Neuer umfassender Audiofuhrer fur den Gyeongbokgung-Palast, der alle wichtigen Gebaude und verborgenen Geschichten abdeckt. Perfekt fur Geschichtsbegeisterte, die mehr als die Standard-Tourinformationen wollen.",
    category: "audio-guides",
    categoryLabel: "Audio Guides",
    author: "GeschichteDE",
    authorNationality: "AT",
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    likes: 65,
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
    authorNationality: "CH",
    createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000,
    likes: 54,
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
    authorNationality: "RU",
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
    likes: 54,
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
    authorNationality: "RU",
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
    likes: 43,
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
    authorNationality: "US",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    likes: 145,
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
    authorNationality: "IE",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    likes: 189,
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
    authorNationality: "NL",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes: 156,
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
    authorNationality: "ES",
    createdAt: Date.now() - 6 * 60 * 60 * 1000,
    likes: 445,
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
    authorNationality: "IT",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    likes: 312,
    comments: 45
  },
  {
    id: 30,
    title: "Sunset Yoga & Picnic Party at Olympic Park",
    content: "Monthly yoga and picnic gathering at Olympic Park. Bring a mat, some snacks to share, and good vibes! All levels welcome, we have experienced instructors.",
    category: "activities",
    categoryLabel: "Activities",
    author: "SeoulYogi",
    authorNationality: "SE",
    createdAt: Date.now() - 4 * 60 * 60 * 1000,
    likes: 98,
    comments: 15,
    activityType: "etc"
  },
  // Free Board Posts
  {
    id: 31,
    title: "Best Korean drama recommendations for learning Korean?",
    content: "I've been trying to improve my Korean listening skills by watching K-dramas. Can anyone recommend some good ones that have clear dialogue and aren't too fast? I'm at intermediate level. Thanks in advance!",
    category: "free-board",
    categoryLabel: "Travexlo Lounge",
    author: "KdramaFan",
    authorNationality: "US",
    createdAt: Date.now() - 3 * 60 * 60 * 1000,
    likes: 45,
    comments: 23,
    topic: "question"
  },
  {
    id: 32,
    title: "Tips for making Korean friends as an expat",
    content: "I've been living in Seoul for 6 months now but finding it hard to make local friends. What worked for you? I've tried language exchanges but most people just want to practice English. Any advice appreciated!",
    category: "free-board",
    categoryLabel: "Travexlo Lounge",
    author: "LonelyExpat",
    authorNationality: "GB",
    createdAt: Date.now() - 8 * 60 * 60 * 1000,
    likes: 89,
    comments: 41,
    topic: "advice"
  },
  {
    id: 33,
    title: "Is Korean healthcare really that good?",
    content: "Coming from the US, I keep hearing that Korean healthcare is amazing and affordable. What's been your experience? I need to get a checkup done and wondering if I should do it here or wait until I visit home.",
    category: "free-board",
    categoryLabel: "Travexlo Lounge",
    author: "HealthCurious",
    authorNationality: "US",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    likes: 156,
    comments: 67,
    topic: "discussion"
  },
  {
    id: 34,
    title: "Need help with Korean phone plan - confused by options",
    content: "Just arrived and overwhelmed by all the phone plan options. SKT, KT, LG U+... What's the difference? I need unlimited data and some international calling. Budget is around 50,000 won/month. Please help!",
    category: "free-board",
    categoryLabel: "Travexlo Lounge",
    author: "NewbieInKorea",
    authorNationality: "CA",
    createdAt: Date.now() - 5 * 60 * 60 * 1000,
    likes: 34,
    comments: 18,
    topic: "help"
  },
  {
    id: 35,
    title: "What's your unpopular opinion about living in Korea?",
    content: "Let's have a fun discussion! What's something about living in Korea that you feel differently about compared to most expats? I'll start: I actually prefer Korean customer service style over Western 'friendly' service.",
    category: "free-board",
    categoryLabel: "Travexlo Lounge",
    author: "ControversialTakes",
    authorNationality: "AU",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    likes: 234,
    comments: 89,
    topic: "discussion"
  }
];

// Format timestamp as relative time
function formatTimeAgo(createdAt) {
  const now = Date.now();
  const diff = now - createdAt;
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
  return `${days} day${days === 1 ? '' : 's'} ago`;
}

// Update all visible timestamps without full re-render
function refreshTimestamps() {
  document.querySelectorAll('[data-created-at]').forEach(el => {
    const createdAt = parseInt(el.dataset.createdAt);
    if (createdAt) {
      el.textContent = formatTimeAgo(createdAt);
    }
  });
}

// Category name mapping
const categoryNames = {
  'all': 'All Posts',
  'free-board': 'Travexlo Lounge',
  'korea-starter-pack': 'Korea Starter Pack',
  'activities': 'Activities',
  'festival': 'Festival',
  'local-area': 'Local Area',
  'travel-area': 'Travel Area',
  'restaurants': 'Restaurants',
  'korean-language': 'Korean Language',
  'audio-guides': 'Audio Guides',
  'rent': 'Rent',
  'tour': 'Tour'
};

// Categories that use language tabs instead of sort tabs
const languageFilterCategories = ['korea-starter-pack', 'audio-guides'];

// State
let currentCategory = 'all';
let currentSort = 'hot';
let currentLanguage = 'English';
let currentActivityType = 'Running';
let currentTopic = 'all';
let searchQuery = '';
let currentUser = null;
let currentPostId = null;
let feedScrollPosition = 0;
let savedFeedState = null;
let isDetailView = false;
  let isMyPageView = false;
let viewingUser = null; // Track user whose profile is being viewed
  
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
const feedTopicTabs = document.getElementById('feedTopicTabs');
const topicTabs = document.querySelectorAll('.topic-tab');
const createPostBtn = document.getElementById('createPostBtn');
const createPostModal = document.getElementById('createPostModal');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const leftSidebar = document.getElementById('leftSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// Profile Button (replaces My Page Button)
const profileBtn = document.getElementById('profileBtn');
const profileBtnContent = document.getElementById('profileBtnContent');

// Notification Button
const notificationBtn = document.getElementById('notificationBtn');

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

// Theme Elements (profile toggle handled in renderMyPageView)

let isSignupMode = false;

// Initialize app
  function init() {
  loadTheme();
  loadUser();
  loadUserPosts(); // Load user-created posts from localStorage - TODO: remove when backend is implemented
  renderProfileButton();
  
  // Set initial history state for the feed
  history.replaceState({ view: 'feed' }, '', window.location.pathname);
  
  renderPosts();
  
  // Auto-refresh timestamps every 60 seconds
  setInterval(refreshTimestamps, 60000);
  }

// Handle browser back/forward navigation
window.addEventListener('popstate', function(event) {
  const state = event.state;
  
  if (!state || state.view === 'feed') {
    // Return to feed
    isDetailView = false;
    isMyPageView = false;
    currentPostId = null;
    viewingUser = null;
    feedHeader.style.display = 'flex';
    updateFeedTabs();
    renderPosts();
  } else if (state.view === 'post') {
    // Return to post detail
    openPostDetail(state.postId, true);
} else if (state.view === 'mypage') {
  // Return to My Page with saved tab
  activeProfileTab = state.tab || 'edit';
  openMyPage(true);
  renderMyPageView(activeProfileTab);
  } else if (state.view === 'userprofile') {
    // Return to user profile
    openUserProfile(state.author, state.nationality, true);
  }
});

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
    // Logged in: hide Login, show Profile button
    loginBtn.style.display = 'none';
    profileBtn.style.display = 'flex';
    renderProfileButton();
  } else {
    // Logged out: show Login, hide Profile button
    loginBtn.style.display = 'block';
    profileBtn.style.display = 'none';
  }
}

// Render profile button content (icon or image)
function renderProfileButton() {
  const defaultIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>`;
  
  if (currentUser && currentUser.profileImage) {
    // Create image with error fallback to default icon
    const img = document.createElement('img');
    img.src = currentUser.profileImage;
    img.alt = 'Profile';
    img.onerror = function() {
      profileBtnContent.innerHTML = defaultIcon;
    };
    profileBtnContent.innerHTML = '';
    profileBtnContent.appendChild(img);
  } else {
    profileBtnContent.innerHTML = defaultIcon;
  }
}

function openAuthModal(signup = false) {
  isSignupMode = signup;
  authModalTitle.textContent = signup ? 'Sign up' : 'Log in';
  nameGroup.style.display = signup ? 'block' : 'none';
  nationalityGroup.style.display = signup ? 'block' : 'none';
  const nicknameGroup = document.getElementById('nicknameGroup');
  if (nicknameGroup) nicknameGroup.style.display = signup ? 'block' : 'none';
  forgotPasswordLink.style.display = signup ? 'none' : 'block';
  authSubmitBtn.textContent = signup ? 'Sign up' : 'Log in';
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
  const signupNicknameInput = document.getElementById('signupNicknameInput');
  const nickname = isSignupMode ? (signupNicknameInput ? signupNicknameInput.value.trim() : name) : name;
  const nicknameError = document.getElementById('nicknameError');
  
  if (!email || !password || (isSignupMode && !name)) {
    return;
  }
  
  // Validate nickname for signup
  if (isSignupMode && !nickname) {
    if (nicknameError) {
      nicknameError.style.display = 'block';
      signupNicknameInput.focus();
    }
    return;
  }
  if (nicknameError) nicknameError.style.display = 'none';
  
  currentUser = {
    id: Date.now().toString(),
    name: name,
    email: email,
    nationality: nationality,
    nickname: nickname || name,
    age: null,
    gender: null,
    profileImage: null,
    nameChangedOnce: false,
    nationalityChangedOnce: false,
    savedPosts: [],
    myComments: [],
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
}

// toggleUserDropdown removed - logout is now in profile page

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
function openMyPage(skipHistory = false) {
  if (!currentUser) {
  openAuthModal(false);
  return;
  }
  
// Push to history for back navigation (unless restoring from popstate)
  if (!skipHistory) {
  history.pushState({ view: 'mypage', tab: activeProfileTab || 'edit' }, '', '#mypage');
  }
  
  // Save scroll position
  feedScrollPosition = window.scrollY;
  isMyPageView = true;
  isDetailView = false;
  
  // Hide the feed header
  feedHeader.style.display = 'none';
  
  renderMyPageView('edit');
  
  window.scrollTo(0, 0);
}

// Active profile tab state
let activeProfileTab = 'edit';

// Render My Page view with tabs
function renderMyPageView(tab = 'edit', postsSort = 'new') {
  if (!currentUser) return;
  
  activeProfileTab = tab;
  const flag = getFlagEmoji(currentUser.nationality || 'US');
  
  // Build avatar HTML
  let avatarHTML;
  if (currentUser.profileImage) {
    avatarHTML = `<img src="${currentUser.profileImage}" alt="Profile" class="profile-avatar-img">`;
  } else {
    avatarHTML = `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>`;
  }
  
postsContainer.innerHTML = `
  <div class="my-page-view">
  <div class="profile-header-row">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar-large profile-avatar-clickable" id="profileAvatarLarge">
            ${avatarHTML}
            <div class="avatar-camera-overlay">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
          </div>
          <div class="avatar-action-menu" id="avatarActionMenu" style="display: none;">
            <button class="avatar-action-item" id="avatarEditBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit
            </button>
            <button class="avatar-action-item avatar-action-danger" id="avatarRemoveBtn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Remove
            </button>
          </div>
          <input type="file" id="avatarUpload" accept="image/*" style="display: none;">
        </div>
        <div class="profile-info">
          <span class="profile-display-name">${flag} ${currentUser.nickname || currentUser.name}</span>
          <div class="profile-stats-inline">
            <span class="profile-stat-item"><strong>0</strong> Following</span>
            <span class="profile-stat-item"><strong>0</strong> Followers</span>
</div>
  </div>
  <div class="profile-header-actions">
  <button class="theme-toggle-btn" id="profileThemeToggle" aria-label="Toggle theme">
  <svg class="theme-icon sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
  <svg class="theme-icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  </button>
  <button class="logout-btn-header" id="logoutBtnHeader">Logout</button>
  </div>
  </div>
  
  <div class="profile-tabs">
        <button class="profile-tab ${tab === 'edit' ? 'active' : ''}" data-tab="edit">Edit Profile</button>
        <button class="profile-tab ${tab === 'posts' ? 'active' : ''}" data-tab="posts">Posts</button>
        <button class="profile-tab ${tab === 'comments' ? 'active' : ''}" data-tab="comments">Comments</button>
        <button class="profile-tab ${tab === 'saved' ? 'active' : ''}" data-tab="saved">Saved</button>
      </div>
      
      <div class="profile-tab-content" id="profileTabContent">
        ${renderProfileTabContent(tab, postsSort)}
      </div>
    </div>
  `;
  
  // Setup event handlers
  // Theme toggle handler
  document.getElementById('profileThemeToggle')?.addEventListener('click', toggleTheme);
  
  // Logout button handler
  document.getElementById('logoutBtnHeader')?.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    closeMyPage();
    showToast('Logged out successfully');
  });
  
  // Avatar click handler - show/hide action menu
  const avatarLarge = document.getElementById('profileAvatarLarge');
  const avatarMenu = document.getElementById('avatarActionMenu');
  
  avatarLarge?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = avatarMenu.style.display === 'block';
    avatarMenu.style.display = isVisible ? 'none' : 'block';
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (avatarMenu && !avatarMenu.contains(e.target) && !avatarLarge.contains(e.target)) {
      avatarMenu.style.display = 'none';
    }
  });
  
  // Edit button - open file picker
  document.getElementById('avatarEditBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    avatarMenu.style.display = 'none';
    document.getElementById('avatarUpload')?.click();
  });
  
  // Remove button - reset avatar
  document.getElementById('avatarRemoveBtn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    avatarMenu.style.display = 'none';
    removeAvatar();
  });
  
  // Avatar upload handler
  document.getElementById('avatarUpload')?.addEventListener('change', handleAvatarUpload);
  
// Tab switching
  document.querySelectorAll('.profile-tab').forEach(tabBtn => {
  tabBtn.addEventListener('click', () => {
  const newTab = tabBtn.dataset.tab;
  activeProfileTab = newTab;
  // Replace history state to preserve current tab when navigating back
  history.replaceState({ view: 'mypage', tab: newTab }, '', '#mypage');
  renderMyPageView(newTab);
  });
  });
  
// Tab-specific event handlers
  if (tab === 'edit') {
  const editForm = document.getElementById('editProfileForm');
  if (editForm) {
  editForm.addEventListener('submit', handleMyPageSave);
  }
  }
  
  if (tab === 'comments') {
    // Comments tab sorting
    document.querySelectorAll('.comments-sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.comments-sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sort = btn.dataset.sort;
        renderMyPageView('comments', sort);
      });
    });
    // Comment like buttons
    document.querySelectorAll('.comment-like-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleCommentLikeClick(btn);
      });
    });
    // Click to view post
    document.querySelectorAll('.my-comment-item').forEach(item => {
      item.addEventListener('click', () => {
        const postId = parseInt(item.dataset.postId);
        openPostDetail(postId);
      });
    });
  }
  
  if (tab === 'posts') {
    // Posts tab sorting
    document.querySelectorAll('.posts-sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.posts-sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sort = btn.dataset.sort;
        renderMyPageView('posts', sort);
      });
    });
    // Click to view post
    document.querySelectorAll('.my-post-item').forEach(item => {
      item.addEventListener('click', () => {
        const postId = parseInt(item.dataset.postId);
        openPostDetail(postId);
      });
    });
  }
  
  if (tab === 'saved') {
    // Click to view saved post
    document.querySelectorAll('.saved-post-item').forEach(item => {
      item.addEventListener('click', () => {
        const postId = parseInt(item.dataset.postId);
        openPostDetail(postId);
      });
    });
  }
}

// Render content for profile tabs
function renderProfileTabContent(tab, postsSort = 'new') {
  if (tab === 'edit') {
    return `
      <form class="my-page-form" id="editProfileForm">
        <div class="form-group">
          <label for="nicknameInput">Nickname (required)</label>
          <input type="text" id="nicknameInput" class="form-input" value="${currentUser.nickname || currentUser.name}" required>
          <div class="form-error" id="editNicknameError" style="display: none;">Nickname is required</div>
        </div>
        <div class="form-group">
          <label for="profileNameInput">Name ${currentUser.nameChangedOnce ? '(cannot be changed again)' : '(can be changed once)'}</label>
          <input type="text" id="profileNameInput" class="form-input" value="${currentUser.name}" ${currentUser.nameChangedOnce ? 'disabled' : ''}>
        </div>
        <div class="form-group">
          <label for="ageInput">Age</label>
          <input type="number" id="ageInput" class="form-input" value="${currentUser.age || ''}" min="1" max="120">
        </div>
        <div class="form-group">
          <label for="nationalityEditSelect">Nationality ${currentUser.nationalityChangedOnce ? '(cannot be changed again)' : '(can be changed once)'}</label>
          <select id="nationalityEditSelect" class="form-input" ${currentUser.nationalityChangedOnce ? 'disabled' : ''}>
            <option value="">Select nationality</option>
            <optgroup label="North America">
              <option value="US" ${currentUser.nationality === 'US' ? 'selected' : ''}>United States</option>
              <option value="CA" ${currentUser.nationality === 'CA' ? 'selected' : ''}>Canada</option>
            </optgroup>
            <optgroup label="East Asia">
              <option value="KR" ${currentUser.nationality === 'KR' ? 'selected' : ''}>South Korea</option>
              <option value="JP" ${currentUser.nationality === 'JP' ? 'selected' : ''}>Japan</option>
              <option value="CN" ${currentUser.nationality === 'CN' ? 'selected' : ''}>China</option>
            </optgroup>
            <optgroup label="European Union">
              <option value="AT" ${currentUser.nationality === 'AT' ? 'selected' : ''}>Austria</option>
              <option value="BE" ${currentUser.nationality === 'BE' ? 'selected' : ''}>Belgium</option>
              <option value="BG" ${currentUser.nationality === 'BG' ? 'selected' : ''}>Bulgaria</option>
              <option value="HR" ${currentUser.nationality === 'HR' ? 'selected' : ''}>Croatia</option>
              <option value="CY" ${currentUser.nationality === 'CY' ? 'selected' : ''}>Cyprus</option>
              <option value="CZ" ${currentUser.nationality === 'CZ' ? 'selected' : ''}>Czech Republic</option>
              <option value="DK" ${currentUser.nationality === 'DK' ? 'selected' : ''}>Denmark</option>
              <option value="EE" ${currentUser.nationality === 'EE' ? 'selected' : ''}>Estonia</option>
              <option value="FI" ${currentUser.nationality === 'FI' ? 'selected' : ''}>Finland</option>
              <option value="FR" ${currentUser.nationality === 'FR' ? 'selected' : ''}>France</option>
              <option value="DE" ${currentUser.nationality === 'DE' ? 'selected' : ''}>Germany</option>
              <option value="GR" ${currentUser.nationality === 'GR' ? 'selected' : ''}>Greece</option>
              <option value="HU" ${currentUser.nationality === 'HU' ? 'selected' : ''}>Hungary</option>
              <option value="IE" ${currentUser.nationality === 'IE' ? 'selected' : ''}>Ireland</option>
              <option value="IT" ${currentUser.nationality === 'IT' ? 'selected' : ''}>Italy</option>
              <option value="LV" ${currentUser.nationality === 'LV' ? 'selected' : ''}>Latvia</option>
              <option value="LT" ${currentUser.nationality === 'LT' ? 'selected' : ''}>Lithuania</option>
              <option value="LU" ${currentUser.nationality === 'LU' ? 'selected' : ''}>Luxembourg</option>
              <option value="MT" ${currentUser.nationality === 'MT' ? 'selected' : ''}>Malta</option>
              <option value="NL" ${currentUser.nationality === 'NL' ? 'selected' : ''}>Netherlands</option>
              <option value="PL" ${currentUser.nationality === 'PL' ? 'selected' : ''}>Poland</option>
              <option value="PT" ${currentUser.nationality === 'PT' ? 'selected' : ''}>Portugal</option>
              <option value="RO" ${currentUser.nationality === 'RO' ? 'selected' : ''}>Romania</option>
              <option value="SK" ${currentUser.nationality === 'SK' ? 'selected' : ''}>Slovakia</option>
              <option value="SI" ${currentUser.nationality === 'SI' ? 'selected' : ''}>Slovenia</option>
              <option value="ES" ${currentUser.nationality === 'ES' ? 'selected' : ''}>Spain</option>
              <option value="SE" ${currentUser.nationality === 'SE' ? 'selected' : ''}>Sweden</option>
            </optgroup>
            <optgroup label="Other European Countries">
              <option value="AL" ${currentUser.nationality === 'AL' ? 'selected' : ''}>Albania</option>
              <option value="AD" ${currentUser.nationality === 'AD' ? 'selected' : ''}>Andorra</option>
              <option value="AM" ${currentUser.nationality === 'AM' ? 'selected' : ''}>Armenia</option>
              <option value="AZ" ${currentUser.nationality === 'AZ' ? 'selected' : ''}>Azerbaijan</option>
              <option value="BY" ${currentUser.nationality === 'BY' ? 'selected' : ''}>Belarus</option>
              <option value="BA" ${currentUser.nationality === 'BA' ? 'selected' : ''}>Bosnia and Herzegovina</option>
              <option value="GE" ${currentUser.nationality === 'GE' ? 'selected' : ''}>Georgia</option>
              <option value="IS" ${currentUser.nationality === 'IS' ? 'selected' : ''}>Iceland</option>
              <option value="LI" ${currentUser.nationality === 'LI' ? 'selected' : ''}>Liechtenstein</option>
              <option value="MD" ${currentUser.nationality === 'MD' ? 'selected' : ''}>Moldova</option>
              <option value="MC" ${currentUser.nationality === 'MC' ? 'selected' : ''}>Monaco</option>
              <option value="ME" ${currentUser.nationality === 'ME' ? 'selected' : ''}>Montenegro</option>
              <option value="MK" ${currentUser.nationality === 'MK' ? 'selected' : ''}>North Macedonia</option>
              <option value="NO" ${currentUser.nationality === 'NO' ? 'selected' : ''}>Norway</option>
              <option value="RU" ${currentUser.nationality === 'RU' ? 'selected' : ''}>Russia</option>
              <option value="RS" ${currentUser.nationality === 'RS' ? 'selected' : ''}>Serbia</option>
              <option value="SM" ${currentUser.nationality === 'SM' ? 'selected' : ''}>San Marino</option>
              <option value="CH" ${currentUser.nationality === 'CH' ? 'selected' : ''}>Switzerland</option>
              <option value="TR" ${currentUser.nationality === 'TR' ? 'selected' : ''}>Turkey</option>
              <option value="UA" ${currentUser.nationality === 'UA' ? 'selected' : ''}>Ukraine</option>
              <option value="GB" ${currentUser.nationality === 'GB' ? 'selected' : ''}>United Kingdom</option>
              <option value="VA" ${currentUser.nationality === 'VA' ? 'selected' : ''}>Vatican City</option>
            </optgroup>
          </select>
        </div>
        <div class="form-group">
          <label for="genderSelect">Gender</label>
          <select id="genderSelect" class="form-input">
            <option value="">Prefer not to say</option>
            <option value="male" ${currentUser.gender === 'male' ? 'selected' : ''}>Male</option>
            <option value="female" ${currentUser.gender === 'female' ? 'selected' : ''}>Female</option>
            <option value="other" ${currentUser.gender === 'other' ? 'selected' : ''}>Other</option>
          </select>
        </div>
        <button type="submit" class="form-submit">Save Changes</button>
      </form>
    `;
  } else if (tab === 'posts') {
    let userPosts = posts.filter(p => p.author === currentUser.nickname || p.author === currentUser.name);
    
    if (postsSort === 'top') {
      userPosts = userPosts.sort((a, b) => getLikeState(b.id).count - getLikeState(a.id).count);
    } else {
      userPosts = userPosts.sort((a, b) => b.createdAt - a.createdAt);
    }
    
    return `
      <div class="posts-sort-row">
        <button class="posts-sort-btn ${postsSort === 'top' ? 'active' : ''}" data-sort="top">Top</button>
        <button class="posts-sort-btn ${postsSort === 'new' ? 'active' : ''}" data-sort="new">New</button>
      </div>
      ${userPosts.length === 0 ? `<div class="empty-tab-message">No posts yet.</div>` : `
        <div class="my-posts-list">
          ${userPosts.map(p => {
            const likeState = getLikeState(p.id);
            return `
              <div class="my-post-item" data-post-id="${p.id}">
                <div class="my-post-title">${p.title}</div>
                <div class="my-post-meta">
                  <span>${formatTimeAgo(p.createdAt)}</span>
                  <span>${p.categoryLabel}</span>
                  <span>${likeState.count} likes</span>
                  <span>${p.comments} comments</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;
  } else if (tab === 'comments') {
    const allPostComments = JSON.parse(localStorage.getItem('postComments') || '{}');
    let userComments = [];
    
    for (const postId of Object.keys(allPostComments)) {
      const postComments = allPostComments[postId] || [];
      for (const comment of postComments) {
        if (comment.author === currentUser.nickname || comment.author === currentUser.name) {
          userComments.push({ ...comment, postId: parseInt(postId) });
        }
      }
    }
    
    const commentsSort = postsSort;
    
    if (commentsSort === 'top') {
      userComments = userComments.sort((a, b) => (getCommentLikeState(b.id || 0).count) - (getCommentLikeState(a.id || 0).count));
    } else {
      userComments = userComments.sort((a, b) => b.createdAt - a.createdAt);
    }
    
    return `
      <div class="comments-sort-row">
        <button class="comments-sort-btn ${commentsSort === 'top' ? 'active' : ''}" data-sort="top">Top</button>
        <button class="comments-sort-btn ${commentsSort === 'new' ? 'active' : ''}" data-sort="new">New</button>
      </div>
      ${userComments.length === 0 ? `<div class="empty-tab-message">No comments yet.</div>` : `
        <div class="my-comments-list">
          ${userComments.map((c, idx) => {
            const likeState = getCommentLikeState(c.id || idx);
            return `
              <div class="my-comment-item" data-post-id="${c.postId}" data-comment-id="${c.id || idx}">
                <div class="comment-text">${c.text}</div>
                <div class="comment-item-footer">
                  <div class="comment-meta">on post #${c.postId} - ${formatTimeAgo(c.createdAt)}</div>
                  <button class="comment-like-btn ${likeState.liked ? 'liked' : ''}" data-comment-id="${c.id || idx}" aria-label="Like comment">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="${likeState.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span class="comment-like-count">${likeState.count}</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;
  } else if (tab === 'saved') {
    const savedPosts = currentUser.savedPosts || [];
    return `
      ${savedPosts.length === 0 ? `<div class="empty-tab-message">No saved posts yet.</div>` : `
        <div class="saved-posts-list">
          ${savedPosts.map(postId => {
            const post = posts.find(p => p.id === postId);
            if (!post) return '';
            return `
              <div class="saved-post-item" data-post-id="${postId}">
                <div class="saved-post-title">${post.title}</div>
                <div class="saved-post-meta">
                  <span>${post.categoryLabel}</span>
                  <span>${formatTimeAgo(post.createdAt)}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    `;
  }
  return '';
}

// Remove avatar (reset to default)
function removeAvatar() {
  currentUser.profileImage = null;
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  renderProfileButton();
  renderMyPageView(activeProfileTab);
  showToast('Profile picture removed');
}

  // Avatar crop state
  let cropImageSrc = null;
  let cropZoom = 1;
  let cropOffsetX = 0;
  let cropOffsetY = 0;
  let isDraggingCrop = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let baseZoom = 1; // Minimum zoom to fill crop area
  let imgNaturalWidth = 0;
  let imgNaturalHeight = 0;

// Handle avatar file upload - opens crop modal
function handleAvatarUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
  alert('Please select an image file.');
  return;
  }
  
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_SIZE) {
  alert('Image size must be less than 5MB.');
  return;
  }
  
  const reader = new FileReader();
  reader.onload = function(event) {
    cropImageSrc = event.target.result;
    openAvatarCropModal();
  };
  reader.readAsDataURL(file);
  
  // Reset file input for re-upload
  e.target.value = '';
}

// Open avatar crop modal
function openAvatarCropModal() {
  const modal = document.getElementById('avatarCropModal');
  const cropImage = document.getElementById('cropImage');
  const cropImageWrapper = document.getElementById('cropImageWrapper');
  const zoomSlider = document.getElementById('zoomSlider');
  const cropArea = document.getElementById('cropArea');
  
  // Reset crop state
  cropOffsetX = 0;
  cropOffsetY = 0;
  
  // Set image source
  cropImage.src = cropImageSrc;
  
  // Show modal first so cropArea has dimensions
  modal.style.display = 'flex';
  
  // Wait for image to load to compute proper fit-to-frame scale
  cropImage.onload = function() {
    const cropAreaSize = 250; // Fixed crop area size
    imgNaturalWidth = cropImage.naturalWidth;
    imgNaturalHeight = cropImage.naturalHeight;
    
    // Compute minimum zoom to fill the crop area (cover mode)
    const scaleToFitWidth = cropAreaSize / imgNaturalWidth;
    const scaleToFitHeight = cropAreaSize / imgNaturalHeight;
    baseZoom = Math.max(scaleToFitWidth, scaleToFitHeight);
    
    // Start at minimum zoom (1.0 on slider = baseZoom actual)
    cropZoom = 1.0;
    
    // Reset slider to minimum (100 = 1x = baseZoom)
    if (zoomSlider) {
      zoomSlider.min = 100;
      zoomSlider.max = 300;
      zoomSlider.value = 100;
    }
    
    // Center the image
    cropOffsetX = 0;
    cropOffsetY = 0;
    
    // Apply initial transform
    updateCropTransform();
  };
  
  // Setup drag handlers
  setupCropDragHandlers();
}

// Update crop image transform - applies zoom relative to baseZoom
function updateCropTransform() {
  const cropImage = document.getElementById('cropImage');
  if (cropImage) {
    // Actual scale applied = baseZoom * cropZoom
    const actualScale = baseZoom * cropZoom;
    // Apply transform to the image directly - centered via flexbox, scale and translate from center
    cropImage.style.transform = `translate(${cropOffsetX}px, ${cropOffsetY}px) scale(${actualScale})`;
  }
}

// Setup drag handlers for crop
function setupCropDragHandlers() {
  const cropArea = document.getElementById('cropArea');
  const zoomSlider = document.getElementById('zoomSlider');
  
  if (!cropArea) return;
  
  cropArea.onmousedown = (e) => {
    isDraggingCrop = true;
    dragStartX = e.clientX - cropOffsetX;
    dragStartY = e.clientY - cropOffsetY;
    cropArea.style.cursor = 'grabbing';
    e.preventDefault();
  };
  
  cropArea.ontouchstart = (e) => {
    isDraggingCrop = true;
    dragStartX = e.touches[0].clientX - cropOffsetX;
    dragStartY = e.touches[0].clientY - cropOffsetY;
    e.preventDefault();
  };
  
  document.onmousemove = (e) => {
    if (!isDraggingCrop) return;
    cropOffsetX = e.clientX - dragStartX;
    cropOffsetY = e.clientY - dragStartY;
    updateCropTransform();
  };
  
  document.ontouchmove = (e) => {
    if (!isDraggingCrop) return;
    cropOffsetX = e.touches[0].clientX - dragStartX;
    cropOffsetY = e.touches[0].clientY - dragStartY;
    updateCropTransform();
  };
  
  document.onmouseup = () => {
    isDraggingCrop = false;
    if (cropArea) cropArea.style.cursor = 'grab';
  };
  
  document.ontouchend = () => {
    isDraggingCrop = false;
  };
  
  // Zoom slider handler - value 100-300 maps to cropZoom 1.0-3.0
  if (zoomSlider) {
    zoomSlider.oninput = function() {
      cropZoom = this.value / 100;
      updateCropTransform();
    };
  }
}
  
  // Close avatar crop modal
  function closeAvatarCropModal() {
  const modal = document.getElementById('avatarCropModal');
  if (modal) modal.style.display = 'none';
  
  // Clean up drag handlers
  document.onmousemove = null;
  document.onmouseup = null;
  document.ontouchmove = null;
  document.ontouchend = null;
  isDraggingCrop = false;
  }
  
  // Apply avatar crop - generates cropped image with canvas
  // Uses the SAME transform logic as updateCropTransform() to ensure preview matches output
  function applyAvatarCrop() {
  const cropImage = document.getElementById('cropImage');
  const cropArea = document.getElementById('cropArea');
  
  if (!cropImage || !cropArea) {
    closeAvatarCropModal();
    return;
  }
  
  // Create canvas for cropping
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // Output size (square for circular avatar)
  const outputSize = 256;
  canvas.width = outputSize;
  canvas.height = outputSize;
  
  // Crop area size (matches the CSS - 250x250)
  const cropAreaSize = 250;
  
  // Create image for drawing
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function() {
    // Calculate actual scale (same as updateCropTransform)
    const actualScale = baseZoom * cropZoom;
    
    // The image is centered in the crop area via flexbox
    // Then translated by (cropOffsetX, cropOffsetY) and scaled by actualScale
    // 
    // Image center position in crop area coordinates:
    // center_x = cropAreaSize/2 + cropOffsetX
    // center_y = cropAreaSize/2 + cropOffsetY
    //
    // Scaled image dimensions:
    const scaledWidth = img.width * actualScale;
    const scaledHeight = img.height * actualScale;
    
    // Image top-left corner in crop area coordinates:
    const imgLeft = (cropAreaSize / 2) - (scaledWidth / 2) + cropOffsetX;
    const imgTop = (cropAreaSize / 2) - (scaledHeight / 2) + cropOffsetY;
    
    // We want to extract what's in the crop area (0,0) to (cropAreaSize, cropAreaSize)
    // and render it to the canvas (0,0) to (outputSize, outputSize)
    
    // Source coordinates in the original image
    const srcX = (0 - imgLeft) / actualScale;
    const srcY = (0 - imgTop) / actualScale;
    const srcW = cropAreaSize / actualScale;
    const srcH = cropAreaSize / actualScale;
    
    // Fill background with neutral color
    ctx.fillStyle = '#e5e5e5';
    ctx.fillRect(0, 0, outputSize, outputSize);
    
    // Draw the cropped portion
    ctx.drawImage(
      img,
      srcX, srcY, srcW, srcH,
      0, 0, outputSize, outputSize
    );
    
    // Save as data URL
    const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.92);
    
    // Update user profile with cropped image
    currentUser.profileImage = croppedDataUrl;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    renderProfileButton();
    renderMyPageView(activeProfileTab);
    closeAvatarCropModal();
    showToast('Profile picture updated');
  };
  
  img.onerror = function() {
    // Fallback: save the original image if crop fails
    currentUser.profileImage = cropImageSrc;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    renderProfileButton();
    renderMyPageView(activeProfileTab);
    closeAvatarCropModal();
    showToast('Profile picture updated');
  };
  
  img.src = cropImageSrc;
  }

// Open other user's profile
function openUserProfile(author, nationality, skipHistory = false) {
  if (!author) return;
  
  // Push to history for back navigation (unless restoring from popstate)
  if (!skipHistory) {
    history.pushState({ view: 'userprofile', author: author, nationality: nationality }, '', `#user-${author}`);
  }
  
  feedScrollPosition = window.scrollY;
  isMyPageView = true;
  viewingUser = { nickname: author, nationality: nationality };
  
  feedHeader.style.display = 'none';
  renderOtherUserProfile('posts', 'new');
  window.scrollTo(0, 0);
  }

// Render other user's profile view
function renderOtherUserProfile(tab = 'posts', postsSort = 'new') {
  if (!viewingUser) return;
  
  const flag = getFlagEmoji(viewingUser.nationality);
  
  postsContainer.innerHTML = `
    <div class="my-page-view">
      <button class="back-btn" id="backFromUserProfile">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back
      </button>
      
<div class="profile-header-row">
  <div class="profile-avatar-wrapper">
  <div class="profile-avatar-large">
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
  <circle cx="12" cy="7" r="4"></circle>
  </svg>
  </div>
  </div>
  <div class="profile-info">
  <span class="profile-display-name">${flag} ${viewingUser.nickname}</span>
  <div class="profile-stats-inline">
    <span class="profile-stat-item"><strong>0</strong> Following</span>
    <span class="profile-stat-item"><strong>0</strong> Followers</span>
  </div>
  </div>
  <button class="logout-btn-header chat-btn" id="chatWithUserBtn">Chat</button>
  </div>
      
      <div class="profile-tabs">
        <button class="profile-tab ${tab === 'posts' ? 'active' : ''}" data-tab="posts">Posts</button>
        <button class="profile-tab ${tab === 'comments' ? 'active' : ''}" data-tab="comments">Comments</button>
      </div>
      
      <div class="profile-tab-content" id="profileTabContent">
        ${renderOtherUserTabContent(tab, postsSort)}
      </div>
    </div>
  `;
  
  document.getElementById('backFromUserProfile').addEventListener('click', closeUserProfile);
  
  // Chat button handler - TODO: Implement chat functionality with backend
  document.getElementById('chatWithUserBtn')?.addEventListener('click', () => {
    showToast('Chat feature coming soon!');
    // TODO: Navigate to chat route when implemented
    // window.location.href = `/chat/${viewingUser.nickname}`;
  });
  
  document.querySelectorAll('.profile-tab').forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      renderOtherUserProfile(tabBtn.dataset.tab);
    });
  });
  
  if (tab === 'posts') {
    document.querySelectorAll('.posts-sort-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.posts-sort-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const sort = btn.dataset.sort;
        renderOtherUserProfile('posts', sort);
      });
    });
document.querySelectorAll('.my-post-item').forEach(item => {
  item.addEventListener('click', () => {
  const postId = parseInt(item.dataset.postId);
  openPostDetail(postId);
  });
  });
  }
  if (tab === 'comments') {
  // Comments tab sorting
  document.querySelectorAll('.comments-sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.comments-sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const sort = btn.dataset.sort;
      renderOtherUserProfile('comments', sort);
    });
  });
  // Comment like buttons
  document.querySelectorAll('.comment-like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCommentLikeClick(btn);
    });
  });
// Click to view post
  document.querySelectorAll('.my-comment-item').forEach(item => {
  item.addEventListener('click', () => {
  const postId = parseInt(item.dataset.postId);
  openPostDetail(postId);
  });
  });
  }
  }
  
  // Render content for other user's profile tabs
  function renderOtherUserTabContent(tab, postsSort = 'new') {
  if (tab === 'posts') {
    // Get posts by this user
    let userPosts = posts.filter(p => p.author === viewingUser.nickname);
    
// Sort posts by actual like counts
  if (postsSort === 'top') {
  userPosts = userPosts.sort((a, b) => getLikeState(b.id).count - getLikeState(a.id).count);
  } else {
  userPosts = userPosts.sort((a, b) => b.createdAt - a.createdAt);
  }
  
  return `
  <div class="posts-sort-row">
  <button class="posts-sort-btn ${postsSort === 'top' ? 'active' : ''}" data-sort="top">Top</button>
  <button class="posts-sort-btn ${postsSort === 'new' ? 'active' : ''}" data-sort="new">New</button>
  </div>
  ${userPosts.length === 0 ? `<div class="empty-tab-message">No posts yet.</div>` : `
  <div class="my-posts-list">
  ${userPosts.map(p => {
  const likeState = getLikeState(p.id);
  return `
  <div class="my-post-item" data-post-id="${p.id}">
  <div class="my-post-title">${p.title}</div>
  <div class="my-post-meta">
  <span>${formatTimeAgo(p.createdAt)}</span>
  <span>${p.categoryLabel}</span>
  <span>${likeState.count} likes</span>
  <span>${p.comments} comments</span>
  </div>
  </div>
  `;
  }).join('')}
  </div>
  `}
  `;
  } else if (tab === 'comments') {
  // TODO: Fetch user's comments from backend API
  // For now, get comments from localStorage that match this user
  const allPostComments = JSON.parse(localStorage.getItem('postComments') || '{}');
  let userComments = [];
  
  // Gather all comments by this user across all posts
  for (const postId of Object.keys(allPostComments)) {
    const postComments = allPostComments[postId] || [];
    for (const comment of postComments) {
      if (comment.author === viewingUser.nickname) {
        userComments.push({ ...comment, postId: parseInt(postId) });
      }
    }
  }
  
  // Get commentsSort from second parameter
  const commentsSort = postsSort;
  
  // Sort comments
  if (commentsSort === 'top') {
    userComments = userComments.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else {
    userComments = userComments.sort((a, b) => b.createdAt - a.createdAt);
  }
  
  return `
  <div class="comments-sort-row">
    <button class="comments-sort-btn ${commentsSort === 'top' ? 'active' : ''}" data-sort="top">Top</button>
    <button class="comments-sort-btn ${commentsSort === 'new' ? 'active' : ''}" data-sort="new">New</button>
  </div>
  ${userComments.length === 0 ? `<div class="empty-tab-message">No comments to show.</div>` : `
  <div class="my-comments-list">
    ${userComments.map((c, idx) => {
      const likeState = getCommentLikeState(c.id || idx);
      return `
      <div class="my-comment-item" data-post-id="${c.postId}" data-comment-id="${c.id || idx}">
        <div class="comment-text">${c.text}</div>
        <div class="comment-item-footer">
          <div class="comment-meta">on post #${c.postId} - ${formatTimeAgo(c.createdAt)}</div>
          <button class="comment-like-btn ${likeState.liked ? 'liked' : ''}" data-comment-id="${c.id || idx}" aria-label="Like comment">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="${likeState.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span class="comment-like-count">${likeState.count}</span>
          </button>
        </div>
      </div>
      `;
    }).join('')}
  </div>
  `}
  `;
  }
  return '';
}

// Close other user profile
// Close User Profile - use history.back() for proper back navigation
function closeUserProfile() {
  window.history.back();
  }

// Close My Page - use history.back() for proper back navigation
  function closeMyPage() {
  window.history.back();
  }

// Handle My Page save
function handleMyPageSave(e) {
  e.preventDefault();
  
  const nicknameVal = document.getElementById('nicknameInput').value.trim();
  const nicknameError = document.getElementById('editNicknameError');
  
  // Validate nickname
  if (!nicknameVal) {
    if (nicknameError) nicknameError.style.display = 'block';
    return;
  }
  if (nicknameError) nicknameError.style.display = 'none';
  
  currentUser.nickname = nicknameVal;
  
  // Name - can only change once
  const newName = document.getElementById('profileNameInput').value.trim();
  if (newName && newName !== currentUser.name && !currentUser.nameChangedOnce) {
    currentUser.name = newName;
    currentUser.nameChangedOnce = true;
  }
  
  // Age
  const ageVal = document.getElementById('ageInput').value;
  currentUser.age = ageVal ? parseInt(ageVal) : null;
  
  // Nationality - can only change once
  const natSelect = document.getElementById('nationalityEditSelect');
  if (natSelect) {
    const newNat = natSelect.value;
    if (newNat && newNat !== currentUser.nationality && !currentUser.nationalityChangedOnce) {
      currentUser.nationality = newNat;
      currentUser.nationalityChangedOnce = true;
    }
  }
  
  // Gender
  const genderSelect = document.getElementById('genderSelect');
  if (genderSelect) {
    currentUser.gender = genderSelect.value || null;
  }
  
  // Profile image is now handled via avatar upload, not form field
  
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  updateAuthUI();
  
  // Show success feedback
  const btn = document.querySelector('.my-page-form .form-submit');
  const originalText = btn.textContent;
  btn.textContent = 'Saved!';
  btn.style.backgroundColor = 'var(--color-success, #22c55e)';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = '';
    // Re-render to update header with new values
    renderMyPageView('edit');
  }, 1500);
}

// Format likes count
function formatLikes(likes) {
  if (likes >= 1000) {
    return (likes / 1000).toFixed(1) + 'k';
  }
  return likes.toString();
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
function openPostDetail(postId, skipHistory = false) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  
  // Push to history for back navigation (unless restoring from popstate)
  if (!skipHistory) {
    history.pushState({ view: 'post', postId: postId }, '', `#post-${postId}`);
  }
  
  // Find post card crossing virtual anchor line (120px from top)
  const ANCHOR_LINE_Y = 120;
  let anchorPostId = null;
  let anchorOffset = 0;
  const postCards = document.querySelectorAll('.post-card[data-post-id]');
  for (const card of postCards) {
    const rect = card.getBoundingClientRect();
    // Card crosses anchor line if top <= anchorLineY and bottom >= anchorLineY
    if (rect.top <= ANCHOR_LINE_Y && rect.bottom >= ANCHOR_LINE_Y) {
      anchorPostId = card.dataset.postId;
      anchorOffset = ANCHOR_LINE_Y - rect.top;
      break;
    }
    // Fallback: first card below anchor line
    if (rect.top > ANCHOR_LINE_Y && !anchorPostId) {
      anchorPostId = card.dataset.postId;
      anchorOffset = ANCHOR_LINE_Y - rect.top;
      break;
    }
  }
  
  // Save complete feed state before switching view
  savedFeedState = {
    category: currentCategory,
    sort: currentSort,
    language: currentLanguage,
    activityType: currentActivityType,
    topic: currentTopic,
    search: searchQuery,
    scrollY: window.scrollY,
    anchorPostId: anchorPostId,
    anchorOffset: anchorOffset
  };
  
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
  ? comments.map((c, index) => {
  const commentLikeState = getCommentLikeState(c.id || index);
  return `
  <div class="comment-item" data-comment-index="${index}" data-post-id="${postId}" data-comment-id="${c.id || index}">
  ${currentUser ? `
  <div class="kebab-menu-container">
  <button class="kebab-menu-btn comment-menu-btn" data-comment-index="${index}" aria-label="Comment options">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  <circle cx="12" cy="5" r="2"></circle>
  <circle cx="12" cy="12" r="2"></circle>
  <circle cx="12" cy="19" r="2"></circle>
  </svg>
  </button>
  <div class="kebab-menu comment-menu" data-comment-index="${index}">
  ${isCommentOwner(c) ? `
  <button class="kebab-menu-item" data-action="edit-comment" data-comment-index="${index}">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
  Edit
  </button>
  <button class="kebab-menu-item danger" data-action="delete-comment" data-comment-index="${index}">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <polyline points="3 6 5 6 21 6"></polyline>
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
  Delete
  </button>
  ` : `
  <button class="kebab-menu-item" data-action="report-comment" data-comment-index="${index}">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
  <line x1="4" y1="22" x2="4" y2="15"></line>
  </svg>
  Report
  </button>
  `}
  </div>
  </div>
  ` : ''}
  <div class="comment-meta">
  ${formatAuthorDisplay(c.author, c.authorNationality)}
  <span>•</span>
  <span>${formatCommentTime(c.createdAt)}</span>
  </div>
  <p class="comment-text" data-comment-index="${index}">${c.text}</p>
  <div class="comment-actions">
  <button class="comment-like-btn ${commentLikeState.liked ? 'liked' : ''}" data-comment-id="${c.id || index}" aria-label="Like comment">
  <svg viewBox="0 0 24 24" width="16" height="16" fill="${commentLikeState.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
  <span class="comment-like-count">${commentLikeState.count}</span>
  </button>
  </div>
  </div>
  `;
  }).join('')
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
            <span class="vote-count" id="detailVoteCount">${formatLikes(voteState.voteCount)}</span>
            <button class="vote-btn downvote ${voteState.userVote === -1 ? 'active' : ''}" data-post-id="${post.id}" aria-label="Downvote">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 20l8-8h-5v-8h-6v8h-5z"/>
              </svg>
            </button>
          </div>
          <div class="post-detail-main">
            ${currentUser ? `
            <div class="kebab-menu-container">
              <button class="kebab-menu-btn" data-post-id="${post.id}" aria-label="Post options">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="5" r="2"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                  <circle cx="12" cy="19" r="2"></circle>
                </svg>
              </button>
              <div class="kebab-menu" data-post-id="${post.id}">
                ${isPostOwner(post) ? `
                  <button class="kebab-menu-item" data-action="edit" data-post-id="${post.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                    Edit
                  </button>
                  <button class="kebab-menu-item danger" data-action="delete" data-post-id="${post.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    Delete
                  </button>
                ` : `
                  <button class="kebab-menu-item" data-action="report" data-post-id="${post.id}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" y1="22" x2="4" y2="15"></line>
                    </svg>
                    Report
                  </button>
                `}
              </div>
            </div>
            ` : ''}
            <div class="post-detail-meta">
<span class="post-category">${post.categoryLabel}</span>
  <span>Posted by</span>
  ${formatAuthorDisplay(post.author, post.authorNationality)}
  <span>•</span>
  <span data-created-at="${post.createdAt}">${formatTimeAgo(post.createdAt)}</span>
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
${comments.length} Comments
  </span>
  <button class="action-btn save-btn ${isPostSaved(post.id) ? 'saved' : ''}" id="detailSaveBtn" data-post-id="${post.id}" aria-label="Save">
                <svg viewBox="0 0 24 24" fill="${isPostSaved(post.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span id="detailSaveText">${isPostSaved(post.id) ? 'Saved' : 'Save'}</span>
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
        </div>
        <div class="comments-section">
          <div class="comments-header">${comments.length} Comments</div>
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
  
  // Save button handler
  const detailSaveBtn = document.getElementById('detailSaveBtn');
  if (detailSaveBtn) {
    detailSaveBtn.addEventListener('click', () => handleDetailSave(postId));
  }
  
  // Add clickable author handlers for post author and comment authors
  document.querySelectorAll('.clickable-author').forEach(el => {
  el.addEventListener('click', (e) => {
  e.stopPropagation();
  const author = el.dataset.author;
  const nationality = el.dataset.nationality;
  // Don't open own profile - go to My Page instead
  if (currentUser && (author === currentUser.nickname || author === currentUser.name)) {
  closePostDetail();
  openMyPage();
  } else {
  openUserProfile(author, nationality);
  }
  });
  });
  
// Setup kebab menu handlers for post and comments
  setupKebabMenuHandlers();
  
  // Setup comment like handlers in post detail
  document.querySelectorAll('.comment-item .comment-like-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      handleCommentLikeClick(btn);
    });
  });
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

// Check if post is saved by current user
function isPostSaved(postId) {
  if (!currentUser) return false;
  const savedPosts = currentUser.savedPosts || [];
  return savedPosts.includes(postId);
}

// Toggle save status for a post
function toggleSavePost(postId) {
  if (!currentUser) {
    openAuthModal(false);
    return false;
  }
  
  if (!currentUser.savedPosts) {
    currentUser.savedPosts = [];
  }
  
  const index = currentUser.savedPosts.indexOf(postId);
  if (index === -1) {
    // Add to saved
    currentUser.savedPosts.push(postId);
  } else {
    // Remove from saved
    currentUser.savedPosts.splice(index, 1);
  }
  
  // Persist to localStorage
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  return index === -1; // Returns true if now saved, false if unsaved
}

// Handle save in detail view
function handleDetailSave(postId) {
  const isSaved = toggleSavePost(postId);
  if (isSaved === false && !currentUser) return; // User not logged in
  
  const btn = document.getElementById('detailSaveBtn');
  const svg = btn.querySelector('svg');
  const text = document.getElementById('detailSaveText');
  
  btn.classList.toggle('saved', isSaved);
  svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
  text.textContent = isSaved ? 'Saved' : 'Save';
  
  showToast(isSaved ? 'Post saved' : 'Post unsaved');
}

// Close post detail and return to feed
// Close Post Detail - use history.back() for proper back navigation
function closePostDetail() {
  window.history.back();
  }

// Internal function to restore feed state (used by popstate handler)
function restoreToFeed() {
  isDetailView = false;
  currentPostId = null;
  
  // Restore saved feed state if available
  if (savedFeedState) {
    currentCategory = savedFeedState.category;
    currentSort = savedFeedState.sort;
    currentLanguage = savedFeedState.language;
    currentActivityType = savedFeedState.activityType;
    currentTopic = savedFeedState.topic || 'all';
    searchQuery = savedFeedState.search;
    searchInput.value = searchQuery;
    
    // Update nav active state
    navItems.forEach(item => {
      item.classList.toggle('active', item.dataset.category === currentCategory);
    });
    
    // Update sort buttons active state
    sortButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sort === currentSort);
    });
    
    // Update language tabs active state
    langTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.lang === currentLanguage);
    });
    
    // Update topic tabs active state
    topicTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.topic === currentTopic);
    });
  }
  
  // Show the feed header again
  feedHeader.style.display = 'flex';
  updateFeedTabs();
  
  // Re-render posts
  renderPosts();
  
  // Restore scroll position using anchor element with retry
  const ANCHOR_LINE_Y = 120;
  const anchorId = savedFeedState ? savedFeedState.anchorPostId : null;
  const anchorOffset = savedFeedState ? savedFeedState.anchorOffset : 0;
  const fallbackScrollY = savedFeedState ? savedFeedState.scrollY : 0;
  
  let retryCount = 0;
  const MAX_RETRIES = 30;
  
  function restoreScrollPosition() {
    if (anchorId) {
      const anchorEl = document.querySelector(`.post-card[data-post-id="${anchorId}"]`);
      if (anchorEl) {
        // Scroll so anchor card is at same position relative to anchor line
        const targetScrollY = anchorEl.offsetTop - ANCHOR_LINE_Y + anchorOffset;
        window.scrollTo(0, Math.max(0, targetScrollY));
        savedFeedState = null;
        return;
      }
    }
    if (retryCount < MAX_RETRIES) {
      retryCount++;
      requestAnimationFrame(restoreScrollPosition);
    } else {
      // Fallback to saved scrollY
      window.scrollTo(0, fallbackScrollY);
      savedFeedState = null;
    }
  }
  
  // Double requestAnimationFrame for layout stabilization
  requestAnimationFrame(() => {
    requestAnimationFrame(restoreScrollPosition);
  });
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
  voteCountEl.textContent = formatLikes(newVoteCount);
}

// Handle comment submit
function handleCommentSubmit(postId) {
  const input = document.getElementById('commentInput');
  const text = input.value.trim();
  
  if (!text || !currentUser) return;
  
const comment = {
  id: Date.now(),
  postId: postId,
  author: currentUser.nickname || currentUser.name,
  authorId: currentUser.id, // Store authorId for reliable ownership detection
  authorNationality: currentUser.nationality,
  text: text,
  createdAt: Date.now(),
  likes: 0 // Initialize likes count - TODO: Remove when backend handles this
  };
  
  saveComment(postId, comment);
  input.value = '';
  
  // Add to current user's myComments for profile view
  if (!currentUser.myComments) currentUser.myComments = [];
  currentUser.myComments.push(comment);
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
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
  <div class="post-content">
        ${currentUser ? `
        <div class="kebab-menu-container">
          <button class="kebab-menu-btn" data-post-id="${post.id}" aria-label="Post options">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="5" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="12" cy="19" r="2"></circle>
            </svg>
          </button>
          <div class="kebab-menu" data-post-id="${post.id}">
            ${isPostOwner(post) ? `
              <button class="kebab-menu-item" data-action="edit" data-post-id="${post.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                Edit
              </button>
              <button class="kebab-menu-item danger" data-action="delete" data-post-id="${post.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Delete
              </button>
            ` : `
              <button class="kebab-menu-item" data-action="report" data-post-id="${post.id}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
                Report
              </button>
            `}
          </div>
        </div>
        ` : ''}
        <div class="post-meta">
<span class="post-category">${post.categoryLabel}</span>
  <span>Posted by</span>
  ${formatAuthorDisplay(post.author, post.authorNationality)}
  <span>•</span>
  <span data-created-at="${post.createdAt}">${formatTimeAgo(post.createdAt)}</span>
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
  ${getComments(post.id).length || post.comments} Comments
  </button>
  <button class="action-btn save-btn ${isPostSaved(post.id) ? 'saved' : ''}" data-post-id="${post.id}" aria-label="Save">
  <svg viewBox="0 0 24 24" fill="${isPostSaved(post.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
  </svg>
  <span class="save-text">${isPostSaved(post.id) ? 'Saved' : 'Save'}</span>
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
  
  // Filter by topic when viewing free-board category
  if (currentCategory === 'free-board' && currentTopic !== 'all') {
  filtered = filtered.filter(post => post.topic === currentTopic);
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) || 
      post.content.toLowerCase().includes(query) ||
      post.author.toLowerCase().includes(query)
    );
  }

// Apply sorting for all categories
  switch (currentSort) {
  case 'hot':
  filtered.sort((a, b) => ((b.likes || 0) + b.comments * 2) - ((a.likes || 0) + a.comments * 2));
  break;
  case 'new':
  filtered.sort((a, b) => b.createdAt - a.createdAt);
  break;
  case 'top':
  filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  break;
  }

  return filtered;
}

// Update feed tabs visibility based on category
  function updateFeedTabs() {
  if (languageFilterCategories.includes(currentCategory)) {
  // Show both Hot/New/Top and Language tabs for Korean Starter Pack and Audio Guides
  feedSort.style.display = 'flex';
  feedLanguageTabs.style.display = 'flex';
  feedActivityTabs.style.display = 'none';
  feedTopicTabs.style.display = 'none';
  createPostBtn.style.display = 'none';
  } else if (currentCategory === 'activities') {
  feedSort.style.display = 'none';
  feedLanguageTabs.style.display = 'none';
  feedActivityTabs.style.display = 'flex';
  feedTopicTabs.style.display = 'none';
  createPostBtn.style.display = 'none';
  } else if (currentCategory === 'free-board') {
  feedSort.style.display = 'flex';
  feedLanguageTabs.style.display = 'none';
  feedActivityTabs.style.display = 'none';
  feedTopicTabs.style.display = 'flex';
  createPostBtn.style.display = currentUser ? 'flex' : 'none';
  } else {
  feedSort.style.display = 'flex';
  feedLanguageTabs.style.display = 'none';
  feedActivityTabs.style.display = 'none';
  feedTopicTabs.style.display = 'none';
  createPostBtn.style.display = 'none';
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
  
  // Add like button listeners
  document.querySelectorAll('.post-card .like-btn').forEach(btn => {
  btn.addEventListener('click', handleLikeClick);
  });
  
  // Add save button listeners
  document.querySelectorAll('.post-card .save-btn').forEach(btn => {
  btn.addEventListener('click', handleSaveClick);
  });
  
  // Add comments button listeners - clicking comment count opens detail
  document.querySelectorAll('.post-card .comments-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
  e.stopPropagation();
  const postId = parseInt(btn.closest('.post-card').dataset.postId);
  openPostDetail(postId);
  });
  });

  // Add clickable author handlers
  document.querySelectorAll('.clickable-author').forEach(el => {
  el.addEventListener('click', (e) => {
  e.stopPropagation();
  const author = el.dataset.author;
  const nationality = el.dataset.nationality;
  // Don't open own profile - go to My Page instead
  if (currentUser && (author === currentUser.nickname || author === currentUser.name)) {
  openMyPage();
  } else {
  openUserProfile(author, nationality);
  }
  });
  });
  
  // Add post card click listeners for opening detail view
  document.querySelectorAll('.post-card').forEach(card => {
  const postId = parseInt(card.dataset.postId);
  
  card.addEventListener('click', (e) => {
  // Block like buttons, save buttons, author clicks, and kebab menu
  if (e.target.closest('.like-btn') || e.target.closest('.save-btn') || e.target.closest('.clickable-author') || e.target.closest('.kebab-menu-container')) {
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
  
  // Setup kebab menu handlers for post cards
  setupKebabMenuHandlers();
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

  // Handle save button clicks
  function handleSaveClick(e) {
  e.stopPropagation();
  const btn = e.currentTarget;
  const postId = parseInt(btn.dataset.postId);
  const isSaved = toggleSavePost(postId);
  if (isSaved === false && !currentUser) return; // User not logged in
  
  // Update UI
  btn.classList.toggle('saved', isSaved);
  const svg = btn.querySelector('svg');
  svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
  
  // Update text label
  const textSpan = btn.querySelector('.save-text');
  if (textSpan) {
    textSpan.textContent = isSaved ? 'Saved' : 'Save';
  }
  
  showToast(isSaved ? 'Post saved' : 'Post unsaved');
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
  
  // If in profile view (My Page or other user profile), close it
  if (isMyPageView) {
    isMyPageView = false;
    viewingUser = null;
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
  
  // Reset topic filter when switching to free-board
  if (category === 'free-board') {
  currentTopic = 'all';
  topicTabs.forEach(tab => {
  tab.classList.toggle('active', tab.dataset.topic === 'all');
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
  
  // Handle topic tab selection (Free Board)
  function handleTopicTabClick(e) {
  const tab = e.currentTarget;
  const topic = tab.dataset.topic;
  
  topicTabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  
  currentTopic = topic;
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
  
  topicTabs.forEach(tab => {
  tab.addEventListener('click', handleTopicTabClick);
  });
  
  searchInput.addEventListener('input', handleSearch);

mobileMenuBtn.addEventListener('click', openMobileSidebar);
closeSidebarBtn.addEventListener('click', closeMobileSidebar);
sidebarOverlay.addEventListener('click', closeMobileSidebar);
  
  // Logo click - return to homepage feed
const logoLink = document.getElementById('logoLink');
logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  // Reset state to defaults
  currentCategory = 'all';
  currentSort = 'hot';
  currentLanguage = 'English';
  currentActivityType = 'Running';
  searchQuery = '';
  searchInput.value = '';
isDetailView = false;
  isMyPageView = false;
  currentPostId = null;
  viewingUser = null;
  
  // Update UI
  navItems.forEach(item => {
  item.classList.toggle('active', item.dataset.category === 'all');
  });
  sortButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === 'hot');
  });
  feedTitle.textContent = 'All Posts';
  feedHeader.style.display = 'flex';
  updateFeedTabs();
  renderPosts();
  window.scrollTo(0, 0);
});

// Create Post Modal Functions
function openCreatePostModal() {
  if (!currentUser) {
    openAuthModal(false);
    return;
  }
  createPostModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCreatePostModal() {
  createPostModal.style.display = 'none';
  document.body.style.overflow = '';
  document.getElementById('createPostForm').reset();
  const imagePreview = document.getElementById('postImagePreview');
  if (imagePreview) {
    imagePreview.innerHTML = '';
    imagePreview.style.display = 'none';
  }
}

function handlePostImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file.');
    return;
  }
  
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (file.size > MAX_SIZE) {
    alert('Image size must be less than 5MB.');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(event) {
    const imagePreview = document.getElementById('postImagePreview');
    if (imagePreview) {
      imagePreview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
      imagePreview.style.display = 'block';
    }
  };
  reader.readAsDataURL(file);
}

function handleCreatePost(e) {
  e.preventDefault();
  
  const title = document.getElementById('postTitleInput').value.trim();
  const content = document.getElementById('postContentInput').value.trim();
  const topicSelect = document.getElementById('postTopicSelect');
  const topic = topicSelect ? topicSelect.value : 'question';
  
  if (!title || !content) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Get image if uploaded
  const imageInput = document.getElementById('postImageInput');
  let imageUrl = null;
  if (imageInput && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(event) {
      imageUrl = event.target.result;
      createNewPost(title, content, topic, imageUrl);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    createNewPost(title, content, topic, null);
  }
}

function createNewPost(title, content, topic, imageUrl) {
  const newPost = {
  id: Date.now(),
  title: title,
  content: content,
  category: 'free-board',
  categoryLabel: 'Travexlo Lounge',
  author: currentUser.nickname || currentUser.name,
  authorId: currentUser.id, // Store authorId for reliable ownership detection
  authorNationality: currentUser.nationality,
  createdAt: Date.now(),
  likes: 0,
  comments: 0,
  topic: topic,
  image: imageUrl,
  isUserCreated: true // Flag for localStorage persistence - TODO: remove when backend is implemented
  };
  
  posts.unshift(newPost);
  
  // Persist user-created posts to localStorage
  // TODO: Remove this when backend storage is implemented
  saveUserPosts();
  
  closeCreatePostModal();
  
  // Switch to free-board category and render
  currentCategory = 'free-board';
  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.category === 'free-board');
  });
  feedTitle.textContent = 'Travexlo Lounge';
  updateFeedTabs();
  renderPosts();
  window.scrollTo(0, 0);
}

// Profile button event listener
profileBtn.addEventListener('click', openMyPage);

  // Notification button event listener
  notificationBtn.addEventListener('click', () => {
  alert('No new notifications');
  });
  
  // Chat button event listener
  const chatBtn = document.getElementById('chatBtn');
  if (chatBtn) {
  chatBtn.addEventListener('click', () => {
  // TODO: Implement chat/inbox page when backend is available
  alert('Chat feature coming soon!');
  });
  }
  
  // Auth event listeners
loginBtn.addEventListener('click', () => openAuthModal(false));
authModalClose.addEventListener('click', closeAuthModal);
authModalOverlay.addEventListener('click', (e) => {
  if (e.target === authModalOverlay) closeAuthModal();
});
authForm.addEventListener('submit', handleAuthSubmit);
// userMenuBtn removed - using profile button with in-page logout

  // Forgot password event listeners
  forgotPasswordBtn.addEventListener('click', showForgotPasswordForm);
  sendResetBtn.addEventListener('click', handleSendResetLink);
  backToLoginBtn.addEventListener('click', backToLogin);
  
  // Create post event listeners
  createPostBtn.addEventListener('click', openCreatePostModal);
  document.getElementById('closeCreatePostModal').addEventListener('click', closeCreatePostModal);
  document.getElementById('cancelCreatePost').addEventListener('click', closeCreatePostModal);
  createPostModal.addEventListener('click', (e) => {
  if (e.target === createPostModal) closeCreatePostModal();
  });
  document.getElementById('createPostForm').addEventListener('submit', handleCreatePost);
  document.getElementById('addImageBtn').addEventListener('click', () => {
  document.getElementById('postImageInput').click();
  });
  document.getElementById('postImageInput').addEventListener('change', handlePostImageUpload);
  
  // Avatar crop modal event listeners
  document.getElementById('closeAvatarCropModal').addEventListener('click', closeAvatarCropModal);
  document.getElementById('cancelAvatarCrop').addEventListener('click', closeAvatarCropModal);
  document.getElementById('applyAvatarCrop').addEventListener('click', applyAvatarCrop);
  document.getElementById('avatarCropModal').addEventListener('click', (e) => {
  if (e.target.id === 'avatarCropModal') closeAvatarCropModal();
  });
  
  // Click outside handler (user menu removed)

// ============================================
// POST/COMMENT ACTIONS (Edit, Delete, Report)
// ============================================

// State for actions
let currentReportType = null; // 'post' or 'comment'
let currentReportId = null;
let currentDeleteType = null; // 'post' or 'comment'
let currentDeleteId = null;
let currentDeletePostId = null; // For comments, track which post they belong to

// Show toast notification
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Close all kebab menus
function closeAllKebabMenus() {
  document.querySelectorAll('.kebab-menu.active').forEach(menu => {
    menu.classList.remove('active');
  });
}

// Toggle kebab menu
function toggleKebabMenu(btn) {
  const menu = btn.nextElementSibling;
  const isActive = menu.classList.contains('active');
  closeAllKebabMenus();
  if (!isActive) {
    menu.classList.add('active');
  }
}

// Close kebab menus when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.kebab-menu-container')) {
    closeAllKebabMenus();
  }
});

// Setup kebab menu handlers (called after rendering posts/comments)
function setupKebabMenuHandlers() {
  // Kebab button toggles
  document.querySelectorAll('.kebab-menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleKebabMenu(btn);
    });
  });
  
  // Menu item actions
  document.querySelectorAll('.kebab-menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = item.dataset.action;
      const postId = item.dataset.postId ? parseInt(item.dataset.postId) : null;
      const commentIndex = item.dataset.commentIndex !== undefined ? parseInt(item.dataset.commentIndex) : null;
      
      closeAllKebabMenus();
      
      switch (action) {
        case 'edit':
          openEditPostModal(postId);
          break;
        case 'delete':
          openDeleteConfirmation('post', postId);
          break;
        case 'report':
          openReportModal('post', postId);
          break;
        case 'edit-comment':
          startCommentEdit(commentIndex);
          break;
        case 'delete-comment':
          const commentPostId = item.closest('.comment-item').dataset.postId;
          openDeleteConfirmation('comment', commentIndex, parseInt(commentPostId));
          break;
        case 'report-comment':
          openReportModal('comment', commentIndex);
          break;
      }
    });
  });
}

// ---- EDIT POST ----
function openEditPostModal(postId) {
  const post = posts.find(p => p.id === postId);
  if (!post) return;
  
  document.getElementById('editPostId').value = postId;
  document.getElementById('editPostTitleInput').value = post.title;
  document.getElementById('editPostContentInput').value = post.content;
  document.getElementById('editPostModal').style.display = 'flex';
}

function closeEditPostModal() {
  document.getElementById('editPostModal').style.display = 'none';
  document.getElementById('editPostForm').reset();
}

function handleEditPostSubmit(e) {
  e.preventDefault();
  const postId = parseInt(document.getElementById('editPostId').value);
  const newTitle = document.getElementById('editPostTitleInput').value.trim();
  const newContent = document.getElementById('editPostContentInput').value.trim();
  
  if (!newTitle || !newContent) {
    alert('Please fill in all required fields.');
    return;
  }
  
  // Optimistic update
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex !== -1) {
  posts[postIndex].title = newTitle;
  posts[postIndex].content = newContent;
  posts[postIndex].updatedAt = Date.now();
  
  // Update localStorage for user-created posts
  // TODO: Remove this when backend storage is implemented
  saveUserPosts();
  }
  
  closeEditPostModal();
  
  // Re-render appropriate view
  if (isDetailView) {
    openPostDetail(postId);
  } else {
    renderPosts();
  }
  
  showToast('Post updated successfully');
  
  // TODO: API integration
  // await fetch(`/api/posts/${postId}`, {
  //   method: 'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ title: newTitle, content: newContent })
  // });
}

// ---- DELETE POST/COMMENT ----
function openDeleteConfirmation(type, id, postId = null) {
  currentDeleteType = type;
  currentDeleteId = id;
  currentDeletePostId = postId;
  
  const desc = document.getElementById('confirmDeleteDesc');
  if (type === 'post') {
    desc.textContent = 'Are you sure you want to delete this post? This action cannot be undone.';
  } else {
    desc.textContent = 'Are you sure you want to delete this comment? This action cannot be undone.';
  }
  
  document.getElementById('confirmDeleteModal').style.display = 'flex';
}

function closeDeleteConfirmation() {
  document.getElementById('confirmDeleteModal').style.display = 'none';
  currentDeleteType = null;
  currentDeleteId = null;
  currentDeletePostId = null;
}

function handleConfirmDelete() {
  if (currentDeleteType === 'post') {
    deletePost(currentDeleteId);
  } else if (currentDeleteType === 'comment') {
    deleteComment(currentDeletePostId, currentDeleteId);
  }
  closeDeleteConfirmation();
}

function deletePost(postId) {
  // Optimistic update - remove from array
  const postIndex = posts.findIndex(p => p.id === postId);
  if (postIndex !== -1) {
  posts.splice(postIndex, 1);
  }
  
  // Update localStorage for user-created posts
  // TODO: Remove this when backend storage is implemented
  saveUserPosts();
  
  // Also remove from localStorage comments
  const allComments = JSON.parse(localStorage.getItem('postComments') || '{}');
  delete allComments[postId];
  localStorage.setItem('postComments', JSON.stringify(allComments));
  
  // If on detail view, go back to feed
  if (isDetailView) {
    closePostDetail();
  } else {
    renderPosts();
  }
  
  showToast('Post deleted successfully');
  
  // TODO: API integration
  // await fetch(`/api/posts/${postId}`, { method: 'DELETE' });
}

function deleteComment(postId, commentIndex) {
  const allComments = JSON.parse(localStorage.getItem('postComments') || '{}');
  if (allComments[postId] && allComments[postId][commentIndex]) {
    allComments[postId].splice(commentIndex, 1);
    localStorage.setItem('postComments', JSON.stringify(allComments));
    
    // Update post comment count
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.comments = allComments[postId].length;
    }
  }
  
  // Re-render detail view
  openPostDetail(postId);
  showToast('Comment deleted successfully');
  
  // TODO: API integration
  // await fetch(`/api/comments/${commentId}`, { method: 'DELETE' });
}

// ---- EDIT COMMENT (inline) ----
function startCommentEdit(commentIndex) {
  const commentItem = document.querySelector(`.comment-item[data-comment-index="${commentIndex}"]`);
  if (!commentItem) return;
  
  const textEl = commentItem.querySelector('.comment-text');
  const originalText = textEl.textContent;
  
  textEl.innerHTML = `
    <div class="comment-edit-form">
      <textarea class="comment-edit-input">${originalText}</textarea>
      <div class="comment-edit-actions">
        <button class="comment-edit-cancel" data-comment-index="${commentIndex}" data-original="${originalText}">Cancel</button>
        <button class="comment-edit-save" data-comment-index="${commentIndex}">Save</button>
      </div>
    </div>
  `;
  
  // Focus the textarea
  textEl.querySelector('.comment-edit-input').focus();
  
  // Cancel button
  textEl.querySelector('.comment-edit-cancel').addEventListener('click', () => {
    textEl.textContent = originalText;
  });
  
  // Save button
  textEl.querySelector('.comment-edit-save').addEventListener('click', () => {
    const newText = textEl.querySelector('.comment-edit-input').value.trim();
    if (!newText) return;
    
    const postId = parseInt(commentItem.dataset.postId);
    saveCommentEdit(postId, commentIndex, newText);
  });
}

function saveCommentEdit(postId, commentIndex, newText) {
  const allComments = JSON.parse(localStorage.getItem('postComments') || '{}');
  if (allComments[postId] && allComments[postId][commentIndex]) {
    allComments[postId][commentIndex].text = newText;
    allComments[postId][commentIndex].updatedAt = Date.now();
    localStorage.setItem('postComments', JSON.stringify(allComments));
  }
  
  // Re-render
  openPostDetail(postId);
  showToast('Comment updated successfully');
  
  // TODO: API integration
  // await fetch(`/api/comments/${commentId}`, {
  //   method: 'PUT',
  //   body: JSON.stringify({ text: newText })
  // });
}

// ---- REPORT ----
function openReportModal(type, id) {
  currentReportType = type;
  currentReportId = id;
  document.getElementById('reportForm').reset();
  document.getElementById('reportModal').style.display = 'flex';
}

function closeReportModal() {
  document.getElementById('reportModal').style.display = 'none';
  currentReportType = null;
  currentReportId = null;
}

function handleReportSubmit(e) {
  e.preventDefault();
  const reason = document.getElementById('reportReasonSelect').value;
  const details = document.getElementById('reportDetailsInput').value.trim();
  
  if (!reason) {
    alert('Please select a reason for reporting.');
    return;
  }
  
  closeReportModal();
  showToast('Report submitted. Thank you for helping keep our community safe.');
  
  // TODO: API integration
  // const endpoint = currentReportType === 'post' ? '/api/reports/post' : '/api/reports/comment';
  // await fetch(endpoint, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     targetId: currentReportId,
  //     reason,
  //     details
  //   })
  // });
}

// Setup modal event listeners
document.getElementById('closeEditPostModal')?.addEventListener('click', closeEditPostModal);
document.getElementById('cancelEditPost')?.addEventListener('click', closeEditPostModal);
document.getElementById('editPostForm')?.addEventListener('submit', handleEditPostSubmit);
document.getElementById('editPostModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'editPostModal') closeEditPostModal();
});

document.getElementById('cancelDelete')?.addEventListener('click', closeDeleteConfirmation);
document.getElementById('confirmDeleteBtn')?.addEventListener('click', handleConfirmDelete);
document.getElementById('confirmDeleteModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'confirmDeleteModal') closeDeleteConfirmation();
});

document.getElementById('closeReportModal')?.addEventListener('click', closeReportModal);
document.getElementById('cancelReport')?.addEventListener('click', closeReportModal);
document.getElementById('reportForm')?.addEventListener('submit', handleReportSubmit);
document.getElementById('reportModal')?.addEventListener('click', (e) => {
  if (e.target.id === 'reportModal') closeReportModal();
});

// Handle escape key to close modals/sidebars
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileSidebar();
    closeAuthModal();
    closeAllKebabMenus();
    closeEditPostModal();
    closeDeleteConfirmation();
    closeReportModal();
    if (isDetailView) {
      closePostDetail();
    }
if (isMyPageView) {
  closeMyPage();
}
}
});

// Initial render
init();

// Helper functions declarations

// Check if current user is the owner of a post
function isPostOwner(post) {
  if (!currentUser || !post) return false;
  // Primary check: use authorId for reliable ownership (survives nickname changes)
  if (post.authorId && currentUser.id) {
    return String(post.authorId) === String(currentUser.id);
  }
  // Fallback for existing posts without authorId (mock data)
  const userIdentifier = currentUser.nickname || currentUser.name;
  return post.author === userIdentifier;
  }

// Convert ISO 3166-1 alpha-2 country code to flag emoji
function getFlagEmoji(countryCode) {
  if (!countryCode) return '';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Format display name with flag emoji: "FLAG Nickname"
function getDisplayNameWithFlag(user) {
  if (!user) return '';
  const nickname = user.nickname || user.name || '';
  if (!user.nationality) return nickname;
  const flag = getFlagEmoji(user.nationality);
  return flag ? `${flag} ${nickname}` : nickname;
}

// Format author display with flag emoji: "FLAG AuthorName"
// Check if current user owns a comment
function isCommentOwner(comment) {
  if (!currentUser || !comment) return false;
  // Primary check: use authorId for reliable ownership (survives nickname changes)
  if (comment.authorId && currentUser.id) {
    return String(comment.authorId) === String(currentUser.id);
  }
  // Fallback for existing comments without authorId
  return comment.author === currentUser.nickname || comment.author === currentUser.name;
  }

function formatAuthorDisplay(author, nationality, clickable = true) {
  if (!author) return '';
  const flag = nationality ? getFlagEmoji(nationality) : '';
  const displayName = flag ? `${flag} ${author}` : author;
  if (clickable) {
    return `<span class="clickable-author" data-author="${author}" data-nationality="${nationality || ''}">${displayName}</span>`;
  }
  return displayName;
  }

// Load view counts from localStorage
function loadViewCounts() {
  const data = localStorage.getItem('travexlo_views');
  return data ? JSON.parse(data) : {};
}

// Save view counts to localStorage
function saveViewCounts(data) {
  localStorage.setItem('travexlo_views', JSON.stringify(data));
}

// Increment and persist view count for a post
function incrementViewCount(postId) {
  const viewCounts = loadViewCounts();
  const post = posts.find(p => p.id === postId);
  const baseCount = post ? (post.views || 0) : 0;
  
  if (!viewCounts[postId]) {
    viewCounts[postId] = 0;
  }
  viewCounts[postId] = viewCounts[postId] + 1;
  saveViewCounts(viewCounts);
  
  return baseCount + viewCounts[postId];
}

function getVoteState(postId) {
  return { userVote: 0, voteCount: 0 }; // Placeholder function
}

// Get or create stable user ID for like tracking
function getLocalUserId() {
  let localUserId = localStorage.getItem('travexlo_local_user_id');
  if (!localUserId) {
    localUserId = 'anon_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    localStorage.setItem('travexlo_local_user_id', localUserId);
  }
  return localUserId;
}

// Get current user's unique ID (logged in or anonymous)
function getCurrentUserId() {
  if (currentUser && currentUser.id) return currentUser.id;
  if (currentUser && currentUser.email) return currentUser.email;
  if (currentUser && currentUser.name) return 'user_' + currentUser.name;
  return getLocalUserId();
}

// Load likes data from localStorage
function loadLikesData() {
  const data = localStorage.getItem('travexlo_likes');
  return data ? JSON.parse(data) : {};
}

// Save likes data to localStorage
function saveLikesData(data) {
  localStorage.setItem('travexlo_likes', JSON.stringify(data));
}

// Get like state for a post
function getLikeState(postId) {
  const likesData = loadLikesData();
  const postLikes = likesData[postId] || { count: 0, likedBy: {} };
  const userId = getCurrentUserId();
  const liked = !!postLikes.likedBy[userId];
  
  // Get base count from post data
  const post = posts.find(p => p.id === postId);
  const baseCount = post ? (post.likes || 0) : 0;
  
  return {
    liked: liked,
    count: baseCount + postLikes.count
  };
}

// Toggle like for a post
function toggleLike(postId) {
  const likesData = loadLikesData();
  const userId = getCurrentUserId();
  
  if (!likesData[postId]) {
    likesData[postId] = { count: 0, likedBy: {} };
  }
  
  const postLikes = likesData[postId];
  const wasLiked = !!postLikes.likedBy[userId];
  
  if (wasLiked) {
    // Unlike
    delete postLikes.likedBy[userId];
    postLikes.count = Math.max(0, postLikes.count - 1);
  } else {
    // Like
    postLikes.likedBy[userId] = true;
    postLikes.count = postLikes.count + 1;
  }
  
  saveLikesData(likesData);
  
  // Get base count from post data
  const post = posts.find(p => p.id === postId);
  const baseCount = post ? (post.likes || 0) : 0;
  
  return {
    liked: !wasLiked,
    count: baseCount + postLikes.count
  };
}

// ============================================
// POST PERSISTENCE (temporary frontend storage)
// TODO: Remove this when backend storage is implemented
// ============================================

// Save user-created posts to localStorage
function saveUserPosts() {
  // Only save posts created by users (those with isUserCreated flag)
  const userCreatedPosts = posts.filter(p => p.isUserCreated);
  localStorage.setItem('userCreatedPosts', JSON.stringify(userCreatedPosts));
}

// Load user-created posts from localStorage and merge with default posts
function loadUserPosts() {
  const savedPosts = JSON.parse(localStorage.getItem('userCreatedPosts') || '[]');
  if (savedPosts.length > 0) {
    // Merge saved posts with existing posts, avoiding duplicates by ID
    const existingIds = new Set(posts.map(p => p.id));
    for (const savedPost of savedPosts) {
      if (!existingIds.has(savedPost.id)) {
        posts.push(savedPost);
      }
    }
  }
}
  
  function saveVoteState(postId, userVote, voteCount) {
  // TODO: Persist to backend when available
  }
  
  function getComments(postId) {
  const allComments = JSON.parse(localStorage.getItem('postComments') || '{}');
  return allComments[postId] || [];
}

function saveComment(postId, comment) {
  const allComments = JSON.parse(localStorage.getItem('postComments') || '{}');
  if (!allComments[postId]) {
    allComments[postId] = [];
  }
  allComments[postId].push(comment);
  localStorage.setItem('postComments', JSON.stringify(allComments));
  
  // Update comment count on the post
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.comments = allComments[postId].length;
  }
  
  // TODO: Send to backend API when available
  // await fetch('/api/comments', { method: 'POST', body: JSON.stringify(comment) });
  }

// Get persisted view count for a post
function getViewCount(postId) {
  const viewCounts = loadViewCounts();
  const post = posts.find(p => p.id === postId);
  const baseCount = post ? (post.views || 0) : 0;
  const addedViews = viewCounts[postId] || 0;
  return baseCount + addedViews;
}

// Load comment likes data from localStorage
function loadCommentLikesData() {
  const data = localStorage.getItem('travexlo_comment_likes');
  return data ? JSON.parse(data) : {};
}

// Save comment likes data to localStorage
function saveCommentLikesData(data) {
  localStorage.setItem('travexlo_comment_likes', JSON.stringify(data));
}

// Get like state for a comment
function getCommentLikeState(commentId) {
  const likesData = loadCommentLikesData();
  const commentLikes = likesData[commentId] || { count: 0, likedBy: {} };
  const userId = getCurrentUserId();
  const liked = !!commentLikes.likedBy[userId];
  
  return {
    liked: liked,
    count: commentLikes.count
  };
}

// Toggle like for a comment
function toggleCommentLike(commentId) {
  const likesData = loadCommentLikesData();
  const userId = getCurrentUserId();
  
  if (!likesData[commentId]) {
    likesData[commentId] = { count: 0, likedBy: {} };
  }
  
  const commentLikes = likesData[commentId];
  const wasLiked = !!commentLikes.likedBy[userId];
  
  if (wasLiked) {
    // Unlike
    delete commentLikes.likedBy[userId];
    commentLikes.count = Math.max(0, commentLikes.count - 1);
  } else {
    // Like
    commentLikes.likedBy[userId] = true;
    commentLikes.count = commentLikes.count + 1;
  }
  
  saveCommentLikesData(likesData);
  
  return {
    liked: !wasLiked,
    count: commentLikes.count
  };
}

// Handle comment like button clicks
function handleCommentLikeClick(btn) {
  const commentId = btn.dataset.commentId;
  if (!commentId) return;
  
  const newState = toggleCommentLike(commentId);
  
  // Update UI
  btn.classList.toggle('liked', newState.liked);
  const svg = btn.querySelector('svg');
  if (svg) {
    svg.setAttribute('fill', newState.liked ? 'currentColor' : 'none');
  }
  const countEl = btn.querySelector('.comment-like-count');
  if (countEl) {
    countEl.textContent = newState.count;
  }
}
