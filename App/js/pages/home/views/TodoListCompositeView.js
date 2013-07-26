/*global define*/

define(['marionette', 'tpl!../templates/todoListCompositeView.html', 'vent', './TodoItemView', '../collections/TodoList'],
function (Marionette, todosCompositeView, vent, ItemView, TodoList) {
  "use strict";

  return Marionette.CompositeView.extend({
    template : todosCompositeView,
    itemView : ItemView,
    itemViewContainer : '#todo-list',

    ui : {
      toggle : '#toggle-all'
    },

    events : {
      'click #toggle-all' : 'onToggleAllClick'
    },

    initialize: function () {
      this.listenTo(this.collection, 'all', this.updateToggleCheckbox, this);
    },

    onRender : function() {
      this.updateToggleCheckbox();
    },

    updateToggleCheckbox : function() {
      function reduceCompleted(left, right) { return left && right.get('completed'); }
      var allCompleted = this.collection.reduce(reduceCompleted,true);
      this.ui.toggle.prop('checked', allCompleted);
    },

    onToggleAllClick : function(evt) {
      var isChecked = evt.currentTarget.checked;
      this.collection.each(function(todo){
        todo.save({'completed': isChecked});
      });
    }
  });
});

