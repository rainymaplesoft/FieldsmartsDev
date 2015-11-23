/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../app/app.ts" />
var App;
(function (App) {
    var Ui;
    (function (Ui) {
        var RainCheckController = (function () {
            function RainCheckController($scope) {
                this.onclick = function () {
                    if ($scope.readonly === true) {
                        return;
                    }
                    $scope.rainCheckbox = !$scope.rainCheckbox;
                    $scope.onChanging();
                };
            }
            RainCheckController.prototype.onclick = function () {
            };
            RainCheckController.$inject = ['$scope'];
            return RainCheckController;
        })();
        var RainCheckboxDirective = (function () {
            function RainCheckboxDirective() {
                this.restrict = 'AE';
                this.template = getTemplate();
                this.replace = false;
                this.scope = {
                    rainCheckbox: '=',
                    text: '@',
                    readonly: '=',
                    onChanging: '&'
                };
                this.controller = RainCheckController;
                this.controllerAs = 'vm';
                this.link = function (scope, element) {
                    setReadOnly();
                    scope.$watch('readonly', function () {
                        setReadOnly();
                    });
                    function setReadOnly() {
                        var label = element.find('input:checkbox+label');
                        if (scope.readonly === true) {
                            label.addClass('readonly');
                        }
                        else {
                            label.removeClass('readonly');
                        }
                    }
                };
            }
            RainCheckboxDirective.instance = function () {
                return new RainCheckboxDirective;
            };
            return RainCheckboxDirective;
        })();
        angular.module('Fieldsmarts').directive('rainCheckbox', RainCheckboxDirective.instance);
        function getTemplate() {
            return '<div class="rain-checkbox-container">' +
                '<div class="checkbox-image">' +
                '<div  class="rain-checkbox" style="margin-left: -20px;">' +
                '<input type="checkbox" ng-model="rainCheckbox" style="display: inline;"/>' +
                '<label class="checkbox-label" ng-click="vm.onclick()"></label>' +
                '</div>' +
                '</div>' +
                '<div class="checkbox-text">' +
                '{{text}}</div>' +
                '</div>';
        }
    })(Ui = App.Ui || (App.Ui = {}));
})(App || (App = {}));
//# sourceMappingURL=rainCheckbox.js.map