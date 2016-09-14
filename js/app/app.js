(function (angular) {
    'use strict';
    // declare a module
    var module = angular.module('webApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);


    /***********************
     *     ROUTES
     ***********************/
    module.config(function ($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl: 'views/pages/home.html'
            })
            .when('/content/:contentId', {
                templateUrl: 'views/pages/content.html',
                controller: "contentCtrl"
            })
    })

        /***********************
         *     DIRECTIVES
         ***********************/
        .directive("myFooter", function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/frame/footer.html",
                controller: "footerCtrl"
            };
        })
        .directive("navTop", function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/frame/topnav.html",
                controller: "topNavCtrl"
            };
        })
        .directive("navMain", function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/frame/nav.html",
                controller: "mainNavCtrl"
            }
        }).directive("headerLogo", function () {
            return {
                restrict: "E",
                replace: true,
                templateUrl: "views/frame/header.html",
                controller: "headerCtrl"
            }
        })

        /***********************
         *     CONTROLLER
         ***********************/
        .controller("mainNavCtrl", function ($scope, $http, $rootScope, $window, $location) {
            $scope.items = [];

            if (localStorage.getItem("mainNav") !== null) {
                $scope.items = JSON.parse(localStorage.getItem("mainNav"));
            }

            $http.get("data/mainnav.json").then(function (data) {
                $scope.items = data.data;
                localStorage.setItem("mainNav", JSON.stringify(data.data));
            });

            $scope.submit = function () {
                $location.path("/").search("query=" + this.query);
            }

        })
        .controller("topNavCtrl", function ($scope, $http) {
            $scope.data = {};

            if (localStorage.getItem("topNav") !== null) {
                $scope.data = JSON.parse(localStorage.getItem("topNav"));
            }

            $http.get("data/topnav.json").then(function (data) {
                $scope.data = data.data;
                localStorage.setItem("topNav", JSON.stringify(data.data));

            });
        })
        .controller("footerCtrl", function ($scope, $http) {
            $scope.footer = {};

            if (localStorage.getItem("footer") !== null) {
                $scope.footer = JSON.parse(localStorage.getItem("footer"));
            }

            $http.get("data/footer.json").then(function (data) {
                $scope.footer = data.data;
                localStorage.setItem("footer", JSON.stringify(data.data));
            });
        })
        .controller("headerCtrl", function ($scope, $http, $location) {

            $scope.location = $location;
            $scope.header = {
                small: $scope.location.path.length > 1
            }

            $scope.$watch('location.path()', function (path) {
                $scope.header.small = path.length > 1
            });

            $http.get("data/header.json").then(function (data) {
                $scope.header.data = data.data;
            });
        })
        .controller("contentCtrl", function ($scope, $routeParams) {
            $scope.template = {
                url: "data/pages/" + $routeParams.contentId + ".html"
            };
        })
})(window.angular);
