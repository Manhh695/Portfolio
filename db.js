// --- UNIFIED DATABASE LAYER (LocalStorage First & Firebase Firestore Sync) ---

const DEFAULT_PROJECTS = {
  'ssi': {
    id: 'ssi',
    title: 'SSI Keyvisual',
    subtitle: 'Graphic Design',
    category: 'graphic compositing',
    desc: 'Dự án quảng bá truyền thông toàn diện thiết lập hình ảnh đẳng cấp của SSI Securities.',
    tags: ['Event - Key Visual', 'Brand Identity', 'Motion Graphic'],
    themeClass: 'bg-gradient-1',
    type: 'selected'
  },
  'mineverse': {
    id: 'mineverse',
    title: 'Mineverse Website',
    subtitle: 'Product Design',
    category: 'product',
    desc: 'Giao diện landing page đa vũ trụ game kết hợp với hệ thống Design System và UI kit.',
    tags: ['Web Design', 'Design System', 'Landing Page Design'],
    themeClass: 'bg-gradient-2',
    type: 'selected'
  },
  'vietnam-airline': {
    id: 'vietnam-airline',
    title: 'Vietnam Airlines Keyvisual',
    subtitle: 'Graphic Design',
    category: 'graphic',
    desc: 'Bộ Keyvisual chiến dịch quảng bá khoang hành khách thương gia 5 sao của hãng hàng không quốc gia.',
    tags: ['Event - Key Visual', 'Brand Identity', 'Catalogue Layout'],
    themeClass: 'bg-gradient-3',
    type: 'selected'
  },
  'acme': {
    id: 'acme',
    title: 'Acme Brand Identity',
    subtitle: 'Graphic Design',
    category: 'graphic',
    desc: 'Dự án thiết kế bộ nhận diện thương hiệu toàn diện cho tập đoàn tài chính Acme. Bố cục tối giản, chuyên nghiệp và nhất quán trên mọi ấn phẩm in ấn và kỹ thuật số, nâng tầm hình ảnh chuyên nghiệp của thương hiệu.',
    tags: ['Brand Identity', 'Banner/Poster', 'Presentation'],
    themeClass: 'bg-gradient-4',
    type: 'simple',
    client: 'Acme Financial Group',
    role: 'Graphic Designer',
    date: 'Q3 2025',
    images: ['Brand Identity Grid Layout', 'Corporate Stationery Mockup', 'Pitch Deck Presentation Slides'],
    nextProject: 'cyberpunk',
    nextTitle: 'Cyberpunk Game Intro'
  },
  'cyberpunk': {
    id: 'cyberpunk',
    title: 'Cyberpunk Game Intro',
    subtitle: 'Compositing & Video',
    category: 'compositing',
    desc: 'Đoạn video clip ngắn giới thiệu cốt truyện và hoạt ảnh logo độc quyền cho tựa game giả tưởng Cyberpunk. Sử dụng các kỹ xảo đồ họa chuyển động 2D/3D kết hợp âm thanh tương tác sống động.',
    tags: ['Intro / Outro Video', 'Motion Graphic', 'Logo Animation'],
    themeClass: 'bg-gradient-5',
    type: 'simple',
    client: 'Neon Eclipse Studios',
    role: 'Video Editor & Motion Designer',
    date: 'Q3 2025',
    images: ['Visual Effects Storyboard', 'Logo Animation Keyframes', 'Post-production Composition Grid'],
    nextProject: 'fintech',
    nextTitle: 'Fintech Mobile App'
  },
  'fintech': {
    id: 'fintech',
    title: 'Fintech Mobile App',
    subtitle: 'Product Design',
    category: 'product',
    desc: 'Thiết kế giao diện ứng dụng di động tài chính (Fintech) thông minh, hướng tới trải nghiệm người dùng tối giản, bảo mật cao và thao tác giao dịch nhanh chóng tiện lợi.',
    tags: ['App Design', 'Design System', 'Web Design'],
    themeClass: 'bg-gradient-6',
    type: 'simple',
    client: 'VinaPay Securities',
    role: 'UI/UX Designer',
    date: 'Q4 2025',
    images: ['Mobile Interface Wireframes', 'Design Tokens & UI Kit', 'Prototype Flow Map'],
    nextProject: 'saas',
    nextTitle: 'SaaS Dashboard Analytics'
  },
  'saas': {
    id: 'saas',
    title: 'SaaS Dashboard Analytics',
    subtitle: 'Product Design',
    category: 'product',
    desc: 'Giao diện quản lý phân tích dữ liệu SaaS thông minh dành cho doanh nghiệp lớn, tối ưu hóa các thành phần trực quan hóa dữ liệu phức tạp thành các biểu đồ tinh gọn dễ hiểu.',
    tags: ['Landing Page Design', 'Web Design', 'Design System'],
    themeClass: 'bg-gradient-7',
    type: 'simple',
    client: 'OmniData Tech',
    role: 'Lead Product Designer',
    date: 'Q4 2025',
    images: ['Dashboard Grid Guides', 'Data Visualization Charts UI', 'Responsive Design Mockup'],
    nextProject: 'ecommerce',
    nextTitle: 'E-Commerce Visual Branding'
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'E-Commerce Visual Branding',
    subtitle: 'Graphic Design',
    category: 'graphic',
    desc: 'Hệ thống thiết kế đồ họa quảng bá, poster tiếp thị và catalog giới thiệu sản phẩm cao cấp, đồng bộ trên trang thương mại điện tử nhằm gia tăng tỷ lệ chuyển đổi mua sắm.',
    tags: ['Brand Identity', 'Catalogue Layout', 'Info-graphics'],
    themeClass: 'bg-gradient-8',
    type: 'simple',
    client: 'TrendShop Online',
    role: 'Visual Designer',
    date: 'Q4 2025',
    images: ['E-Commerce Banner Set', 'Product Catalog Layout Grid', 'Visual Marketing Assets'],
    nextProject: 'vlog',
    nextTitle: 'Cinematic Vlog Editing'
  },
  'vlog': {
    id: 'vlog',
    title: 'Cinematic Vlog Editing',
    subtitle: 'Compositing & Video',
    category: 'compositing',
    desc: 'Dựng phim và xử lý chỉnh màu sắc điện ảnh (color grading) nâng cao cho các thước phim ngắn du lịch, kết hợp lồng ghép mượt mà các đoạn hoạt ảnh chuyển chữ phụ đề.',
    tags: ['Editing Video', 'Motion Graphic'],
    themeClass: 'bg-gradient-9',
    type: 'simple',
    client: 'Traveler Vlogs Channel',
    role: 'Video Editor & Colorist',
    date: 'Q4 2025',
    images: ['Color Grading Contrast Panels', 'Timeline Cut Storyboard', 'Title Overlay Animation Frame'],
    nextProject: 'ssi-video',
    nextTitle: 'SSI Corporate Video 2024'
  },
  'ssi-video': {
    id: 'ssi-video',
    title: 'SSI Corporate Video 2024',
    subtitle: 'Compositing & Video',
    category: 'compositing',
    desc: 'Video clip truyền thông giới thiệu quy mô doanh nghiệp và lịch sử phát triển của SSI trong năm 2024, sử dụng nhiều kỹ xảo cắt dựng hiện đại và đồ họa chuyển động ấn tượng.',
    tags: ['Intro / Outro Video', 'Editing Video', 'Motion Graphic'],
    themeClass: 'bg-gradient-4',
    type: 'simple',
    client: 'SSI Securities Corp',
    role: 'Video Director & Compositor',
    date: 'Q1 2024',
    images: ['Director Treatment Deck', 'Motion Graphic Sequences', 'Post-production Final Render Grid'],
    nextProject: 'shark-video',
    nextTitle: 'Shark Binh Viral Promo',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-41764-large.mp4',
    showInMultimedia: true
  },
  'shark-video': {
    id: 'shark-video',
    title: 'Shark Binh Viral Promo',
    subtitle: 'Compositing & Video',
    category: 'compositing',
    desc: 'Video clip quảng bá ngắn dạng viral, lồng ghép hoạt ảnh trích dẫn, infographic động chuyên nghiệp nhằm xây dựng hình ảnh cá nhân nổi bật cho Shark Nguyễn Hòa Bình.',
    tags: ['Editing Video', 'Motion Graphic'],
    themeClass: 'bg-gradient-1',
    type: 'simple',
    client: 'Shark Nguyễn Hòa Bình fanpage',
    role: 'Motion Designer & Editor',
    date: 'Q2 2024',
    images: ['Viral Concept Flow', 'Quotes Infographics Layout', 'Animation Sequences'],
    nextProject: 'nganluong-video',
    nextTitle: 'Ngan Luong Explainer Clip',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-office-41584-large.mp4',
    showInMultimedia: true
  },
  'nganluong-video': {
    id: 'nganluong-video',
    title: 'Ngan Luong Explainer Clip',
    subtitle: 'Compositing & Video',
    category: 'compositing',
    desc: 'Video clip ngắn dạng Motion Graphic giới thiệu sản phẩm và hướng dẫn tiện ích thanh toán trực tuyến của ví điện tử Ngân Lượng, tối ưu hóa thông tin dịch vụ dễ hiểu cho khách hàng.',
    tags: ['Motion Graphic', 'Editing Video', 'Logo Animation'],
    themeClass: 'bg-gradient-7',
    type: 'simple',
    client: 'NgânLượng.vn',
    role: 'Lead Motion Designer',
    date: 'Q3 2024',
    images: ['Storyboard Illustrations', 'Vector Asset Libraries', 'Logo Transitions Panel'],
    nextProject: 'acme',
    nextTitle: 'Acme Brand Identity',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-financial-charts-41712-large.mp4',
    showInMultimedia: true
  }
};

let firebaseApp = null;
let firestoreDb = null;

// =============================================
// BUILT-IN FIREBASE CONFIG (hardcoded)
// Thay đổi nếu bạn muốn dùng project khác
// =============================================
const BUILT_IN_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBCYeVNjQSuL_1n31iJR6NCtmSBE5lS_aI",
  authDomain: "portfolio-f4207.firebaseapp.com",
  projectId: "portfolio-f4207",
  storageBucket: "portfolio-f4207.firebasestorage.app",
  messagingSenderId: "72710774066",
  appId: "1:72710774066:web:5d02182da6e1961232cb2b",
  measurementId: "G-M5512XBX60"
};

// Retrieves DB config settings from LocalStorage
// Falls back to built-in config if not set
export function getDbSettings() {
  const localSettings = localStorage.getItem('portfolio_db_settings');
  if (localSettings) {
    try {
      const parsed = JSON.parse(localSettings);
      // If user has not explicitly disabled firebase, merge in the built-in config as fallback
      if (!parsed.firebaseConfig) {
        parsed.firebaseConfig = BUILT_IN_FIREBASE_CONFIG;
        parsed.firebaseEnabled = true;
      }
      return parsed;
    } catch (e) {
      console.error('Corrupted portfolio_db_settings JSON in localStorage, resetting:', e);
      localStorage.removeItem('portfolio_db_settings');
    }
  }
  // Default: use built-in config with Firebase enabled
  return {
    firebaseEnabled: true,
    firebaseConfig: BUILT_IN_FIREBASE_CONFIG
  };
}

// Saves DB config settings
export function saveDbSettings(settings) {
  localStorage.setItem('portfolio_db_settings', JSON.stringify(settings));
  // Reset Firebase instance variables to force re-initialization next call
  firebaseApp = null;
  firestoreDb = null;
}

// Dynamically imports Firebase SDK and returns active Firestore instance
async function getFirestoreDb() {
  if (firestoreDb) return firestoreDb;

  const settings = getDbSettings();
  if (!settings.firebaseEnabled || !settings.firebaseConfig) {
    return null;
  }

  // Allow offline usage gracefully — don't block on navigator.onLine
  // Firebase SDK handles reconnection automatically

  try {
    const { initializeApp, getApps, getApp } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
    const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
    
    if (!firebaseApp) {
      // Reuse existing Firebase app if already initialized (avoids duplicate app error)
      const apps = getApps();
      firebaseApp = apps.length > 0 ? getApp() : initializeApp(settings.firebaseConfig);
    }
    firestoreDb = getFirestore(firebaseApp);
    return firestoreDb;
  } catch (err) {
    console.error('Failed to initialize Firebase Firestore:', err);
    return null;
  }
}

// Gets local project map (initializes with defaults if empty)
function getLocalProjects() {
  const localData = localStorage.getItem('portfolio_projects');
  let projects = {};
  if (localData) {
    try {
      projects = JSON.parse(localData) || {};
    } catch (e) {
      console.error('Corrupted portfolio_projects JSON in localStorage, resetting:', e);
    }
  }
  
  // Merge missing defaults so the user always has them
  let updated = false;
  Object.keys(DEFAULT_PROJECTS).forEach(key => {
    if (!projects[key]) {
      projects[key] = DEFAULT_PROJECTS[key];
      updated = true;
    }
  });
  
  if (updated || !localData || Object.keys(projects).length === 0) {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }
  return projects;
}

// Retrieves all projects (Firestore with LocalStorage fallback)
export async function getAllProjects() {
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { collection, getDocs, doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projects = {};
      querySnapshot.forEach((doc) => {
        projects[doc.id] = doc.data();
      });
      
      // Auto-merge missing default projects directly into Firestore
      let updated = false;
      const defaultKeys = Object.keys(DEFAULT_PROJECTS);
      for (const key of defaultKeys) {
        if (!projects[key]) {
          projects[key] = DEFAULT_PROJECTS[key];
          try {
            await setDoc(doc(db, 'projects', key), DEFAULT_PROJECTS[key]);
            updated = true;
          } catch (e) {
            console.error(`Failed to write default project ${key} to Firestore:`, e);
          }
        }
      }
      
      localStorage.setItem('portfolio_projects', JSON.stringify(projects));
      return projects;
    } catch (err) {
      console.warn('Firestore fetch failed, falling back to local storage cache:', err);
    }
  }
  return getLocalProjects();
}

// Retrieves single project details
export async function getProject(id) {
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      const docSnap = await getDoc(doc(db, 'projects', id));
      if (docSnap.exists()) {
        return docSnap.data();
      }
    } catch (err) {
      console.warn(`Firestore retrieve failed for ${id}, falling back to local storage cache:`, err);
    }
  }
  
  const projects = getLocalProjects();
  return projects[id] || null;
}

// Adds or updates project data
export async function saveProject(id, data) {
  // Update local storage first
  const projects = getLocalProjects();
  projects[id] = { id, ...data };
  localStorage.setItem('portfolio_projects', JSON.stringify(projects));

  // Sync to Firestore if active
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await setDoc(doc(db, 'projects', id), { id, ...data });
    } catch (err) {
      console.error(`Firestore save failed for ${id}:`, err);
      throw err;
    }
  }
}

// Deletes a project
export async function deleteProject(id) {
  // Delete from local storage
  const projects = getLocalProjects();
  if (projects[id]) {
    delete projects[id];
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
  }

  // Sync delete to Firestore if active
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await deleteDoc(doc(db, 'projects', id));
    } catch (err) {
      console.error(`Firestore delete failed for ${id}:`, err);
      throw err;
    }
  }
}

// Syncs entire LocalStorage dataset to Firebase Firestore (Utility for migrations)
export async function syncLocalToFirebase() {
  const db = await getFirestoreDb();
  if (!db) {
    throw new Error('Firebase is not enabled or properly configured.');
  }

  const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
  
  // 1. Sync projects
  const projects = getLocalProjects();
  const projectPromises = Object.keys(projects).map(key => {
    return setDoc(doc(db, 'projects', key), projects[key]);
  });

  // 2. Sync marquee cards
  const marqueeCards = getLocalMarqueeCards();
  const marqueePromises = Object.keys(marqueeCards).map(key => {
    return setDoc(doc(db, 'marquee', key), marqueeCards[key]);
  });

  await Promise.all([...projectPromises, ...marqueePromises]);
}

// --- MARQUEE DATABASE MANAGER ---

const DEFAULT_MARQUEE_CARDS = {
  'card-1': { id: 'card-1', title: 'Social Media Design', imageClass: 'img-1', imageUrl: '', row: 1 },
  'card-2': { id: 'card-2', title: 'Social Media Design', imageClass: 'img-2', imageUrl: '', row: 1 },
  'card-3': { id: 'card-3', title: 'Social Media Design', imageClass: 'img-3', imageUrl: '', row: 1 },
  'card-4': { id: 'card-4', title: 'Social Media Design', imageClass: 'img-4', imageUrl: '', row: 1 },
  'card-5': { id: 'card-5', title: 'Social Media Design', imageClass: 'img-5', imageUrl: '', row: 2 },
  'card-6': { id: 'card-6', title: 'Social Media Design', imageClass: 'img-6', imageUrl: '', row: 2 },
  'card-7': { id: 'card-7', title: 'Social Media Design', imageClass: 'img-7', imageUrl: '', row: 2 },
  'card-8': { id: 'card-8', title: 'Social Media Design', imageClass: 'img-8', imageUrl: '', row: 2 }
};

function getLocalMarqueeCards() {
  const localData = localStorage.getItem('portfolio_marquee_cards');
  let cards = {};
  if (localData) {
    try {
      cards = JSON.parse(localData) || {};
    } catch (e) {
      console.error('Corrupted portfolio_marquee_cards JSON in localStorage, resetting:', e);
    }
  }
  
  let updated = false;
  Object.keys(DEFAULT_MARQUEE_CARDS).forEach(key => {
    if (!cards[key]) {
      cards[key] = DEFAULT_MARQUEE_CARDS[key];
      updated = true;
    }
  });
  
  if (updated || !localData || Object.keys(cards).length === 0) {
    localStorage.setItem('portfolio_marquee_cards', JSON.stringify(cards));
  }
  return cards;
}

export async function getAllMarqueeCards() {
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { collection, getDocs, doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      const querySnapshot = await getDocs(collection(db, 'marquee'));
      const cards = {};
      querySnapshot.forEach((doc) => {
        cards[doc.id] = doc.data();
      });
      
      // Auto-merge missing default marquee cards directly into Firestore
      let updated = false;
      const defaultKeys = Object.keys(DEFAULT_MARQUEE_CARDS);
      for (const key of defaultKeys) {
        if (!cards[key]) {
          cards[key] = DEFAULT_MARQUEE_CARDS[key];
          try {
            await setDoc(doc(db, 'marquee', key), DEFAULT_MARQUEE_CARDS[key]);
            updated = true;
          } catch (e) {
            console.error(`Failed to write default marquee ${key} to Firestore:`, e);
          }
        }
      }
      
      localStorage.setItem('portfolio_marquee_cards', JSON.stringify(cards));
      return cards;
    } catch (err) {
      console.warn('Firestore marquee fetch failed, falling back to local storage cache:', err);
    }
  }
  return getLocalMarqueeCards();
}

export async function saveMarqueeCard(id, data) {
  // Update local storage
  const cards = getLocalMarqueeCards();
  cards[id] = { id, ...data };
  localStorage.setItem('portfolio_marquee_cards', JSON.stringify(cards));

  // Sync to Firestore if active
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await setDoc(doc(db, 'marquee', id), { id, ...data });
    } catch (err) {
      console.error(`Firestore marquee save failed for ${id}:`, err);
      throw err;
    }
  }
}

export async function deleteMarqueeCard(id) {
  // Delete from local storage
  const cards = getLocalMarqueeCards();
  if (cards[id]) {
    delete cards[id];
    localStorage.setItem('portfolio_marquee_cards', JSON.stringify(cards));
  }

  // Sync delete to Firestore if active
  const db = await getFirestoreDb();
  if (db) {
    try {
      const { doc, deleteDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await deleteDoc(doc(db, 'marquee', id));
    } catch (err) {
      console.error(`Firestore marquee delete failed for ${id}:`, err);
      throw err;
    }
  }
}

// --- FIREBASE STORAGE SDK INTEGRATION ---

let firebaseStorage = null;

export async function getFirebaseStorage() {
  if (firebaseStorage) return firebaseStorage;

  const settings = getDbSettings();
  if (!settings.firebaseEnabled || !settings.firebaseConfig) {
    return null;
  }

  try {
    const { initializeApp, getApps, getApp } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js');
    const { getStorage } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js');
    
    if (!firebaseApp) {
      const apps = getApps();
      firebaseApp = apps.length > 0 ? getApp() : initializeApp(settings.firebaseConfig);
    }
    firebaseStorage = getStorage(firebaseApp);
    return firebaseStorage;
  } catch (err) {
    console.error('Failed to initialize Firebase Storage:', err);
    return null;
  }
}

export async function uploadFileToFirebase(file, path) {
  const storage = await getFirebaseStorage();
  if (!storage) {
    throw new Error('Firebase Storage is not initialized.');
  }

  try {
    const { ref, uploadBytes, getDownloadURL } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js');
    
    // Generate unique slug name
    const cleanFileName = Date.now() + '_' + file.name.replace(/[^a-zA-Z0-9.]/g, '_');
    const storageRef = ref(storage, `${path}/${cleanFileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);
    return downloadUrl;
  } catch (err) {
    console.error('Firebase Storage upload error:', err);
    throw err;
  }
}


