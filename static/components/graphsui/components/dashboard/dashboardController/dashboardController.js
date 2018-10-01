angular.module('dashboardController',[])

.controller('dashboardController',['graphDashboardService',function(graphDashboardService){

    var dashboardScope = this;

    dashboardScope.fetchGraphsValues= function(){
        console.log("hello")
        var success = function(response){
        console.log(response.data.data)
        var graphData = response.data.data
        var yearArr = []
        var propArr = []

        for (i=0;i <graphData.length;i++){
            yearArr.push(graphData[i].year)
            propArr.push(graphData[i].population)
        }

        var ctx = document.getElementById("myChart");

        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels:yearArr,
                datasets: [{
                    label: 'Population Chart',
                    data: propArr,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });


        }

        var failure = function(response){
            console.log(response)
            console.log('failure')
        }

        graphDashboardService.fetchGraphsVals(success, failure)

    }

    return dashboardScope;

}])