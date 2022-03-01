import React from 'react'
import './Message.css'
import PropTypes from 'prop-types'
import { getNameInitials } from '../../utils/utils'
function MessageComponent({ message, own }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <div className={own ? 'authorName you' : 'authorName'}>
          {own ? 'You' : getNameInitials(message.author)}
        </div>

        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{message.createdDate}</div>
    </div>
  )
}
MessageComponent.propTypes = {
  /** Text to show on header */
  message: PropTypes.object.isRequired,
  own: PropTypes.bool.isRequired,
}
export default MessageComponent
