let initialState ={
    loginUsers: null
}

const AuthReducer=(state=initialState,action)=>{
switch(action.type){
   case  "add_users":
   return {...state,loginUsers:action.payload};
   default: return state
}

}
export default AuthReducer;