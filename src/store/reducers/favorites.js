const INITAL_STATE = [];

export default function favorites(state = INITAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          nome: "facebook/react",
          description:
            "A declarative, efficient, and flexible JavaScript library for building user interfaces",
          url: "www.github.com/facebook/react"
        }
      ];
    default:
      return state;
  }
}
