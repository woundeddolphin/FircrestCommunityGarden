(function () {
  'use strict';
  var app = angular.module('mainApp', ['ksSwiper', 'ngMaterial', 'ngSanitize', 'firebase','ngRoute','ngMessages']);

  app.config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider', '$locationProvider', function ($mdThemingProvider, $mdIconProvider,$routeProvider,$locationProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('red');
    $mdIconProvider
      .defaultIconSet('mdi.svg');
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl'
      })
      .when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'blogCtrl'
      })
      .when('/meetings', {
        templateUrl: 'partials/meetings.html',
        controller: 'meetingCtrl'
      })
      .when('/engage', {
        templateUrl: 'partials/engage.html',
        controller: 'engageCtrl'
      })
      .when('/calendar', {
        templateUrl: 'partials/calendar.html',
        controller: 'calendarCtrl'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      })
      .when('/createBlogPost',{
        templateUrl: 'partials/createBlogPost.html',
        controller: 'createBlogPostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
    }]);

    app.controller('createBlogPostCtrl', function($scope) {
      $scope.project = {
      };
    });

    app.run(['$route', function($route)  {
      $route.reload();
    }]);
 
  app.controller('tabsCtrl', ['$scope','$location', '$window','$rootScope', function ($scope,$location,$window,$rootScope) {

    $window.fbAsyncInit = function() {
      if (typeof FB !== 'undefined'){
        FB.init({ 
          appId: '608009469364127',
          status: true, 
          cookie: true, 
          xfbml: true,
          version: 'v2.4'
        });
      }
    };
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    $scope.$on('$viewContentLoaded', function(){
      if (typeof FB !== 'undefined'){
        FB.XFBML.parse();
      }
    });
  }]);

  app.controller('appCtrl', function($scope,$mdSidenav,$location){
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
    $scope.homeClick = function(){
      $location.url('/');
      $scope.openLeftMenu();
    };
    $scope.blogClick = function(){
      $location.url('/blog');
      $scope.openLeftMenu();      
    };
    $scope.meetingsClick = function(){
      $location.url('/meetings'); 
      $scope.openLeftMenu();      
    };
    $scope.engageClick = function(){
      $location.url('/engage');
      $scope.openLeftMenu();      
    };
    $scope.calendarClick = function(){
      $location.url('/calendar');
      $scope.openLeftMenu();      
    };
    $scope.aboutClick = function(){
      $location.url('/about');
      $scope.openLeftMenu();      
    };
    $scope.createBlogPostClick = function(){
      $location.url('/createBlogPost');
      $scope.openLeftMenu();      
    };

  });

  app.controller('calendarCtrl', function($scope){
  });

  app.factory("meetingFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('meetings');
    return $firebaseArray(ref);
  }]);

  app.factory("blogFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('blog');
    return $firebaseArray(ref);
  }]);

  app.factory("aboutFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('aboutCards');
    return $firebaseArray(ref);
  }]);

  app.factory("homeFact", ["$firebaseObject", function ($firebaseObject) {
    var ref = firebase.database().ref().child('homeQuote');
    return $firebaseObject(ref);
  }]);

  app.factory("headerFact", ["$firebaseObject", function ($firebaseObject) {
    var ref = firebase.database().ref().child('header');
    return $firebaseObject(ref);
  }]);

  app.factory("swipeFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('swiper');
    return $firebaseArray(ref);
  }]);

  app.factory("engageFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('engage');
    return $firebaseArray(ref);
  }]);

  app.controller('meetingCtrl', ['$scope', 'meetingFact', function ($scope, meetingFact, $firebaseArray) {
    $scope.blog = meetingFact;
     $scope.formatDate = function (date) {
       return new Date(date).toDateString();    
     };
  }]);

  app.controller('blogCtrl', ['$scope', 'blogFact', function ($scope, blogFact) {
    $scope.blog = blogFact;
    $scope.formatDate = function (date) {
      return new Date(date).toDateString();    
    };
  }]);

  app.controller('aboutCtrl', ['$scope', 'aboutFact', function ($scope, aboutFact) {
    $scope.aboutPeople = aboutFact;
  }]);


  app.controller('fabCtrl', ['$scope', function ($scope) {
    $scope.shareByEmail = function () {
      console.log('potato');
      window.open('mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://FircrestCommunityGarden.org');
    };
    $scope.share = function () {
      FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: "weDigFircrest.org"
      }, function (response) { });
    };
  }]);

  app.controller('engageCtrl', ['$scope', '$mdDialog', '$mdMedia', 'engageFact', function ($scope, $mdDialog, $mdMedia, engageFact) {
    $scope.showWeed = function (ev) {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Hey there!')
          .textContent('We\'re not quite done with these forms feel free to contact us and we can get you set up.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };

    $scope.tiles = engageFact;

    $scope.showPatch = function (ev) { $scope.showWeed(ev); };
    $scope.showTour = function (ev) { $scope.showWeed(ev); };
    $scope.showTeach = function (ev) { $scope.showWeed(ev); };
    $scope.showClass = function (ev) { $scope.showWeed(ev); };
    $scope.showDonate = function (ev) { $scope.showWeed(ev); };
    $scope.showShop = function (ev) { $scope.showWeed(ev); };
  }]);


  app.controller('homeCtrl', ['$scope', 'swipeFact', 'homeFact', 'headerFact', function ($scope, swipeFact, homeFact, headerFact) {
    $scope.homeCarouselImages = swipeFact;
    $scope.homeQuote = homeFact;
    $scope.header = headerFact;
    $scope.swiper = {};
    $scope.onReadySwiper = function (swiper) { swiper.initObservers(); };
  }]);
  
})();



