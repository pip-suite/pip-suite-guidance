/**
 * @file Sample application to provide end-to-end example of WebUI
 * @copyright Digital Living Software Corp. 2014-2016
 */
 
/* global angular */

(function () {
    'use strict';
    
    var thisModule = angular.module('pipSample', [
        // 3rd Party Modules
        'ui.router', 'ui.utils', 'ngResource', 'ngAria', 'ngCookies', 'ngSanitize', 'ngMessages',
        'ngMaterial', 'wu.masonry', 'LocalStorageModule', 'angularFileUpload', 'ngAnimate',
        // Application Configuration must go first
        'pipSampleConfig',
        // Modules from WebUI Framework
        'pipCommonRest', 'pipControls', 'pipLayout', 'pipNav', 'pipErrors', 'pipTheme', 'pipEntry', 'pipPictures', 'pipPictures.Data',
         // Sample Application Modules
         'pipSampleGuidance'
    ]);

    thisModule.controller('pipSampleController',
        function($scope, $rootScope, $timeout, pipTranslate) {

        }
    );
    
})();

