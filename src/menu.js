export default function menu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const breadContents = document.createElement('div');
  breadContents.classList.add('bread-contents');
  const sweetContents = document.createElement('div');
  sweetContents.classList.add('sweet-contents');
  const savoryContents = document.createElement('div');
  savoryContents.classList.add('savory-contents');

  const breads = document.createElement('h2');
  breads.textContent = 'breads';

  const savory = document.createElement('h2');
  savory.textContent = 'savory snacks';

  const sweet = document.createElement('h2');
  sweet.textContent = 'sweet treats';

  function createItem(name, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const image = require(`./assets/menu/${name}.jpg`);

    const itemImg = document.createElement('img');
    itemImg.src = image;
    itemImg.alt = `${name}`;

    const itemName = document.createElement('h3');
    itemName.textContent = name.replaceAll('-', ' ');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemPrice);

    return menuItem;
  }

  menu.appendChild(breads);
  breadContents.appendChild(createItem('Knead-for-Seed-Bread', '£4.00'));
  breadContents.appendChild(createItem('Vegan-Focaccia', '£2.50'));
  breadContents.appendChild(createItem('Sourdough-Seeded-Bagel', '£1.70'));
  menu.appendChild(breadContents);

  menu.appendChild(savory);
  savoryContents.appendChild(createItem('Vegan-Quiche', '£3.50'));
  savoryContents.appendChild(createItem('Chickpea-Tuna-Salad-Sandwich', '£3.00'));
  savoryContents.appendChild(createItem('Vegan-Sausage-Roll', '£2.00'));
  savoryContents.appendChild(createItem('Vegan-Scone', '£2.00'));
  savoryContents.appendChild(createItem('Potato-Placinta', '£2.80'));
  menu.appendChild(savoryContents);

  menu.appendChild(sweet);
  sweetContents.appendChild(createItem('Choc-Chip-Cookie', '£1.15'));
  sweetContents.appendChild(createItem('Blueberry-Muffin', '£1.10'));
  sweetContents.appendChild(createItem('Cinnamon-Roll', '£2.15'));
  sweetContents.appendChild(createItem('Choc-Fudge-Cake', '£4.75'));
  sweetContents.appendChild(createItem('Lemon-Bar', '£1.90'));
  sweetContents.appendChild(createItem('Buttery-Croissant', '£1.55'));
  menu.appendChild(sweetContents);

  return menu;
}
