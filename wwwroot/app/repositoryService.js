/// <reference path="../../typings/tsd.d.ts" />
var App;
(function (App) {
    var Service;
    (function (Service) {
        var RepositoryService = (function () {
            function RepositoryService($http) {
                this.$http = $http;
            }
            RepositoryService.prototype.getDataList = function (entity) {
                return this.$http.get(entity.url).then(function (result) {
                    return result.data;
                });
            };
            RepositoryService.prototype.getDataById = function (entity, id) {
                return this.$http.get(entity.url + '/' + id).then(function (result) {
                    return result.data;
                });
            };
            RepositoryService.prototype.deleteDataById = function (entity, id) {
                return this.$http.delete(entity.url + '/' + id).then(function (result) {
                    return result.data; // return the deleted object
                });
            };
            RepositoryService.prototype.deleteDataByQueryString = function (entity, queryString) {
                return this.$http.delete(entity.url + '?' + queryString).then(function (result) {
                    return result.data;
                });
            };
            RepositoryService.prototype.addOrUpdateData = function (entity, object) {
                return this.$http.post(entity.url, object).then(function (result) {
                    return result.data;
                });
            };
            RepositoryService.prototype.postAction = function (entity) {
                return this.$http.post(entity.url, entity.data).then(function (result) {
                    return result.data;
                });
            };
            RepositoryService.$inject = ['$http'];
            return RepositoryService;
        })();
        Service.RepositoryService = RepositoryService;
        angular.module('Fieldsmarts').service('app.repository', RepositoryService);
    })(Service = App.Service || (App.Service = {}));
})(App || (App = {}));
//# sourceMappingURL=repositoryService.js.map