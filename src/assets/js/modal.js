// ================================================================================================================================================================================================================================================================================================================================
// МОДАЛЬНЫЕ ОКНА \\
// const wrapper = document.getElementById('wrapper');
// const popupLinks = document.querySelectorAll('.link-to-popup');
// const lockPadding = document.querySelectorAll('.lock-padding');
// const popupCloseIcon = document.querySelectorAll('.link-close-popup');
// const body = document.querySelector('body');

// let unlock = true;

// const timeout = 500;

// if (popupLinks.length > 0) {
//   for (let popupLink of popupLinks) {
//     popupLink.addEventListener('click', (e) => {
//       e.preventDefault();
//       const popupName = popupLink.getAttribute('href').replace('#', '');
//       const curentPopup = document.getElementById(popupName);
//       popupOpen(curentPopup);
//     });
//   }
// }

// if (popupCloseIcon.length > 0) {
//   for (let el of popupCloseIcon) {
//     el.addEventListener('click', (e) => {
//       e.preventDefault();
//       popupClose(el.closest('.popup'));
//     });
//   }
// }

// function popupOpen(curentPopup) {
//   if (curentPopup && unlock) {
//     const popupActive = document.querySelector('.popup _active');
//     popupActive ? popupClose(popupActive, false) : bodyLock();
//     curentPopup.classList.add('_active');
//     curentPopup.addEventListener('click', function (e) {
//       !e.target.closest('.popup__container') ? popupClose(e.target.closest('.popup')) : '';
//     });
//   }
// }

// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('_active');
//     doUnlock ? bodyLock() : '';
//   }
// }

// function bodyLock() {
//   if (document.documentElement.clientWidth <= 767.98) {
//     !body.classList.contains('_lock') ? body.classList.add('_lock') : '';
//   } else {
//     !body.classList.contains('_lock') ? body.classList.add('_lock') : body.classList.remove('_lock');
//   }

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//     timeout;
//   });
// }

// document.addEventListener('keydown', function (e) {
//   e.preventDefault();
//   if (e.which === 27) {
//     const popupActive = document.querySelector('.popup _active');
//     popupClose(popupActive);
//   }
// });

const links = document.querySelectorAll('.link-to-popup')
const closeLinks = document.querySelectorAll('.link-close-popup')
const popups = document.querySelectorAll('.popup')

links.forEach(link => link.addEventListener('click', openHandler))

function openHandler(e) {
  const href = e.target.closest('.link-to-popup').getAttribute('href').slice(1)
  const popup = document.getElementById(href)
  popup.classList.add('_active')
  document.body.classList.add('_lock')
}

closeLinks.forEach(closeLink =>
  closeLink.addEventListener('click', closeHandler),
)

function closeHandler(e) {
  const popup = e.target.closest('.popup')
  popup.classList.remove('_active')
  document.body.classList.remove('_lock')
}

popups.forEach(popup => popup.addEventListener('click', popupHandler))

function popupHandler(e) {
  const { t } = e.target.dataset
  if (t === 'modal') {
    e.target.closest('.popup').classList.remove('_active')
    document.body.classList.remove('_lock')
  }
}
// МОДАЛЬНЫЕ ОКНА \\
// ================================================================================================================================================================================================================================================================================================================================
