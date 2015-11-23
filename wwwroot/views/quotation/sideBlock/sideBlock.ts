/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../app/app.ts" />
module App.View {

    class SideBlock implements ng.IDirective {
        static instance():ng.IDirective {
            return new SideBlock;
        }

        restrict = 'AE';
        scope = {
            id: '@',
            label: '@',
            iconClass: '@',
            sideBlock: '='
        };
        controller = 'sideBlock.controller';
        controllerAs = 'vm';
        templateUrl = 'views/quotation/sideBlock/sideBlock.html';
    }

    /** -- Controller -- **/
    angular.module('Fieldsmarts').directive('sideBlock', SideBlock.instance);

    interface ISideBlockScope extends ng.IScope {
        id:string;
        label:string;
        iconClass:string;
        sideBlock:boolean;
    }

    interface IEventData {
        id:string;
    }

    class SideBlockCtrl {
        id:string;
        label:string;
        iconClass:string;
        sideBlock:boolean;

        static $inject = ['$scope', '$rootScope'];

        constructor(private $scope:ISideBlockScope, private $rootScope:ng.IRootScopeService) {
            this.id = $scope.id;
            this.sideBlock = $scope.sideBlock;
            this.label = $scope.label;
            this.iconClass = $scope.iconClass;
            var self=this;
            this.$scope.$on('event_toggle_side_block', (event,data:IEventData)=> {
                if(!data){
                    return;
                }
                if (data.id === self.id) {
                    self.sideBlock = !self.sideBlock;
                }else {
                    self.sideBlock =false;
                }
            })
        }

        onClick():void {
            this.$rootScope.$broadcast('event_toggle_side_block', {id: this.id});
        }
    }

    angular.module('Fieldsmarts').controller('sideBlock.controller', SideBlockCtrl);
}