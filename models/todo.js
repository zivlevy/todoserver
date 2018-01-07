/**
 * Created by zivlevy on 11/01/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const  ObjectId = Schema.ObjectId;

const TodosSchema = new mongoose.Schema({
    id: ObjectId,
    title: {type: String, index: true},
    completed: Boolean,
    date: Date
});

module.exports = mongoose.model('Todo', TodosSchema);