import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AddUserForm from '../components/AddUserForm';
import SeeAllUsers from '../components/SeeAllUsers';
import {signOut } from "firebase/auth";
import { auth } from "../Firebase/Config";





function Home() {
  const handleSignout= async(e)=>{
    e.preventDefault();
    try{
      signOut(auth)
    }catch(e){console.log(e)};


  }
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
        <Button variant="danger" onClick={handleSignout}
        style={{marginTop: "20px",}}
        >LOGOUT</Button>
       </Row>
       
     </Container>
     );
}

export default Home;