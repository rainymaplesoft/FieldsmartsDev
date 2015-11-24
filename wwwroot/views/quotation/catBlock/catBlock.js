/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../app/app.ts" />
var App;
(function (App) {
    var View;
    (function (View) {
        var catBlock = (function () {
            function catBlock() {
                this.restrict = 'AE';
                this.scope = {
                    id: '@',
                    label: '@',
                    iconClass: '@',
                    catBlock: '='
                };
                this.controller = 'catBlock.controller';
                this.controllerAs = 'vm';
                this.templateUrl = 'views/quotation/catBlock/catBlock.html';
            }
            catBlock.instance = function () {
                return new catBlock;
            };
            return catBlock;
        })();
        /** -- Controller -- **/
        angular.module('Fieldsmarts').directive('catBlock', catBlock.instance);
        var catBlockCtrl = (function () {
            function catBlockCtrl($scope, $rootScope) {
                this.$scope = $scope;
                this.$rootScope = $rootScope;
                this.id = $scope.id;
                this.catBlock = $scope.catBlock;
                this.label = $scope.label;
                this.iconClass = $scope.iconClass;
                var self = this;
                this.$scope.$on('event_toggle_cat_block', function (event, data) {
                    if (!data) {
                        return;
                    }
                    if (data.id === self.id) {
                        self.catBlock = !self.catBlock;
                    }
                    else {
                        self.catBlock = false;
                    }
                });
            }
            catBlockCtrl.prototype.onClick = function () {
                this.$rootScope.$broadcast('event_toggle_cat_block', { id: this.id });
            };
            catBlockCtrl.$inject = ['$scope', '$rootScope'];
            return catBlockCtrl;
        })();
        angular.module('Fieldsmarts').controller('catBlock.controller', catBlockCtrl);
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
//# sourceMappingURL=catBlock.js.map