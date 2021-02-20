import { RECEIVE_USERS, ADD_USERTWEET } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_USERTWEET:
      return {
        ...state,
        [action.tweet.author]: {
          ...state[action.tweet.author],
          tweets: state[action.tweet.author].tweets.concat([action.id])
        }
      }
    default:
      return state;
  }
}
