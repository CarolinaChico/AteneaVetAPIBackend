
const { PrismaClient } = require ('@prisma/client');

class AdminEspecie{
    constructor(){
        this.prisma = new PrismaClient()
    }
    async crearEspecie(req,res){
        const datos=req.body;
        console.log("Estos son los datos"+datos);
        const especie= await this.prisma.especie.create(
            {
                    data:datos
            }
        );
        res.json(especie);
    }
    async listarEspecie(req,res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies); 
    }
}
module.exports=AdminEspecie;