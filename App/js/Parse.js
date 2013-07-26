/*global $*/
define(
  ['jquery'
], function ($) {
      "use strict";

    Parse.$ = $;
    Parse.initialize("YOUR_APP_ID", "YOUR_JAVASCRIPT_KEY");

      return Parse;
  }
);
