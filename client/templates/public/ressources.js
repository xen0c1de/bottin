Template.ressources.onCreated( () => {
  Template.instance().subscribe( 'ressources' );
});

Template.ressources.helpers({
  ressources: function() {
    var ressources = Meteor.ressources.find();

    if ( ressources ) {
      return ressources;
    }
  }
});

Template.ressources.events({

});
