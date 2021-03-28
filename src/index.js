import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import SongList from './components/SongList';

const App = () => {
  return (
    <div className="ui container">
      <SongList />
    </div>
  );
};

const rootDocument = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDocument
);
