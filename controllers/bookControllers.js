const { json } = require("express");
const Book = require("../models/Books");

exports.insertBook = async ( req,res )=>{
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({error : err.message});
    }
};

exports.getBook = async ( req,res )=>{
    try {
        const book = await Book.find();
        console.log(json(book));
        res.status(201).json(book);  
    } catch (err) {
        res.status(400).json({error : err.message});
    }
    
};

exports.getBookByID = async ( req,res )=>{
    try {
        const book = await Book.findById(req.params.id);
        res.status(201).json(book);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
    
};

exports.updateBook = async ( req,res )=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if (!book) return res.status(404).json({error:"Book Not Found"});
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({error:err.message});
    }
};

exports.deleteBook = async ( req,res )=>{
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"book Deleted"});
    } catch (error) {
        res.status(400).json({error:err.message});
    }
};
