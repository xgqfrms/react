function getUsersAvatars(userNames, cb){
  var url = "/userAvatars/";
  
  for(var index in userNames){
    _fetchAvatar(url + userNames[index], function(avatarUrl){
      _displayAvatar(userNames[index], avatarUrl);
    });
  }
}

// var error ?

function getUsersAvatars(userNames, cb){
  let url = "/userAvatars/";
  
  for(let index in userNames){
    _fetchAvatar(url + userNames[index], function(avatarUrl){
      _displayAvatar(userNames[index], avatarUrl);
    });
  }
}