// main.jsx or index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

const renderMethod = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

const render = (Component) => {
  const rootElement = document.getElementById('root');
  const createRoot = ReactDOM.createRoot || ReactDOM.unstable_createRoot;
  const root = createRoot(rootElement);

  root.render(<Component />);
};

render(App);
