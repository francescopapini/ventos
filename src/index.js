import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeEs from 'react-intl/locale-data/es';
import localeIt from 'react-intl/locale-data/it';
import localePt from 'react-intl/locale-data/pt';
import messagesEn from './translations/en.json';
import messagesEs from './translations/es.json';
import messagesIt from './translations/it.json';
import messagesPt from './translations/pt.json';
import * as serviceWorker from './serviceWorker';
import App from './App';

addLocaleData([...localeEn, ...localeEs, ...localeIt, localePt]);

const messages = {
  en: messagesEn,
  es: messagesEs,
  it: messagesIt,
  pt: messagesPt,
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
