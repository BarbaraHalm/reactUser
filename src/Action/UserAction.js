export const addUser =(newUser)=> {
    return{
        type:"ADD_USER",
        payload:newUser
    }
}


export const editUser =(data)=> {
    return{
        type:"EDIT_USER",
        payload: {data}
    }
} 


export const deleteUser =(id)=> {
    return{
        type:"DELETE_USER",
        payload: id
    }
}









































// export const addUser=(user)=>{
//     return(
//         {
//         type: "ADD_USER",
//         payload: user,
//     }
//     )
// }