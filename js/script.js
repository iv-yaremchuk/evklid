const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  }
});

$(function() {
  $('.questions__list').accordion({
    heightStyle: 'content',
    collapsible: true,
  });
});
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs-item__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })
})

document.querySelector('.header__burger').addEventListener('click', function(){
  document.querySelector('.header__burger').classList.toggle('header__burger--active');
  document.querySelector('.header__nav').classList.toggle('header__burger-nav');
  document.querySelector('.header__nav-list').classList.toggle('header__burger-nav-list');
})
document.querySelector('.header__search-icon').addEventListener('click', function(){
  document.querySelector('.header__search-input').classList.add('header__search-input--active');
  document.querySelector('.header__search-icon').classList.add('header__search-icon--active');
  document.querySelector('.header__search-button').classList.add('header__search-button--active');
  document.querySelector('.header__search-close').classList.add('header__search-close--active');
  document.querySelector('.header__search').classList.add('header__search--active');
})
document.querySelector('.header__search-close').addEventListener('click', function(){
  document.querySelector('.header__search-input').classList.remove('header__search-input--active');
  document.querySelector('.header__search-icon').classList.remove('header__search-icon--active');
  document.querySelector('.header__search-button').classList.remove('header__search-button--active');
  document.querySelector('.header__search-close').classList.remove('header__search-close--active');
  document.querySelector('.header__search').classList.remove('header__search--active');
})
