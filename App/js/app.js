/*global $*/
define(
  ['jquery', 'Parse', 'marionette', 'vent',
      './pages/home/collections/TodoList',
      './pages/home/views/Header',
      './pages/home/views/TodoListCompositeView',
      './pages/home/views/Footer',
        './widgets/auth/bootstrap'],
  function ($, Parse, marionette, vent, TodoList, Header, TodoListCompositeView, Footer, authBootstrap) {
    "use strict";

    var app = new marionette.Application();

    app.addRegions({
      regionAuth: '#auth',
      regionMain   : '#appmain'
    });

    app.on('initialize:after', function () {
        // Setup click handlers for all links with role=nav-main so they are handled by the app's router.
        $(document).on('click', 'a[role=nav-main]', function (e) {
            e.preventDefault();
            app.router.navigate($(this).attr('href'), { trigger: true });
        });
    });

    //bootstrap static page widgets
    app.on('initialize:after', function () {
        authBootstrap(app.regionAuth);
    });


    return app;
  }
);
