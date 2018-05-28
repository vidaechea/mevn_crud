const express = require('express');
const router = express.Router();

const item = require('../models/item');

//get data /item
router.get('/', (req, res) => {
    item.find(function(err,items) {
        if (err){
            throw err;
        } else{
            res.json(items);
        }
    })
});

//get data /item:id
router.get('/:id', (req, res) => {
    item.findById(req.params.id, function(err,item) {
        if (err){
            throw err;
        } else{
            res.json(item);
        }
    })
});

//add data /item - POST
router.post('/', (req,res) => {
   const itemObject = new item(req.body);
    itemObject.save()
       .then(itemObject => {
           res.status(200).json({item: 'Item insert succesfully!'});
       })
       .catch(err => {
           res.status(400).send({item: 'Error !'})
       });
});

//update data /item/:id - PUT
router.put('/:id', (req,res, next) =>{
    item.findById(req.params.id, function(err,item){
        if (!item){
            return next(new Error('Error, item not found!'));
        } else {
            item.name = req.body.name;
            item.price = req.body.price;
            item.save()
                .then(item => {
                    res.json('Item actualizado!')
                })
                .catch(err => {
                    res.status(400).send('Error al actualizar el item');
                })

        }
    })
});

//delete data
router.delete('/:id', (req,res) => {
    item.findByIdAndRemove(req.params.id, function(err, item){
        if (err){
            res.json(err);
        } else {
            res.json('Item eliminado satisfactoriamente');
        }
    });
});

module.exports = router;