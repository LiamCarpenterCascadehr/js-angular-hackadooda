'use strict';
/*
    Will get and set data into local storage and session storage.

    Storage works by string key string value pairs. By default values will be stringified into storage
    and parsed back into objects when reading.
    Disabling parsing when setting a value but enabling it when reading the same value will throw an error as
    its stored value will be [object object].

    The 'storage' parameter can either be localStorage or sessionStorage depending on the use case.
    LocalStorage will persist when window/tab is closed, SessionStorage will be deleted when window/tab is closed.
*/
module.exports = function (storage) {
    return {
        setItem: function (key, val, noParse) {
            if (noParse !== true) {
                val = JSON.stringify(val);
            }
            storage.setItem(key, val);
        },
        getItem: function (key, noParse) {
            var val = storage.getItem(key);
            if (val === 'undefined' || val === undefined || val === null) {
                return undefined;
            }
            return noParse === true ? val : JSON.parse(val);
        },
        removeItem: function (key) {
            storage.removeItem(key);
        },
        clear: function () {
            storage.clear();
        }
    };
};
