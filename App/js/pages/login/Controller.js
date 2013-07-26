define([
    'marionette',
    './views/LoginView'
], function (
    Marionette,
    LoginView
) {
    'use strict';

    return Marionette.Controller.extend({
        show: function (region) {
            var that = this, d = new Marionette.$.Deferred();
            region.show(new LoginView({}));
            return d.promise();
        }
    });
});