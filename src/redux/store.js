import { createStore, combineReducers } from 'redux';
import counter from './reducers/counter';

const storeFactory = () => {
  console.log('Creating store...');
  const reducers = combineReducers({
    counter
  });
  return createStore(reducers);
}

export default storeFactory;