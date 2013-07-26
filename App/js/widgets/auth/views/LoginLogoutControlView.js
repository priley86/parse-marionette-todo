define([
    'marionette',
    'Parse',
    'vent',
    'tpl!../templates/login-logout-control.html'
], function (
    Marionette,
    Parse,
    vent,
    loginLogoutControlTemplate
) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'li',
        template: loginLogoutControlTemplate,

        ui: {
            logout: '#logout',
            login: '#login',
            greeting: '#greeting'
        },

        initialize: function () {
            var that = this;

            vent.on('user:logout', function () {
                that.setupControls();
            });

            vent.on('user:login', function () {
                that.setupControls();
            });
        },

        onRender: function () {
            this.setupControls();
        },

        setupControls: function () {
            var isAuthenticated = Parse.User.current();

            if (isAuthenticated)
                this.ui.greeting.text('Welcome, ' + Parse.User.current().get('username') + '  |  ');

            this.ui.greeting.css('display', isAuthenticated ? '' : 'none');
            this.ui.login.css('display', isAuthenticated ? 'none' : '');
            this.ui.logout.css('display', isAuthenticated ? '' : 'none');
        }
    });
});
