import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap"
import {connect} from "react-redux";
import {addUser} from "../Action/UserAction";
import {v4 as uuid} from "uuid"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"; 
import {db} from '../Firebase/Config';

function AddUserForm (props) {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState("")
  const [gen, setGen] = useState("")
  //const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault();
   // dispatch(addUser({id:uuid(),name, email, gen}))
    //props.brandNew({ name, email, gen })

  let newUser = {id:uuid(),name, email, gen, timestamp: serverTimestamp()};
    console.log ({id:uuid(), name, email, gen});
    try{await setDoc(doc(db, "Users-timestamp", newUser.id), newUser );
    } 
    catch(e){
    console.log(e)
  }
    
     
    
    setName("");
    setEmail("");
    setGen("")
  }
  return (
    <Form style={{ border: "1px solid pink", backgroundColor: "skyblue", height: "350px" }}>
      <Form.Group style={{ width: "300px", marginTop: "20px", marginLeft: "50px" }} className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name}
          onChange={(e) => { setName(e.target.value) }} />
      </Form.Group>
      <Form.Group style={{ width: "300px", marginTop: "20px", marginLeft: "50px" }} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
          onChange={(e) => { setEmail(e.target.value) }} />
      </Form.Group>
      <Form.Group style={{ width: "300px", marginTop: "20px", marginLeft: "50px" }} className="mb-3" controlId="formBasicGen">
        <Form.Label>Gen</Form.Label>
        <Form.Control type="Gen" placeholder="gen" value={gen} onChange={(e) => { setGen(e.target.value) }} />
      </Form.Group>
      <Button style={{ width: "100px", marginRight: "30px", marginLeft: "50px", fontSize: "18px" }} variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}
const mapDispatchToProps =  {
  addNewUser: addUser,
};
export default connect (null, mapDispatchToProps)(AddUserForm);










































// import React, {useState} from 'react';
// import {Form, Button} from  "react-bootstrap";
// import {addUser} from "../Action/UserAction";
// import {connect} from "react-redux";
// import {v4 as uuid} from "uuid"
// function AddUserForm(props) {
//     const [name,setName]=useState(" ")
//     const [email,setEmail]=useState("")
//     const [gen,setGen]=useState("")

//     const handleSubmit=(e)=>{ 
//         e.preventDefault();
//          //props.brandNew({name,email,gen})
//        props.addUser({id: uuid,name,email,gen})
//          setName(""); 
//          setEmail(""); 
//          setGen("")
//     }
//     return (
//         <Form style={{border:"1px solid pink", backgroundColor: "skyblue", height: "350px"}}>
//       <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="Enter name" value={name}
//         onChange={(e)=>{setName(e.target.value)}} />
//       </Form.Group>
//       <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" value={email}
//         onChange={(e)=>{setEmail(e.target.value)}}/>
//       </Form.Group>
//       <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicGen">
//         <Form.Label>Gen</Form.Label>
//         <Form.Control type="Gen" placeholder="gen" value={gen} onChange={(e)=>{setGen(e.target.value)}}/>
//       </Form.Group>
//       <Button style={{width: "100px", marginRight:"30px", marginLeft:"50px", fontSize:"18px" }} variant="primary" 
//       type="submit" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Form>
//      );
// }
// const mapDispatchToProps ={
//   addUser
// };
// export default connect (null, mapDispatchToProps,)(AddUserForm);