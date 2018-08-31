export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";
export const INCREMENT_BOOCH = "INCREMENT_BOOCH";

///^%^^^ Deconstructed so that it

//ACTION CREATORS vvv
function handleTodos(data){
    return{
        type: GET_TODOS,
        data
    };
}

function handleAdd(todo){
    return {
        type: ADD_TODO,
        todo
    }
}

function handleRemove(id){
    return{
        type: REMOVE_TODO,
        id
    }
}

function handleIncrement(amount, id){
    return{
        type: INCREMENT_BOOCH,
        amount,
        id
    }
}

export function getTodos(){
    return dispatch => {
        return fetch("http://localhost:3001/api/todos/")
            .then(res => res.json())
            .then(data => dispatch(handleTodos(data)))
            .catch(err => console.log("something has gone wrong!", err))
    }
}

export function addTodo(amount, task){
    return dispatch => {
        return fetch("http://localhost:3001/api/todos/",{
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({ task })    
        })
        .then(res => res.json())
        .then(data => dispatch(handleAdd(data)))
        .catch(err => console.log("something has gone wrong!", err))
    };
}

export function removeTodo(id){
    return dispatch => {
        return fetch(`http://localhost:3001/api/todos/${id}/`,{
            method: "DELETE",    
        })
        .then(res => res.json())
        .then(data => dispatch(handleRemove(id)))
        .catch(err => console.log("something has gone wrong!", err))
    }
}

export function incrementUp(amount, id){
    return dispatch => {
        return fetch(`http://localhost:3001/api/todos/${id}/`,{
            method: "PUT",
            body: JSON.stringify     
        })
        .then(res => res.json())
        .then(data => dispatch(handleIncrement(id)))
        .catch(err => console.log("something has gone wrong!", err))
    }
}