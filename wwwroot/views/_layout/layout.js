/// <reference path="../../../typings/tsd.d.ts"/>
var app;
(function (app) {
    var View;
    (function (View) {
        var LayoutCtrl = (function () {
            function LayoutCtrl($scope, $window, $rootScope) {
                this.$scope = $scope;
                this.$window = $window;
                this.$rootScope = $rootScope;
            }
            LayoutCtrl.$inject = ['$scope', '$window', '$rootScope'];
            return LayoutCtrl;
        })();
        angular.module('Fieldsmarts').directive('layout', [layout]);
        function layout() {
            return {
                templateUrl: 'views/_layout/layout.html',
                controller: [LayoutCtrl],
                controllerAs: 'vm'
            };
        }
    })(View = app.View || (app.View = {}));
})(app || (app = {}));
//# sourceMappingURL=layout.js.map