angular.module('dashboardService',[])
.service('graphDashboardService',['$http',function($http){

    dashboard = {}

    dashboard.fetchGraphsVals = function(success,failure){
        $http.get('api/getgraphdata/').then(success,failure)
    }

    return dashboard;

}])