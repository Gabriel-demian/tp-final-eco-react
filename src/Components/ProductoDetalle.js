import React, { Component }  from 'react';
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const styles = {
    imgProducto:{
        width:"450px"
    },
    title:{
        fontSize:"10px"
    }
}

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
            <Card style={{ width: '60rem', margin:'auto'}}  className="text-center" >
            <Card.Body >
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Text>
                    <img src={this.props.data.photo_url} style={styles.imgProducto} alt="Product"></img>
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">${this.props.data.description}</Card.Subtitle>
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