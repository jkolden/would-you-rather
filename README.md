This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project is the Would Your Rather application for the Udacity Nanodegree. The project uses the following technologies:
- React for rendering UI
- Redux for state management
- semantic-ui-react and material-ui for presentation components. Instructions for installings these will be provided below.

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

All of the users' scores can be accessed via the *Leaderboard* menu option. The cards for each user will be ranked such that the user with the most answers and questions asked will be presented first and the others will be presented accordingly by total score.

## Where the data comes from

The Data for this application comes from a static set up api's provided by Udacity. These api's can be found in the _Data.js file and contain the following methods:

1) `_getUsers()`: Returns an object containing all of the users registered to use the application

2) `_getQuestions()`: Returns an object containing all of the questions stored in the database.

3) `_saveQuestion(question)`: Saves a question to the database.

4) `_saveQuestionAnswer`: Saves each user's answer for a given question to the database.





