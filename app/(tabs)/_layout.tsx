// Navigation

// https://icons.expo.fyi/Index

import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: { backgroundColor: '#212121' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" size={24} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="AccountScreen"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} /> 
          ),
        }}
      />
    </Tabs>
  );
}
