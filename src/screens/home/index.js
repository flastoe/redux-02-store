import React from 'react';
import { Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  return <View>
    <Text>Welcome to our Movie Store</Text>
    <Text>You have X movies selected</Text>
    <Button title="Choose movie" onPress={() => {
      navigation.navigate('Catalogue');
    }} />
  </View>
}

export default Home;