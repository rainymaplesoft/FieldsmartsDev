/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../app/repositoryService.ts" />
/// <reference path="../../app/app.ts" />
var App;
(function (App) {
    var View;
    (function (View) {
        /** --  Directive -- **/
        var Quotation = (function () {
            function Quotation() {
                this.restrict = 'AE';
                this.templateUrl = 'views/quotation/quotation.html';
                this.replace = false;
                this.scope = {};
                this.controller = 'quotation.controller';
                this.controllerAs = 'vm';
            }
            return Quotation;
        })();
        function factory() {
            return new Quotation();
        }
        angular.module('Fieldsmarts').directive('quotation', factory);
        var QuotationController = (function () {
            function QuotationController(repository, appConfig) {
                this.repository = repository;
                this.appConfig = appConfig;
                var url = appConfig.getApiUrl('quotation');
                this.quotationRequest = { url: url };
                this.marketingJob = true;
                this.sides = this.getSides();
                this.categories = this.getCategories();
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
            ;
            // mock data
            QuotationController.prototype.getSides = function () {
                return [
                    { id: '1', label: 'Front', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '2', label: 'Left', isSelected: true },
                    { id: '3', label: 'Right', isSelected: false },
                    { id: '4', label: 'Rear', isSelected: false }
                ];
            };
            ;
            // mock data
            QuotationController.prototype.getCategories = function () {
                return [
                    { id: '1', label: 'Siding', iconClass: 'fa fa-diamond', isSelected: true },
                    {
                        id: '2',
                        label: 'Soffit/Fascia Gutters/Down Spout and Carpot',
                        iconClass: 'fa fa-diamond',
                        isSelected: false
                    },
                    { id: '3', label: 'Doors', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '4', label: 'Garage Doors', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '5', label: 'Windows', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '6', label: 'Shutters', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '7', label: 'Columns', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '8', label: 'Ralilings', iconClass: 'fa fa-diamond', isSelected: false },
                    { id: '9', label: 'Vents', iconClass: 'fa fa-diamond', isSelected: false }
                ];
            };
            ;
            QuotationController.prototype.getIndexArray = function (arr) {
                var rowCount = Math.ceil(arr.length / 4);
                var indexArray = [];
                for (var i = 0; i < rowCount; i++) {
                    indexArray.push(i + 1);
                }
                return indexArray;
            };
            QuotationController.$inject = ['app.repository', 'app.config'];
            return QuotationController;
        })();
        angular.module('Fieldsmarts').controller('quotation.controller', QuotationController);
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
//# sourceMappingURL=quotation.js.map