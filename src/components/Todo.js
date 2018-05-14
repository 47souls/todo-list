import React from 'react'
import PropTypes from 'prop-types'
​
// That thing is presentational component
// so is has not state, no lifecycle hooks, written as
// functional component

// In constructor we pass object as properties of this component
// as return we implement render
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={ onClick }
    style={{
      textDecoration: completed? "line-through": "none"
    }}
  >
    {text}
  </li>
)

// Defining propety types to validate input
Todo.propTypes = {
  onClick: PropTypes.func.isRequired;
  completed: PropTypes.bool.isRequired;
  text: PropTypes.string.isRequired;
}

export default Todo
