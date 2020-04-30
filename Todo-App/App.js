import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

import TodoNavigator from "./navigations/todoNavigation";

import {Provider as TodoProvider} from  "./context/TodoContext"

export default function App() {
  

  return (
      <TodoProvider>
        <TodoNavigator />
      </TodoProvider>
      
   
    
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
