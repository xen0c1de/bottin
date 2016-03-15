Ressources = new Mongo.Collection("ressources");

if (Meteor.isClient) {
  Template.body.helpers({
    ressources: function () {
      return Ressources.find({}, {sort: {name: 1}});
    }
  });

  Template.body.events({
    "submit .new-ressource": function (event) {
      // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into the collection
      Ressources.insert({
        firstname: text,
        createdAt: new Date(),            // current time
        owner: Meteor.userId(),           // _id of logged in user
        username: Meteor.user().username  // username of logged in user
      });

      // Clear form
      event.target.text.value = "";
    }
  });

  Template.ressource.events({
    "click .toggle-checked": function () {
      //Set checked value to oposite of actual value
      Ressources.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Ressources.remove(this._id);
    }
  });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
