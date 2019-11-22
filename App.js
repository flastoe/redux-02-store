import React from 'react';
import { Provider } from 'react-redux';
import storeFactory from './src/redux/store';

import Navigator from './src/navigator';

const store = storeFactory();

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}