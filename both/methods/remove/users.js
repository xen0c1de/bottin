Meteor.methods({
  deleteUser( userId ) {
    check( userId, String );

    try {
      Users.remove( userId );
    } catch( exception ) {
      return exception;
    }
  }
});
