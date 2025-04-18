const db = require('../models');
let Book = db.Book;

class BookController{
    async GetAllBook(req,res){
        try{
            let result = await Book.findAll({});
            res.json(result);
        }catch(error){
            res.status(500);
        }
    }
    async AddBook(req, res) {
        try {
            let bok = {
                Book_Name: req.body.Book_Name,
                Book_Data: req.body.Book_Data,
                Book_Author: req.body.Book_Author
            }
            let result = await Book.create(bok);
            res.status(200).send(result);
        } catch (error) {
            res.status(500);
        }
    }
    async FindBook(req,res){
        try{
            const id = req.params.id;
            let result = await Book.findOne({where: {id : id}});
            res.json(result);
        }catch(error){
            res.status(500);
        }
    }
    async UpdateBook(req, res){
        try{
            const id = req.params.id;
            let result = await Book.update(req.body, {where: {id : id}})
            res.status(200).json(req.body);
        }catch(error){
            res.status(500);
        }
    }
    async DeletBook(req,res){
        try{
            const id = req.params.id;
            let result = Book.destroy({where : {id : id}});
            res.status(200).send("Удачно!");
        }catch(error){
            res.status(500);
        }
    }
}

module.exports = new BookController();