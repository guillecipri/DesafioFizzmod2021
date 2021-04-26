import express from 'express';
import random from './controllers/random.js';
import getInfo from './controllers/info.js';
import operaciones from './controllers/operaciones.js';


const app = express()

//---- METODOS DE ENVIO DE INFORMACION EN POST Y PUT-----
app.use(express.urlencoded({extended: true}))
app.use(express.json())


/*---------------RECURSOS ESTÁTICOS----------------*/
app.use(express.static('public'))


/*---------------RUTAS----------------*/
app.get('/', (req, res) => {
    // mostrar hora actual
    let hora = new Date().getHours();
    let minutos = new Date().getMinutes();
    
    function saludo() {
        if (hora>6 && hora<13) {
            return (`<h1>Es la hora ${hora}:${minutos} - Buenos días!</h1>`)
        } else if (hora>13 && hora<19) {
            return (`<h1>Es la hora ${hora}:${minutos} - Buenas tardes!</h1>`)
        } else {
            return (`<h1>Es la hora ${hora}:${minutos} - Buenas noches!</h1>`)
        }
    }
    res.send(saludo())
})

app.get('/random', (req, res) => {
    // calculo de 10 mil nros aleatorio del 1 al 20
    res.send(random())
})

app.get('/info', async (req, res) => {
    // leer package.json y devolver objetO
    res.send(await getInfo())
})

app.get('/operaciones', (req, res) => { 
    // calculos por query-params
    res.send(operaciones(req.query))
})





/*---------------CONFIGURACION DEL PUERTO----------------*/
app.set('PUERTO', 3000)
const PORT = process.env.PORT || app.get('PUERTO')

const server =app.listen(PORT, () => {
    console.log(`Servidor express escuchando en puerto ${server.address().port}`);
})
server.on('error', error => console.log(`Error en servidor: ${error}`))