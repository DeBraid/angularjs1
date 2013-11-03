var demoApp = angular.module('demoApp', []);

function FamilyController ($scope) {
  $scope.family =[

    {name:'derek',  city: 'Burlington', age: '29'}, 
    {name:'tracy',  city: 'Beamsville', age: '29'}, 
    {name:'bob',    city: 'Hamilton',   age: '63'}, 
    {name:'cheryl', city: 'Hamilton',   age: '59'}
  ];
}

demoApp.controller('FamilyController', FamilyController);