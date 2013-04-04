(function(){

  var Routine = function(){
    var routine = {};
    routine.subroutine = function(fn){
      var previous = window.routine;

      var execute = function(){
        if(invalidated){ return; }
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
    set.rerun = function(){
      _.invoke(set, 'call');
    };
    set.add = function(routine){
      if(!routine){
        set.push(routine);
      }
    }
    return set;
  };

  window.routine = Routine();

}());