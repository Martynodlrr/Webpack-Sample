const easteregg = require('./images/easteregg.jpg');

import './styles/main.scss'

//DOM node
const app = document.querySelector('#root');

//Heading node
const heading = document.createElement('h1');
heading.textContent = 'Hello World!';

//Append heading node to the DOM
app.append(heading);

//Image node
const image = document.querySelector('#easteregg');
image.src = easteregg;
image.alt = "the cabbage guy from 'The last airbender'";
