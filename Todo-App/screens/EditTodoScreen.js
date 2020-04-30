import React, {useState,useContext} from 'react';

import {View, Text,StyleSheet,TextInput,Button} from 'react-native';

import  {Context as TodoContext}  from '../context/TodoContext';

const EditTodoScreen = props =>{
        const[todo, setTodo] = useState("")

        const {state,edit} = useContext(TodoContext)

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}> Edit Todo </Text>
            <TextInput onChangeText ={text =>(setTodo(text))}
             value = {todo} style = {styles.input}
             multiline numberOfLines={1}
            />
            <View style = {styles.button}><Button title = "Edit" 
            onPress={()=>{edit(props.route.params.todoId,todo, 
                ()=>{props.navigation.navigate('Todo')})  } }
            /></View>
        </View>
    );
};






const styles = StyleSheet.create({
    container :{
        margin:20,
        flex: 1,
        justifyContent:"center",
        alignItems: "center",
       
    },
    text: {
        fontSize: 30,
        fontWeight:"bold",
        color: "blue"
    },
    input:{
        margin: 5,
        padding: 10,
        width: "100%",
        borderWidth: 2,
        borderRadius: 50,
    },
    button: {
        width: 100
    }
    


  });

  
export default EditTodoScreen;