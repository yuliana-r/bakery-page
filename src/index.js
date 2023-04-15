import './styles/style.css';
import header from './header';
import home from './home';
import footer from './footer';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');

function loadPage(header, main, footer) {
  content.innerText = '';
  content.append(header());
  content.append(main());
  content.append(footer());
}

document.addEventListener('click', (e) => {
  const { target } = e;

  if (target.innerText === 'HOME') { loadPage(header, home, footer); }
  if (target.innerText === 'MENU') { loadPage(header, menu, footer); }
  if (target.innerText === 'CONTACT') { loadPage(header, contact, footer); }
});

loadPage(header, home, footer);
