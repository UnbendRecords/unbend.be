app.controller('contactCtrl', ['$scope', function ($scope) {
  $scope.submit = function () {
    var data = {
      email   : this.email,
      name    : this.name,
      message : this.message,
      tag     : 'contact'
    };

    $.ajax({
      type: 'POST',
      url: '/api/sendEmail',
      data: data,
      success: function (resp) {
        $('#contactForm').fadeOut(500, function () {
          $('#contactFormValidation').fadeIn(500);
        });
      },
      error: function (err) {
        $('#contactForm').fadeOut(500, function () {
          $('#contactFormError').fadeIn(500);
        });
      }
    });

  };
}]);
