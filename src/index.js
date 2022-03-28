import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { store } from './store/store';
import { PortApp } from './PortApp';

ReactDOM.render(
  <Provider store={store}>
    <PortApp />
  </Provider>,
  document.getElementById('root')
);