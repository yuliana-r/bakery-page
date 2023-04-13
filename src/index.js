// import './styles/style.css';
import header from './header';
import home from './home';
import footer from './footer';
import menu from './menu';
import contact from './contact';

const content = document.getElementById('content');

content.append(header());
content.append(footer());

// Put the contents of each ‘tab’ inside of its own module. Each module will export a function
// that creates a div element, adds the appropriate content and styles to that element and then
// appends it to the DOM.

// tab switching logic
// You should have event listeners for each tab that wipes out the current contents and then runs
// the correct ‘tab module’ to populate it again.
