export default function menu() {
  const menu = document.createElement('div');

  const desc = document.createElement('p');
  desc.textContent = 'this is menu content';

  menu.appendChild(desc);

  return menu;
}
