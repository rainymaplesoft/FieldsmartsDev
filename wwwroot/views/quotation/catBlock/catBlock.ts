/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../app/app.ts" />
module App.View {

    class catBlock implements ng.IDirective {
        static instance():ng.IDirective {
            return new catBlock;
        }

        restrict = 'AE';
        scope = {
            id: '@',
            label: '@',
            iconClass: '@',
            catBlock: '='
        };
        controller = 'catBlock.controller';
        controllerAs = 'vm';
        templateUrl = 'views/quotation/catBlock/catBlock.html';
    }

    /** -- Controller -- **/
    angular.module('Fieldsmarts').directive('catBlock', catBlock.instance);

    interface ICatBlockScope extends ng.IScope {
        id:string;
        label:string;
        iconClass:string;
        catBlock:boolean;
    }

    interface IEventData {
        id:string;
    }

    class catBlockCtrl {
        id:string;
        label:string;
        iconClass:string;
        catBlock:boolean;

        static $inject = ['$scope', '$rootScope'];

        constructor(private $scope:ICatBlockScope, private $rootScope:ng.IRootScopeService) {
            this.id = $scope.id;
            this.catBlock = $scope.catBlock;
            this.label = $scope.label;
            this.iconClass = $scope.iconClass;
            var self=this;
            this.$scope.$on('event_toggle_cat_block', (event,data:IEventData)=> {
                if(!data){
                    return;
                }
                if (data.id === self.id) {
                    self.catBlock = !self.catBlock;
                }else {
                    self.catBlock =false;
                }
            })
        }

        onClick():void {
            this.$rootScope.$broadcast('event_toggle_cat_block', {id: this.id});
        }
    }

    angular.module('Fieldsmarts').controller('catBlock.controller', catBlockCtrl);
}