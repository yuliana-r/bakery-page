import baker from './assets/baker.jpg';

export default function home() {
  const home = document.createElement('div');
  home.classList.add('contact');

  const bakerImage = document.createElement('img');
  bakerImage.src = baker;

  function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }

  home.appendChild(createParagraph(`Welcome to Yuli's Vegan Bakery, where every loaf is a masterpiece and every 
  pastry is baked to purr-fection! Our bakery is a carb-lover's dream, filled with the aroma of 
  freshly baked bread and the sight of beautifully crafted pastries. We knead your support for 
  our passion for creating mouth-watering baked goods that are not only delicious but also 
  vegan and cruelty-free.`));

  home.appendChild(createParagraph('· · ─────── ·𖥸· ─────── · ·'));

  home.appendChild(createParagraph(`Our talented bakers whisk together the finest ingredients to create a variety of bread and pastry 
  puns that will have you coming back for more. From our flaky, buttery croissants to our sweet and 
  savory danishes, each pastry is crafted with love and attention to detail. Don't forget to try our 
  best-selling bread, the Knead for Seed, which is packed with all kinds of healthy seeds and grains 
  to fuel your day. At Yuli's Vegan Bakery, we believe that no meal is complete without bread, so we 
  offer a variety of freshly baked loaves that will make your taste buds dance with joy.`));

  home.appendChild(createParagraph('· · ─────── ·𖥸· ─────── · ·'));

  home.appendChild(createParagraph(`Whether you're a bread enthusiast or a pastry aficionado, Yuli's Vegan Bakery has something for 
  everyone. Come in today and experience the magic of our freshly baked puns. We guarantee that our 
  bakery will rise to the occasion and leave you feeling dough-lighted!`));

  home.appendChild(bakerImage);

  return home;
}
