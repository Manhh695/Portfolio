// --- UNIFIED DATABASE LAYER (LocalStorage First & Firebase Firestore Sync) ---

const DEFAULT_PROJECTS = {
  'ssi': {
    id: 'ssi',
    title: 'SSI Keyvisual',
    subtitle: 'Graphic Design',
    category: 'graphic compositing',
    desc: 'Dự án quảng bá truyền thông toàn diện thiết lập hình ảnh đẳng cấp của SSI Securities. Thử thách lớn nhất là làm thế nào để dung hòa tính kỷ luật, sự chính xác của ngành chứng khoán với ngôn ngữ hình ảnh hiện đại, tràn đầy năng lượng đột phá.<br><br>Để giải quyết bài toán này, tôi đã phát triển hệ thống Keyvisual chủ đạo sử dụng các khối đa diện nổi bật kết hợp với các đường dẫn ánh sáng động hướng lên trên, biểu trưng cho sự tăng trưởng và thịnh vượng vững bền. Hệ thống màu sắc được tinh chỉnh để làm nổi bật tông vàng hổ phách đặc trưng của SSI trên nền xám than trung tính, tạo nên độ tương phản cực đại.<br><br>Bên cạnh đó, tôi đã chỉ đạo sản xuất loạt video Motion Graphics dạng explainer để tối ưu hóa các chiến dịch truyền thông marketing trên nền tảng fanpage của Shark Nguyễn Hòa Bình (quotes, infographics, viral video...), đóng vai trò chủ chốt trong việc gia tăng tương tác và truyền cảm hứng đầu tư mạnh mẽ cho cộng đồng.',
    title_en: 'SSI Keyvisual',
    desc_en: 'A comprehensive communication campaign establishing the premium image of SSI Securities. The biggest challenge was harmonizing the discipline and precision of the securities industry with a modern, energetic visual language.<br><br>To solve this, I developed a core Keyvisual system using prominent polyhedral blocks combined with dynamic upward light paths, symbolizing sustainable growth and prosperity. The color system was refined to highlight SSI\'s signature amber gold against a neutral charcoal gray background, creating maximum contrast.<br><br>Additionally, I directed the production of a series of Motion Graphics explainer videos to optimize marketing campaigns on Shark Nguyen Hoa Binh\'s fanpage, playing a key role in increasing engagement and inspiring the investing community.',
    tags: ['Event - Key Visual', 'Brand Identity', 'Motion Graphic'],
    themeClass: 'bg-gradient-1',
    type: 'selected',
    client: 'SSI Securities Corporation',
    role: 'Lead Graphic & Motion Designer',
    date: 'Q2 2025',
    images: ['Brand Keyvisual & Color Identity Breakdown', 'POSM Print Media Designs', 'Motion Graphics Explainer Storyboard'],
    nextProject: 'mineverse',
    nextTitle: 'Mineverse Website'
  },
  'mineverse': {
    id: 'mineverse',
    title: 'Mineverse Website',
    subtitle: 'Product Design',
    category: 'product',
    desc: 'Mineverse Website là dự án cổng thông tin và trang đích (landing page) chính thức dành cho tựa game đa vũ trụ Mineverse. Nhiệm vụ cốt lõi của dự án là xây dựng một cầu nối hoàn hảo giữa người chơi và thế giới trò chơi giả tưởng, mang lại cảm giác đắm chìm trực quan (visual immersion) cao độ ngay từ lần đầu truy cập.<br><br>Để thực hiện điều đó, tôi đã áp dụng phong cách thiết kế vị lai (futuristic/cyberpunk) kết hợp các tông màu neon tương phản mạnh: tím thạch anh, hồng cánh sen sẫm và xanh lá ma trận. Trải nghiệm người dùng (UX) được thiết kế xoay quanh tính tối giản và khả năng điều hướng nhanh chóng, giúp game thủ dễ dàng tìm kiếm thông tin nhân vật, cốt truyện, lộ trình phát triển (roadmap) và cổng đăng nhập.<br><br>Hệ thống Design System của Mineverse được xây dựng vô cùng chi tiết với các trạng thái tương tác nút (button states) sinh động, các lưới guides cấu trúc chặt chẽ và các biểu tượng tùy chỉnh độc quyền, hỗ trợ đắc lực cho đội ngũ lập trình viên phát triển giao diện web tương thích hoàn mỹ trên mọi nền tảng thiết bị.',
    title_en: 'Mineverse Website',
    desc_en: 'Mineverse Website is the official portal and landing page for the multiverse game Mineverse. The core mission was to build a perfect bridge between players and the fantasy game world, delivering high visual immersion right from the first visit.<br><br>To achieve this, I applied a futuristic/cyberpunk design style combined with strong contrasting neon colors. The user experience (UX) was designed around minimalism and quick navigation, helping gamers easily find character info, storyline, roadmap, and login portals.<br><br>The Design System was built in great detail with vivid button states, strict grid guides, and exclusive custom icons, strongly supporting the dev team in building a perfectly responsive web interface.',
    tags: ['Web Design', 'Design System', 'Landing Page Design'],
    themeClass: 'bg-gradient-2',
    type: 'selected',
    client: 'Mineverse Game Studios',
    role: 'UI UX & Brand Designer',
    date: 'Q3 2025',
    images: ['Desktop Landing Page Interactive Mockup', 'Hệ Thống Design System & UI Kit', 'Mobile UX Layout & Responsive Screens'],
    nextProject: 'vietnam-airline',
    nextTitle: 'Vietnam Airlines Keyvisual'
  },
  'vietnam-airline': {
    id: 'vietnam-airline',
    title: 'Vietnam Airlines Keyvisual',
    subtitle: 'Graphic Design',
    category: 'graphic',
    desc: 'Hãng hàng không quốc gia Vietnam Airlines luôn đòi hỏi một ngôn ngữ thiết kế sang trọng, lịch lãm và thấm đẫm các giá trị bản sắc văn hóa Việt Nam, song hành cùng tiêu chuẩn dịch vụ đẳng cấp quốc tế 5 sao. Bài toán sáng tạo ở đây là làm mới các tài liệu quảng bá truyền thống mà vẫn giữ được tính cốt lõi của nhận diện thương hiệu bông sen vàng huyền thoại.<br><br>Tôi đã thiết kế loạt ấn phẩm Keyvisual phục vụ cho các chiến dịch quảng bá điểm đến và dịch vụ thương gia mới. Sử dụng hệ tông màu xanh ngọc biển sâu (deep teal) làm nền chủ đạo, kết hợp khéo léo với ánh sáng nhũ vàng hoàng gia để tôn vinh sự quý phái và nâng cao giá trị định vị cao cấp.<br><br>Dự án cũng bao gồm việc thiết kế lại toàn bộ hệ thống POSM in ấn, tờ rơi giới thiệu đường bay (leaflets) và bảng hướng dẫn tiện ích khoang thương gia. Bố cục chữ (typography) được sắp xếp thoáng đạt, hình ảnh máy bay và phong cảnh được lồng ghép nghệ thuật với các nét cọ vàng lượn sóng bay bổng, đại diện cho những chuyến bay an lành vượt đại dương.',
    title_en: 'Vietnam Airlines Keyvisual',
    desc_en: 'Vietnam Airlines always requires an elegant design language imbued with Vietnamese cultural identity, parallel to its 5-star international service standards. The creative challenge was refreshing traditional promotional materials while preserving the core of the legendary golden lotus brand identity.<br><br>I designed a series of Keyvisuals for destination campaigns and new business class services. Using a deep teal color palette as the main background, cleverly combined with royal gold metallic lighting to honor nobility and enhance premium positioning.<br><br>The project also included redesigning the entire print POSM system, flight route leaflets, and business class utility guides. The typography is spacious, airplane and landscape images are artistically integrated with soaring golden brush strokes, representing peaceful flights across the ocean.',
    tags: ['Event - Key Visual', 'Brand Identity', 'Catalogue Layout'],
    themeClass: 'bg-gradient-3',
    type: 'selected',
    client: 'Vietnam Airlines Joint Stock Co.',
    role: 'Senior Graphic Designer',
    date: 'Q4 2025',
    images: ['Campaign Keyvisual & Magazine Editorial Mockups', 'Business Class Services Leaflets Design', 'POSM & Banner Advertising Signages'],
    nextProject: 'ssi',
    nextTitle: 'SSI Keyvisual'
  },
  'acme': {
    id: 'acme',
    title: 'Acme Brand Identity',
    subtitle: 'Graphic Design',
    category: 'graphic',
    desc: 'Dự án thiết kế bộ nhận diện thương hiệu toàn diện cho tập đoàn tài chính Acme. Bố cục tối giản, chuyên nghiệp và nhất quán trên mọi ấn phẩm in ấn và kỹ thuật số, nâng tầm hình ảnh chuyên nghiệp của thương hiệu.',
    title_en: 'Acme Brand Identity',
    desc_en: 'A comprehensive brand identity design project for Acme Financial Group. Minimalist, professional, and consistent layout across all print and digital publications, elevating the brand\'s professional image.',
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
    title_en: 'Cyberpunk Game Intro',
    desc_en: 'A short video clip introducing the storyline and exclusive logo animation for the Cyberpunk fantasy game. Utilizing 2D/3D motion graphics techniques combined with vivid interactive audio.',
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
    title_en: 'Fintech Mobile App',
    desc_en: 'Designing a smart financial mobile app (Fintech) interface, aiming for a minimalist user experience, high security, and quick, convenient transaction operations.',
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
    title_en: 'SaaS Dashboard Analytics',
    desc_en: 'A smart SaaS data analytics dashboard interface for large enterprises, optimizing complex data visualization components into streamlined, easy-to-understand charts.',
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
    title_en: 'E-Commerce Visual Branding',
    desc_en: 'A graphic design system for promotion, marketing posters, and premium product catalogs, synchronized across the e-commerce platform to increase shopping conversion rates.',
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
    title_en: 'Cinematic Vlog Editing',
    desc_en: 'Video editing and advanced cinematic color grading for short travel films, seamlessly integrating animated subtitle transitions.',
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
    title_en: 'SSI Corporate Video 2024',
    desc_en: 'A corporate communication video introducing the enterprise scale and development history of SSI in 2024, using many modern editing techniques and impressive motion graphics.',
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
    title_en: 'Shark Binh Viral Promo',
    desc_en: 'A short viral promotional video clip, integrating animated quotes and professional dynamic infographics to build an outstanding personal image for Shark Nguyen Hoa Binh.',
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
    title_en: 'Ngan Luong Explainer Clip',
    desc_en: 'A short Motion Graphic video clip introducing products and guiding online payment utilities for the Ngan Luong e-wallet, optimizing service information for customers to easily understand.',
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
  if (localData === null) {
    localStorage.setItem('portfolio_projects', JSON.stringify(DEFAULT_PROJECTS));
    return DEFAULT_PROJECTS;
  }
  try {
    return JSON.parse(localData) || {};
  } catch (e) {
    console.error('Corrupted portfolio_projects JSON in localStorage, resetting:', e);
    return {};
  }
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
      
      if (querySnapshot.empty) {
        const defaultKeys = Object.keys(DEFAULT_PROJECTS);
        for (const key of defaultKeys) {
          projects[key] = DEFAULT_PROJECTS[key];
          try {
            await setDoc(doc(db, 'projects', key), DEFAULT_PROJECTS[key]);
          } catch (e) {
            console.error(`Failed to write default project ${key} to Firestore:`, e);
          }
        }
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
      } else {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
      }
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
  if (localData === null) {
    localStorage.setItem('portfolio_marquee_cards', JSON.stringify(DEFAULT_MARQUEE_CARDS));
    return DEFAULT_MARQUEE_CARDS;
  }
  try {
    return JSON.parse(localData) || {};
  } catch (e) {
    console.error('Corrupted portfolio_marquee_cards JSON in localStorage, resetting:', e);
    return {};
  }
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
      
      if (querySnapshot.empty) {
        const defaultKeys = Object.keys(DEFAULT_MARQUEE_CARDS);
        for (const key of defaultKeys) {
          cards[key] = DEFAULT_MARQUEE_CARDS[key];
          try {
            await setDoc(doc(db, 'marquee', key), DEFAULT_MARQUEE_CARDS[key]);
          } catch (e) {
            console.error(`Failed to write default marquee ${key} to Firestore:`, e);
          }
        }
        localStorage.setItem('portfolio_marquee_cards', JSON.stringify(cards));
      } else {
        localStorage.setItem('portfolio_marquee_cards', JSON.stringify(cards));
      }
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

// --- PROFILE ABOUT & TIMELINE FUNCTIONS ---

const DEFAULT_ABOUT = {
  aboutIntro: "Nhà thiết kế với hơn 6 năm kinh nghiệm và 1+ năm trong Thiết kế Sản phẩm số, chuyên sâu về tư duy sản phẩm, hệ thống hình ảnh và tối ưu hóa trải nghiệm người dùng.",
  aboutIntro_en: "Designer with 6+ years of experience and 1+ year in Digital Product Design, specializing in product thinking, visual systems, and UX optimization.",
  timeline: [
    {
      year: "2018 - 2019",
      company: "Entaid International",
      role: "Multimedia Designer",
      role_en: "Multimedia Designer",
      desc: "Thiết kế các ấn phẩm truyền thông Marketing (Keyvisual, Social media post, POSM, leaflets, Motion Graphic Explaining Video), thiết kế Packaging sản phẩm khăn lau đa năng.",
      desc_en: "Designed multi-channel Marketing materials (Keyvisual, Social media posts, POSM, leaflets, Motion Graphic Explainer Videos), and product packaging for multipurpose wipes."
    },
    {
      company: "Nexus Creative Studio",
      desc: "Chịu trách nhiệm thiết kế bộ nhận diện thương hiệu, định hướng mỹ thuật cho các dự án Web/App, phối hợp xây dựng hệ thống hình ảnh nhất quán và thiết kế bao bì quảng cáo.",
      desc_en: "Responsible for brand identity design, art direction for Web/App projects, coordinating consistent visual systems, and advertising packaging design.",
      role: "Senior Graphic Designer",
      role_en: "Senior Graphic Designer",
      year: "2019 - 2021"
    },
    {
      company: "Vortex Tech Group",
      desc: "Thiết kế giao diện người dùng (UI), xây dựng hệ thống Design System đa nền tảng, nghiên cứu và tối ưu hóa trải nghiệm người dùng (UX) cho các sản phẩm công nghệ cao.",
      desc_en: "Designed User Interfaces (UI), built cross-platform Design Systems, researched and optimized User Experience (UX) for high-tech products.",
      role: "Product Designer",
      role_en: "Product Designer",
      year: "2021 - 2024"
    },
    {
      company: "Aura Digital Consult",
      desc: "Tư vấn và thực hiện thiết kế UI/UX kết hợp Motion Design cho các công ty khởi nghiệp và doanh nghiệp số quốc tế, tối ưu tỷ lệ chuyển đổi và tăng tương tác sản phẩm.",
      desc_en: "Consulted and executed UI/UX design combined with Motion Design for startups and international digital enterprises, optimizing conversion rates and increasing product engagement.",
      role: "UI UX & Motion Consultant",
      role_en: "UI UX & Motion Consultant",
      year: "2024 - Present"
    }
  ]
};

export async function getAboutData() {
  const localAbout = localStorage.getItem('portfolio_about');
  let aboutData = null;
  if (localAbout) {
    try {
      aboutData = JSON.parse(localAbout);
    } catch (e) {
      console.error('Error parsing portfolio_about from localStorage:', e);
    }
  }

  // Load from Firestore if active
  const dbInstance = await getFirestoreDb();
  if (dbInstance) {
    try {
      const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      const docSnap = await getDoc(doc(dbInstance, 'profile', 'about'));
      if (docSnap.exists()) {
        const firestoreData = docSnap.data();
        localStorage.setItem('portfolio_about', JSON.stringify(firestoreData));
        return firestoreData;
      }
    } catch (err) {
      console.error('Firestore getAboutData failed:', err);
    }
  }

  return aboutData || DEFAULT_ABOUT;
}

export async function saveAboutData(data) {
  localStorage.setItem('portfolio_about', JSON.stringify(data));

  const dbInstance = await getFirestoreDb();
  if (dbInstance) {
    try {
      const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js');
      await setDoc(doc(dbInstance, 'profile', 'about'), data);
    } catch (err) {
      console.error('Firestore saveAboutData failed:', err);
      throw err;
    }
  }
}

// --- FIREBASE STORAGE MEDIA LIBRARY FUNCTIONS ---

/**
 * Lists all files in a Firebase Storage folder.
 * @param {string} folder - Storage path e.g. 'portfolio/images'
 * @returns {Promise<Array<{name: string, fullPath: string, url: string}>>}
 */
export async function listAllFiles(folder) {
  const storage = await getFirebaseStorage();
  if (!storage) {
    return [];
  }

  try {
    const { ref, listAll, getDownloadURL, getMetadata } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js');
    const folderRef = ref(storage, folder);
    const result = await listAll(folderRef);

    const files = [];
    for (const itemRef of result.items) {
      try {
        const url = await getDownloadURL(itemRef);
        let size = 0;
        try {
          const metadata = await getMetadata(itemRef);
          size = metadata.size || 0;
        } catch (e) { /* ignore metadata errors */ }

        files.push({
          name: itemRef.name,
          fullPath: itemRef.fullPath,
          url: url,
          size: size
        });
      } catch (e) {
        console.warn(`Failed to get URL for ${itemRef.fullPath}:`, e);
      }
    }

    return files;
  } catch (err) {
    console.error(`Failed to list files in ${folder}:`, err);
    return [];
  }
}

/**
 * Deletes a file from Firebase Storage by its full path.
 * @param {string} fullPath - Full storage path e.g. 'portfolio/images/1234_photo.webp'
 */
export async function deleteFileFromFirebase(fullPath) {
  const storage = await getFirebaseStorage();
  if (!storage) {
    throw new Error('Firebase Storage is not initialized.');
  }

  try {
    const { ref, deleteObject } = await import('https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js');
    const fileRef = ref(storage, fullPath);
    await deleteObject(fileRef);
  } catch (err) {
    console.error(`Failed to delete ${fullPath}:`, err);
    throw err;
  }
}
