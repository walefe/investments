const INITIAL_STATE = [];

export default function investments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@td/ADD_INVESTMENT':
      return [...state, action.investment];

    case '@bt/ADD_INVESTMENT':
      return [...state, action.investment];
    default:
      return state;
  }
}
