// --- i18n Internationalization Core ---

export const translations = {
  vi: {
    // Header & Nav
    "nav_status": "Sẵn sàng nhận dự án",
    "nav_about": "Về tôi",
    "nav_services": "Dịch vụ",
    "nav_portfolio": "Dự án",
    "nav_contact": "Liên hệ",
    
    // Hero Section
    "hero_scrolldown": "Cuộn xuống",
    "hero_role_1": "Thiết kế Chuyển động",
    "hero_role_2": "Thiết kế Đồ họa",
    "hero_role_3": "Thiết kế UI/UX",
    
    // Sections Titles
    "section_about": "Về tôi",
    "section_services": "Dịch vụ",
    "section_works": "Dự án Nổi bật",
    "section_selected_works": "Dự án Nổi bật",
    "section_multimedia": "Sản phẩm Đa phương tiện",
    "see_all_works": "Xem tất cả dự án",
    "section_contact_title": "Kết nối và tạo ra những dự án tuyệt vời cùng nhau.",
    "contact_desc": "Vui lòng để lại thông tin doanh nghiệp của bạn tại đây hoặc liên hệ trực tiếp với tôi qua các kênh mạng xã hội.",
    
    // Services Section (Static descriptions)
    "service_1_title": "Thiết kế Đồ họa",
    "service_1_desc": "Thiết kế các ấn phẩm truyền thông Marketing đa kênh nhằm truyền tải thông điệp thương hiệu mạnh mẽ, thu hút và nhất quán.",
    "service_2_title": "Dựng phim & Kỹ xảo",
    "service_2_desc": "Dựng phim, xử lý hậu kỳ và kết hợp chuyển động đồ họa (motion graphics) chuyên nghiệp để tạo ra các video lôi cuốn người xem.",
    "service_3_title": "Thiết kế Sản phẩm",
    "service_3_desc": "Kiến tạo sản phẩm kỹ thuật số đột phá, tối ưu hóa trải nghiệm người dùng (UX), xây dựng Design System và giao diện ứng dụng hiện đại.",
    
    // Empty states
    "empty_works": "Chưa có dự án nào được cấu hình.",
    "empty_multimedia": "Chưa có video nào được cấu hình hiển thị ở đây. Vào CMS bật tính năng này lên!",
    
    // Form & Footer
    "form_name": "Tên của bạn",
    "form_business": "Doanh nghiệp của bạn",
    "form_email": "Email của bạn",
    "form_phone": "Số điện thoại",
    "form_request": "Yêu cầu của bạn",
    "form_send": "Đặt lịch hẹn",
    "form_success": "Tin nhắn của bạn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất có thể!",
    "form_error": "Đã có lỗi xảy ra. Vui lòng thử lại sau.",
    "footer_title": "PHẠM MẠNH DESIGNER",
    "footer_desc": "Copyright © 2026"
  },
  en: {
    // Header & Nav
    "nav_status": "Available for works",
    "nav_about": "About me",
    "nav_services": "Services",
    "nav_portfolio": "Portfolio",
    "nav_contact": "Contact me",
    
    // Hero Section
    "hero_scrolldown": "Scrolldown",
    "hero_role_1": "Motion Designer",
    "hero_role_2": "Graphic Designer",
    "hero_role_3": "UI UX Designer",
    
    // Sections Titles
    "section_about": "About me",
    "section_services": "Services",
    "section_works": "Selected works",
    "section_selected_works": "Selected Works",
    "section_multimedia": "Multimedia Work",
    "see_all_works": "See all works",
    "section_contact_title": "Let's connect and create something amazing together.",
    "contact_desc": "Please leave your company information here or reach out to me directly via my social media channels.",
    
    // Services Section (Static descriptions)
    "service_1_title": "Graphic Design",
    "service_1_desc": "Designing multi-channel marketing media to convey strong, attractive, and consistent brand messages.",
    "service_2_title": "Compositing",
    "service_2_desc": "Professional video editing, post-production, and motion graphics to create captivating visual content.",
    "service_3_title": "Product Design",
    "service_3_desc": "Creating breakthrough digital products, optimizing user experience (UX), and building modern app interfaces.",
    
    // Empty states
    "empty_works": "No Selected Works configured yet.",
    "empty_multimedia": "No multimedia videos configured yet. Enable this in CMS!",
    
    // Form & Footer
    "form_name": "Name",
    "form_business": "Your Business",
    "form_email": "Email",
    "form_phone": "Phone",
    "form_request": "Your Request",
    "form_send": "Schedule a call",
    "form_success": "Your message has been sent successfully. I will get back to you soon!",
    "form_error": "An error occurred. Please try again later.",
    "footer_title": "PHAM MANH DESIGNER",
    "footer_desc": "Copyright © 2026"
  }
};

// Default language: 'vi' (Vietnamese)
export function getLanguage() {
  return localStorage.getItem('portfolio_lang') || 'en';
}

export function setLanguage(lang) {
  if (translations[lang]) {
    localStorage.setItem('portfolio_lang', lang);
    applyTranslations();
    
    // Dispatch a custom event so other scripts (like db.js renders) know to re-render
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
}

export function translate(key) {
  const lang = getLanguage();
  return translations[lang][key] || key;
}

export function getField(obj, fieldName) {
  if (!obj) return '';
  const lang = getLanguage();
  if (lang === 'en') {
    return obj[`${fieldName}_en`] || obj[fieldName] || '';
  }
  return obj[fieldName] || '';
}

export function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedText = translate(key);
    
    // Handle placeholder vs textContent
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.hasAttribute('placeholder')) {
        el.setAttribute('placeholder', translatedText);
      } else {
        el.value = translatedText;
      }
    } else {
      el.textContent = translatedText;
    }
  });

  // Update HTML lang attribute
  document.documentElement.lang = getLanguage();
}

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  
  // Setup language switcher buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  const currentLang = getLanguage();
  
  langBtns.forEach(btn => {
    // Set initial active state
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    
    // Add click listener
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      setLanguage(selectedLang);
      
      // Update UI active class
      langBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
    });
  });
});
