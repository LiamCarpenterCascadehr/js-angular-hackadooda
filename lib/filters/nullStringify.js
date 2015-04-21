'use strict';

module.exports = function () {
    return function (text) {
        return text === '' ? 'N/A' : text;
    };
};
