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

    return res.status(200).json({lists: lists});
});

// GET by ID
router.get('/:id', [param('id').isInt({min: 0})], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {id} = req.params;

    let item;

    try {
        item = await knex('list').where({id: id});
    } catch (e) {
        return res.status(500).json(e);
    }

    if (!item.length) {
        return res.sendStatus(404);
    }

    return res.status(200).json(item[0]);
});

// POST Create list
router.post('/',
    [
        body('title').isString(),
    ],
    async (req, res) => {
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
module.exports = router;
