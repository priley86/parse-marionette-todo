define(['Parse', '../models/Todo'], function (Parse, Todo) {
    'use strict';

    function isCompleted(todo) {
        return todo.get('completed');
    }

    return Parse.Collection.extend({
        model: Todo,
        getCompleted: function () {
            return this.filter(isCompleted);
        },
        getActive: function () {
            return this.reject(isCompleted);
        },
        comparator: function (todo) {
            return todo.get('created');
        }
    });

});
