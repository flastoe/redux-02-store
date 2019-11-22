import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { fetchMovies } from '../../redux/actions/movies';

const Catalogue = () => {
  const [listLoading, setLoading] = useState(false);
  const { listLoaded, list } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  console.log(listLoading, listLoaded, list);
  if(!listLoaded && !listLoading) {
    setLoading(true);
    dispatch(fetchMovies());
  }
  return (<View>
    <Text>We have the following movies:</Text>
    <FlatList
      data={list}
      renderItem={({ item }) => (<View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.genre}</Text>
      </View>)}
    />
  </View>)
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Catalogue;
