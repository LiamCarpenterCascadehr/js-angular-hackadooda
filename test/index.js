'use strict';

var todo   = require('../lib/controllers/todo'),
    assert = require('assert');



describe('todo', function () {

    var todos = [
        {
            text: 'Build an app',
            done: false
        },
        {
            text: 'Test the app',
            done: false
        },
        {
            text: 'Learn AngularJS',
            done: false
        }
    ];

    it('should get the total number of todos', function () {
        // arrange
        var $scope = { },
            result;
        todo($scope);
        $scope.todos = todos;

        // act
        result = $scope.getTotalTodos();

        // assert
        assert.equal(result, 3);
    });


    it('should add a todo to the list', function () {

        // arrange
        var $scope = { },
            result;
        todo($scope);
        $scope.todos = todos;
        $scope.formTodoText = 'Dude!, You need to do this task.';

        // act
        $scope.addTodo();

        // assert
        assert.equal($scope.todos.length, 4);
    });

});
