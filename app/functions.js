if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
     return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
      return fn.apply(obj);
    },

    functionFunction : function(f1) {
      return function(f2){ 
        return f1+', '+f2;
      };
    },

    partial : function(fn, str1, str2) {
      var partial = fn.bind(null, str1, str2);
      return partial;
    },

    useArguments : function() {
      var totalarguments = arguments.length-1,
          sum = 0;
      if(totalarguments<0){
        return (null);
      }else{
        for(var x=0; x<=totalarguments; x++){
          sum = sum + arguments[x];
        }
        return sum;
      }
    },

    callIt : function(fn) {
      var totalarguments = arguments.length-1,
          saveargu = [];
      if (totalarguments<0){
        return null;
      }else{
        for(var x=1; x<=totalarguments; x++){
          saveargu.push(arguments[x]);
        }
        return (fn.apply(null, saveargu));
      }
    },

    curryIt : function(fn) {
      console.log(fn);
      var totalarguments = arguments.length-1;
      console.log(totalarguments);
    },

    makeClosures : function(arr, fn) {

    }
  };
});
