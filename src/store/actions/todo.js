// adiciona no reducer de todos
export const addTodo = text => ({
  type: "ADD_TODO",
  payload: { text }
});
