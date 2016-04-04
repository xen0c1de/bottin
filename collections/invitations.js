Invitations = new Meteor.Collection( 'invitations' );

Invitations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Invitations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let InvitationsSchema = new SimpleSchema({
  email: {
    type: String,
    label: "Email à qui l'invitation est envoyé"
  },
  token: {
    type: String,
    label: "Jeton de l'invitation"
  },
  role: {
    type: String,
    label: "Le role de l'utilisateur"
  },
  date: {
    type: String,
    label: "Date de l'invitation"
  }
});

Invitations.attachSchema( InvitationsSchema );
