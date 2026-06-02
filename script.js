// --- INITIALIZE LENIS SMOOTH SCROLL ---
let lenis;
if (typeof Lenis !== 'undefined') {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutQuart
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Sync scroll spy and horizontal timeline animations with Lenis scroll updates
  lenis.on('scroll', () => {
    window.dispatchEvent(new Event('scroll'));
  });
}

// Intercept all hash links to smooth-scroll using Lenis (with offset for navbar)
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor && lenis) {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      lenis.scrollTo(targetElement, {
        offset: -70,
        duration: 1.2,
      });
    }
  }
});

const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });
  
  // Cấu hình tốc độ chuyển động tại đây. Số càng lớn chuyển động càng nhanh.
  // 0.0006: trôi siêu chậm thư thái, 0.003: trôi chậm, 0.015: nhanh.
  const speedMultiplier = 0.0006;
  
  // Theo dõi tương tác chuột (Tạo sức hút nhẹ cho khối màu khi di chuyển chuột)
  let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });
  
  class Blob {
    constructor(color, sizeRatio, speedX, speedY, offset) {
      this.color = color;
      this.sizeRatio = sizeRatio;
      this.speedX = speedX;
      this.speedY = speedY;
      this.offset = offset;
      this.x = Math.random() * width;
      this.y = Math.random() * height;
    }
  
    update(time) {
      // Chuyển động lượn sóng bất đối xứng
      const angleX = time * this.speedX + this.offset;
      const angleY = time * this.speedY + this.offset;
      
      this.x = (width / 2) + Math.sin(angleX) * (width * 0.28);
      this.y = (height / 2) + Math.cos(angleY) * (height * 0.28);
      
      // Quán tính chuột kéo các blob màu đi theo nhẹ nhàng
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      
      this.x += (mouse.x - width / 2) * this.sizeRatio * 0.2;
      this.y += (mouse.y - height / 2) * this.sizeRatio * 0.2;
    }
  
    draw() {
      const size = Math.min(width, height) * this.sizeRatio;
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
      grad.addColorStop(0, this.color);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Khởi tạo các quả cầu màu lượn sóng
  const blobs = [
    new Blob('rgba(92, 53, 20, 0.85)', 0.5, 0.9, 1.3, 0),         // Nâu cam
    new Blob('rgba(168, 121, 44, 0.9)', 0.6, 1.1, 0.8, Math.PI / 3), // Vàng đồng
    new Blob('rgba(239, 147, 17, 0.55)', 0.4, 1.4, 1.1, Math.PI / 1.5) // Cam accent
  ];
  
  function animate() {
    // Dọn dẹp canvas bằng màu đen nền chủ đạo
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
  
    const time = Date.now() * speedMultiplier;
  
    blobs.forEach(blob => {
      blob.update(time);
      blob.draw();
    });
  
    requestAnimationFrame(animate);
  }
  
  animate();
}

// --- LOGIC CUỘN TIMELINE NGANG (STICKY HORIZONTAL TIMELINE) ---
const aboutSection = document.getElementById('about');
const timelineTrack = document.getElementById('timeline-track');
const timelineItems = document.querySelectorAll('.timeline-item');
const aboutIntro = document.querySelector('.about-intro');

// Khởi tạo tách chữ trong khối giới thiệu để tạo hiệu ứng reveal
if (aboutIntro) {
  const words = aboutIntro.innerText.trim().split(/\s+/);
  aboutIntro.innerHTML = words.map(word => `<span class="reveal-word">${word}</span>`).join(' ');
}
const revealWords = document.querySelectorAll('.reveal-word');

function updateTimeline() {
  if (!aboutSection || !timelineTrack) return;

  const sectionTop = aboutSection.offsetTop;
  const sectionHeight = aboutSection.scrollHeight;
  const viewportHeight = window.innerHeight;

  // Tính toán tỷ lệ phần trăm đã cuộn của phần About (từ 0 đến 1)
  let scrollFraction = (window.scrollY - sectionTop) / (sectionHeight - viewportHeight);
  scrollFraction = Math.max(0, Math.min(1, scrollFraction));

  // --- PHÂN ĐOẠN 1: REVEAL CHỮ TỪNG TỪ (0% -> 25% chặng cuộn) ---
  let textFraction = scrollFraction / 0.25;
  textFraction = Math.max(0, Math.min(1, textFraction));
  
  const totalWords = revealWords.length;
  const activeWordsCount = Math.floor(textFraction * totalWords);
  
  revealWords.forEach((word, index) => {
    if (index < activeWordsCount) {
      word.classList.add('revealed');
    } else {
      word.classList.remove('revealed');
    }
  });

  // --- PHÂN ĐOẠN 2: TRƯỢT TIMELINE NGANG (25% -> 100% chặng cuộn) ---
  let timelineFraction = (scrollFraction - 0.25) / 0.75;
  timelineFraction = Math.max(0, Math.min(1, timelineFraction));

  // Chiều rộng cuộn ngang tối đa (Mỗi khối timeline-item rộng 100vw = window.innerWidth)
  const totalItems = timelineItems.length;
  const viewportWidth = window.innerWidth;
  const maxTranslate = (totalItems - 1) * viewportWidth;

  // Cập nhật vị trí dịch chuyển của timeline-track
  const currentTranslate = timelineFraction * maxTranslate;
  timelineTrack.style.transform = `translateX(-${currentTranslate}px)`;

  // Xác định phần tử nào đang nằm ở chính giữa khung nhìn (Active Item)
  // Mỗi phần tử active tương ứng với một điểm phân số: index / (totalItems - 1)
  const activeIndex = Math.round(timelineFraction * (totalItems - 1));

  timelineItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Lắng nghe sự kiện cuộn và thay đổi kích thước màn hình
window.addEventListener('scroll', updateTimeline);
window.addEventListener('resize', updateTimeline);
window.addEventListener('DOMContentLoaded', updateTimeline);

// --- SELECTED WORKS SCROLL & REVEAL LOGIC ---
const worksSection = document.getElementById('selected-works');
const worksCardsList = document.querySelectorAll('.work-card');

// IntersectionObserver for mobile scroll reveal
const workObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

function initMobileReveal() {
  if (!worksCardsList.length) return;
  if (window.innerWidth <= 1024) {
    worksCardsList.forEach(card => {
      workObserver.observe(card);
      // Remove desktop active/past classes
      card.classList.remove('active', 'past');
    });
  } else {
    worksCardsList.forEach(card => {
      workObserver.unobserve(card);
      card.classList.remove('revealed');
    });
  }
}

function updateSelectedWorks() {
  if (!worksSection || !worksCardsList.length || window.innerWidth <= 1024) return;

  const sectionTop = worksSection.offsetTop;
  const sectionHeight = worksSection.scrollHeight;
  const viewportHeight = window.innerHeight;

  // Calculate scroll fraction (0 to 1) inside Selected Works section
  let scrollFraction = (window.scrollY - sectionTop) / (sectionHeight - viewportHeight);
  scrollFraction = Math.max(0, Math.min(1, scrollFraction));

  const totalCards = worksCardsList.length;

  worksCardsList.forEach((card, index) => {
    const startFraction = index / totalCards;
    const endFraction = (index + 1) / totalCards;

    // Boundary handle for last card
    const isActive = (index === totalCards - 1)
      ? (scrollFraction >= startFraction)
      : (scrollFraction >= startFraction && scrollFraction < endFraction);

    if (isActive) {
      card.classList.add('active');
      card.classList.remove('past');
    } else if (scrollFraction >= endFraction) {
      card.classList.add('past');
      card.classList.remove('active');
    } else {
      card.classList.remove('active', 'past');
    }
  });
}

// Add event listeners for Selected Works section
window.addEventListener('scroll', updateSelectedWorks);
window.addEventListener('resize', () => {
  initMobileReveal();
  updateSelectedWorks();
});

// --- FIXED HEADER, MOBILE NAVIGATION & SCROLL SPY LOGIC ---
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link');
const mobileLinks = document.querySelectorAll('.mobile-link');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

const sections = [
  document.getElementById('about'),
  document.getElementById('services'),
  document.getElementById('portfolio')
];

// Toggle Mobile Menu
function toggleMobileMenu() {
  const isOpen = menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen);
  
  if (isOpen) {
    document.body.style.overflow = 'hidden'; // disable background scrolling
  } else {
    document.body.style.overflow = ''; // enable background scrolling
  }
}

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMobileMenu);
}

if (mobileClose) {
  mobileClose.addEventListener('click', toggleMobileMenu);
}

// Close Mobile Menu when links are clicked (using event delegation for absolute reliability)
document.addEventListener('click', (event) => {
  const link = event.target.closest('.mobile-link');
  if (link && mobileMenu && mobileMenu.classList.contains('active')) {
    toggleMobileMenu();
  }
});

function updateHeaderAndSpy() {
  // 1. Toggle scrolled class for header glassmorphism effect
  if (header) {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // 2. Scroll Spy to dynamically update active nav-link & mobile-link
  let currentSectionId = '';
  const scrollPosition = window.scrollY + 200; // offset to trigger active state slightly earlier

  sections.forEach(section => {
    if (!section) return;
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      currentSectionId = section.getAttribute('id');
    }
  });

  if (currentSectionId) {
    // Update Desktop Nav Links
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    // Update Mobile Nav Links
    mobileLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }
}

// Register header and scroll spy scroll event
window.addEventListener('scroll', updateHeaderAndSpy);

// --- DYNAMIC PORTFOLIO ARCHIVE FILTERING ---
function initArchiveFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (!filterButtons.length || !portfolioCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 1. Toggle active state class on filter buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // 2. Hide and show matching cards based on data-category matching values
      portfolioCards.forEach(card => {
        const cardCategories = card.getAttribute('data-category').split(' ');

        if (filterValue === 'all' || cardCategories.includes(filterValue)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // 3. Recalculate Lenis scroll boundary frame spacing
      if (typeof lenis !== 'undefined' && lenis) {
        lenis.resize();
      }
    });
  });
}

// --- VIDEO LIGHTBOX MODAL LOGIC ---
function initVideoModal() {
  const modal = document.getElementById('video-modal');
  const video = document.getElementById('modal-video');
  const closeBtn = document.getElementById('modal-close-btn');
  const previews = document.querySelectorAll('.multimedia-card .media-preview');

  if (!modal || !video || !closeBtn || !previews.length) return;

  // Map project keys to high-fidelity stock video clips
  const videoUrls = {
    'ssi-video': 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-41764-large.mp4',
    'shark-video': 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-office-41584-large.mp4',
    'nganluong-video': 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-financial-charts-41712-large.mp4'
  };

  // Click on thumbnail triggers popup media player
  previews.forEach(preview => {
    preview.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      const anchor = preview.closest('a');
      if (!anchor) return;

      // Extract project key from href query params
      const href = anchor.getAttribute('href');
      let projectKey = '';
      if (href) {
        try {
          const url = new URL(href, window.location.origin);
          projectKey = url.searchParams.get('project');
        } catch (err) {
          // Fallback parsing if URL is relative and complex
          const match = href.match(/project=([^&]+)/);
          if (match) {
            projectKey = match[1];
          }
        }
      }

      if (!projectKey) return;

      let finalVideoUrl = videoUrls[projectKey];

      try {
        // Dynamic import db.js to load the latest project's videoUrl if defined in DB
        const db = await import('./db.js');
        const project = await db.getProject(projectKey);
        if (project && project.videoUrl) {
          finalVideoUrl = project.videoUrl;
        }
      } catch (err) {
        console.warn('CMS database fetch failed for video, using default stock fallback:', err);
      }

      if (!finalVideoUrl) return;

      // Load media resource and play
      video.src = finalVideoUrl;
      video.load();
      
      modal.setAttribute('aria-hidden', 'false');
      modal.classList.add('active');
      
      // Auto play the video
      video.play().catch(error => {
        console.log('Video autoplay blocked or failed:', error);
      });

      // Contain page scrolling
      document.body.style.overflow = 'hidden';
      if (typeof lenis !== 'undefined' && lenis) {
        lenis.stop();
      }
    });
  });

  // Handle closing modal
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');

    // Fully halt playback and stream buffering to avoid memory leaks
    video.pause();
    video.src = '';
    video.load();

    // Restore page scrolling
    document.body.style.overflow = '';
    if (typeof lenis !== 'undefined' && lenis) {
      lenis.start();
    }
  }

  closeBtn.addEventListener('click', closeModal);

  // Close by backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Run initial checks immediately and on DOM content loaded
initMobileReveal();
updateSelectedWorks();
updateHeaderAndSpy();
initArchiveFilters();
initVideoModal();
window.addEventListener('DOMContentLoaded', () => {
  initMobileReveal();
  updateSelectedWorks();
  updateHeaderAndSpy();
  initArchiveFilters();
  initVideoModal();
});


