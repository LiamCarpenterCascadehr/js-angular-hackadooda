#Angular JS Hackathon

## Eyup!
This is an example 'Todo' app to help you get starting with GitHub, NodeJS, AngularJS and Common JS JavaScript.

What you need to do is start by working through the 'Getting Started' section and then work through the issues on the GitHub issues page in numeric order. 
There is a prize for the person who can get through the most issues in this session.

First, lets watch this video for an overview of Angular JS:
- (Angular JS Tutorial)[https://www.youtube.com/watch?v=WuiHuZq_cg4]

## Getting Started
1. Install (NodeJS)[http://nodejs.org]
2. Clone this repository `git clone https://github.com/CascadeHR/js-todo-hackathon.git`
3. Install the dependencies `npm install`
2. Work through the (issues)[https://github.com/CascadeHR/js-todo-hackathon/issues]


## Tasks
- Total To-Dos doesn't work
    - The `getTotalTodos` function needs to return a count of all the todos that are in the `todos` array.
- Add a filter bar that can filter between: All, Active and Completed todos.
    - You can use this for the UI: http://getbootstrap.com/components/#nav-pills
    - You can use angulars 'filters' for this, look at the existing nullStringify filter for a hint.
- Extract the logic from clearCompleted and addTodo into a service
- Write some unit tests for the todo service
- Move the todo checkbox and span into the directive
- Add validation to the input form so that a blank item cannot be added
    - Look at using ng-class to dynamically add a class
    - Look at using ng-disabled to dynamically disable a form element
- Extend the model (scope) in the controller to add a timestamp. Then create a filter to make the timestamp human readable.
