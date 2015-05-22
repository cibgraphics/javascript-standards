# javascript-standards

This is meant to be the beginning guidelines for JavaScript code at SolutionStream. We are aligning ourselves closely with the styleguides produced by Google (https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) and Airbnb (https://github.com/airbnb/javascript/tree/master/es5)

## Coding Principles
* Readability
  * KISS - Keep it simple
  ```JavaScript
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
    var patientNAme = 'Person Name';
    function processPatient() {}
    function login() {}
    angular.module('',[])
    ```
  * Avoid contractions
* Maintainability
  * 'use strict' 
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
