angular.module('root', [])
    .controller("index", ["$scope", function ($scope) {
        $scope.message = "Hello World!";
      
        $scope.products = [
        {id: 1, name: "Fox", type: "fire", price: 10, image: "img/fox.svg"},
        {id: 2, name: "Racoon", type: "soil", price: 10, image: "img/racoon.svg"},
        {id: 3, name: "Owl", type: "wind", price: 10, image: "img/owl.svg"},
        {id: 4, name: "Golf club", type: "wind", price: 10, image: "img/kot.jpg"},
        {id: 1, name: "Fox", type: "fire", price: 10, image: "img/fox.svg"},
        {id: 2, name: "Racoon", type: "soil", price: 10, image: "img/racoon.svg"},
        {id: 3, name: "Owl", type: "wind", price: 10, image: "img/owl.svg"},
        {id: 4, name: "Golf club", type: "wind", price: 10, image: "img/kot.jpg"}

    ];
      
    }]);