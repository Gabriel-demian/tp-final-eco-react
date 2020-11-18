import React,{useState,useEffect} from "react";
import ProductoDetalle from "../Components/ProductoDetalle"
import firebase from "../Config/firebase"
function Producto(props){
    console.log(props.match.params.id)
    const [producto,setProducto] = useState({})
    const [loading,setLoading]=useState(true);

    useEffect(
        () => {

            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
                console.log("Doc data",doc.data())
                setProducto(doc);
                setLoading(false);
            })

            
        }, [props.match.params.id]);


    if(loading){
        return(
            <div>Loading ...</div>
        )
    }else{
        return(
            <ProductoDetalle data={producto.data()} buttons={false} />
        )
    }
    
}
export default Producto