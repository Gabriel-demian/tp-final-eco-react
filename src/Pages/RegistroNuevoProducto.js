import React,{useState} from "react";
//import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import firebase from '../Config/firebase'
//import Spinner from 'react-bootstrap/Spinner'
import { useHistory } from 'react-router-dom'
import ButtonWithLoading from "../Components/ButtonWithLoading"
import Input from "../Components/Input"

const styles = { 
    cards:{
        width: '80%',
        margin:'auto',
        marginTop:'10px'
    }
}
function RegistroNuevoProducto(){
    const history = useHistory();
    const [form,setForm] = useState({name:'',price:'',description:'',photo_url:''});

    const [spinner,setSpinner] = useState(false)

    const handleSubmit = (e)=>{
        setSpinner(true);
        console.log("HandleSubmit",form)
            firebase.db.collection("productos").add({
                name:form.name,
                price:form.price,
                description:form.description,
                photo_url:form.photo_url,
            })
            .then(data=>{
                console.log("Data database: ",data)
                setSpinner(false);
                history.push("/")
            })
            .catch(error=>{
                console.log("error database: ", error)
                setSpinner(false);
            })
        e.preventDefault();
    }

    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setForm({
            ...form,
            [name]:value
        })
    }

    return(
        <>
        <Card style={styles.cards}>
            <Card.Body>
                <Card.Title>Registrar Nuevo Producto</Card.Title>
                <Form onSubmit={handleSubmit}>

                    <Input 
                        controlId="formBasicName" label="Nombre" type="text" placeholder="Ingrese nombre de producto" 
                        name="name" value={form.name} change={handleChange}
                    />

                    <Input 
                        controlId="formBasicPrice" label="Precio" type="number" placeholder="Ingrese el precio" 
                        name="price" value={form.price} change={handleChange}
                    />

                    <Input 
                        controlId="formBasicEmail" label="Descripción" type="text" placeholder="Ingrese la descripción" 
                        name="description" value={form.description} change={handleChange}
                    />

                    <Input 
                        controlId="formBasicPhotoUrl" label="photo_url" type="text" placeholder="Ingrese la URL de la imagen" 
                        name="photo_url" value={form.photo_url} change={handleChange}
                    />

                    <ButtonWithLoading text="Registrar Producto" loading={spinner} />
                </Form>
            </Card.Body>
        </Card>
        
        
        </>
    )
}
export default RegistroNuevoProducto;