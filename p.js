// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    keyboard: true,
  });
  
  // Navigate Function
  function navigateSlide(index) {
    swiper.slideTo(index);
    document.querySelectorAll('.links li').forEach(li => li.classList.remove('activeLink'));
    document.querySelectorAll('.links li')[index].classList.add('activeLink');
  }
  
  // Typing Animation
  const typed = new Typed('#typed', {
    strings: ['WEB DEVELOPER', 'FULL STACK DEVELOPER', 'PROGRAMMER'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
  
  // Animate Skill Bars when about-slide visible
  swiper.on('slideChange', () => {
    if (swiper.activeIndex === 1) {
      document.querySelectorAll('.skills .active-bar').forEach(bar => {
        bar.style.width = "95%";
      });
    }
  });
  
  // Loader Hide
  window.addEventListener('load', () => {
    document.getElementById('loading').style.display = 'none';
  });
  
  // AOS Initialization
  AOS.init();
  