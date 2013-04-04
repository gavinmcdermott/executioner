(function(){

  var Routine = function(){
    var routine = {};
    routine.subroutine = function(fn){
      var previous = window.currentRoutine;

      var execute = function(){
        if(invalidated){ return; }
        var subroutine = window.currentRoutine = Routine();
        var invalidated;
        subroutine.invalidate = function(){
          execute();
          invalidated = true;
        };
        fn();
      };
      execute();

      window.currentRoutine = previous;
    };

    routine.Set = Set;
    return routine;
  };

  var Set = function(){
    var set = [];
    set.rerun = function(){
      _.invoke(set, 'call');
    };
    return set;
  };

  window.currentRoutine = Routine();

}());