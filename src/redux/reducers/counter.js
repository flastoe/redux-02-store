import { Actions } from '../actions/counter';

const initialState = {
  count: 0
}

const counter = (state = initialState, action) => {
  console.log('Counter reducer', action);
  switch(action.type) {
    case Actions.INCREMENT:
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        ...initialState
      }
    case 'SET_COUNT':
      return {
        count: action.value
      }
    default:
      return state;
  }
}

export default counter;