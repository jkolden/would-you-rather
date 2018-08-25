import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'


export function handleInitialData () {

  return (dispatch) => {
    return getInitialData()
      .then(({users, questions}) => {
        //add these to the Redux store
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        //dispatch(setAuthedUser(AUTHED_ID))

      })

  }


}