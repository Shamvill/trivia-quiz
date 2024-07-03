
const btn = document.getElementById('start');
const ul = document.getElementById('ulo');

function question() {

  const question1 =
 "What is your favorite color?"
 
  const listitem = document.createElement('li');
  const uli = document.createElement('span');
  uli.textContent = question1;
  listitem.appendChild(uli);
  ul.appendChild(listitem);
}

btn.addEventListener('click', question);