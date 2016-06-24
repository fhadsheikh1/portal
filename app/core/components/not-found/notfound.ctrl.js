'use strict';

angular
    .module('portal')
    .controller('NotFoundCtrl', notFoundCtrl);

    function notFoundCtrl(layout){

        var vm = this;

        // Stick footer to bottom of screen
        layout.stickyFooter(459);
    }
