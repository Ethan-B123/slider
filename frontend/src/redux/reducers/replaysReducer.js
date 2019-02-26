import { ADD_REPLAY } from "../actions/replayActions";

const dup = obj => JSON.parse(JSON.stringify(obj));

export default (state = [], action) => {
  switch (action.type) {
    case ADD_REPLAY:
      return [...dup(state), action.replay];
    default:
      return state;
  }
};
