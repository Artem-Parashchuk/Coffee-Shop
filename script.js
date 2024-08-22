document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.mobile-menu__btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  const BtnCloseMobMenu = document.querySelector('.mobile-menu__close')
  const body = document.body;

  if (menuBtn && mobileMenu) {
    function toggleMobileMenu() {
      mobileMenu.classList.toggle('active');
      menuBtn.classList.toggle('active');
      body.classList.toggle('body-lock');
    }

    menuBtn.addEventListener('click', toggleMobileMenu);

    const mobileMenuLinks = document.querySelectorAll('.mobile-nav__link');

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        body.classList.remove('body-lock');
      });
    });

    BtnCloseMobMenu.addEventListener('click',  function closeMobMenu() {
      mobileMenu.classList.remove('active')
      console.log('click')
    })
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
  
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
      }
    });
  });
});
