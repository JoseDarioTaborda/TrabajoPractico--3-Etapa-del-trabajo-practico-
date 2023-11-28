import { Router } from "express"
import connection from "../connection.js"
const router = Router();

router.post('/add'), (req, res)=>{
    const items = parseInt(req.body.items)
    const total = parseFloat(req.body.total)
    const id_vendedor = parseInt(req.body.id_vendedor)
    try { 
        const query = `INSERT INTO ventas (id, id_vendedor, id_producto, total) VALUES(?,?,?,?)`
        connection.query(query,[id, id_vendedor, id_producto, total], (error, results)=>{
        if(error){
        console.log('Error al ejecutar la query', error)
        res.send(500).json('Error al ejecutar la consulta')
        }else {
        res.status(200).json(results) 
        }
     })
        } catch (error){ 
            res.send(500).json('Error al ejecutar la consulta') 
    }
    }

     
export default router