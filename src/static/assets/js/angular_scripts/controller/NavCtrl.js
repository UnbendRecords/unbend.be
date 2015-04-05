app.controller('NavCtrl', function($scope,$rootScope,$location){
	

	$rootScope.footer_a = 1;
	$rootScope.footer_b = 0;
	$rootScope.footer_c = 0;

	switch($location.path()) {
	    case '/':
	        $rootScope.footer_a = 1;
			$rootScope.footer_b = 0;
			$rootScope.footer_c = 0;
	        break;
	   	case '/contact':
	        $rootScope.footer_a = 0;
			$rootScope.footer_b = 0;
			$rootScope.footer_c = 1;
	        break;
	    default:
	        $rootScope.footer_a = 0;
			$rootScope.footer_b = 1;
			$rootScope.footer_c = 1;
	}

	$scope.navAction = function(id){
		if (id == "home"){
			$rootScope.footer_a = 1;
			$rootScope.footer_b = 0;
			$rootScope.footer_c = 0;
		}else if(id == "contact"){
			$rootScope.footer_a = 0;
			$rootScope.footer_b = 0;
			$rootScope.footer_c = 1;
		}else{
			$rootScope.footer_a = 0;
			$rootScope.footer_b = 1;
			$rootScope.footer_c = 1;
		}
	}
});