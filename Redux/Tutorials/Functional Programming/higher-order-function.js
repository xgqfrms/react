/*
map, reduce, filter
*/
var adjective, str, coolifier;

function makeAdjectifier(adjective){
    return function (str) {
        return adjective + "" + str;
    };
}

coolifier = makeAdjectifier("cool ");
// adjective

coolifier(" conference");
// str

// cool conference


//ES6 