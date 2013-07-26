define(['marionette','vent','app', 'Parse'], function (marionette,vent,app,Parse) {
    'use strict';

    return marionette.AppRouter.extend({
        routes: {
            '': 'home',
            'home' : 'home',
            'login': 'login',
            'logout': 'logout',
            '*filter': 'homeSetFilter'
        },

        home: function() {
            this._showPage('home');
        },

        login: function () {
            this._showPage('login');
        },

        logout: function () {
            Parse.User.logOut();
            vent.trigger('user:logout'); //notify all widgets we have logged out

            this._showPage('login');
        },

        homeSetFilter: function(param) {
            vent.trigger('todoList:filter', param.trim() || '');
        },


        _showPage: function (pageName, options) {
            var that = this;

            //make sure we are authenicated, if not go to login
            if (!Parse.User.current())
                pageName = 'login';

            require(['./pages/' + pageName + '/Controller'], function (PageController) {
                if (that.currentPageController) {
                    that.currentPageController.close();
                    that.currentPageController = null;
                }

                that.currentPageController = new PageController(options);

                that.currentPageController.show(app.regionMain)
                    .fail(function () {
                        //display the not found page
                        that.navigate('/not-found', { trigger: true, replace: true });
                    });

            });
        }

    });

    return Router;
});