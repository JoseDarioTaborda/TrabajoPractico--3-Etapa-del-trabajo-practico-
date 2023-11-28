import express from 'express';
import connection from "../connection.js";



import productosRouter from './RUTAS/productos.routes.js'
import vendedoresRouter from './RUTAS/vendedores.routes.js'
import ventasRouter from './RUTAS/ventas.routes.js'
const app = express();

const port = 3001

app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.get('/', (req, res)=>{

    const query = `SELECT * FROM users`

    connection.query(query,(error, results)=>{
        if(error){
            console.log('Error al ejecutar la query',error)
            res.status(500).send('Error al ejecutar la query')        
        }else{ 
            res.status(200).json(results)
        }
    })
})

app.use('/productos', productosRouter)
app.use('/vendedores', vendedoresRouter)
app.use('/ventas', ventasRouter)