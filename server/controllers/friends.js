console.log('Friends CTRLR up!');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find( {} , function( err , friends ){
      console.log(`I THINK WE SEE SOMETHING`);
      if( err ){
        console.log(err);
        return;
      };
      res.json( { friends : friends });
    });
  };
  this.create = function(req,res){
    var newUsr = req.body
    console.log(newUsr.name);
    Friend.findOne( { name : newUsr.name } , function( err , data ){
      if( data ){
        let updt = req.body
        console.log(`FOUND HIM`);
        if(updt.time_left){
          data.time_left = updt.time_left
        }
        if( updt.max_combo ){
          data.max_combo = updt.max_combo
        }
        if( updt.score ){
          data.score = updt.score
        }
        data.save()
        console.log(data);
        res.json( data )
      }else{
        console.log(newUsr);
        Friend.create( newUsr , function( err , addedUsr ){
          if( err ){
            console.log(`Error adding new user to db.`);
          }else{
            console.log(`ADDED USR ${req.body.name}, ${newUsr} TO DB!`);
            console.log( addedUsr );
            res.json( addedUsr );
          };
      });
  };
});
};
  this.update = function(req,res){
    //your code here
    res.json({placeholder:'update'});
  };
  this.delete = function(req,res){
    Friend.remove( { phone_ID : req.params.phone_ID } , function( err , deletedUsr ){
      if( err ){
        console.log(`Couldn't delete`);
      }else{
        res.json( deletedBckt );
      };
  };
  this.show = function(req,res){
    //your code here
    res.json({placeholder:'show'});
  };
}
module.exports = new FriendsController(); // what does this export?
