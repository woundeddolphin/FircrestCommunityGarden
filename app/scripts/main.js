(function(){
  'use strict';
  var curAdd = "https://fircrestcommunitygarden.firebaseapp.com/ ";

  var app = angular.module('mainApp', ['ksSwiper','ngMaterial','ngSanitize']);

  app.config(['$mdThemingProvider', '$mdIconProvider', function($mdThemingProvider, $mdIconProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('green') // specify primary color, all
      .accentPalette('red');
    $mdIconProvider
      .defaultIconSet('iconsets/mdi.svg');
  }]);


  app.controller('meetingCtrl', ['$scope', function($scope) {
    $scope.blog = [
      {
        title:"Fircrest Community Garden Meeting Minutes April #1.0",
        img:"img/blog/meeting.png",
        date:new Date("April 13, 2016"),
        author:"Justice Nichols",
        venue:"Fircrest United Methodist Church",
        host:"Jenny Stryker",
        intros:["Jenny Stryker","Christine Gregorich","Rebel Nichols","Barbara O'Connell","Rachel Shariff","Don Nestegard","Marge Nestegard","Lynn Morash","Harry Hayward"],
        body:
         `Thank you to Pastor Nathan Hollifeld for hosting the meeting at the church <br> <br> The planning team met to discuss the presentation that will be given at the City of Fircrest Study Session on April 18th, 2016. <br><br> Harry Haward reviewed the updated presentation “Where Will Our Garden Grow?” with the team.  In addition to condensing the previous site assessment charts to two per site, Harry added a slide showing the Claremont St. pump house site. <br> <br> The team reviewed the vision/mission of the community garden and spent the majority of the meeting on the questions that were posed by Lisa the Fircrest City clerk.  <br> <br> The team also discussed what we hope to know as a result of the study session. When will the city determine its level of support and participation in a Fircrest Community Garden project?<br> <br>  Actions from the Meeting <ul><li>Christine to contact Kristen of Harvest Pierce County.  </li><li>Harry to provide presentation to City of Fircrest on Friday if at all possible. </li></ul>The team discussed additional information that they believe the Fircrest Council will want to receive at the study session. Topics included ways to: <ul><li>Involve youth</li><li>	Provide accessibility to all</li><li>Create a truly aesthetically pleasing garden</li><li>Involve Senior Citizens</li><li>Welcome all socio-economic background</li></ul> Jenny Stryker shares information that she had received that indicated that the PumpHouse lot on Claremont might be a site to consider for the Community Garden. Harry will be stopping by the location on his way home after the meeting. <br><br>  In addition to the Community Garden, the team discussed sharing the knowledge of the Pierce County Gleaning Project with Fircrest residents.  Those with extra fruit can call Harvest Pierce County.  Volunteers can be requested to harvest remaining fruit/vegetables to be shared with local foodbanks. <br><br> The team discussed leveraging the “farm to table” theme for something like farm to community table.  Additionally showing people how to cook the fresh food raised in the community garden was discussed.  Just how many ways are there to use zucchini and kale? Once the community garden is established there are many ancillary activities that could be coordinated.<ul><li>Cooking classes</li><li>Garden classes</li><li>Harvest celebrations etc</li></ul>  As part of the Study Session the team would like to ask the Fircrest Council if the reader board on Regents and the Town Topic Newsletter can be used to spread the word.<br><br> The next meeting is Thursday, April 28th, 2016 at Fircrest United Methodist Church `
      },

      {
        title:"Fircrest Community Garden Meeting Minutes March",
        img:"img/blog/meeting.png",
        date:new Date("March 31, 2016"),
        author:"Justice Nichols",
        venue:"Fircrest United Methodist Church",
        host:"Jenny Stryker",
        intros:["Jenny Stryker","Christine Gregorich","Rebel Nichols","Don Nestegard","Marge Nestegard","Lynn Morash","Harry Hayward"],
        body:
          `Thank you to Reverend Nathan Hollifeld for hosting the meeting at the church <br><br>Christine Gregorich described the emails and telephone calls with the Fircrest City Council, Mayor and City Manager.  The town of Fircrest has scheduled the WeDig Fircrest Team to present at its Monday, April 18th Study Session.<br><br>  The team members thanked Lynn for getting the ball rolling by attending the Fircrest City Council meeting on February 23, 2016.  Lynn gave a brief report on the meeting and the questions she was asked by the council. <br><br> Harry Hayward reported on the Community Garden Leadership training that occurred on Tuesday, March 29th at the Portland Avenue Community Center.  He and Christine Gregorich attended the training.  It was excellent training.  Harry shared copies of the materials that were used in the training with Jenny Stryker as she was unable to attend.  Christine Gregorich took the action to provide a copy of the training material to the other members in attendance. <br><br> Harry Hayward showed an updated PowerPoint pitch entitles “Where Will Our Garden Grow?” This would be shared with the Fircrest City Council at the April 18, 2016 Study Session. The main topics in the presentation were: <ul><li>Why A Community Garden?</li><li>University Place Community Garden</li><li>Site Selection</li><li>WeDig Fircrest</li><li>Discussion </li></ul>  The team discussed additional information that they believe the Fircrest Council will want to receive at the study session. Topics included ways to: <ul><li>Involve youth/kids</li><li>Provide accessibility to all</li><li>Create a truly aesthetically pleasing garden</li><li>Involve Senior Citizens</li><li>Welcome all socio-economic background</li></ul> Jenny took the action to verify that the Study Session is open to everyone interested in the Fircrest Community Garden. <br><br>  Jenny Stryker shared information that she had received indicating the PumpHouse lot on Claremont might be a site to consider for the Community Garden. Harry will be stopping by the location on his way home after the meeting. <br><br>  In addition to the Community Garden, the team discussed sharing the knowledge of the Pierce County Gleaning Project with Fircrest residents.  Those with extra harvestable food can call Harvest Pierce County.  engages can be requested to harvest remaining fruit/vegetables to be shared with local food-banks.<br><br>  The team discussed leveraging the “farm to table” theme for something like farm to community table.  Additionally showing people how to cook the fresh food raised in the garden was discussed.  Just how many ways are there to use zucchini and kale? Once the community garden is established there are many ancillary community activities that could be coordinated.<ul><li>Cooking classes</li><li> Gardening classes</li><li> Harvest celebrations etc</li></ul>  As part of the Study Session the team would like to ask the Fircrest Council if the reader board on Regents and the Town Topic Newsletter can be used to spread the word. <br><br> <b>Next Planning Meeting</b> is Thursday, April 28th, 2016 at the Fircrest United Methodist Church, and the Agenda will be working with Harvest Pierce County (assuming they are available) to create our by-laws/charter/guiding principles`
          },


      {
        title:"Fircrest Community Garden Meeting Minutes January",
        img:"img/blog/meeting.png",
        date:new Date("January 18, 2016"),
        author:"Justice Nichols",
        venue:"Jenny Stryker's home 446 Buena Vista Fircrest, WA",
        host:"Jenny Stryker",
        intros:["12 attendees (see sign-up sheet)"],
        body:
            `Jenny provided a history of the previous efforts which started in 2014. City of Fircrest has not been as helpful in finding a community garden location as one would hope.  Potential locations that were investigated included the vacant lot across from the rec center and next to the tot lot, two spots at Whittier field, a parcel in Thelma Gilmur park, and a location in the Fircrest Park lot next to the blue house.  The spot near the tot lot has already been committed to another project.  One Whittier park spot has been committed to additional tennis courts and one was very, very wet.  The Thelma Gilmur park location is just past the dock, off the trail and very secluded.  The Fircrest park location used to have a house on it that was purchased by the City of Fircrest, and the house demolished.  In addition, Fircrest United Methodist Church has offered a 20x40 lot on the side of church.  Members of the board of trustees were present at this meeting. Resident Lynn Morasch, in attendance at the meeting, offered up a vacant lot on Buena Vista just slightly south of Spring street. The lot is 50' x100'.  Regardless of option we would need to communicate with the Fircrest government/council. <br> <br> The group believes that one of the first orders of business is to determine whether we want the garden on private or city land. <br> <br>  Another important order of business is the site assessment. Soil, water source, sun, access to garden for gardeners and supplies (top soil, compost), need to be evaluated. <br> <br> Chris Gregorich and Harry Hayward Pierce County Master Gardener representatives will do a site assessment of three locations, and present findings to the group at the next meeting. <ul> <li>  Fircrest Park next to the blue house </li><li> Fircrest Methodist Church </li> <li> Lynn’s vacant lot on Buena Vista </li> </ul> <b>Next meeting in one month. </b>  Fircrest Methodist church offered to provide their facilities for the next meeting. The next meeting will discuss the site assessment results and collaborate through a charette (intensive design effort) to help develop the go forward plan. <br><br> <b> Questions from attendees: </b> <br>What is the mission of the garden?  Grow for ourselves? Grow for other? A combination of both approaches? Will there be a flower and herb garden? A discussion about the Emergency Food Network and the need to understand what garden items they will take occurred.<br> <br>     Jenny thanked all who attended. Those in attendance thanked Jenny and her family for hosting the meeting. `
          },

          {
            title:"Fircrest Community Garden Meeting Minutes April #2",
        img:"img/blog/meeting.png",
        date:new Date("April 27, 2016"),
        author:"Justice Nichols",
        venue:"Fircrest United Methodist Church",
        host:"Jenny Stryker",
        intros:["Jenny Stryker","Christine Gregorich","Rebel Nichols","Don Nestegard","Marge Nestegard","Lynn Morash","Harry Hayward","Rachel Shirreff"],
        body:
          `Thank you to Pastor Nathan Hollifeld for hosting the meeting at the church<br><br><b>
          Discussion: </b> The team discussed the Fircrest City Council study session that was held
           on April 18 to discuss a Fircrest Community Garden. Everyone agreed that it was very 
           positive meeting and were pleased with the discussion and willingness to establish a 
           community garden. The council requested that we investigate additional sites including
           <ul><li>Pump House on Claremont</li><li>Whittier Park near bocce ball court</li><li>
           Buffer lot between Public Works and the homes on Altadena</li></ul> Christine Gregorich
           and Harry Haywood will do the 3 remaining detailed site surveys on May 5th.<br><br>  
           At the study session the group was requested to work community garden details with 
           Rick Rosenbladt the City Manager. Mayor Jolisbois would like to remain engaged and 
           notified if there are any issues. <br> <br>  A discussion was held about the Fircrest 
           United Methodist Church location and it is definitely still under consideration. It is 
           recognized that Nathan is very interested in the church hosting a community garden on 
           church property.<br><br> Discussion about Fircrest Kiwanis. Kiwanis is a major contributor 
           to Fircrest and we should approach them. We are looking for a volunteer to interface 
           with Kiwanis. <br><br>  <b>Creating the administrative portion of the Community Garden: 
           </b> Christine passed out copies of the Fox Island and the University Place Community 
           gardens by-laws and rules. These in addition to the drafts that Jenny Stryker has 
           provided on Google Doc should provide the planning team with plenty of input from which 
           to create the rules of engagement for the Fircrest Community Garden. <br><br> Input to 
           these documents is requested from all interested in the community garden. The various 
           documents can be found at the following links. Please add your comments to the documents. 
           <ul><li><a 
           href='https://docs.google.com/document/d/1KHYtX5a0i8NFn7JGW73WhfsV9tp7_HmrKvxs9ZO60uk/edit?usp=sharing'>
           Questions/Answers</a></li><li><a 
           href='https://docs.google.com/document/d/1lEvfRH6xG1E-M6U_UqzJGrjglJYYTGoQax0_mSgSrag/edit?usp=sharing'>
           Flyer</a></li> <li><a TARGET='_blank' 
           href='https://docs.google.com/document/d/1AX47_6ALxR6HO4QgHxTR26EV-X7327ZEzRtzzDrchC4/edit?usp=sharing'>
           Vision/Mission</a> </li><li><a TARGET='_blank' 
           href='https://docs.google.com/document/d/1AX47_6ALxR6HO4QgHxTR26EV-X7327ZEzRtzzDrchC4/edit?usp=sharing'>
           Vision/Mission</a></li> <li><a TARGET='_blank' 
           href='https://docs.google.com/document/d/1TIrbHq_C2w5naah_vNizlcDURoO5z16mMYDTEGqm73c/edit?usp=sharing'>
           Gardner Application</a></li><li><a TARGET='_blank' 
           href='https://docs.google.com/document/d/1Mn5X_dEK0UEOzVqqkcDuAyTalrHoOyHmmEDQcv8Szxk/edit?usp=sharing'>
           Guidelines/Rules</a></li>  <li><a TARGET='_blank' 
           href='https://docs.google.com/document/d/1Y8swl9K7_F3bPTpLPrdvtGyy0OR33fT7hY0_ZFKjeSk/edit?usp=sharing'>
           Questions to consider</a></li></ul><b>Next Fircrest Community Garden Meeting</b> 
           Discussion on the next meeting included changing the day and time to accommodate 
           those who can not make a weeknight meeting.<br><br> <b>Next meeting:</b> Saturday, 
           May 14th 10:00 AM at Java etc. on Emerson (40th) and Orchard. (4040 S Orchard St.) 
           The Agenda topics for the next meeting include Reviewing the three additional site 
           surveys and Structuring of the organization and review of by-laws. See google docs`
          },

          {
            title:"Fircrest Community Garden Meeting Minutes Feburary",
        img:"img/blog/meeting.png",
        date:new Date("Feburary 22, 2016"),
        author:"Justice Nichols",
        venue:"Fircrest United Methodist Church",
        host:"Jenny Stryker",
        intros:["10 attendees (see sign-up sheet)"],
        body:
            `Master Gardener Harry Hayward presented a PowerPoint detailing the site assessment
             for three possible locations for the Community Garden Sites <ul><li> Fircrest 
             Methodist Church</li><li> Lynn M vacant lot on Buena Vista</li><li>Fircrest City 
             Park</li></ul>All of the sites are viable. All sites have pro’s and con’s.  
             Following group discussion it was determined that we should pursue two sites, the 
             Fircrest Methodist Church and Fircrest Park. Although eventually we will get to 
             one site, it was agreed that we should have options.<br><br>The group discussed 
             what it would take to get the City of Fircrest to be receptive to a community garden 
             at the Fircrest Park.  Some past history was discussed and the belief of those in 
             attendance was that the new City Council and new Mayor are expected to be more open 
             to exploring the idea. It was stated the Fircrest City Council meets twice monthly 
             on the second and fourth Tuesday. Jenny stated that the Fircrest City Council likes 
             to be involved. Several ideas on how to involve the council were discussed including 
             inviting them to our planning meetings as well as a community garden site walk and 
             visit. It was agreed that the council should be involved regardless of whether the 
             community garden is at the Fircrest Park or at the Fircrest Methodist Church. <br>
             <br>The group also discussed the theory that  some people may not like meetings,
             because they prefer doing to talking. The group discuss the likelihood of more 
             engagement when the garden becomes “real”. (If you build it they will come.) The 
             group determined that we should continue meeting monthly for planning purposes 
             while trying actively engaging people who want to “do” a community garden. <br>
             <br>Agreed to Next Steps: <ul><li>Lynn M to attend Fircrest City Council on 
             Tuesday, February 23 to plant the seeds about a group of Fircrest residents 
             wanting to pursue a community garden.</li><li>Plan a community garden site 
             walk-about and invite the church board and the city council</li> <li>Jenny Stryker
             to present at the Fircrest City Council on either March 8th (possible)  or March 
             22nd (more probable). Everyone interested in a Community Garden is encouraged 
             to attend. The date will be announced when known.</li><li>Harry and Christine 
             to engage with Harvest Pierce County</li></ul>The group discussed the best ways 
             to communicate and get the word out.  Currently the group uses the following 
             <ul><li>WeDig Fircrest Facebook page (Jenny)</li><li>2 other Fircrest Facebook 
             pages (Jenny)</li><li>Next-door Fircrest (Christine)</li><li>Jenny will work on 
             developing a flyer and getting approval to post it at the  Fircrest Community 
             Center</li><li>Jenny will pursue the feasibility of a reader board announcement
             </li><li>Marge will take the flyers to the businesses along Regency Blvd and ask 
             for them to be posted/distributed</li></ul>It was agreed that we should meet again 
             in a month.  The day, time and location are TBD. Jenny took the action to schedule 
             the meeting.`

          },
    ];
  }]);


  app.controller('blogCtrl', ['$scope', function($scope) {
    

    
    $scope.blog = [
      {
        title:"First Post",
        img:"img/icons/web.svg",
        date:"5/20/16",
        author:"Justice Nichols",
        body:"This is the first post in the new Fircrest Community Garden webpage. The following posts will have to do with news for the garden and other intersting things in the world of gardening and our local community. "
      },

      {
        title:"Second Post",
        img:"img/icons/web.svg",
        date:"6/1/16",
        author:"Justice Nichols",
        body:`This is the second post in the new Fircrest Community Garden webpage. The website has finally been pushed into production but there is not yet a proper domain for it. The website has most intial functionality implemented but is missing any forms that have not been created, missing emails for officers, missing some pictures of officers, and missing links to relevant Most of this has to be done in meetings, feel free to contribute and attendthem.`
      },
    ];
  }]);
  app.controller('fabCtrl', ['$scope', function($scope) {
    $scope.shareByEmail = function(){
      console.log('potato');
      window.open('mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://FircrestCommunityGarden.org');
    };
    $scope.share = function() {
      FB.ui({
        method: 'share',
        mobile_iframe: true,
        href: curAdd
      }, function(response){});
    };


  }]);

  app.controller('engageGridList', function($scope,$mdDialog,$mdMedia) {
    $scope.showWeed = function(ev) {
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
    
    $scope.showPatch = function(ev) {
      $scope.showWeed(ev);
    };
    
    $scope.showTour = function(ev) {
      $scope.showWeed(ev);
    };
    
    $scope.showTeach = function(ev) {
      $scope.showWeed(ev);
    };
    
    $scope.showClass = function(ev) {
      $scope.showWeed(ev);
    };
    
    $scope.showDonate = function(ev) {
      $scope.showWeed(ev);
    }; 
    
    $scope.showShop = function(ev) {
      $scope.showWeed(ev);
    };        
  });

  app.controller('aboutCtrl', ['$scope', function($scope) {
    $scope.aboutPeople = [
      {
        name:"Justice Nichols",
        img:"img/aboutPhotos/aboutJusticeNichols.jpg",
        title:"Web Master",
        priority:30,
        contact:"WebMaster@FircrestCommunityGarden.org",
        body:"Justice is a young computer scientist and the person to blame if this website breaks. Feel free to contact him with questions or suggestions about this or any other FCG webpages."
      },

      {
        name:"Christine Gregorich",
        img:"img/aboutPhotos/aboutChristineGregorich.jpg",
        title:"Master Gardener Intern",
        priority:20,
        contact:"Christine@FircrestCommunityGarden.org",
        body:"Christine is an avid gardener and nature enthusiast and part of the team spearheading the creation of the FCG as well as a member of the Fox Island Community Garden.  "

      },

      {
        name:"Rebel Nichols",
        img:"img/aboutPhotos/aboutRebelNichols.jpg",
        title:"Planning Committee Member",
        priority:40,
        contact:"Rebel@FircrestCommunityGarden.org",
        body:""
      },

      {
        name:"Barbara O'Connell",
        img:"img/aboutPhotos/aboutBarbaraOconnell.jpg",
        title:"Planning Committee Member",
        priority:40,
        contact:"Barbara@FircrestCommunityGarden.org",
        body:""
      },

      {
        name:"Jenny Stryker",
        img:"",
        title:"Chair",
        priority:10,
        contact:"Jenny@FircrestCommunityGarden.org",
        body:""
      },

      {
        name:"Harry Hayward",
        img:"",
        title:"Master Gardener Intern",
        priority:20,
        contact:"Harry@FircrestCommunityGarden.org",
        body:""
      }
    ];

  }]);

  app.controller('homeCtrl', ['$scope', function($scope) {
    $scope.homeCarouselImages = [
      "img/carousel/car_1.jpg",
      "img/carousel/car_2.jpg",
      "img/carousel/car_3.jpg",
      "img/carousel/car_4.jpg"
    ];
  }]);


  app.controller('TestCtrl', ['$scope', function($scope) {
      $scope.swiper = {};
      $scope.next = function() {
          $scope.swiper.slideNext();
      };
      $scope.onReadySwiper = function(swiper) {
          console.log('onReadySwiper');
          swiper.on('slideChangeStart', function() {
              console.log('slideChangeStart');
          });
      };
  }]);

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '608009469364127',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
})();



