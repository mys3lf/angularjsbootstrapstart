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
            });

        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }
}
