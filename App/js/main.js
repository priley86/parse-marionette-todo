require.config({
  paths : {
    underscore: '../../Scripts/underscore',
    backbone: '../../Scripts/backbone',
    marionette: '../../Scripts/backbone.marionette',
    jquery: '../../Scripts/jquery-1.9.1.min',
    marionette: '../../Scripts/backbone.marionette',
    'backbone.babysitter': '../../Scripts/backbone.babysitter',
    'backbone.wreqr': '../../Scripts/backbone.wreqr',
    tpl: 'lib/tpl',
    text: 'lib/text',
    bootstrap: '../../Scripts/bootstrap'
  },
  shim : {
    'lib/backbone-localStorage' : ['backbone'],
    underscore: { exports: '_' },
    jquery: {exports: '$'},
    backbone: { exports: 'Backbone', deps: ['jquery', 'underscore'] },
    marionette: { exports: 'Backbone.Marionette', deps: ['backbone'] },
    bootstrap : { deps: ['jquery'] },
  },
  deps : ['jquery','underscore']
});


define([
    'jquery',
    'Parse',
    'app',
    'Router',
    
], function (
    $,
    Parse,
    app,
    Router
) {
    'use strict';

    $(function () {
        app.router = new Router();
        app.start();
        Backbone.history.start();
    });
});