import React from 'react';
import { Provider } from 'react-redux';

import ReduxTest from './src/screens/redux-test';

import storeFactory from './src/redux/store';

const store = storeFactory();

export default function App() {
  return (
    <Provider store={store}>
      <ReduxTest />
    </Provider>
  );
}