//Basic React Imports
import React from 'react';
import ReactDOM from 'react-dom';

//Main Component Imports

import App from './App';

//Styling

import './index.css';

let whereToRender = document.querySelector('#root')


ReactDOM.render(<App />,whereToRender);
