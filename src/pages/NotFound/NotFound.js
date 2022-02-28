import React from 'react'
import './NotFound.css'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function NotFoundPage({ text }) {
  const navigate = useNavigate()
  function navigateToHomeScreen() {
    navigate({
      pathname: '/',
    })
  }
  return (
    <div className="content">
      <div className="notFoundContainer">
        <p className="notFoundText">{text}</p>
        <button
          className="button"
          type="button"
          onClick={() => navigateToHomeScreen()}
        >
          HOME
        </button>
      </div>
    </div>
  )
}
NotFoundPage.propTypes = {
  text: PropTypes.string.isRequired,
}
export default NotFoundPage
