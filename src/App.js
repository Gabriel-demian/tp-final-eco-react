import React, { Component } from "react";
import Menu from "./Components/Menu";
import Home from "./Pages/Home";
import Footer from "./Components/Footer"
import Registro from "./Pages/Registro";
import Login  from "./Pages/Login";
import Producto from "./Pages/Producto"
import firebase from './Config/firebase';
import {BrowserRouter,Route} from "react-router-dom";
import GlobalState from "./Context/GlobalState";
import RegistroNuevoProducto from "./Pages//RegistroNuevoProducto";

class App extends Component{
    constructor(){
        super();
        this.state={
            opcionesMenu:[
                {
                    path:"/registro",
                    label:"Registro"
                },
                {
                    path:"/login",
                    label:"Login"
                },
                {
                    path:"/",
                    label:"Home"
                }
            ]
        }
        console.log(firebase.database())
    }
    handleClick = ()=>{
        this.setState({
          opcionesMenu:[
            {
                path:"/",
                label:"Home"
            }
          ]  
        })
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate App",nextProps,nextState);
        return true;
    }
    render() {
        return (
            <GlobalState>
                <BrowserRouter>
                    <Menu options={this.state.opcionesMenu} title={this.state.titulo} click={this.handleClick}/>
                
                    <Route path="/" component={Home} exact />
                    <Route path="/registro" component={Registro} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/producto/:id" component={Producto} exact />
                    <Route path="/registroNuevoProducto" component={RegistroNuevoProducto} exact />
                    
                    <Footer />  
                </BrowserRouter>   
            </GlobalState>
        )
    }
}

export default App;