// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
//search type of primitive types and convert into string format

  if(typeof obj === "number" || typeof obj === "boolean" || obj === null) {


    return "" + obj + "";

  };

//string

  if (typeof obj === "string") {

    return "\"" + obj + "\"";
  };

//undefined & function

  /*
  if (obj === undefined || typeof obj === "function") {
    return "";
  };
  */

//recursion through objects;
//run stringifyJSON through every primitive-type within object (array-like or object literal)

  if (typeof obj === "object") {

    var aggregator = [];

    if (Array.isArray(obj)) {


  //case 1: array-like object;
    for (var i = 0; i < obj.length; i++) {
      var stringifiedElement = stringifyJSON(obj[i]);
      aggregator.push(stringifiedElement);
    };

    return "[" + aggregator + "]";

  
  //aggregator will be a bunch of strings  [a, b, c] --> join(",") 'a,b,c'
  //loop through the elements and run stringifyJSON for each;
  //store result in a aggregate array;
  //convert the aggregate array into the desired result, a string, using join;
    } else {
    for (var key in obj) {
      if (obj[key]!==undefined && typeof obj[key] !== "function") {
      aggregator.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]))
      }
    };
    return "{" + aggregator + "}";
    }
  }
  //case 2: object literal;
  //use a for-in loop to traverse the object;
  //separate the keys and values of each property and use recursion of each;
};