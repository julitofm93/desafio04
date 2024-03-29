const express = require ('express')
const router = express.Router();
const Contenedor = require('../classes/contenedor')
const contenedor = new Contenedor();


//GET - Devuelve todos los productos
router.get('/',(req,res)=>{
    contenedor.getAll().then(result=>{
        res.send(result)
    })
})

//GET - Devuelve un producto según su ID
router.get('/:pid',(req,res)=>{
    let id = req.params.pid;
    id = parseInt(id)
    contenedor.getById(id).then(result=>{
        res.send(result);
    })
})

//POST - Recibe y agrega un producto, y lo devuelve con su ID asignado
router.post('/',(req,res)=>{
    let event = req.body;
    console.log(event);
    contenedor.save(event).then(result=>{
        res.send(result);
    })
})

//PUT - Recibe y actualiza un producto según si ID
router.put('/:pid',(req,res)=>{
    let body = req.body;
    let id = parseInt(req.params.pid)
    contenedor.updateProducto(id,body).then(result=>{
        res.send(result)
    })
})

//DELETE - Elimina un producto según su ID
router.delete('/:pid',(req,res)=>{
    let id = parseInt(req.params.pid);
    contenedor.deleteById(id).then(result=>{
        res.send(result);
    })
})

module.exports = router;