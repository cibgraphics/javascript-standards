# javascript-standards

This is meant to be the beginning guidelines for JavaScript code at SolutionStream. We are aligning ourselves closely with the styleguides produced by Google (https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) and Airbnb (https://github.com/airbnb/javascript/tree/master/es5)

## Coding Principles
* Readability
  * KISS - Keep it simple
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
  * SRP - Single responsibility principle 
  * NPM and Bower support
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
    * 
Variables
* Always declare with var
  * When you fail to specify var, the variable gets placed in the global context and can potentially clobber existing values

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

