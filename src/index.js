import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
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
