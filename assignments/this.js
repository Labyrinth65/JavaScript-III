/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global object binding means when in global scope the value of "this" will be the window/console;
* 2. Implicit means this will refer to the object the function/method it's called on
* 3. New means this will refer to the specific instance of the object that's created and returned
* 4. Explicit means assigning the this using the .call .apply or .bind methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const Obj = function(ele){
    ele.func = function() {
        console.log(this.num);
    };
};

const ex = {num: 3};

Obj(ex);

ex.func();

// Principle 3

// code example for New Binding

function Math1(num) {
    this.num = num;
    this.double = function() {
        console.log(this.num * 2);
    };
}

const four = new Math1(2);
const two = new Math1(1);

four.double();
two.double();

// Principle 4

// code example for Explicit Binding
four.double.call(two);
