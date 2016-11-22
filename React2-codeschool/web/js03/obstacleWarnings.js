function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here

killerPenguinAlert(6, "Ice Caves");

killerPenguinAlert(1, "Blizzard Beach");


// ES6 

let warningMaker = (obstacle) => {
  return (number, location) => {
    alert(`Beware! There have been ${obstacle} sightings in the Cove today!\n${number} have been spotted at the ${location} !`);
  };
}

let killerPenguinAlert = warningMaker("killer penguin");
let polarBearAlert     = warningMaker("polar bear");
let icebergAlert       = warningMaker("iceberg");
let flashBlizzardAlert = warningMaker("flash blizzard");
let snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here

killerPenguinAlert(6, "Ice Caves");

killerPenguinAlert(1, "Blizzard Beach");



function warningMaker(obstacle) {
  // create a count
  var count = 0;
  return function(number, location) {
    // keep track of warnings
    count ++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" + "This is alert #"+count+" today for "+obstacle+" danger."
          // finish the warning message here
          
    );
  };
}


function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // add each location to the zones array
    zones.push(location);
    // add each zone to the list string
    for (var i = 0; i < zones.length; i++) {
      list += zones[i] + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          // finish the warning message here
          list
    );
  };
}



function warningMaker(obstacle) {
  var count = 0;
  var zones = [];
  return function(number, location) {
    count++;
    var list = "";
    // push an array with location and number
    zones.push([location,number]);
    for (var i = 0; i < zones.length; i++) {
      // replace location and number with appropriate code
      list +=  zones[i][0] + " (" + zones[i][1] + ")" + "\n";
    }
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count +
          " today for " + obstacle + " danger.\n" +
          "Current danger zones are:\n" +
          list);
  };
}






