const upScroll = ['ArrowUp', 'PageUp', 'ArrowLeft'];
const downScroll = ['ArrowDown', 'PageDown', 'ArrowRight'];

function keydownArrowDown() {
  const keyboardEvent = new KeyboardEvent('keydown', {
    bubbles: true,
    code: 'ArrowDown',
  });
  document.dispatchEvent(keyboardEvent);
}

window.addEventListener('keydown', (ev) => {
  const { code } = ev;
  console.trace(ev);

  if (code === 'Space') {
    ev.preventDefault();
    keydownArrowDown();
    return;
  }

  if (downScroll.some((v) => v === code)) {
    ev.preventDefault();
    window.scrollBy(0, window.innerHeight);
    return;
  }

  if (upScroll.some((v) => v === code)) {
    ev.preventDefault();
    window.scrollBy(0, -window.innerHeight);
    return;
  }
});
