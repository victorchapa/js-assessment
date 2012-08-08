if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    var fizzBuzz = function(num) {
      var hasValue = (num % 3 === 0 ) || (num % 5 === 0) ? true : false;
      var getResult = function(){
               return (num % 3 === 0) && (num % 5 === 0) ? "fizzbuzz" : (function(){
                   return (num % 3 === 0) ? "fizz" : "buzz";
                 })()
               }
               var result = hasValue ? getResult() : num;
               return result;
               }
               return {
                   fizzBuzz: fizzBuzz
                 };
});
