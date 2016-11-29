/**
 * IMPORTS
 */
import "ngTouch";

import { ControllerBase } from '../shared/js/controllerbase'
import { ScopeMethod } from '../shared/js/componentbase'
import { LocalizationService } from './localization';
import { DataService } from './dataservice';
import { ContentConfig } from './contentconfig'
import { HttpRequestInterceptor } from '../shared/interceptors/httprequestinterceptor'

import './app.scss';

class AppCtrl extends ControllerBase<any> {
  static $inject = ["$scope", "dataService", "$timeout", "localization"];

  constructor($scope, dataService: DataService, private $timeout, localization: LocalizationService) {
    super($scope, dataService, localization)

  }
}

var module = angular.module("app", ["ngRoute"])
  .config(ContentConfig)
  .component('app', {
    template: require('./app.html'),
    controller: AppCtrl,
    controllerAs: 'app'
  })
  .service("localization", LocalizationService)
  .service("dataService", DataService);

