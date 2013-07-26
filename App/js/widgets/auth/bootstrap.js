define([
    './views/LoginLogoutControlView'
], function (
    LoginLogoutControlView
) {
    'use strict';

    return function (region) {
        region.show(new LoginLogoutControlView());
    };
});