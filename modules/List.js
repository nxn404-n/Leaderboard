import { listEl } from './DOMselector.js';

const showList = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  const scores = data.result;

  listEl.innerHTML = '';
  
  scores.forEach((item) => {
    listEl.innerHTML += `
      <li>${item.user}: ${item.score}</li>
    `;
  });
};

export default showList;