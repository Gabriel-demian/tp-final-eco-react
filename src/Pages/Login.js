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
function Login(){
    const history = useHistory();
    const [form,setForm] = useState({email:'',password:''});
    const [spinner,setSpinner] = useState(false)

    const handleSubmit = (e)=>{
        setSpinner(true);
        firebase.auth.signInWithEmailAndPassword(form.email,form.password)
        .then(data=>{
            console.log("data",data)
            history.push("/")
            setSpinner(false);
        })
        .catch(err=>{
            console.log("error",err)
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
                <Card.Title>Login</Card.Title>
                <Form onSubmit={handleSubmit}>

                    
                    <Input 
                        controlId="formBasicEmail" label="Email" type="email" placeholder="Ingrese su email" 
                        name="email" value={form.email} change={handleChange}
                    />

                    <Input 
                        controlId="formBasicEmail" label="Contraseña" type="password" placeholder="Ingrese su contraseña" 
                        name="password" value={form.password} change={handleChange}
                    />
                    {/* 
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese su email" name="email" value={form.email} onChange={handleChange}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} onChange={handleChange}/>
                        
                    </Form.Group>
                    */}
                    <ButtonWithLoading text="Ingresar" loading={spinner} />

                </Form>
            </Card.Body>
        </Card>
        
        
        </>
    )
}
export default Login;