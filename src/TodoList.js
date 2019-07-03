import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

// Lista os todos
const TodoList = ({ todos, addTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
    <button onClick={() => addTodo("Novo todo")}>Adicionar</button>
  </Fragment>
);

TodoList.protoTypes = {
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  // conecta com o reducer de todos e os retorna
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  // adiciona no reducer de todos
  addTodo: text => dispatch({ type: "ADD_TODO", payload: { text } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
