import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

const styles={
    spinner:{
        marginRight:"5px"
    }
}

function ButtonWithLoading(props){
    return(
        <Button variant="primary" type={props.type?props.type:"submit"}>
            {
                props.loading &&
                <Spinner animation="border" variant="light" style={styles.spinner} />
            }
            {props.text || "Ingresar"}
        </Button>
    )
}

export default ButtonWithLoading;