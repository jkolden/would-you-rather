import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_VOTE } from '../actions/questions'


export default function questions (state = {}, action) {

  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      //const { question } = action
      return {
        ...state,
        [action.question.id]: action.question
        //todo: add the question id to the questions array on the user object
      }

    case SAVE_VOTE:

      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUser)
          }
        }
      }


    default :
      return state
  }
}