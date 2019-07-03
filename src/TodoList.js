import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

TodoList.protoTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  ).isRequired
};

const mapStateToProps = state => ({
  // conecta com o reducer de todos
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
