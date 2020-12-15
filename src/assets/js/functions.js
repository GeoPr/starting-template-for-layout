// ================================================================================================================================================================================================================================================================================================================================
// WEBP SUPPORT \\
const testWebP = callback => {
  const webP = new Image()

  webP.onload = webP.onerror = () => {
    callback(webP.height == 2)
  }
  webP.src =
    'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
}

testWebP(support => {
  if (support) {
    document.querySelector('body').classList.add('_webp')
  } else {
    document.querySelector('body').classList.add('_no-webp')
  }
})
// WEBP SUPPORT \\
// ================================================================================================================================================================================================================================================================================================================================
// BUILD WEBP IMAGE \\
const images = document.querySelectorAll('img')

if (images.length > 0) {
  images.forEach(img => {
    const isSvg = img.getAttribute('src').endsWith('.svg')
    const isParentIbg = img.parentElement.classList.contains('_ibg')

    if (!isSvg || !isParentIbg) {
      const src = img.getAttribute('src').slice(0, -4)
      const picture = document.createElement('picture')
      const source = document.createElement('source')

      source.setAttribute('type', 'image/webp')
      source.setAttribute('srcset', `${src}.webp`)
      img.insertAdjacentElement('afterend', picture)
      picture.insertAdjacentElement('beforeend', img)
      picture.insertAdjacentElement('afterbegin', source)
    }
  })
}
// BUILD WEBP IMAGE \\
// ================================================================================================================================================================================================================================================================================================================================
// IBG \\
const ibg = () => {
  const ibgEls = document.querySelectorAll('._ibg')

  if (ibgEls.length > 0) {
    ibgEls.forEach(ibgEl => {
      const img = ibgEl.querySelector('img')
      const src = img.getAttribute('src')

      img ? (img.style.backgroundImage = `url("${src}")`) : null
    })
  }
}
ibg()
// IBG \\
// ================================================================================================================================================================================================================================================================================================================================
// MENU BURGER \\
const header = 'header'
const headerBurger = document.querySelector(`.${header}__burger`)

const burger = () => {
  if (headerBurger) {
    const headerMenu = document.querySelector(`.${header}__menu`)

    headerBurger.addEventListener('click', e => {
      e.preventDefault()
      
      headerBurger.classList.toggle('_active')
      headerMenu.classList.toggle('_active')
      document.body.classList.toggle('_lock')
    })
  }
}
burger()
// MENU BURGER \\
// ================================================================================================================================================================================================================================================================================================================================
// DISABLE :HOVER DURING SCROLLING
let timeout

const scrollHandler = () => {
  clearTimeout(timeout)
  if (document.body.classList.contains('_hover')) {
    document.body.classList.add('_hover')
  }

  timeout = setTimeout(() => {
    document.body.classList.remove('_hover')
  }, 500)
}

window.addEventListener('scroll', scrollHandler)
// DISABLE :HOVER DURING SCROLLING
// ================================================================================================================================================================================================================================================================================================================================
