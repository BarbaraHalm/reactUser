import React from 'react'
import User from "./User";
import {Row} from "react-bootstrap";
import { connect } from "react-redux"
function SeeAllUsers(props) {
<<<<<<< HEAD
=======
    
>>>>>>> changes
    return ( 
        <div>
        <h1>USER</h1>
        <Row md={3}>
            {props.user.map((item)=>{
             return (
             <User
             key={item.id}
             UserData={item}
             deleteUser={props.deleteUser}
             UserEdit={props.UserEdit}
             />
             );
            })}
        </Row>
        </div>
     );
}
const mapStateToProps = (state)=> ({
<<<<<<< HEAD
    user: state.users
=======
    user: state.UserReducer.users
>>>>>>> changes
})

export default connect(mapStateToProps) (SeeAllUsers);















































// import React from 'react'
// import User from "./User";
// import {Row} from "react-bootstrap";
// import {connect} from 'react-redux'
// function SeeAllUsers(props) {
//     return ( 
//         <div>
//         <h1>USER</h1>
//         <Row md={3}>
//             {props.users.map((item,index)=>{
//              return (
//              <User
//              key={index}
//              UserData={item}
//              deleteUser={props.deleteUser}
//              UserEdit={props.UserEdit}
//              />
//              );
//             })}
//         </Row>
//         </div>
//      );
// }
// const mapStateToProps=(state)=>{
//     return{
//         users: state.users
//     };

// }
// export default connect(mapStateToProps)(SeeAllUsers);



















// import React from 'react'
// import User from "./User";
// import {Row} from "react-bootstrap";
// import {connect} from 'react-redux'
// function SeeAllUsers(props) {
//     return ( 
//         <div>
//         <h1>USER</h1>
//         <Row md={3}>
//             {props.users.map((item)=>{
//              return (
//              <User
//              key={item.id}
//              UserData={item}
//              deleteUser={props.deleteUser}
//              UserEdit={props.UserEdit}
//              />
//              );
//             })}
//         </Row>
//         </div>
//      );
// }
// const mapStateToProps=(state)=>{
//     return{
//         users: state.users
//     };

// }
// export default connect(mapStateToProps)(SeeAllUsers);