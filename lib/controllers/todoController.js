'use strict';

// `module.exports` makes the function public so it can be used elsewhere.
// `$scope` is an object that angular uses to bind data to the page.
module.exports = function ($scope, TodoService) {
    // Our in-memory list of todos
    $scope.todos = TodoService.getTodos();

    $scope.isValid = false;

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.onChange = function () {
      $scope.isValid = ($scope.formTodoText.length > 0)
    };

     $scope.clearIndividual = function (i) {
        console.log(i)
        $scope.todos.splice(i, 1);  
    };

    $scope.clearCompleted = function () {

        // Maybe this needs moving into the TodoService?..
        $scope.todos = $scope.todos.filter(function (todo) {
            return !todo.done;
        });
    };

   $scope.addTodo = function () {

        // Maybe this needs moving into the TodoService?..
        // Add the newly typed todo to the in-memory array
        var newTodo = {
            text: $scope.formTodoText,
            done: false

        };
        $scope.todos.push(newTodo);

        // reset the form
        $scope.formTodoText = '';
        $scope.isValid = false;
    };
    
    $scope.queryText = "";
};
