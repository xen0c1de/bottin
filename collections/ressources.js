Ressources = new Meteor.Collection( 'ressources' );

Ressources.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Ressources.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let RessourcesSchema = new SimpleSchema({
  categorie: {
    type: String,
    label: "La catégorie de la ressources"
  },
  name: {
    type: String,
    label: "Le nom de la ressources"
  },
  email: {
    type: String,
    label: "Email de la ressources"
  },
  address: {
    type: String,
    label: "Adresse de la ressources"
  },
  phone: {
    type: String,
    label: "Téléphone de la ressources"
  }
});

Ressources.attachSchema( RessourcesSchema );
