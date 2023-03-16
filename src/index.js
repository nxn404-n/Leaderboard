import './style.css';
import showList from '../modules/List.js';
import submit from '../modules/Submit.js';
import refreshFn from '../modules/Refresh.js';

const id = 'qmxGrzuwodGkGOQPDeAz';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;

showList(url);

submit(url);

refreshFn(url);