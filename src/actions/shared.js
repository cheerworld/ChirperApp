import { getInitialData } from "../utils/api";
import { receiveTweets } from "./tweets";
import { receiveUsers } from "./users";

export function getData() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
      })
      .catch(() => {
        alert("An error occurred. Try again.");
      });
  };
}
