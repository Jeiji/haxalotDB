app.factory( 'friendFctry' , function(){
  let factory = {};
  let friends = [{ fn : 'jackson' , ln : 'bingo' }];
  factory.index = function( callback ){
    callback( friends );
  };
  factory.delTeam = function ( victim ){
    idx = friends.indexOf( victim );
    friends.splice( idx , 1 );
  };
  factory.addFriend = function( newFriend ){
    friends.push( newFriend );
  };
  factory.show = function( star , callback ){
    idx = friends.indexOf( star );
    callback( friends[idx] );
  };
return factory;
});
