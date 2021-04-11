import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App/App';

import I18nProvider from './i18n/I18nProvider';
import reportWebVitals from './reportWebVitals';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
