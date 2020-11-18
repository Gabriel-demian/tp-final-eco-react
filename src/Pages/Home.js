import React, { Component } from "react";
import ProductoUnico from "../Components/ProductoUnico";
import CardColumns from 'react-bootstrap/CardColumns'
import {getProductos} from "../services/ProductosService"
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
       
        let result = await getProductos();

        console.log("result", result);
        if(result.data.length>0){
            this.setState({
                productos:result.data,
                loading:false
            })
        }

        /*fetch("https://jsonfy.com/items")
        .then(res=>res.json())
        .then(result=>{
            console.log("result",result);
            if(result.length>0){
                this.setState({
                    productos:result,
                    loading:false
                })
            }
        },
        (err)=>{
            console.log("error",err)
        })*/
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
                    {this.state.productos.map(producto=><ProductoUnico key={producto.id} data={producto} buttons={true}/>)}
                    {/* Se duplica el código para tener más productos de ejemplo. */}
                    {this.state.productos.map(producto=><ProductoUnico key={producto.id} data={producto} buttons={true}/>)}
                </CardColumns>
            )
        } 
    }
}
export default Home;