
define(['Parse'], function (Parse) {
    'use strict';

    return Parse.Object.extend({
        className: "Todo",
        defaults: {
            title: '',
            completed: false,
            created: 0
        },
        initialize: function () {
            if (!this.get('created')) this.set('created', Date.now());
        },
        toggle: function () {
            return this.set('completed', !this.get('completed'));
        }
    });

});

