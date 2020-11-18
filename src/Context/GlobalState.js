
import React, {Component} from "react";
import NetContext from "./NetContext"

class GlobalState extends Component{
    state = {
        login: false
    }

    login = () => {
        this.setState({
            login:true
        });
        console.log("loginGlobalState", this.state.login);
        localStorage.setItem("login", true);
    }
    logout = ()=>{
        this.setState({
            login:false
        });
        localStorage.removeItem("login");
    }
    render(){
        return(
            <NetContext.Provider value={{
                login:this.state.login,
                loginUser:this.login,
                logoutUser:this.logout
            }}>
                {this.props.children}
            </NetContext.Provider>
        )
    }
}

export default GlobalState;