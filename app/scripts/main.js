(function () {
  'use strict';
  var app = angular.module('mainApp', ['ksSwiper', 'ngMaterial', 'ngSanitize', 'firebase']);

  app.config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('red');
    $mdIconProvider
      .defaultIconSet('mdi.svg');
  }]);


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
  }]);

  app.controller('blogCtrl', ['$scope', 'blogFact', function ($scope, blogFact) {
    $scope.blog = blogFact;
  }]);

  app.controller('aboutCtrl', ['$scope', 'aboutFact', function ($scope, aboutFact) {
    $scope.aboutPeople = aboutFact;
  }]);

  app.controller('tabsCtrl', ['$scope', function ($scope) {
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

  app.controller('engageGridList', ['$scope', '$mdDialog', '$mdMedia', 'engageFact', function ($scope, $mdDialog, $mdMedia, engageFact) {
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

  window.fbAsyncInit = function () {
    FB.init({
      appId: '608009469364127',
      xfbml: true,
      version: 'v2.6'
    });
  };
})();



