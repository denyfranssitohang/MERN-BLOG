//__ initial global state __\\
const initialState = {    
    name: 'Deny Frans',
}

//__ Global Reducer __\\
const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Frans'
        }
    }   
    return state;
}
//__ End Global Reducer __\\

export default globalReducer;