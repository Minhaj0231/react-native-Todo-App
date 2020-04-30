
import React from 'react';

import {View, Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

const Todo = props =>{

    return(
        <View style= {styles.container}>
            <View style= {styles.TextContainer}>
            <Text style = {styles.text} >{props.title}</Text>
            
            </View>
            <View style= {styles.Iconview}>

            <TouchableOpacity onPress={()=> {props.navigation.navigate('EditTodo',{todoId: props.todoId})}} >
                <Feather name= "edit" size= {30}>Edit</Feather>
            </TouchableOpacity>
            <TouchableOpacity onPress = {props.deleteTodo}>
                <Feather name= "delete" size= {30}>Delete</Feather>
            </TouchableOpacity>
        </View>
        </View>
    );
};





const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:2,
        margin:5,
        width:300
    },

    TextContainer: {
       
        justifyContent: "center",
        minHeight:40,
        borderBottomWidth: 2,
        margin: 3,
        

    },
    Iconview:{

        flexDirection:"row",
        justifyContent: "space-around"
    },
    text:{
        maxWidth: "80%",
        paddingStart:10,
        fontSize: 15,
        fontWeight: "bold"
        
    }
  });

  
export default Todo;

