/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SECCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE"
};

/**
 * Reducers
 */

const INITAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function favorites(state = INITAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository }
  }),

  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
