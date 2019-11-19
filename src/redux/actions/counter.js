export const Actions = {
  INCREMENT: 'Counter.Increment',
  DECREMENT: 'Counter.Decrement',
}

export const increment = () => ({
  type: Actions.INCREMENT,
})

export const decrement = () => ({
  type: 'DECREMENT'
})

export const reset = () => ({
  type: 'RESET'
})

export const setCount = (value) => ({
  type: 'SET_COUNT',
  value,
})