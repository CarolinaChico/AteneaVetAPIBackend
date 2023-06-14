const express=require("express");
const AdminEspecie=require("./AdminEspecie")

class AteneaVetAPI{
    constructor(){
        this.puerto=3002;

        this.app=express();
        this.adminEspecie = new AdminEspecie();

        this.app.use(this.configurarCORS);
        this.app.use(express.json());

        this.app.post("*/crear_Especie",(req,res)=>{this.adminEspecie.crearEspecie(req,res); });
        this.app.get("*/listar_especie",(req,res)=>{this.adminEspecie.listarEspecie(req,res); });
        
    }

    configurarCORS(req, res, next){
        res.header("Acess-Control-Allow-Origin","*");
        res.header("Acess-Control-Allow-Methods","GET,POST");
        res.header("Acess-Control-Allow-Header","Content-Type");
    }
    iniciarServidor(){
        this.app.listen(this.puerto, ()=>{
            console.log(`Servidor ejecutandose en el puerto ${this.puerto}`);
        });
    }

}

const ateneaVetAPI = new AteneaVetAPI();
ateneaVetAPI.iniciarServidor();