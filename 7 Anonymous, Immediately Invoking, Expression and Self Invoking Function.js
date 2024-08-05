// Anonymous Function

// Doesn't have any name or identity.
let x = function(){
    console.log('Hii');
}

x();



// Immediately Invoke Function 

// Declaration and Calling simultaneously.
// Can execute at that only, can't be repeated.

(function exec(){    // Named Function Expression  (Not difficult to use Recursion)
    console.log('Hello');
}) ();

(function (x){      // Anonymous Function Expression  (Difficult to use Recursion)
    console.log('sum :- ', x+x);
}) (5)



// Expression Function

// The above functions are examples of Expressions.
// Two Types



// Normal Function --- have declarations, others have calling in itself



// Self Invoking Function

// No need to Trigger Manually
// (Immediately Invoking Function)

