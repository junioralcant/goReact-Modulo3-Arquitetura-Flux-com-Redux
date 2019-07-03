const INITAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Treinar Muay Thai" }
];

export default function todos(state = INITAL_STATE, action) {
  switch (action.type) {
    // Ad um todo
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }]; // Math.random() gera um id aletatório
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
