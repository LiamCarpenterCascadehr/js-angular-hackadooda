'use strict';

module.exports = function () {
    return {
        restrict: 'E',
        template: '<span>{{item2.text}}</span>',
        scope: { item: '=' },

        // `$scope` is an object that holds the data passed to the directive using the item property
        // `element` is a simple jquery-like object
        // `attribute` is a list of all the standard html attribute attached to the todoItem directive
        link: function ($scope, element, attribute) {
            $scope.item.text += '- this is in a directive!';
        }
    };
};
