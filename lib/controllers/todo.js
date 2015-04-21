'use strict';

// `module.exports` makes the function public so it can be used elsewhere.
// `$scope` is an object that angular uses to bind data to the page.
module.exports = function ($scope, TodoService) {

    // Our in-memory list of todos
    $scope.todos = TodoService.getTodos();

    $scope.getTotalTodos = function () {
        return 0;
    };

    $scope.clearCompleted = function () {

        // Maybe this needs moving into the TodoService?..
        $scope.todos = $scope.todos.filter(function (todo) {
            return !todo.done;
        });
    };

    $scope.addTodo = function () {

        // Maybe this needs moving into the TodoService?..
        // add the newly typed todo to the in-memory array
        $scope.todos.push({
            text: $scope.formTodoText,
            done: false
        });

        // reset the form
        $scope.formTodoText = '';
    };
};
