/**
 * @file Global configuration for sample application
 * @copyright Digital Living Software Corp. 2014-2016
 */

(function (angular) {
    'use strict';

    var thisModule = angular.module('pipSampleConfig', ['pipCommonRest', 'pipEntry', 'pipNav', 'pipGuidance']);

    // Configure application services before start
    thisModule.config(
        function ($mdThemingProvider, $urlRouterProvider, pipAuthStateProvider, pipRestProvider, pipNavIconProvider, pipNavMenuProvider, 
                   pipBreadcrumbProvider, pipActionsProvider, pipEntryProvider, $mdIconProvider, pipAvatarDataProvider, pipPictureDataProvider) {

            const links = [
                    { title: 'Basic controls', href: '/pip-webui-controls/index.html'},
                    { title: 'Composite controls', href: '/pip-webui-composite/index.html'},
                    { title: 'Core', href: '/pip-webui-core/index.html'},
                    { title: 'CSS components', href: '/pip-webui-css/index.html'},
                    { title: 'Document controls', href: '/pip-webui-documents/index.html'},
                    { title: 'Entry pages', href: '/pip-webui-entry/index.html'},
                    { title: 'Error handling', href: '/pip-webui-errors/index.html'},
                    { title: 'Help components', href: '/pip-webui-help/index.html'},
                    { title: 'Layouts', href: '/pip-webui-layouts/index.html'},
                    { title: 'Location Controls', href: '/pip-webui-locations/index.html'},
                    { title: 'Navigation controls', href: '/pip-webui-nav/index.html'},
                    { title: 'Picture controls', href: '/pip-webui-pictures/index.html'},
                    { title: 'REST API', href: '/pip-webui-rest/index.html'},
                    { title: 'Settings components', href: '/pip-webui-settings/index.html'},
                    { title: 'Support components', href: '/pip-webui-support/index.html'},
                    { title: 'Test Framework', href: '/pip-webui-test/index.html'}
                ];

            $mdIconProvider.iconSet('icons', 'images/icons.svg', 512);

            // Set global constants
            pipNavIconProvider.setMenu();
            pipBreadcrumbProvider.text = 'Sample Application';
            pipActionsProvider.secondaryGlobalActions = [
                {name: 'global.signout', title: 'SIGNOUT', state: 'signout'}
            ];

            // Configure REST API
            //pipRestProvider.version('1.0');
            pipRestProvider.serverUrl = 'http://api.positron.stage.iquipsys.net:30001';

            // Configure entry pages
            //pipEntryProvider.fixedServerUrl('http://alpha.pipservices.net');

            // Configure default states
            pipAuthStateProvider.unauthorizedState = 'signin';
            pipAuthStateProvider.authorizedState = 'guidance';

            pipAvatarDataProvider.AvatarRoute = '/api/v1/blobs';
            pipPictureDataProvider.PictureRoute = '/api/v1/blobs';

            $urlRouterProvider.otherwise(function ($injector, $location) {
                if ($location.$$path == '') return '/signin';
                else  return '/guidance';
            });

            // Configure navigation menu
            pipNavMenuProvider.sections = [
                {
                    links: [
                        {title: 'Guidance', url: '/guidance'}
                    ]
                },/* Links only for publishing samples
                {
                    links: links
                },*/
                {
                    links: [
                        {title: 'Signout', url: '/signout'}
                    ]
                }
            ];

        }
    );

})(window.angular);

