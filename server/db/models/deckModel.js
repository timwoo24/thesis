var mongoose = require('mongoose');

var deckSchema = mongoose.Schema({

  // id of user creating deck
  user_id: {
    type: String,
    required: true
  },
  
  // yelp or camera
  type: String,
  
  // array containing user ids that user has chosen to share with
  shared: [{
    user_id: String,
    swiped: Boolean
  }],
  
  // name of deck
  name: String,
  
  // deck array containing objects(cards)
  deck: [{
    name: String, // or businessID?
    image_url: String,
    likes: Number,
  }],
});

var Deck = mongoose.model('Deck', deckSchema);
module.exports = Deck;


