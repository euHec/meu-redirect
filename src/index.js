import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './context/AppProvider';
import ProviderAuth from './context/AppAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderAuth>
      <Provider>
        <App />
      </Provider>
    </ProviderAuth>
  </React.StrictMode>
);

