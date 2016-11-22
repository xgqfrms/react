/*
error i
*/

/*
function assignLaser(shark, sharkList) {
  var stationAssignment;
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      stationAssignment = function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
  return stationAssignment;
}
*/



function assignLaser(shark, sharkList) {
  // var stationAssignment;
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      return function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (i + 1) + " for your sweet laser.");
      };
    }
  }
  // return stationAssignment;
}



unction assignLaser(shark, sharkList) {
  var stationAssignment;
  for (var i = 0; i < sharkList.length; i++) {
    if (shark == sharkList[i]) {
      var stn = i;
      //new i
      stationAssignment = function() {
        alert("Yo, " + shark + "!\n" +
              "Visit underwater strapping station " +
              (stn + 1) + " for your sweet laser.");
      };
    }
  }
  return stationAssignment;
}

var sharkList = ["Sea Pain", "Great Wheezy", 
                  "DJ Chewie", "Lil' Bitey", 
                  "Finmaster Flex", "Swim Khalifa",
                  "Ice Teeth", "The Notorious J.A.W."]


var listOfSharks = ["Sea Pain", "Great Wheezy",
                    "DJ Chewie", "Lil' Bitey",
                    "Finmaster Flex", "Swim Khalifa",
                    "Ice Teeth", "The Notorious J.A.W."];

var listOfTargets = ["icicle bat", "snow yeti",
                     "killer penguin", "frost tiger",
                     "polar bear", "iceberg",
                     "blue witch", "wooly mammoth"];


function makeTargetAssigner(sharks, targets) {
  // insert your code here
   return function(shark) {
    for (var i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
        alert("Hey, " + shark + "!\n" +
              "There've been " + targets[i] +
              " sightings in our area!\n" +
              "Time to take care of business!");
      }
    }
  };
}

var getTargetFor = makeTargetAssigner(listOfSharks,
                                      listOfTargets);
getTargetFor("Ice Teeth");


















