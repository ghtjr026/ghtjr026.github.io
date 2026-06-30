(() => {
  const root = document.documentElement;
  const header = document.querySelector('.site-header');
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.desktop-nav a, .mobile-nav a');
  const sections = [...document.querySelectorAll('main section[id]')];

  const storedTheme = localStorage.getItem('portfolio-theme');
  const systemLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  root.dataset.theme = storedTheme || (systemLight ? 'light' : 'dark');

  themeButton?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = nextTheme;
    localStorage.setItem('portfolio-theme', nextTheme);
  });

  const closeMenu = () => {
    if (!mobileNav || !menuButton) return;
    mobileNav.hidden = true;
    menuButton.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const opening = mobileNav.hidden;
    mobileNav.hidden = !opening;
    menuButton.classList.toggle('active', opening);
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? '메뉴 닫기' : '메뉴 열기');
    document.body.classList.toggle('menu-open', opening);
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 12);

    const current = sections
      .filter((section) => section.getBoundingClientRect().top <= 140)
      .at(-1)?.id;

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const revealItems = document.querySelectorAll('.reveal');
  revealItems.forEach((item) => {
    const delay = Number(item.dataset.delay || 0);
    item.style.setProperty('--delay', `${delay}ms`);
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
