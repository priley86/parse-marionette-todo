define([
    'marionette',
    './Layout',
    'app'
], function (
    Marionette,
    Layout,
    app
) {
    'use strict';

    return Marionette.Controller.extend({
        show: function (region) {
            var that = this, d = new Marionette.$.Deferred();
            region.show(new Layout({}));
            return d.promise();
        }
    });
});