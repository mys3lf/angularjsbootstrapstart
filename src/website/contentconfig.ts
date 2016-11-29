import { ScopeMethod, ComponentBase } from '../shared/js/componentbase'


export class ContentConfig {
    static $inject = ["$routeProvider", "$httpProvider", "$locationProvider"];

    constructor($routeProvider, $httpProvider, $locationProvider) {
        $routeProvider.when('/',
            {
                template: require('./views/index.html'),
            })
            .when('/404', {
                template: require('./views/404.html'),
            })
            .when('/:contentId', {
                template: require('./views/content.html'),
                controller: ContentCtrl
            });

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }
}
 


class ContentCtrl extends ComponentBase {
    static $inject = ["$scope", "$routeParams"];

    private _id: string[];

    constructor($scope, $routeParams) {
        super($scope, null);

        this.$scope.$routeParams = $routeParams;
    }
}
