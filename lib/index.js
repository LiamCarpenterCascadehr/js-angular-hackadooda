var app = require('angular').module('todoApp', []);

// CONTROLLERS
// Hook up the main todo controller to angular
// $scope and TodoService are dependencies that get injected into the todo controller
app.controller('TodoController', ['$scope', 'TodoService', require('./controllers/todo')]);

// SERVICE
// Services are used for sharing data services across controllers e.g. APIs and DB
app.service('TodoService', [require('./services/todo')]);

// DIRECTIVE
// Directives are effectively controls that have their own encapsulated behaviour
app.directive('todoItem', [require('./directives/todoItem')]);

// FILTERS
// Filters are small modules of code that change the display behaviour on the view
app.filter('nullStringify', [require('./filters/nullStringify')]);
