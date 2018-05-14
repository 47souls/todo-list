import React from 'react'
import PropTypes from 'prop-types'

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
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
