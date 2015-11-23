/// <reference path="../../app/repositoryservice.ts" />
/// <reference path="../../app/app.ts" />
var App;
(function (App) {
    var View;
    (function (View) {
        /** --  Directive -- **/
        var Siding = (function () {
            function Siding() {
                this.restrict = 'AE';
                this.templateUrl = 'views/siding/siding.html';
                this.replace = false;
                this.scope = {};
                this.controller = 'siding.controller';
                this.controllerAs = 'vm';
            }
            return Siding;
        })();
        function factory() {
            return new Siding();
        }
        angular.module('Fieldsmarts').directive('siding', factory);
        /** --  Controller -- **/
        var QuotationController = (function () {
            function QuotationController(repository, appConfig) {
                this.repository = repository;
                this.appConfig = appConfig;
                var url = appConfig.getApiUrl('siding');
                this.quotationRequest = { url: url };
            }
            QuotationController.prototype.getQuotation = function () {
                var _this = this;
                this.repository.getDataList(this.quotationRequest).then(function (data) {
                    _this.quotation = data;
                }, function (data) {
                    if (data.status === 401) {
                        _this.errorMessage = 'You are not authorized to call this service';
                    }
                    else {
                        _this.errorMessage = data.statusText;
                    }
                });
            };
            QuotationController.prototype.reset = function () {
                this.responseData = '';
                this.errorMessage = '';
            };
            QuotationController.$inject = ['app.repository', 'app.config'];
            return QuotationController;
        })();
        angular.module('Fieldsmarts').controller('siding.controller', QuotationController);
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
//# sourceMappingURL=siding.js.map