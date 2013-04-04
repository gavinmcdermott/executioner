var Reactive = function() {
  var value;
  var routines = new routine.Set();

  this.get = function() {
    // whatever routine is currently going on
    // is dependent upon this get
    routines.push(routine);
    return value;
  };

  this.set = function(input) {
    value === input || routines.invalidate();
    return (value = input);
  };

};

// debugger;
// consumption code
var llama = new Reactive();

llama.set('Marcus');

alert(llama.get());
// alerts 'Marcus'

llama.set('Gavin');
// nothing happens;

// reactivity is set up here
routine.sub(function(){
  alert(llama.get());
});
// alerts 'Gavin'

llama.set('Howard');
// alerts 'Howard'

