import React  from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TodoScreen from "../screens/TodoScreen";
import AddTodoScreen from "../screens/AddTodoScreen";
import EditTodoScreen  from '../screens/EditTodoScreen'

const Stack = createStackNavigator();


const TodoNavigator = () => {
    return(
      
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen   name = "Todo" component ={TodoScreen} />
                    <Stack.Screen name="AddTodo" component = {AddTodoScreen} />
                    <Stack.Screen name = "EditTodo" component = {EditTodoScreen} />
                </Stack.Navigator>
            </NavigationContainer>
  
     
    );
}

export default TodoNavigator