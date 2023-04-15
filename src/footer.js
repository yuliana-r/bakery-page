export default function createFooter() {
  const footer = document.createElement('footer');

  const link = document.createElement('a');
  link.href = 'https://github.com/yuliana-r/bakery-page';
  link.target = '_blank';

  const username = document.createElement('p');
  username.textContent = 'yuliana-r';

  const icon = document.createElement('i');
  icon.classList.add('fab');
  icon.classList.add('fa-github');

  link.appendChild(icon);
  footer.appendChild(link);
  footer.appendChild(username);

  return footer;
}
