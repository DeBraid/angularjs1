var demoApp = angular.module('demoApp', []);

var controllers = {};
// by creating controllers var, can call mult controllers
controllers.FamilyController = function ($scope) {
  $scope.family = [

    {name:'derek',  city: 'Burlington', age: '29'}, 
    {name:'tracy',  city: 'Beamsville', age: '29'}, 
    {name:'bob',    city: 'Hamilton',   age: '63'}, 
    {name:'cheryl', city: 'Hamilton',   age: '59'}
  ];
};

controllers.FamilyController2 = function ($scope) {
  $scope.family = [

    {name:'Steve',  city: 'Hamilton', age: '60'}, 
    {name:'Susan',  city: 'Hamilton', age: '56'}, 
    {name:'Paige',  city: 'Seoul',   age: '30'}, 
    {name:'Josh',   city: 'Van Kleek Hill',   age: '31'},
    {name:'Nana',   city: 'Hamilton',   age: '86'}, 
    {name:'Colleen',   city: 'Dundas',   age: '40'}
  ];
};
// here we call our controllers.

demoApp.controller(controllers);