export default function header() {
  const header = document.createElement('header');

  const name = document.createElement('h1');
  name.textContent = 'yuli\'s vegan bakery';

  const navBar = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'HOME';
  homeBtn.classList.add('nav-button');
  // homeBtn.addEventListener('click', (e) => {
  //   if (e.target.classList.contains('active')) return;
  //   console.log('home button clicked');
  //   console.log(e.target.classList);
  //   setActiveButton(homeBtn);
  // });

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'MENU';
  menuBtn.classList.add('nav-button');

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'CONTACT';
  contactBtn.classList.add('nav-button');

  // function setActiveButton(button) {
  //   const buttons = document.querySelectorAll('.nav-button');

  //   buttons.forEach((button) => {
  //     if (button !== this) {
  //       button.classList.remove('active');
  //     }
  //   });

  //   button.classList.add('active');
  // }

  homeBtn.setAttribute('id', 'home');
  menuBtn.setAttribute('id', 'menu');
  contactBtn.setAttribute('id', 'contact');

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);

  header.appendChild(name);
  header.appendChild(navBar);

  return header;
}
