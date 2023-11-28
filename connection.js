import mysql from 'mysql'
const connection = mysql.createConnection(
{
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dariook'
}    
)
connection.connect((error)=>{
    if(error){ 
       console.log('Error al conectar la base de datos')
       return 
    }
    console.log('Conectado a la base de datos')
})

export default connection