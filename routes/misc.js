const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');


/* ADD demo data. */
router.get('/demo', function (req, res, next) {
    let arrTodo = [
        'learn an HTML',
        'learn an CSS',
        'learn an JS',
        'learn an TYPESCRIPT',
        'learn an ANGULAR 2',
        'learn an COMPONENTS',
        'learn an SERVICES',
        'learn an MODULES',
        'learn an DIRECTIVES',
        'learn an PIPES',
        'learn an HTTP',
        'learn an OBSERVABLES',
        'Get to know Vasco',
    ];
    arrTodo.forEach((todo) => {
        Todo.create({"title": todo}, (err, result) => {
            if (err) return next(err);
            console.log(result);
        })
    })
    res.send(200, 'added demo data');
});

router.get('/clearall', function (req, res, next) {
    Todo.remove({}, (err) => {
        if (err) return next(err);
        res.send('cleared db');
    })
});


module.exports = router;







//const generate = require('fake-todos');
// const items = generate(1000);