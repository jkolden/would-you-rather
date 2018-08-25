This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is the Would Your Rather application for the Udacity Nanodegree. The project uses React for rendering UI and Redux for state management. The project also makes use of two different UI libraries - semantic-ui-react and material-ui. Instructions for loading these will be provided below.

## Steps to install

Clone this repository into a local directly:

```git clone https://github.com/jkolden/would-you-rather.git```

Then navigate into the newly created directory and install the library dependencies:

- ```$ npm install @material-ui/core ```
- ```$ npm install semantic-ui --save ```

Then start the server
- Start the development server with npm start
- Open the browser at localhost:3000

## How to use the app

Upon launching the app the user will be automatically routed to the /login page for authentication. Any one of the following users can be selected:

  - Sarah Edo
  - Tyler McGinnis
  - John Doe

Once authenticated, the user will be routed to the main dashboard where they can see a list of *Would You Rather* questions that are answered and unanswered. Clicking the *View Poll* button will route the user to either the results of that poll (if they've already answered the question) or a page where they can register their vote to the question (if they haven't already answered the question).



