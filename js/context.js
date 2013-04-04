(function(){

  var Routine = function(){
    var routine = {};
    routine.sub = function(fn){
      var previous = window.routine;

      var execute = function(){
        if (invalidated) { return; }
        var subroutine = window.routine = Routine();
        var invalidated;
        subroutine.invalidate = function(){
          execute();
          invalidated = true;
        };
        fn();
      };
      execute();

      window.routine = previous;
    };

    routine.Set = Set;
    return routine;
  };

  var Set = function(){
    var set = [];
    set.invalidate = function(){
      _.invoke(set, 'invalidate');
    };
    return set;
  };

  window.routine = Routine();
  window.routine.invalidate = function(){};

}());