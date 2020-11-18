import instance from '../Config/axios'

// el service tiene todos los request que tengan que ver con todos los productos 
export function getProductos(){
    return instance.get("/items")
}

export function crearProductos(data){
    return instance.post("/items",data)
}