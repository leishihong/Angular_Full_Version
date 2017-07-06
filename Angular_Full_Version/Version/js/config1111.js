/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/translation");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('translation', {
           // abstract: true,
            url: "/translation",
            templateUrl: "views/translation.html"
        })
        // .state('translation.index', {
        //     url: "/index",
        //     templateUrl: "views/translation.html",
        //     resolve: {
        //         loadPlugin: function ($ocLazyLoad) {
        //             return $ocLazyLoad.load([
        //                 {

        //                     serie: true,
        //                     name: 'angular-flot',
        //                     files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
        //                 },
        //                 {
        //                     name: 'angles',
        //                     files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
        //                 },
        //                 {
        //                     name: 'angular-peity',
        //                     files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
        //                 }
        //             ]);
        //         }
        //     }
        // })
        

}
angular
    .module('inspinia')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
