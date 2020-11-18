
import React, {Component} from "react";
import NetContext from "./NetContext"

class GlobalState extends Component{
    state = { 
        login: localStorage.getItem("login") || false,
        email: localStorage.getItem("email") || ""
    }

    login = (email) => {
        this.setState({
            login:true,
            email:email
        });
        console.log("loginGlobalState", this.state.login, this.state.email);
        localStorage.setItem("login", true);
        localStorage.setItem("email", email);
    }
    logout = ()=>{
        this.setState({
            login:false,
            email:""
        });
        localStorage.removeItem("login");
        localStorage.removeItem("email");
    }
    render(){
        return(
            <NetContext.Provider value={{
                login:this.state.login,
                email:this.state.email,
                loginUser:this.login,
                logoutUser:this.logout
            }}>
                {this.props.children}
            </NetContext.Provider>
        )
    }
}

export default GlobalState;