'use strict';
var localStorageWrapper = require('../helpers/localStorage');

module.exports = function (storage) {
    return function () {
        var storageWrapper = localStorageWrapper(storage);
        return {
            getTodos: function () {
                //// Get the data from wherever the hell you want.
                // var todos = storageWrapper.getItem('todos');
                // todos = todos === undefined ? [] : todos;
                // return todos;
                return [];
            },
            addTodo: function (todo) {
                // Add the todo to local storage here
                return todo;
            }
        };
    };
};
