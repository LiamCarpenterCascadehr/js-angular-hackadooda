#JS/Angular Hackadooda

## Eyup!
This is an example 'Todo' app to help you get starting with NodeJS, AngularJS and Common JS JavaScript.

What you need to do is start by working through the 'Getting Started' section and then work through the tasks on the bottom of this page in whatever order you wish.

## Getting Started
1. Install [NodeJS](http://nodejs.org)
2. Clone this repository `git clone https://github.com/CascadeHR/js-angular-hackadooda.git`
3. Install the dependencies `cd js-angular-hackadooda && npm install`
4. Work through the tasks shown below. After completing a task, summon Me or Scoop to verify it so we can log the running scores.
5. If you make it through those then think of enhancements you can make to it to earn **bonus points**.

### Running / Building
- Run the application: `npm start`, then open a browser and go to http://localhost:8888
- Build the application: `npm run build`
- Test and lint the application: `npm run test`
- Watch the files and build on any changes: `npm run watch`

### Additional Info
- The Angular JavaScript code is in the `lib` folder.
- The code is written using CommonJS
    - a file is representative of a module
    - `require('../path/to/my/code')` is how to pull in other modules of code
    - `module.exports = function () { ... }` is how you expose code in a module
    - http://webpack.github.io/docs/commonjs.html
- CSS is done using SASS in the `sass` folder, for the most part this is just the same as CSS so you don't need to wory too much
    - http://sass-lang.com/guide


## Tasks
1. Total To-Dos doesn't work and needs to be fixed - **1 point**
    - The `getTotalTodos` function needs to return a count of all the todos that are in the `todos` array.
    - Fix the failing test for an additional - **1 point**

2. Extract the logic from clearCompleted and addTodo into the todoService - **2 points**
    - Look at how the existing `getTodos` function works.

3. Write some unit tests for the todo service - **3 points**
    - Look at what unit tests are already there to see how they work

4. Move the todo checkbox and span into the todoItem directive - **2 points**
    - The directive has a template property which holds what markup is to be output
    - If you can figure out how to move the template into a seperate file that will get you an extra - **2 points**

5. Add a filter bar that can filter between: All, Active and Completed todos. - **5 points**
    - You can use this for the UI: http://getbootstrap.com/components/#nav-pills
    - You can use angulars 'filters' for this, look at the existing nullStringify filter for a hint.

6. Add validation to the input form so that a blank item cannot be added - **2 points**
    - Look at using ng-class to dynamically add a class
    - Look at using ng-disabled to dynamically disable a form element

7. Extend the model ($scope) in the controller to add a timestamp and output the timestamp to the screen. Then create a filter to make the timestamp human readable (dd/MM/yyyy hh:mm). - **4 points**
    - You can use angulars 'filters' for this, look at the existing nullStringify filter for a hint.

8. Change the todoService to read data from local storage using the helper in the `lib/helpers` folder - **6 points**
