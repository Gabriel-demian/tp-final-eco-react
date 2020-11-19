
import React, {Component} from "react";
import NetContext from "./NetContext"

class GlobalState extends Component{
    state = { 
        login: localStorage.getItem("login") || false,
        email: localStorage.getItem("email") || "",
        total: localStorage.getItem("total") || "0"
    }

    login = (email, total) => {
        this.setState({
            login:true,
            email:email,
            total:total
        });
        console.log("loginGlobalState", this.state.login, this.state.email);
        localStorage.setItem("login", true);
        localStorage.setItem("email", email);
    }
    logout = ()=>{
        this.setState({
            login:false,
            email:"",
            total:""
        });
        localStorage.removeItem("login");
        localStorage.removeItem("email");
        localStorage.removeItem("total");
    }
    render(){
        return(
            <NetContext.Provider value={{
                login:this.state.login,
                email:this.state.email,
                total:this.state.total,
                loginUser:this.login,
                logoutUser:this.logout
            }}>
                {this.props.children}
            </NetContext.Provider>
        )
    }
}

export default GlobalState;