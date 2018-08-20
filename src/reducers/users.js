import { RECEIVE_USERS } from '../actions/users'
import { SAVE_VOTE, ADD_QUESTION } from '../actions/questions'



export default function users (state = {}, action) {

  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case SAVE_VOTE :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
              ...state[action.authedUser].answers,
                [action.qid]: action.answer
                    }
      }
    }
    case ADD_QUESTION :
    console.log()
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions : [
            ...state[action.question.author].questions,
            [action.question.id]

          ]


        }
      }
    default :
      return state
  }
}