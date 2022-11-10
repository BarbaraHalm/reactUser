import React  from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";




function ProtectedRoute({children,authUser}) {
    
    if (!authUser) return <Navigate to="/loginpage"replace={true} />
    return children;
}
const mapStateToProps =(state)=>{
    return{
        authUser: state.AuthReducer.loginUsers,
    }
}
export default connect(mapStateToProps)(ProtectedRoute);