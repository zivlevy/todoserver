/**
 * Created by zivlevy on 08/01/2017.
 */
const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', function (req, res, next) {
    Todo.find(function (err, todos) {
            if (err) return next(err);
            res.json(todos);
        });
});

/* POST /todos */
router.post('/', function (req, res, next) {
    Todo.create(req.body, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* GET /todos/id */
router.get('/:id', function (req, res, next) {
    Todo.findById(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* PUT /todos/:id */
router.put('/:id', function (req, res, next) {
    Todo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

/* DELETE /todos/:id */
router.delete('/:id', function (req, res, next) {
    Todo.findByIdAndRemove(req.params.id, function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

module.exports = router;