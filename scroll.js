window.addEventListener('load', () => {
  let fns = [
    () => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top:
          document.documentElement.scrollTop +
          document.querySelector('.imgslide').getBoundingClientRect().bottom,
      });
    },
    () => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top:
          document.documentElement.scrollTop +
          document.querySelector('.one-cup-img').getBoundingClientRect().bottom,
      });
    },
    () => {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top:
          document.documentElement.scrollTop +
          document.querySelector('.Main-finish-wrap').getBoundingClientRect()
            .bottom,
      });
    },
  ];
  let dot = document.querySelector('#dots');
  dot.style.background = 'red';
  dot.style.position = 'fixed';
  dot.style.right = '0px';
  dot.style.top = `calc(50% - ${dot.getBoundingClientRect().height / 2}px)`;
  dot.querySelectorAll('li').forEach((li, idx) => {
    li.addEventListener('click', () => {
      if (fns[idx]) {
        fns[idx]();
      }
    });
  });
});
