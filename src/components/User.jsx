import React,{useState} from 'react';
import {Button, Card,Col,Modal} from "react-bootstrap";
import EditUserForm from './EditUserForm';
import {connect} from 'react-redux';
import {deleteUser} from '../Action/UserAction'
import { doc, deleteDoc } from "firebase/firestore";
import {db} from '../Firebase/Config';


function User(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  const handleDelete= async(e) =>{
    e.preventDefault();
    //props.deleteUser(props.UserData.id)
    try{
      await deleteDoc(doc(db, "Users-timestamp", props.UserData.id));
    }catch(e){console.log(e)}
       
  };


    return (
           <>
           <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Changes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm UserData={props.UserData} UserEdit={props.UserEdit}
          hide={handleClose}/>
        </Modal.Body>
      </Modal>
            <Col style={{ marginTop:"1rem"}}>
                <Card style={{backgroundColor:"lightblue", color: "black"}}>
                  <Card.Body>
                    <Card.Title>Name:{props.UserData.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Email: {props.UserData.email}</Card.Subtitle>
                    <Card.Text>
                     Gen: {props.UserData.gen}
                    </Card.Text>
                    <Button href="#" variant="primary" style={{marginRight:"10px", fontSize:"20px", width:"75px"}}
                    onClick={handleShow}> Edit</Button>
                    <Button href="#" variant="danger" style={{fontSize:"20px"}}
                     onClick={handleDelete}>Delete </Button>
                  </Card.Body>
                </Card>
            </Col>
            </>
      );
}
const mapDispatch = {
  deleteUser,
}

export default connect (null, mapDispatch) (User)








































