/// <reference path="../../typings/tsd.d.ts" />
module App.Service {

    export interface IDto {
        url: string;
        data?:any;
    }
    export interface IRepositoryService {
        postAction<T>(entity: IDto): angular.IPromise<T>;
        getDataList<T>(entity: IDto): angular.IPromise<T>;
        getDataById<T>(entity: IDto, id: string): angular.IPromise<T>;
        deleteDataById<T>(entity: IDto, id: string): angular.IPromise<T>;
        deleteDataByQueryString<T>(entity: IDto, queryString: string): angular.IPromise<T>;
        addOrUpdateData<T>(entity: IDto, object: T): angular.IPromise<T>;
    }
    export class RepositoryService<T> implements IRepositoryService {

        static $inject = ['$http'];

        constructor(private $http: angular.IHttpService) {
        }

        getDataList<T>(entity: IDto): angular.IPromise<T> {
            return this.$http.get(entity.url).then((result): angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        getDataById<T>(entity: IDto, id: string): angular.IPromise<T> {
            return this.$http.get(entity.url + '/' + id).then((result): angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        deleteDataById<T>(entity: IDto, id: string): angular.IPromise<T> {
            return this.$http.delete(entity.url + '/' + id).then((result): angular.IHttpPromiseCallbackArg<T>=> {
                return result.data; // return the deleted object
            });
        }

        deleteDataByQueryString<T>(entity: IDto, queryString: string): angular.IPromise<T> {
            return this.$http.delete(entity.url + '?' + queryString).then((result): angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        addOrUpdateData<T>(entity: IDto, object: T): angular.IPromise<T> {
            return this.$http.post(entity.url, object).then((result): angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }

        postAction<T>(entity: IDto): angular.IPromise<T> {
            return this.$http.post(entity.url, entity.data).then((result): angular.IHttpPromiseCallbackArg<T>=> {
                return result.data;
            });
        }
    }

    angular.module('Fieldsmarts').service('app.repository', RepositoryService);
}