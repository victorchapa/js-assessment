if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    async : function() {
    },

    manipulateRemoteData : function(url) {
      return {
        then: function(cb){
          $.ajax({
            url: url
          }).done(function(data){
            var party = [];
            for(var x=0; x<=data.people.length-1; x++){
              var person = data.people[x].name;
              party.push(person);
            }
            return cb(party.sort());
          });
        }
     }
    }
  };
});
