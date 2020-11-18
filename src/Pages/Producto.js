import React,{useState,useEffect} from "react";
import ProductoDetalle from "../Components/ProductoDetalle"
function Producto(props){
    console.log(props.match.params.id)
    const [producto,setProducto] = useState({})
    const [loading,setLoading]=useState(true);

    useEffect(
        () => {
            fetch("https://jsonfy.com/items/"+props.match.params.id)
            .then(res=>res.json())
            .then(result=>{
                console.log("result",result);
                if(result.length>0){
                    setProducto(result[0]);
                    setLoading(false);
                }
            },
            (err)=>{
                console.log("error",err)
            })
        }, [props.match.params.id]);


    if(loading){
        return(
            <div>Loading ...</div>
        )
    }else{
        return(
            <ProductoDetalle data={producto} buttons={false} />
        )
    }
    
}
export default Producto