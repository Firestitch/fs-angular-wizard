
(function () {
    'use strict';

    angular.module('fs-angular-wizard',[])
    .directive('fsWizard', function() {
        return {
            restrict: 'E',
            scope: {
            	selected: '=?fsSelected'
            },
            controller: function($scope) {
            	this.count = 0;
            	this.selected = $scope.selected;
            	this.watch = function(func) {
            		$scope.$watch('selected',func);
            	}
            },
            link: function($scope, element, attrs) {

            }
        };
    })
    .directive('fsWizardStep', function($timeout) {
        return {
            template: '<div class="fs-wizard-step" ng-class="{ selected: name==selected }"><div class="fs-wizard-number fs-theme-primary-background-color">{{number}}</div><div class="fs-wizard-name fs-theme-primary-color" ng-transclude></div></div>',
            restrict: 'E',
            require: '^fsWizard',
            transclude: true,
            replace: true,
            scope: {
            	name: '@fsName'
            },
            link: function($scope, element, attrs, controller) {
            	$scope.number = ++controller.count;
		       	controller.watch(function(selected) {
            		$scope.selected = selected;
            	});
            }
        };
    });
})();


angular.module('fs-angular-wizard').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/wizard.html',
    ""
  );

}]);
