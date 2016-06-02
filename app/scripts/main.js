(function () {
  'use strict';
  var curAdd = "https://fircrestcommunitygarden.firebaseapp.com/ ";

  var app = angular.module('mainApp', ['ksSwiper', 'ngMaterial', 'ngSanitize', 'firebase']);

  app.config(['$mdThemingProvider', '$mdIconProvider', function ($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green') // specify primary color, all
      .accentPalette('red');
    $mdIconProvider
      .defaultIconSet('iconsets/mdi.svg');
  }]);

  app.factory("meetingFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('meetings');
    return $firebaseArray(ref);
  }
  ]);

  app.factory("blogFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('blog');
    return $firebaseArray(ref);
  }
  ]);

  app.factory("aboutFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('aboutCards');
    return $firebaseArray(ref);
  }
  ]);

  app.factory("swipeFact", ["$firebaseArray", function ($firebaseArray) {
    var ref = firebase.database().ref().child('swiper');
    return $firebaseArray(ref);
  }
  ]);

  app.controller('meetingCtrl', ['$scope', 'meetingFact', function ($scope, meetingFact, $firebaseArray) {
    $scope.blog = meetingFact;
  }]);


  app.controller('blogCtrl', ['$scope', 'blogFact', function ($scope, blogFact) {
    $scope.blog = blogFact;
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
        href: curAdd
      }, function (response) { });
    };
  }]);

  app.controller('engageGridList', ['$scope', '$mdDialog', '$mdMedia', function ($scope, $mdDialog, $mdMedia) {
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

    $scope.showPatch = function (ev) {
      $scope.showWeed(ev);
    };

    $scope.showTour = function (ev) {
      $scope.showWeed(ev);
    };

    $scope.showTeach = function (ev) {
      $scope.showWeed(ev);
    };

    $scope.showClass = function (ev) {
      $scope.showWeed(ev);
    };

    $scope.showDonate = function (ev) {
      $scope.showWeed(ev);
    };

    $scope.showShop = function (ev) {
      $scope.showWeed(ev);
    };
  }]);


  app.controller('homeCtrl', ['$scope', 'swipeFact', function ($scope, swipeFact) {
    $scope.homeCarouselImages = swipeFact;
  }]);

  app.controller('TestCtrl', ['$scope', function ($scope) {
    $scope.swiper = {};
    $scope.next = function () {
      $scope.swiper.slideNext();
    };
    $scope.onReadySwiper = function (swiper) {
      console.log('onReadySwiper');
      swiper.on('slideChangeStart', function () {
        console.log('slideChangeStart');
      });
    };
  }]);

  window.fbAsyncInit = function () {
    FB.init({
      appId: '608009469364127',
      xfbml: true,
      version: 'v2.6'
    });
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  } (document, 'script', 'facebook-jssdk'));
})();



