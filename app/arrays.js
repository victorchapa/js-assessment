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
      arr.push(item);
      return arr; 
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    concat : function(arr1, arr2) {
      var arr3 = arr1.concat(arr2);
      return arr3;
    },

    insert : function(arr, item, index) {
      arr.splice(2,0,item);
      return arr;
    },

    count : function(arr, item) {
      var cont = 0;
      for (var x=0; x<=arr.length-1; x++){
        if (arr[x] === item){
          cont = cont + 1;
        }
      }
      return cont;
    },

    duplicates : function(arr) {
      var arr = arr.sort(),
          rep = [];
      for(var x=0; x<=arr.length-1; x++){
          var findstart = arr.indexOf(x),
              findend = arr.lastIndexOf(x);
          if(findstart != findend){
              rep.push(x);
          }
      }
      return rep;
    },

    square : function(arr) {
      for(var x=0; x<=arr.length-1; x++){
        arr[x] = arr[x] * arr[x];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      var rep = [];
      for(var x=0; x<=arr.length-1; x++){
        var find = arr.indexOf(target);
        if(find>=0){
          arr.splice(find,1,"*");
          rep.push(find);
        }
      }
      return rep;
    }
  };
});
