import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default SearchScreen;
