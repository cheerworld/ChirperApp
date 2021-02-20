export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USERTWEET = "ADD_USERTWEET";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserTweet(tweet) {
  return {
    type: ADD_USERTWEET,
    tweet,
  }
}
