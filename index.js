const upScroll = ['ArrowUp', 'PageUp'];
const downScroll = ['ArrowDown', 'PageDown'];

window.addEventListener('keydown', (ev) => {
  const { code } = ev;
  console.log(code);

  if (code === 'Space') {
    ev.preventDefault();
    console.log('create ArrowDown key event');
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
