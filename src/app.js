const express = require('express');
const Contenedor = require('./classes/contenedor');
const app = express();
const cors = require('cors')
const server = app.listen(8080,()=>{
    console.log("server listening on port 8080")
})

const contenedor = new Contenedor();
const productosRouter = require('./routes/productos')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api/productos',productosRouter);
