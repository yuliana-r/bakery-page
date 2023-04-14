export default function header() {
  const header = document.createElement('header');

  const name = document.createElement('h1');
  name.textContent = 'All You Knead Is Loaf';

  const desc = document.createElement('p');
  desc.textContent = 'Artisanal Vegan Bakery';

  const navBar = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'HOME';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'MENU';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'CONTACT';

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);

  header.appendChild(name);
  header.appendChild(desc);
  header.appendChild(navBar);

  return header;
}
