export default function home() {
  const home = document.createElement('div');

  const desc = document.createElement('p');
  desc.textContent = 'this is home content';

  home.appendChild(desc);

  return home;
}
