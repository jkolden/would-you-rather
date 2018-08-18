import { _saveQuestion } from '../utils/_Data'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions

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