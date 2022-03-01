import React from 'react'
import './TopHeader.css'
import PropTypes from 'prop-types'

/**
 * Top bar header for App
 */
function TopHeaderComponent({ text }) {
  return (
    <div className="topHeaderContainer">
      <p className="topHeaderText pt-3">{text}</p>
    </div>
  )
}
TopHeaderComponent.propTypes = {
  /** Text to show on header */
  text: PropTypes.string.isRequired,
}
export default TopHeaderComponent
