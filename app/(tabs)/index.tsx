import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const userName = "John Doe";

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.56.1:3000/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Hello, {userName}!</Text>
      <View style={styles.separatorGreetings} />
      <Text style={styles.allBooksHeader}>All Books</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        books.map(book => (
          <View key={book._id} style={styles.bookContainer}>
            <View style={styles.bookDetails}>
              <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>Author: {book.authors.join(', ')}</Text>
              </View>
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  
  greeting: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  separatorGreetings: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '60%',
    marginBottom: 10,
  },
  
  allBooksHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 50,
    textAlign: 'center',
  },  
});

export default HomeScreen;
