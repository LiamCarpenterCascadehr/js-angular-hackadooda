#Angular JS Hackathon

## Eyup!
This is an example 'Todo' app to help you get starting with GitHub, NodeJS, AngularJS and Common JS JavaScript.

What you need to do is start by working through the 'Getting Started' section and then work through the issues on the GitHub issues page in whatever order you wish.
There is a prize for the person who can get through the most issues in this session.

First, lets watch this video for an overview of Angular JS:
- [Angular JS Tutorial](https://www.youtube.com/watch?v=WuiHuZq_cg4)

## Getting Started
1. Install [NodeJS](http://nodejs.org)
2. Clone this repository `git clone https://github.com/CascadeHR/js-todo-hackathon.git`
3. Install the dependencies `npm install`
4. Work through the tasks shown below.
5. If you make it through those then think of enhancements you can make to it to earn *bonus points*.

### Running / Building
- Run the application: `npm start`
- Build the application: `npm run build`
- Test and lint the application: `npm run test`
- Watch the files and build on any changes: `npm run watch`

### Additional Info
- The Angular JavaScript code is in the `lib` folder.
- The code is written using CommonJS
    - a file is representative of a module
    - `require('../path/to/my/code')` is how to pull in other modules of code
    - `module.exports = function () { ... }` is how you expose code in a module
- CSS is done using SASS in the `sass` folder, for the most part this is just the same as CSS so you don't need to wory too much


## Tasks
1. Total To-Dos doesn't work - *1 point*
    - The `getTotalTodos` function needs to return a count of all the todos that are in the `todos` array.
    - Fix the failing test for an additional - *1 point*

2. Extract the logic from clearCompleted and addTodo into the service - *2 points*

3. Write some unit tests for the todo service - *3 points*

4. Move the todo checkbox and span into the directive - *2 points*

5. Add a filter bar that can filter between: All, Active and Completed todos. - *5 points*
    - You can use this for the UI: http://getbootstrap.com/components/#nav-pills
    - You can use angulars 'filters' for this, look at the existing nullStringify filter for a hint.

6. Add validation to the input form so that a blank item cannot be added - *2 points*
    - Look at using ng-class to dynamically add a class
    - Look at using ng-disabled to dynamically disable a form element

7. Extend the model (scope) in the controller to add a timestamp. Then create a filter to make the timestamp human readable (dd/MM/yyyy hh:mm). - *4 points*

8. Change the todoService to read data from local storage using the helper in the `lib/helpers` folder
