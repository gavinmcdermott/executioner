var Reactive = function() {
  var value;
  var routines = new routine.Set();

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
var person = new Reactive();

person.set('gavin');
person.get();
person.set('howard');
person.get(); //returns howard

// reactivity is set up here
// routine.subroutine(function(){
//   routine.subroutine(function(){
//     alert(age.get());
//   });
//   alert(name.get());
// });

