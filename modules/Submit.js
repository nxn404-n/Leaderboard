import Person from './Class.js';
import { formEl, nameInput, scoreInput } from './DOMselector.js';
import showList from './List.js';

const submit = (url) => {
  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const person = new Person(nameInput.value, scoreInput.value);

    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(person),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    nameInput.value = '';
    scoreInput.value = '';
    showList(url);
  });
};

export default submit;