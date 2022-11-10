import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect} from 'react';
<<<<<<< HEAD
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from './components/AddUserForm';
import SeeAllUsers from './components/SeeAllUsers';
import { collection, query,onSnapshot,orderBy} from "firebase/firestore";
import {db} from './Firebase/Config';
import { addUser } from './Action/UserAction';
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch();
=======
import { Container} from "react-bootstrap";
//import {  Row, Col } from "react-bootstrap";
// import AddUserForm from './components/AddUserForm';
// import SeeAllUsers from './components/SeeAllUsers';
import { collection, query,onSnapshot,orderBy} from "firebase/firestore";
import {db,auth,} from './Firebase/Config';
import { addUser } from './Action/UserAction';
import {useDispatch} from 'react-redux';
import Routing from "./Routing";
import {newloginUser} from './Action/AuthAction';
import { onAuthStateChanged } from "firebase/auth";







function App() {
  const dispatch = useDispatch();

>>>>>>> changes
  useEffect(() => {
    const readData=async ()=>{
      const q = query(collection(db, "Users-timestamp"),orderBy("timestamp","desc"));
       onSnapshot(q, (querySnapshot) => {
      const users = [];
       querySnapshot.forEach((doc) => {
      users.push(doc.data());
  });
  dispatch(addUser(users));
  console.log(users);
});
     }
   
readData();
  },[dispatch])

<<<<<<< HEAD

   //const [users, setUser] = useState([]);
  // const addNewUser=(owner)=>{
=======
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
     if(user)dispatch(newloginUser(user));
     else {dispatch(newloginUser(null))};

    })

  },[dispatch])


   //const [users, setUser] = useState([]);
 //const addNewUser=(owner)=>{
>>>>>>> changes
  //  owner.id=Math.random().toString()
  //   setUser([...users,owner])
  //    console.log(owner)
  //  };
 
  //  const deleteUser =(id,deleteduser)=>{
  //    setUser(users.filter((owner)=>{
  //      if (owner.id!==id){
  //      return deleteduser;
  //   }
  //   return owner;
  //  }
      
  //   ));
  //  };
  //  const UserEdit=(id, updatedInfo)=>{
  //   setUser(
  //     users.map((owner) =>{
  //     if(owner.id===id){
  //       return updatedInfo;
  //     }
  //      return owner;
  //     })
  //    );
  //  };
<<<<<<< HEAD
  return (
    <Container>
      <Row style={{marginTop: "20px"}}>
        <Col md={4} >
          <h1>FORM</h1>
          <AddUserForm
          // brandNew={addNewUser}
           />
        </Col>
        <Col md={8}>
          <SeeAllUsers 
         // UserData={users}
           // deleteUser={deleteUser}
           //UserEdit={UserEdit}
           />
        </Col>
      </Row>
    </Container>
=======
   return (
     <Container>
       
       <Routing/>



    {/*   <Row style={{marginTop: "20px"}}> 
       <Col md={4} >
         <h1>FORM</h1>
         <AddUserForm
         //brandNew={addNewUser}
         />
      </Col>
      <Col md={8}>
        <SeeAllUsers 
     //UserData={users}
       //deleteUser={deleteUser}
        //UserEdit={UserEdit}
         />
      </Col>
     </Row> */}
     </Container>
>>>>>>> changes
  );
};
export default App;

































































