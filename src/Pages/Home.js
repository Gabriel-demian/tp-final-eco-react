import React, { Component } from "react";
import ProductoUnico from "../Components/ProductoUnico";
import CardColumns from 'react-bootstrap/CardColumns'
//import {getProductos} from "../services/ProductosService"
import firebase from "../Config/firebase"
class Home extends Component{
    constructor(){
        super()
        this.state={
            productos:[],
            loading:true
        }
    }
    async componentWillMount(){
        console.log("componentDidMount")

        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false
            })
        })

       /* Se comenta el uso de Axios 
        let result = await getProductos();

        console.log("result", result);
        if(result.data.length>0){
            this.setState({
                productos:result.data,
                loading:false
            })
        }
        //En caso de volver a usar utilizar esta linea en el render
        {this.state.productos.map(producto=><ProductoUnico key={producto.id} data={producto} buttons={true}/>)}
        */
    }
    render(){
        if(this.state.loading){
            return(
                <div>
                    loading...
                </div>
            )
        }else{
            return (
                <CardColumns>
                    {this.state.productos.map(producto=><ProductoUnico key={producto.id} id={producto.id} data={producto.data()} buttons={true}/>)}
                    {/* Se duplica el código para tener más productos de ejemplo. */}
                    {this.state.productos.map(producto=><ProductoUnico key={producto.id} id={producto.id} data={producto.data()} buttons={true}/>)}
                </CardColumns>
            )
        } 
    }
}
export default Home;