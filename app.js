/**
 * Created by aydin on 18.01.2017.
 */
var app=angular.module("App",[]);
app.controller("myListCtrl",function ($scope) {
   var arabalar=[
       {"marka":"BMV","UretimTarihi":2016,"isDone":false},
       {"marka":"Mercedes","UretimTarihi":2009,"isDone":true},
       {"marka":"Audi","UretimTarihi":2015,"isDone":false},
       {"marka":"Toyota","UretimTarihi":2006,"isDone":false}
   ];
   $scope.arabalar=arabalar;
   $scope.YeniAracEkle= function () {
       $scope.arabalar.push( {
           "marka":$scope.aracMarka,
           "UretimTarihi":$scope.aracUretimTarihi,
           "isDone":false

       });
       $scope.aracMarka="";
       $scope.aracUretimTarihi="";
   }
   $scope.AracSil=function () {
       $scope.arabalar=$scope.arabalar.filter(function (item) {
           return !item.isDone;
       });
   }
});
