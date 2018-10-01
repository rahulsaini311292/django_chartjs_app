angular.module('graphsApp',[
    'ui.router',
    'graphsApp.dashboard',

])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){


    $urlRouterProvider.otherwise('/dashboard');


    $stateProvider

//    Dashboard
    .state('dashboard',{
        url: '/dashboard',
        templateUrl: '/static/components/graphsui/components/dashboard/views/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboardScope',
    })


}])

