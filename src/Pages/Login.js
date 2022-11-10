import React,{useState} from "react";
import {Form,Button, Container} from "react-bootstrap";
import {auth} from "../Firebase/Config"
import {Link,useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider } from "firebase/auth";



function Login() {
        const [email,setEmail]= useState("");
        const [password,setPassword]= useState("");
        const [username,setUsername]= useState("")
        const provider = new GoogleAuthProvider();
        const navigate= useNavigate();

        const handleLogin=async(e)=>{
          e.preventDefault()
          try{
           const userLogin=await signInWithEmailAndPassword(auth, email, password,username);
           navigate("/",{replace:true});  
           console.log(userLogin)
          }catch(e){console.log(e)
        }
        setEmail("");
        setPassword("");
        setUsername("");
    
        };
        const handlegoogle=async(e)=>{
            e.preventDefault()
            try{
            const userLogin = await signInWithPopup(auth, provider)
            navigate("/",{replace:true}); 
             console.log(userLogin)
            }catch(e){console.log(e)
          }
          setEmail("");
          setPassword("");
          setUsername("");
      
          };
        return(
           <Container style={{marginTop:"20px",marginLeft:"250px",width:"55%",backgroundColor:"#88dcf3", 
           border: "1px solid black", height: "450px" }}>
            <Form>
                 <h1>Login Here</h1> 
                 <Form.Group style={{ marginTop: "20px", marginLeft: "30px" }}
            className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="username" placeholder="Enter Username" 
              value={username}
              onChange={(e)=>
              setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group style={{ marginTop: "20px", marginLeft: "30px" }}
            className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" 
              value={email}
              onChange={(e)=>
              setEmail(e.target.value)}/>
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      
            <Form.Group style={{  marginTop: "20px", marginLeft: "30px" }}
            className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>
              setPassword(e.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={handleLogin} 
             style={{marginRight:"10px",marginLeft: "30px" , fontSize:"15px", width:"75px"}}>
              Submit
            </Button>
            <Button variant="info,danger" type="submit" onClick={handlegoogle} style={{fontSize:"20px"}}>
          login with Google
        </Button>
        <div style={{marginTop: "10px",marginLeft:"30px",}}>
        <Link to="/registerpage">Create a new account </Link>
        </div>
          </Form>
          </Container>
         );
    }
    


export default Login;