const router = require('express').Router();
const knex = require('../knex/knex');
const {param, body, validationResult} = require('express-validator');

// GET all
router.get('/', async (req, res) => {
    let lists;

    try {
        lists = await knex('list').select();
    } catch (e) {
        return res.status(500).json(e);
    }

    return res.status(200).json(lists);
});

// GET by ID
router.get('/:id', [param('id').isInt({min: 0})], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {id} = req.params;

    let list;

    try {
        list = await knex('list').where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    if (!list.length) {
        return res.sendStatus(404);
    }

    return res.status(200).json(list[0]);
});

// POST Create list
router.post('/', [body('title').isString()], async (req, res) => {
    const list = {
        title: req.body.title,
    };

    try {
        await knex('list').insert(list);
    } catch (e) {
        return res.status(500).json(e);
    }

    return res.sendStatus(201);
});

// PUT Update list
router.put('/:id', [
    param('id').isInt({min: 0}),
    body('title').isString(),
], async (req, res) => {
    const {id} = req.params;
    const listUpdated = {
        title: req.body.title,
    };

    let list;

    try {
        list = await knex('list').where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    if (!list.length) {
        return res.sendStatus(404);
    }

    try {
        await knex('list').update(listUpdated).where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    return res.sendStatus(200);
});

module.exports = router;
