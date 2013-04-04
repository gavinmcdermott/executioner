var Reactive = function() {
  var value;
  var routines = new currentRoutine.Set();

  this.get = function() {
    routines.add(routine);
    return value;
  };

  this.set = function(input) {
    value === input || routines.rerun();
    return (value = input);
  };
};

// consumption code
var name = new Reactive();

name.set('Marcus');

alert(name.get());
// alerts 'Marcus'

name.set('Gavin');
// nothing happens;

// reactivity is set up here
currentRoutine.subroutine(function(){
  currentRoutine.subroutine(function(){
    alert(age.get());
  });
  alert(name.get());
});
// alerts 'Gavin'

name.set('Howard');
// alerts 'Howard'


// render = function() {
//   var context = new Context.Context();
//   context.run(function() {
//     renderData();
//   });
//   context.onInvalidate(function(){
//     render();
//   });
// };

// render();