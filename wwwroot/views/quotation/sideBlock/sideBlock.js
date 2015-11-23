/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../app/app.ts" />
var App;
(function (App) {
    var View;
    (function (View) {
        var SideBlock = (function () {
            function SideBlock() {
                this.restrict = 'AE';
                this.scope = {
                    id: '@',
                    label: '@',
                    iconClass: '@',
                    sideBlock: '='
                };
                this.controller = 'sideBlock.controller';
                this.controllerAs = 'vm';
                this.templateUrl = 'views/quotation/sideBlock/sideBlock.html';
            }
            SideBlock.instance = function () {
                return new SideBlock;
            };
            return SideBlock;
        })();
        /** -- Controller -- **/
        angular.module('Fieldsmarts').directive('sideBlock', SideBlock.instance);
        var SideBlockCtrl = (function () {
            function SideBlockCtrl($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.id = $scope.id;
                this.sideBlock = $scope.sideBlock;
                this.label = $scope.label;
                this.iconClass = $scope.iconClass;
                var self = this;
                this.$scope.$on('event_toggle_side_block', function (event, data) {
                    if (!data) {
                        return;
                    }
                    if (data.id === self.id) {
                        self.sideBlock = !self.sideBlock;
                    }
                    else {
                        self.sideBlock = false;
                    }
                });
            }
            SideBlockCtrl.prototype.onClick = function () {
                this.$rootScope.$broadcast('event_toggle_side_block', { id: this.id });
            };
            SideBlockCtrl.$inject = ['$scope', '$rootScope'];
            return SideBlockCtrl;
        })();
        angular.module('Fieldsmarts').controller('sideBlock.controller', SideBlockCtrl);
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
//# sourceMappingURL=sideBlock.js.map