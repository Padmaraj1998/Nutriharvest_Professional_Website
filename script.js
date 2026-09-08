(function () {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.nav-links');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
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

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const enquiryForm = document.querySelector('#enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(enquiryForm);
      const name = String(data.get('name') || '').trim();
      const phone = String(data.get('phone') || '').trim();
      const email = String(data.get('email') || '').trim();
      const requirement = String(data.get('requirement') || '').trim();
      const message = String(data.get('message') || '').trim();

      const subject = `Website enquiry${requirement ? ` - ${requirement}` : ''}`;
      const body = [
        'Hello Reethika Nutriharvest,',
        '',
        `Name: ${name}`,
        `Phone: ${phone || 'Not provided'}`,
        `Email: ${email}`,
        `Requirement: ${requirement}`,
        '',
        'Message:',
        message || 'No additional message.',
        '',
        'Sent from the Reethika Nutriharvest website.'
      ].join('\n');

      const mailto = `mailto:vimalprasath2021@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const status = enquiryForm.querySelector('.form-status');
      if (status) status.textContent = 'Opening your email app with this enquiry prepared.';
      window.location.href = mailto;
    });
  }
})();
