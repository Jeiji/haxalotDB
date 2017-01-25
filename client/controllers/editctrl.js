app.controller( 'friendCtrl' , [ '$scope' , 'friendFctry' , '$location' , function( scope , friendFctry , loc ){
  console.log(`In the friendctrl now...`);
  const indexFriends = function(){
    console.log('indexing...');
    friendFctry.index ( function( data ){
      scope.friends = data;
    });
  };
  indexFriends();
  scope.addFriend = function( newFriend ){
    if( scope.newFriend.fn ){
      console.log(scope.newFriend);
      friendFctry.addFriend( newFriend )
      scope.newFriend = {};
      return;
    };
    console.log('Nobody entered!');
    return;
  };
}]);
