/**
 * IMPORTS
 */

import { ControllerBase } from '../shared/js/controllerbase'
import { ScopeMethod } from '../shared/js/componentbase'

import { DataService } from './dataservice';
import { LocalizationService } from './localization';
import { ContentConfig } from './contentconfig'
import { HttpRequestInterceptor } from '../shared/interceptors/httprequestinterceptor'

import '../shared/directives/directives';
/**
 * CSS
 */
import './main.scss';

require('bootstrap-sass!./bootstrap.config.js');

class AppCtrl extends ControllerBase<UI.IWebsite> {
  static $inject = ["$scope", "$interval", "dataService", "localization"];

  constructor($scope, private $interval, dataService: DataService, localization: LocalizationService) {
    super($scope, dataService, localization);
  }
}

var module = angular.module("app", ['custom-directives', 'ngRoute'])
  .config(ContentConfig)
  .component('app', {
    template: require('./main.html'),
    controller: AppCtrl,
    controllerAs: 'app' 
  }) 
  .service("httpRequestInterceptor", ["$location", HttpRequestInterceptor])
  .service("localization", [LocalizationService])
  .service("dataService", [DataService]);
