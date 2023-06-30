const express = require('express');
const User = require('../Models/user-model');
const router = express.Router();

router.get('/:id', async (req, res, next) => {
    const result = await User.find({ _id: req.params.id }, { __v: 0 });
    res.json({
        success: true,
        message: 'All data fetch success',
        data: result
    })
})

router.post('/', async (req, res, next) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).json({ success: true, message: 'Created Success', data: result })
    } catch (error) {
        res.json({ error: error.message })
    }

})

router.patch('/:id', async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;
    const options = { new: true };
    try {
        const result = await User.findByIdAndUpdate(id, updates, options)
        res.send(result)
    } catch (error) {
        res.json({ error: error.message })
    }

})



module.exports = router;