import React, {useContext} from 'react';

import  {Context as TodoContext}  from '../context/TodoContext';

import {View, Text,StyleSheet, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Todo  from '../components/Todo'

const TodoScreen = props =>{
      
    const {state, del} = useContext(TodoContext)



    return(
        <View style = {styles.container}>
          
        <View style= {styles.button} ><Button  onPress={()=> {props.navigation.navigate('AddTodo')}} title="Add New" /></View>
        <FlatList 
            data = {state}
            keyExtractor= {item =>item.id}
            renderItem = {({item})=> <Todo title = {item.title} deleteTodo = {()=> del(item.id)} todoId = {item.id} navigation = {props.navigation} ></Todo>}
            
            />

        </View>


    );
};






const styles = StyleSheet.create({
    
    container:{
        flex:1,
        margin: 40,
        alignItems: "center"
        
        
    },


    button:{
        width:"100%",
        
        flexDirection: "column",
        justifyContent: "flex-end",
        marginBottom: 10
        
    },
    
    
    
  });

  
export default TodoScreen;