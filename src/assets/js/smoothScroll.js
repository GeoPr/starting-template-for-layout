// ================================================================================================================================================================================================================================================================================================================================
// SMOOTH SCROLL \\
const links = document.querySelectorAll('.smooth-link');
const nav = document.getElementById('nav');

const duration = 2000;

links.forEach(link => link.addEventListener('click', clickHandler));

function clickHandler(e) {
  e.preventDefault();

  const id = e.target.getAttribute('href').replace('#', '');
  const block = document.getElementById(id);

  smoothScroll(block, duration);
}

function smoothScroll(target, dur) {
  const targetPosition = target.getBoundingClientRect().top - nav.scrollHeight;
  const startPosition = window.pageYOffset;

  let startTime;

  function animation(currentTime) {
    startTime === undefined && (startTime = currentTime);

    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, dur);

    window.scrollTo({ top: run });

    timeElapsed < dur && requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;

    if (t < 1) {
      return (c / 2) * t * t + b;
    }

    t--;

    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
// SMOOTH SCROLL \\
// ================================================================================================================================================================================================================================================================================================================================
