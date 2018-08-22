import { _saveQuestion, _saveQuestionAnswer } from '../utils/_Data'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_VOTE = 'SAVE_VOTE'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions

  }
}

function vote ( authedUser, qid, answer) {

  return {
    type: SAVE_VOTE,
    authedUser,
    qid,
    answer,

  }

}

export function handleVote( authedUser, qid, answer) {

return (dispatch, getState) => {
  return _saveQuestionAnswer({
      authedUser,
      qid,
      answer

    })
    .then(() => dispatch(vote(authedUser, qid, answer)))
}


}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question) {

    return (dispatch, getState) => {
    const { authedUser } = getState()

    const optionOneText = question.optionOneText
    const optionTwoText = question.optionTwoText


    dispatch(showLoading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser

    })
    .then((question) => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
  }
}