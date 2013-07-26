/*global define*/

define(['marionette', 'tpl!../templates/header.html'], function (Marionette, header) {
  "use strict";

  return Marionette.ItemView.extend({
    template : header,
    ui : {
      input : '#new-todo'
    },
    events : {
      'keypress #new-todo':		'onInputKeypress'
    },
    onInputKeypress : function(evt) {
      var ENTER_KEY = 13;
      var todoText = this.ui.input.val().trim();

      if (evt.which === ENTER_KEY && todoText) {
        this.collection.create({
            title: todoText,
            user: Parse.User.current(),
            ACL: new Parse.ACL(Parse.User.current())
        });
        this.ui.input.val('');
      }
    }
  });

});
