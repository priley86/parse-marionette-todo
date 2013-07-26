/*global define, $*/

define(['jquery','underscore','marionette', 'vent', 'tpl!../templates/footer.html', './ActiveCount'
],
function ($, _, Marionette, vent, footer, ActiveCount) {
  "use strict";

  return Marionette.Layout.extend({
    template: footer,
    regions : {
      count : '#todo-count strong'
    },
    ui : {
      filters : '#filters a'
    },
    events : {
      'click #clear-completed' : 'onClearClick'
    },
    initialize: function () {
        var that = this;
        vent.on('todoList:filter', function (filter) { that.updateFilterSelection(filter); });
    },
    onRender : function() {
      this.count.show(new ActiveCount({collection : this.collection}));
    },
    updateFilterSelection : function(filter) {
      this.ui.filters.removeClass('selected').filter('[href="#/' + filter + '"]').addClass('selected');
    },
    onClearClick: function () {
        vent.trigger('todoList:clear:completed');
    }
  });

});
