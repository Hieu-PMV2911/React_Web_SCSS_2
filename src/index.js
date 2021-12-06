import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UiProvider from '../src/store/uiProvider.jsx'
ReactDOM.render(
  <React.StrictMode>
    <UiProvider>
      <App />
    </UiProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

