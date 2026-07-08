(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealSelectors = [
    '.section-v2',
    '.page-section',
    '.projects-hero',
    '.feed-hero',
    '.page-hero',
    '.hero-media',
    '.mission-image-wrap',
    '.join-hero-image-wrap',
    '.metric-card',
    '.program-card',
    '.team-card',
    '.testimonial-card',
    '.mission-point',
    '.feature-card',
    '.join-card',
    '.project-card',
    '.blog-card',
    '.give-option',
    '.impact-item',
    '.contact-side',
    '.contact-card',
    '.contact-method-card',
    '.report-form-card',
    '.tax-info'
  ];

  const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(',')));

  document.body.classList.add('animations-ready');

  revealItems.forEach((item, index) => {
    item.classList.add('reveal');
    item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.12
  });

  revealItems.forEach((item) => observer.observe(item));
})();
