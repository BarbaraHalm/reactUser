import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";



function Routing() {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={
            <ProtectedRoute> 
                <Home/>
                </ProtectedRoute>
                }/>
            <Route path="/registerpage" element={<Register/>}/>
            <Route path="/loginpage" element={<Login/>}/>

        </Routes>
        </BrowserRouter>
     );
}

export default Routing;