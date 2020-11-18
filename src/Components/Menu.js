import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
// eslint-disable-next-line
{/*import {Link} from "react-router-dom";*/}


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
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand as={Link} to={'/'}>TP-Unidad2</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to={'/'}>Inicio</Nav.Link>
                            
                            <Nav.Link as={Link} to={'/registro'}>Registro</Nav.Link>
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        </Nav>
                    </Navbar>
                    <br />
                </div>
            )
        
    }
}

export default Menu;