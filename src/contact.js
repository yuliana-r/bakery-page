export default function contact() {
  const contact = document.createElement('div');
  contact.classList.add('content');

  const phone = document.createElement('p');
  phone.textContent = '☎️ 012 3456 7890';

  const address = document.createElement('p');
  address.textContent = '📍 123 Baker Street, London W1U 6RZ, UK';

  const map = document.createElement('iframe');
  map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.541257592529!2d-0.16015462273339923!3d51.52163167181662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acec0d50469%3A0xefde890f4e494618!2s123%20Baker%20St%2C%20London%20W1U%206RZ!5e0!3m2!1sen!2suk!4v1681585070979!5m2!1sen!2suk';
  map.width = '65%';
  map.height = '450';
  map.allowFullscreen = '';
  map.loading = 'lazy';
  map.referrerPolicy = 'no-referrer-when-downgrade';

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.append(map);

  return contact;
}
