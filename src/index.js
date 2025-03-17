import React from 'react';
import ReactDOM from 'react-dom/client';

// const myFirstElement = <h1>Hello React!</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myFirstElement);

const myArray = ['apple', 'banana', 'cherry'];
const myList = myArray.map((item) => <li>{item}</li>);
const myElement = <ul>{myList}</ul>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(myElement);
