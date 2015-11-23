module App {
    var module = angular.module('Fieldsmarts', [
        'ui.router'
    ]);

    /** Configurations  **/
    
    export interface IMessageConfig {
        consoleLog: boolean;
        alert: boolean;
        toastr: boolean;
    }
    

    export interface IAppConfig {
        messageConfig: IMessageConfig;
        loginEndpoint: string;
        apiBaseUrl: string;
        getApiUrl(endpoint: string): string;
    }

    export class AppConfig implements IAppConfig {
        router: string;
        messageConfig: IMessageConfig;
        loginEndpoint: string;
        apiBaseUrl: string;

        private _messageConfig = {
            consoleLog: false,
            alert: false,
            toastr: true
        };

        constructor() {
            this.messageConfig = this._messageConfig;
            this.loginEndpoint = '/api/login';
            this.apiBaseUrl = 'http://localhost:52089/api/';
        }

        getApiUrl(endpoint: string): string { return this.apiBaseUrl + endpoint }
    }

    module.value('app.config', new AppConfig());
}