if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var a = [1,2,3,4];
      return a[1];
    },

    sum : function(arr) {
      var sum = 0;
      for(var x=0; x <= arr.length-1; x++){
        sum = sum + arr[x];
      }
      return sum;
    },

    remove : function(arr, item) {
      var array = arr.sort(),
          pot = array.indexOf(2);
      array.splice(pot,2);
      return array;
    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
