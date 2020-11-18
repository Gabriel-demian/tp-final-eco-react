import React, { Component }  from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class ProductoDetalle extends Component{
    constructor(props){
        super(props)
        this.state={
            mensaje:""
        }
    }
    handleClick = ()=>{
        this.setState({
            mensaje:"Gracias por su compra"
        })
    }
    render(){
        return (
            <Card >
            <Card.Body>
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">${this.props.data.price}</Card.Subtitle>
                <Card.Text>
                    ${this.props.data.price}
                </Card.Text>
                <Button variant="primary" onClick={this.handleClick}>
                    Comprar
                </Button>
               
                {
                    this.props.buttons &&
                    <Button variant="outline-info">
                        <Link to={'/producto/'+this.props.data.id}>
                            Ver Detalle
                        </Link>
                    </Button>
                }
                
                {this.state.mensaje}
            </Card.Body>
           </Card>
        )
    }
}
export default ProductoDetalle;