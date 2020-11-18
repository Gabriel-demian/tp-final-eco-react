import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import NetContext from "../Context/NetContext";
// eslint-disable-next-line
{/*import {Link, } from "react-router-dom";*/}


class Menu extends Component {
    
    componentWillMount(){
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount Menu")
        
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps",nextProps)
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps,nextState);
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate",nextProps,nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate",prevProps,prevState);
    }
    render() {
        
            return (
                <NetContext.Consumer>
                    {
                        context=>(

                            <Navbar bg="primary" variant="dark">
                                <Navbar.Brand as={Link} to={'/'}>TP Final Ecommerce</Navbar.Brand>
                                <Nav className="mr-auto">
                                    {
                                         context.login &&
                                         <>
                                            <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
                                            <Nav.Link onClick={context.logoutUser} >Salir</Nav.Link>
                                            {/* <Nav.Link>{context.email}</Nav.Link> */}
                                        </>  
                                    }
                                    
                                    {
                                        !context.login &&
                                        <>
                                            <Nav.Link as={Link} to={'/registro'}>Registro</Nav.Link>
                                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                                        </>
                                    }

                                    
                                    
                                </Nav>
                                <Nav>
                                    {
                                    context.login &&
                                        <>
                                        <Navbar.Text>
                                            Logeado como: <a href="#login">{context.email}</a>
                                        </Navbar.Text>
                                        </>
                                    }       
                                </Nav>
                            </Navbar>

                        )}
                </NetContext.Consumer>
            )
        
    }
}

export default Menu;