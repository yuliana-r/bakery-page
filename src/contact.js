export default function contact() {
  const contact = document.createElement('div');

  const desc = document.createElement('p');
  desc.textContent = 'this is contact content';

  contact.appendChild(desc);

  return contact;
}
