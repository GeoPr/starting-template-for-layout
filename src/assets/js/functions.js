// ================================================================================================================================================================================================================================================================================================================================
// WEBP SUPPORT \\
const testWebP = callback => {
  const webP = new Image();
  webP.onload = webP.onerror = () => {
    callback(webP.height == 2);
  };
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
};

testWebP(support => {
  if (support == true) {
    document.querySelector('body').classList.add('_webp');
  } else {
    document.querySelector('body').classList.add('_no-webp');
  }
});
// WEBP SUPPORT \\
// ================================================================================================================================================================================================================================================================================================================================
// BUILD WEBP IMAGE \\
const images = document.querySelectorAll('img');

if (images.length > 0) {
  for (let img of images) {
    if (img.getAttribute('src').endsWith('.svg') || img.parentElement.classList.contains('_ibg')) {
      false;
    } else {
      const src = img.getAttribute('src').slice(0, -4);
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.setAttribute('type', 'image/webp');
      source.setAttribute('srcset', `${src}.webp`);
      img.insertAdjacentElement('afterend', picture);
      picture.insertAdjacentElement('beforeend', img);
      picture.insertAdjacentElement('afterbegin', source);
    }
  }
}
// BUILD WEBP IMAGE \\
// ================================================================================================================================================================================================================================================================================================================================
// IBG \\
const ibg = () => {
  const ibg = document.querySelectorAll('._ibg');
  if (ibg.length > 0) {
    for (let i of ibg) {
      i.querySelector('img')
        ? (i.style.backgroundImage = `url("${i.querySelector('img').getAttribute('src')}")`)
        : '';
    }
  }
};
ibg();
// IBG \\
// ================================================================================================================================================================================================================================================================================================================================
// MENU BURGER \\
const header = 'header';
const headerBurger = document.querySelector(`.${header}__burger`);

const burger = () => {
  if (headerBurger) {
    const headerMenu = document.querySelector(`.${header}__menu`);
    headerBurger.addEventListener('click', e => {
      e.preventDefault();
      headerBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
      document.body.classList.toggle('_lock');
    });
  }
};
burger();
// MENU BURGER \\
// ================================================================================================================================================================================================================================================================================================================================
