const router = require('express').Router();
const knex = require('../knex/knex');
const {param, body, validationResult} = require('express-validator');

// PUT Update task
router.put('/:id', [
    param('id', 'Expected positive integer for param : id').isInt({min: 0}),
    body('title', 'Expected string for key : title').isString(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {id} = req.params;
    const taskUpdated = {
        title: req.body.title,
    };

    let task;

    try {
        task = await knex('task').where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    if (!task.length) {
        return res.sendStatus(404);
    }

    try {
        await knex('task').update(taskUpdated).where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    return res.sendStatus(200);
});

// PUT Check task
router.put('/:id/check', [
    param('id', 'Expected positive integer for param : id').isInt({min: 0}),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {id} = req.params;

    let task;

    try {
        task = await knex('task').where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    if (!task.length) {
        return res.sendStatus(404);
    }

    try {
        await knex('task').update({done: ! task.done}).where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    return res.sendStatus(200);
});

// DELETE task
router.delete('/:id', [
    param('id', 'Expected positive integer for param : id').isInt({min: 0}),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {id} = req.params;

    let task;

    try {
        task = await knex('task').where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    if (!task.length) {
        return res.sendStatus(404);
    }

    try {
        await knex('task').delete().where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    return res.sendStatus(200);
});

module.exports = router;
