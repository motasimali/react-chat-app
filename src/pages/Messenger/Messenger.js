import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'
import './Messenger.css'
import {
  getMessages,
  setNewMessage,
  setPage,
} from '../../redux/messages/messages.actions'
import MessageComponent from '../../components/Message/Message'
import SendTextFormComponent from '../../components/SendTextForm/SendTextForm'

function MessengerPage({
  messages,
  loading,
  getAllMessages,
  pageIndex,
  totalPages,
  setMessagesPage,
  setArrivingMessage,
}) {
  const scrollRef = useRef()
  const { user } = useContext(AuthContext)
  const channel = new BroadcastChannel('app-data')
  const [loadingMore, setLoadingMore] = useState(false)

  const loadMore = () => {
    setLoadingMore(true)
    setMessagesPage(pageIndex + 1)
  }
  useEffect(() => {
    channel.onmessage = (event) => {
      setArrivingMessage(event.data)
    }
  }, [])
  useEffect(() => {
    const payload = {
      pageIndex,
    }
    getAllMessages(payload)
  }, [getAllMessages, pageIndex])
  useEffect(() => {
    if (!loadingMore) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setLoadingMore(false)
    }
  }, [messages])
  return (
    <div>
      {loading && user ? (
        <p>Loading</p>
      ) : (
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper"></div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              <div className="chatBoxTop">
                {pageIndex < totalPages ? (
                  <Button onClick={loadMore}>Show More</Button>
                ) : (
                  ''
                )}
                {messages.length ? (
                  messages.map((m, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={index} ref={scrollRef}>
                      <MessageComponent
                        message={m}
                        own={m.author === user.name}
                      />
                    </div>
                  ))
                ) : (
                  <span className="noConversationText">No messages</span>
                )}
              </div>
              <div className="chatBoxBottom">
                <SendTextFormComponent />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  loading: state.messages.loading,
  pageIndex: state.messages.pageIndex,
  totalMessages: state.messages.totalMessages,
  totalPages: state.messages.totalPages,
})
const mapDispatchToProps = (dispatch) => ({
  getAllMessages: (payload) => dispatch(getMessages(payload)),
  postNewMessage: (message) => dispatch(postMessage(message)),
  setMessagesPage: (page) => dispatch(setPage(page)),
  setArrivingMessage: (message) => dispatch(setNewMessage(message)),
})
MessengerPage.propTypes = {
  messages: PropTypes.array,
  loading: PropTypes.bool,
  pageIndex: PropTypes.number,
  totalPages: PropTypes.number,
  getAllMessages: PropTypes.func.isRequired,
  setMessagesPage: PropTypes.func.isRequired,
  setArrivingMessage: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, mapDispatchToProps)(MessengerPage)
