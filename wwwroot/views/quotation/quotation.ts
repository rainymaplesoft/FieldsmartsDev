/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../app/repositoryService.ts" />
/// <reference path="../../app/app.ts" />
module App.View {

    import m_app = App;
    import m_repo = App.Service;
    import IBlock = App.View;

    /** --  Directive -- **/
    class Quotation {
        restrict = 'AE';
        templateUrl = 'views/quotation/quotation.html';
        replace = false;
        scope = {};
        controller = 'quotation.controller';
        controllerAs = 'vm';
    }

    function factory() {
        return new Quotation();
    }

    angular.module('Fieldsmarts').directive('quotation', factory);


    /** --  Controller -- **/

    interface IBlock {
        id:string;
        label:string;
        iconClass?:string;
        isSelected:boolean;
    }

    class QuotationController {

        private quotationRequest:m_repo.IDto;
        private quotation:any;
        private responseData:string;
        private errorMessage:string;
        private marketingJob:boolean;
        sides:Array<IBlock>;
        categories:Array<IBlock>;

        static $inject = ['app.repository', 'app.config'];

        constructor(private repository:m_repo.IRepositoryService, private appConfig:m_app.IAppConfig) {
            var url = appConfig.getApiUrl('quotation');
            this.quotationRequest = {url: url};
            this.marketingJob = true;
            this.sides = this.getSides();
            this.categories = this.getCategories();
        }

        getQuotation() {
            this.repository.getDataList(this.quotationRequest).then(data => {
                this.quotation = data;
            }, data => {
                if (data.status === 401) {
                    this.errorMessage = 'You are not authorized to call this service';
                } else {
                    this.errorMessage = data.statusText;
                }
            });
        }

        reset() {
            this.responseData = '';
            this.errorMessage = '';
        };

        getSides():Array<IBlock> {
            return [
                {id: '1', label: 'Front', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '2', label: 'Left', isSelected: true},
                {id: '3', label: 'Right', isSelected: false},
                {id: '4', label: 'Rear', isSelected: false}
            ];
        };

        getCategories():Array<IBlock> {
            return [
                {id: '1', label: 'Siding', iconClass: 'fa fa-diamond', isSelected: true},
                {
                    id: '2',
                    label: 'Soffit/Fascia Gutters/Down Spout and Carpot',
                    iconClass: 'fa fa-diamond',
                    isSelected: false
                },
                {id: '3', label: 'Doors', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '4', label: 'Garage Doors', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '5', label: 'Windows', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '6', label: 'Shuuters', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '7', label: 'Columns', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '8', label: 'Ralilings', iconClass: 'fa fa-diamond', isSelected: false},
                {id: '9', label: 'Vents', iconClass: 'fa fa-diamond', isSelected: false}
            ];
        };


        getIndexArray(arr:Array<any>):Array<number> {
            var rowCount = Math.ceil(arr.length / 4);
            var indexArray = [];
            for (var i = 0; i < rowCount; i++) {
                indexArray.push(i + 1);
            }
            return indexArray;
        }
    }

    angular.module('Fieldsmarts').controller('quotation.controller', QuotationController);
}