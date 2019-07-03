import React, { Fragment } from "react";

import PropTypes from "prop-types";

import { bindActionCreators } from "redux";

import * as TodoActions from "./store/actions/todo";

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

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
