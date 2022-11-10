
let initialState = {
    users:[],
};

const UserReducer = (state = initialState , action) => {

    switch (action.type) {
        case "ADD_USER":
            return{...state, users: action.payload};
            
            case "DELETE_USER":
                const filteredUser = state.users.filter(user=> user.id !== action.payload)
                return{...state, users:filteredUser} 
    
            case "EDIT_USER": 
                const updatedUser = state.users.map((user)=>{
                    if(user.id===action.payload.data.id) {
                        return action.payload.data
                    }
                    else {
                        return user
                    }
                })
        
    
                return {...state,users:updatedUser}
                
            default:
                return state
    }
        }
      
    
    export default UserReducer;       




















