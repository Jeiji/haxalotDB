console.log('Routes up!');
// WE NEED TO ADD a few lines of code up here!
var friends = require('../controllers/friends.js');
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends/make', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/delete', friends.delete);
}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
