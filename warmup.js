var myMax = function(array){
  var highNumber = null;
  array.forEach(function(el){
    if(el > highNumber){
      highNumber = el;
    }
  });
  return highNumber;
}

console.log("myMax: " + myMax([1, 2, 6, 3, 9, 8, 4]));

function vowelCount(string){
  return (string.match(/[aeiou]/g)).length;
}

console.log("my vowel count " + vowelCount("hi my name is kitter"));

function stringReverser(string){
  var reversedString = "";
  for (var i = (string.length - 1); i > -1; i--){
    reversedString += string[i];
  }
  return reversedString;
}

console.log("my reversed string " + stringReverser("this is a string"));

