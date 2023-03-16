import showList from './List.js';

const refreshFn = (url) => {
  const refreshEvent = document.querySelector('.main__box1__header__refreshbtn');
  refreshEvent.addEventListener('click', () => {
    showList(url);
  });
};

export default refreshFn;