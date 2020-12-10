// ================================================================================================================================================================================================================================================================================================================================
// FLOAT BLOCK \\
const block = document.getElementById('');

const delay = 1000;

window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
  const y = window.pageYOffset;
  const top = window.getComputedStyle(block).top.replace('px', '');
  const blockHeight = block.scrollHeight;

  const docHeight = document.documentElement.clientHeight;

  const blockBottom = block.getBoundingClientRect().bottom;
  const blockTop = block.getBoundingClientRect().top;

  if (blockBottom <= 0) {
    setTimeout(() => {
      block.style.transform = `translateY(${y}px)`;
    }, delay);
  } else if (docHeight < blockTop) {
    setTimeout(() => {
      block.style.transform = `translateY(${y - blockHeight + +top}px)`;
    }, delay);
  }
}

// FLOAT BLOCK \\
// ================================================================================================================================================================================================================================================================================================================================
