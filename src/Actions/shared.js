import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../Actions/questions';
import { receiveUsers } from '../Actions/users';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}