
import createDataContext from './createContext'



const todoReducer = (state, action) =>{
    switch (action.type) {
        case "add":
            return [...state, {
                id: Math.floor(Math.random()*99999).toString(),
                title: action.payload
            }];

        case "delete":
            return(state.filter(todo => {
                return todo.id != action.payload;
            }));
            
        case "edit":
            return(state.map(todo =>{
                if(todo.id == action.payload.id){
                    todo.title = action.payload.title
                }
                return todo;
            }));
        default:
            return state;
    }

};

const add = (dispatch) =>{
    
    return (title,callback ) => {
        dispatch({type:"add" , payload: title});
        callback();
    };
};

const del = (dispatch) =>{
    
    return (id ) => {
        dispatch({type:"delete" , payload: id});
        
    };
};

const edit = (dispatch) =>{
    
    return (id, title, callback ) => {
        dispatch({type:"edit" , payload:{id: id, title: title}});
        callback();
        
    };
};
 

export const {Context, Provider } = createDataContext(todoReducer, {add, del, edit},[] );