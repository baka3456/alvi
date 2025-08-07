const menu = document.getElementById('menu');
const aboutBtn = document.getElementById('aboutBtn');
const aboutContent = document.getElementById('aboutContent');
const backBtn = document.getElementById('backBtn');
const blurBg = document.getElementById('blurBg');

aboutBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  blurBg.style.display = 'block';
  backBtn.style.display = 'block';
  aboutContent.style.display = 'block';
  aboutContent.style.animation = 'slideFadeIn 0.8s ease';
});

backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  aboutContent.style.animation = 'slideFadeOut 0.5s ease forwards';
  aboutContent.addEventListener('animationend', () => {
    aboutContent.style.display = 'none';
    backBtn.style.display = 'none';
    blurBg.style.display = 'none';
    menu.style.display = 'flex';
    menu.classList.add('animate-in');
  }, { once: true });
});
