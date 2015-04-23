(function() {
    'use strict';

    angular
        .module('gpApp.playlist')
        .controller('Schedule', Schedule);

    Schedule.$inject = ['dataservice', '$log', '$q'];
    function Schedule(dataservice, $log, $q) {
        var vm = this;
        vm.schedule = [];

        activate();

        ////////////

        function activate() {
            return dataservice.schedule()
            //return dataservice.test()
            .then(function(response) {
                vm.schedule = response;
                return vm.schedule;
            });
        }

        //activate();

        ////////////

/*
        function activate() {
            return getSchedule.then(function() {
                $log.info('Activated Schedule view...');
            });
        }

        function getSchedule() {
            return dataservice.getSchedule().then(function(response) {
                vm.schedule = response;
                return vm.schedule;
            })
        }
*/

    }
})();