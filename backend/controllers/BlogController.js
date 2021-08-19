const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');
const { error } = require('console');

const Blog = require("../models/Blog");
const { errorHandler } = require("../helpers/dberrorHandler");

exports.create = (req, res)=>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files)=>{
        if(err){
            return res.status(400).json({
                error: 'Imagen no cargada'
            });
        }
        
        let blog = new Blog(fields);
        /* PHOTO */
        if(files.photo){
                
                if(files.photo.size>1000000){
                    return res.status(400).json({
                        error: 'Imagen muy pesada máximo 1MB'
                    });
                }

                blog.photo.data = fs.readFileSync(files.photo.path);
                blog.photo.contentType = files.photo.type;
        }

        blog.save((err, result)=>{
            if(err){
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            res.json(result);
        });
    });
}

exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name';

    Blog.find().select('-photo')
        .populate('blog')
        .sort([[sortBy, order]])
        .exec((err, blogs) => {
            if (err) {
                return res.status(400).json({
                    error: 'Blog no encontrada'
                });
            }

            res.json(blogs);
        });
}

exports.remove = (req, res) => {
    let blog = req.blog;
    brand.remove((err, deleteBlog) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(error)
            });
        }

        res.json(blog);
    });
}

exports.blogId = (req, res, next) => {
    Blog.findById(req.params.blogId)
        .populate("blog")
        .exec((err, blog) => {
            if (err || !blog) {
                return res.status(400).json({
                    error: errorHandler(error)
                });
            }

            req.blog = blog;
            next();
        });
}

exports.photo = (req, res, next) => {
    if (req.blog.photo.data) {
        res.set('Content-Type', req.blog.photo.contentType);
        return res.send(req.blog.photo.data)
    }
    next();
}