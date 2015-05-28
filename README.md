# javascript-standards

This is meant to be the beginning guidelines for JavaScript code at SolutionStream. This guide represents our ES5
standards.We are
aligning ourselves
closely with the styleguides produced by Google (https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) and Airbnb (https://github.com/airbnb/javascript/tree/master/es5)

##Table of Contents
1. [Coding Principles](#coding-principles)
2. [Styles](#styles)
3. [Variables](#variables)
4. [Objects](#objects)
5. [Arrays](#arrays)
6. [Functions](#functions)
7. [Properties](#properties)
8. [Comparison Operators & Equality](#comparison-operators--equality)
9. [Blocks](#blocks)
10. [Whitespace](#whitespace)
11. [Method Chaining](#method-chaining)


## Coding Principles
* Readability
  * KISS - Keep it simple
  ```JavaScript
  //bad
  var luhnChk = (function (arr) {
    return function (ccNum) {
        var 
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;
 
        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }
 
        return sum && sum % 10 === 0;
    };
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));
  ```
  * Descriptive Code
    * Use descriptive functions and variable names
    ```JavaScript
    //bad
    var nm = 'Person Name';
    function process() {}
    function myFunction() {}
    angular.module('myApp', []);
    
    //good
    var patientName = 'Person Name';
    function processPatient() {}
    function login() {}
    angular.module('',[])
    ```
  * Avoid contractions
* Maintainability
  * 'use strict'
    * Without strict mode, assigning a value to an undeclared variable creates a global variable which can clobber
    other global variables. Strict mode throws an error and does not allow values to be assigned to undeclared
    variables.
    * Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global.
    In strict mode, this causes an error.
  * SRP - Single responsibility principle 
  * NPM and Bower support
  * Use lodash
  * Testing
  * Build Process
* Modularity
  * DRY - Don't repeat yourself
  * Leverage modules properly
    * Group code into related bundles. This way if you remove a module, your app still works.
      * app.controllers, app.services, etc will break your app if you remove them
      * app.users, app.users.edit, app.users.admin, app.projects, etc allows you to group and nest related components together and create loose coupling
      * Angular - spread route definitions across multiple .config() methods
      * Folder structure should reflect module structure
* Performance

## Styles

JSCS - JavaScript Code Style
* http://jscs.info/
* I want to start using the Google preset with the caveat of max line length of 120
* Can be run from the command line with the option to fix current JavaScript, not just lint

Naming
* Functions, Variables, Methods
  * Use Camel Case
    * functionNamesLikeThis
    * variableNamesLikeThis
    * methodNamesLikeThis
* Classes, Angular Controllers
  * Pascal Case
    * ClassNamesLikeThis
    * ControllerNamesLikeThis
  * Descriptive Suffix
    * HomeController
    * TabDirective
    * AuthenticationService
* Constants
  * All upper
    * CONSTANT_VALUES_LIKE_THIS

Strings
* Use single quotes for strings

Indentation
* Tabs as spaces
* 2 spaces for each indentation

Commenting
* In general, the code should be readable with little to no commenting nescessary
* Avoid comments like that state the obvious
```JavaScript
var apple = new Apple(); // initing the apple - NO!
```

##Variables
* Always declare with var
  * When you fail to specify var, the variable gets placed in the global context and can potentially clobber existing values
* Declare one variable per var statement, it makes it easier to re-order the lines.
```JavaScript
//right
var keys   = ['foo', 'bar'];
var values = [23, 42];

var object = {};
while (keys.length) {
  var key = keys.pop();
  object[key] = values.pop();
}

//wrong
var keys = ['foo', 'bar'],
    values = [23, 42],
    object = {},
    key;

while (keys.length) {
  key = keys.pop();
  object[key] = values.pop();
}
```

##Objects
* Use the literal syntax for object creation
```JavaScript
//bad
var item = new Object();

//good
var item = {};
```
* Don't use reserved words as keys. It won't work in strict mode
```JavaScript
//bad
var batman = {
  default: {
    name: 'Bruce Wayne'
  },
  private: true
}

//good
var batman = {
  defaults: {
    name: 'Bruce Wayne'
  },
  hidden: true
}
```
* Use readable synonyms in place of reserved words
```Javascript
//bad
var superman = {
  class: 'alien'
}

//bad
var superman = {
  klass: 'alien
}

//good
var superman = {
  type: alien
}
```

##Arrays
* Use the literal syntax for array creation
```JavaScript
//bad
var items = new Array()

//good
var items = [];
```
* Use array#push instead of a direct assignment
```JavaScript
var someStack = [];

//bad
someStack[someStack.length] = 'value';

//good
someStack.push('value');
```

##Functions
* Keep your functions short. A good function fits on a slide that the people in the last row of a big room can
comfortably read. So don't count on them having perfect vision and limit yourself to
   ~15 lines of code per function.
* Feel free to give your closures a name. It shows that you care about them, and will produce better stack traces,
heap and cpu profiles.
```JavaScript
//right
req.on('end', function onEnd() {
  console.log('winning');
});

//wrong
req.on('end', function() {
  console.log('losing');
});
```
* Ternary is fine when it serves a simple purpose
```JavaScript
var valid = (object && object.value) ? true : false
```
* Avoid ternary when using function operators and complex comparisons
```JavaScript
//bad
var valid = (checkObject(object) && checkObjectValue(object) === true) ? true : false;

//better
var valid = false;
if (checkObject(object) && checkObjectVAlue(object) === true) {
  valid = true;
}
```
* Avoid code inception at all costs
  * Makes reading/debugging the code super difficult
  * This includes closures within closures
  * Also includes jQuery this, this, this

##Properties
* Use dot notation when accessing properties
```JavaScript
var luke = {
  jedi: true,
  age: 28
};

//bad
var isJedi = luke['jedi'];

//good
var isJedi = luke.jedi;
```
* Use subscript notation `[]` when accessing properties with a variable
```JavaScript
var luke = {
  jedi: true,
  age: 28
};

function getProp(prop) {
  return luke[prop];
}

var isJedi = getProp('jedi');
```

##Comparison Operators & Equality
* Use === and !== over == and !=
* Use shortcuts.
```JavaScript
//bad
if (name !== '') {
  //stuff
}

//good
if (name) {
  //stuff
}

//bad
if (collection.length > 0) {
  //stuff
}

//good
if (collection.length) {
  //stuff
}
```
* Use descriptive conditions
```JavaScript
//right
var isValidPassword = password.length >= 4 && /^(?=.*\d).{4,}$/.test(password);

if (isValidPassword) {
  console.log('winning');
}

//wrong
if (password.length >= 4 && /^(?=.*\d).{4,}$/.test(password)) {
  console.log('losing');
}
```

##Blocks
* Use braces with *all* if statements
```JavaScript
//bad
if (false === true) login();

//good
if (false === true) {
  login();
}
```

##Whitespace
* Following JavaScript Code Style - Google Preset
* Use tabs as spaces set to 2 spaces
* Place 1 space before each leading brace
```JavaScript
//bad
if (false === true){

}

//good
if (false === true) {

}

//bad
function login(){

}

//good
function login() {

}
```
* Place 1 space before the opening parenthesis in control statements (if, while, etc). Place no space before the
argument list in function calls and declarations
```Javascript
//bad
if(false === true) {
}

//good
if (false === true) {
}

//bad
while(false === true) {
}

//good
while (false === true) {

}
```


##Method Chaining
* One method per line should be used if you want to chain methods
* You should also indent these methods so it's easier to tell they are part of the same chain
```JavaScript
//right
User
  .findOne({ name: 'foo' })
  .populate('bar')
  .exec(function(err, user) {
    return true;
  });

 //wrong
 User
 .findOne({ name: 'foo' })
 .populate('bar')
 .exec(function(err, user) {
   return true;
 });

 User.findOne({ name: 'foo' })
   .populate('bar')
   .exec(function(err, user) {
     return true;
   });

 User.findOne({ name: 'foo' }).populate('bar')
 .exec(function(err, user) {
   return true;
 });

 User.findOne({ name: 'foo' }).populate('bar')
   .exec(function(err, user) {
     return true;
   });
```
