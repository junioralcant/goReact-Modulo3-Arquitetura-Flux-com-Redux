const INITAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Treinar Muay Thai" }
];

export default function todos(state = INITAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
