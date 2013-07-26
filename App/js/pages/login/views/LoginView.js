define([
    'jquery',
    'marionette',
    'Parse',
    'app',
    'vent',
    'tpl!../templates/login.html',
    ], function (
        $,
    Marionette,
    Parse,
    app,
    vent,
    loginTemplate
) {

    'use strict';

    return Marionette.ItemView.extend({
        template: loginTemplate,

        events: {
          "submit form.login-form": "logIn",
          "submit form.signup-form": "signUp"
        },
    
        initialize: function() {
            this.listenTo(this, "logIn", this.logIn);
            this.listenTo(this, "signUp", this.signUp);
        },

        logIn: function(e) {
            var self = this;
            var username = this.$("#login-username").val();
            var password = this.$("#login-password").val();
      
            Parse.User.logIn(username, password, {
                success: function (user) {
                    self.loginSuccess(user);
                },
                error: function(user, error) {
                    self.$(".login-form .error").html("Invalid username or password. Please try again.").show();
                    this.$(".login-form button").removeAttr("disabled");
                }
            });

            this.$(".login-form button").attr("disabled", "disabled");

            return false;
        },

        signUp: function(e) {
            var self = this;
            var username = this.$("#signup-username").val();
            var password = this.$("#signup-password").val();
      
            Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
                success: function (user) {
                    self.loginSuccess(user);
                },
                error: function(user, error) {
                    self.$(".signup-form .error").html(error.message).show();
                    this.$(".signup-form button").removeAttr("disabled");
                }
            });

            this.$(".signup-form button").attr("disabled", "disabled");

            return false;
        },

        loginSuccess: function (user) {
            vent.trigger('user:login'); //notify all widgets we have logged in
            app.router.navigate('home', { trigger: true });
        }

    });

});
