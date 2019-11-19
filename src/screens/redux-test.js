import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { increment, decrement, reset, setCount } from '../redux/actions/counter';

const ReduxTest = (props) => {
  console.log('Redux Test Props: ', props);
  const { count, dispatch } = props;
  return (
    <View style={styles.container}>
      <Text>React Example</Text>
      <Text>{`Count: ${count}`}</Text>
      <Button title="Increment" onPress={() => {
        dispatch(increment());
      }} />
      <Button title="Decrement" onPress={() => {
        dispatch(decrement());
      }} />
      <Button title="Reset" onPress={() => {
        dispatch(reset());
      }} />
      <Button title="Set Random" onPress={() => {
        dispatch(setCount(Math.floor(Math.random()*30)));
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  console.log('Redux state', state);
  return state.counter
}

export default connect(mapStateToProps)(ReduxTest);
