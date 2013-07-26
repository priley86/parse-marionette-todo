Marionette-Parse Todo MVC
=========

A simple Marionette Todo application using Parse for storage and user account management.

  - Backbone-Marionette views, controllers, layouts, router, and application
  - Parse models and collections
  - Parse login view
  - Parse ACLs for user security of model objects
  - Require JS for asynchronous module definition, and RequireJs-TPL for template loading
  - Twitter Bootstrap styling
  




Installation
--------------
Before running locally, make sure to set your Parse application key and Parse javascript key in Parse.js:

    define(['jquery'], function ($) {
     "use strict";
      Parse.$ = $;
      Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");
      
      return Parse;
     }
    );

If running directly from the file system (rather than hosting on a web server), RequireJs-TPL may give a "Cross origin requests are only supported for HTTP" error.  To resolve this, launch Chrome with the following args:

    C:\ ... \Application\chrome.exe--allow-file-access-from-files

On OSX or *nix run:

    google-chrome  --allow-file-access-from-files

Demo
-
http://marionette-todo.parseapp.com/

License
-

MIT: http://opensource.org/licenses/MIT
  

    