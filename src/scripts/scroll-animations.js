document.addEventListener('astro:page-load', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in', 'animate-slide-up');
        observer.unobserve(entry.target);
      }
    });
  });

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));
});
