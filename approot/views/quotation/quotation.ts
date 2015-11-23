/// <reference path="../../app/repositoryservice.ts" />
/// <reference path="../../app/app.ts" />
module App.View {

    import m_app = App;
    import m_repo = Service;

    /** --  Directive -- **/
    class Quotation {
        restrict = 'AE';
        templateUrl = 'views/quotation/quotation.html';
        replace = false;
        scope = {
        };
        controller = 'quotation.controller';
        controllerAs = 'vm';
    }

    function factory() {
        return new Quotation();
    }

    angular.module('Fieldsmarts').directive('quotation', factory);

    
    /** --  Controller -- **/

    class QuotationController {

        private quotationRequest: m_repo.IDto;
        private quotation: any;
        private responseData: string;
        private errorMessage: string;

        static $inject = ['app.repository', 'app.config'];
        constructor(private repository: m_repo.IRepositoryService, private appConfig: m_app.IAppConfig) {
            var url = appConfig.getApiUrl('quotation');
            this.quotationRequest = { url: url };
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
        }

    }

    angular.module('Fieldsmarts').controller('quotation.controller', QuotationController);
}