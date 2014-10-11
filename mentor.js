Mentors = new Meteor.Collection("mentors");

if (Meteor.isClient) {
  Template.mentors.mentor = function() {
      return Mentors.find({}, { sort: { firstName: 1 }});
  };

  Template.signup.events({
    'click #signup': function () {
      Meteor.loginWithGoogle({
        requestPermissions: ['email', 'profile']
      }, function (err) {
        Session.set('errorMessage', err.reason || 'Unknown error');
      });
    }
  });

  Template.logout.events({
    'click button': function() {
      Meteor.logout();
    }
  });
}

