const express = require('express');
const router = express.Router();

const Blog = require('../Models/blog-model')

router.get('/', async (req, res, next) => {
    const result = await Blog.find({}, { __v: 0 });
    res.json({
        success: true,
        message: 'All data fetch success',
        data: result
    })
})

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const result = await Blog.findById(id);
        res.send(result)

    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res, next) => {
    const blog = new Blog(req.body);
    const result = await blog.save();
    res.status(201).json({ success: true, message: 'Created Success', data: result })
})

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    const options = { new: true };
    try {
        const result = await Blog.findByIdAndUpdate(id, updates, options)
        res.send(result)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await Blog.findByIdAndDelete(id)
        res.send(result);

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;


