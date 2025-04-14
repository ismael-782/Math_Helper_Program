const tipsButton = document.getElementById('show-tips');
const tipsModal = document.getElementById('tips-modal');
const closeModal = document.querySelector('.close-modal');

// فتح النافذة
if (tipsButton) {
    tipsButton.addEventListener('click', () => {
        tipsModal.classList.add('active');
    });
}

// إغلاق النافذة
if (closeModal) {
    closeModal.addEventListener('click', () => {
        tipsModal.classList.remove('active');
    });
}

// إغلاق النافذة عند النقر خارجها
window.addEventListener('click', (e) => {
    if (e.target === tipsModal) {
        tipsModal.classList.remove('active');
    }
});

// ==== تجارب الطلاب ====
const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prev-testimonial');
const nextButton = document.getElementById('next-testimonial');

let currentTestimonial = 0;

// تحديث العرض الحالي
function updateTestimonial() {
    testimonialCards.forEach((card, index) => {
        card.classList.remove('active');
        if (index === currentTestimonial) {
            card.classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentTestimonial) {
            dot.classList.add('active');
        }
    });
}

// زر التالي
if (nextButton) {
    nextButton.addEventListener('click', () => {
        currentTestimonial++;
        if (currentTestimonial >= testimonialCards.length) {
            currentTestimonial = 0;
        }
        updateTestimonial();
    });
}

// زر السابق
if (prevButton) {
    prevButton.addEventListener('click', () => {
        currentTestimonial--;
        if (currentTestimonial < 0) {
            currentTestimonial = testimonialCards.length - 1;
        }
        updateTestimonial();
    });
}

// النقر على النقاط
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonial();
    });
});

// تغيير الشرائح تلقائياً كل 5 ثواني
setInterval(() => {
    currentTestimonial++;
    if (currentTestimonial >= testimonialCards.length) {
        currentTestimonial = 0;
    }
    updateTestimonial();
}, 5000);

// إضافة تأثير تحريك العناصر عند التمرير
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .course-card, .resource-card, .summary-card, .study-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
        }
    });
};

// تهيئة التحريك عند التمرير
const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.feature-card, .course-card, .resource-card, .summary-card, .study-card');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // تنفيذ التحريك عند تحميل الصفحة
};

// تنفيذ التحريك بعد تحميل الصفحة
window.addEventListener('load', initScrollAnimations);
