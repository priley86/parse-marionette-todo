/*global define, $*/

define(['marionette', 'vent', 'tpl!./templates/layout.html', './views/Header', './views/Footer', './views/ActiveCount',
    './views/TodoListCompositeView', './collections/TodoList', './models/Todo', 'Parse'
],
function (Marionette, vent, layoutTemplate, HeaderView, FooterView, ActiveCountView, TodoListCompositeView, TodoList, Todo, Parse) {
    "use strict";

    return Marionette.Layout.extend({
        template: layoutTemplate,
        regions: {
            headerRegion: '#homeheader',
            mainRegion: '#homemain',
            footerRegion: '#homefooter',
            countRegion: '#todo-count strong'
        },
        initialize: function () {
            var that = this;
            this.todoList = new TodoList();
            this.listenTo(this.todoList, 'all', this.showHide);

            vent.on('todoList:filter', function (filter) {
                filter = filter || 'all';
                $('#appmain').attr('class', 'filter-' + filter);
            });

            vent.on('todoList:clear:completed', function () {
                function destroy(todo) { todo.destroy(); }

                that.todoList.getCompleted().forEach(destroy);
            });
        },
        onShow: function () {
            

            //instantiate our collection instance for each of our views
            var viewOptions = {
                collection : this.todoList
            };

            this.headerRegion.show(new HeaderView(viewOptions));
            this.mainRegion.show(new TodoListCompositeView(viewOptions));
            this.footerRegion.show(new FooterView(viewOptions));
            
            // Setup the query for the collection to look for todos from the current user
            this.todoList.query = new Parse.Query(Todo);
            this.todoList.query.equalTo("user", Parse.User.current());

            // Fetch all the todo items for this user
            this.todoList.fetch();
        },
        showHide : function () {
            if (this.todoList.length === 0) {
                this.mainRegion.$el.hide();
                this.footerRegion.$el.hide();
            } else {
                this.mainRegion.$el.show();
                this.footerRegion.$el.show();
            }
        }
        
    });

});
