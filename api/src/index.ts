import mongoose from "mongoose";
import app from "./app";

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/TODO4A");
        console.log("Conexion exitosa a la DB");
        app.listen(4000,()=>{
            console.log("Aplicacion iniciada con exito")
        })
    } catch (error) {
        console.log("Algo salio mal", error)   
    }
}
main()