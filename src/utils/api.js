import {
  _getUsers,
  _getQuestions


} from './_Data.js'


export function getInitialData () {

  return Promise.all([
    _getUsers(),
    _getQuestions()
    ]).then(([users, questions]) => ({
      users,
      questions
    }))
}