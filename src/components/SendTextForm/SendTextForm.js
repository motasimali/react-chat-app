import React, { useContext, useRef } from 'react'
import './SendTextForm.css'
import { Form } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'
import { parseDateToISO } from '../../utils/utils'
function SendTextFormComponent() {
  const { user } = useContext(AuthContext)
  const textArea = useRef()
  const channel = new BroadcastChannel('app-data')
  const handleOnChange = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      e.preventDefault()
      const message = {
        author: user.name,
        text: textArea.current.value,
        createdDate: parseDateToISO(new Date()),
      }
      // postNewMessage(message)
      channel.postMessage(message)
      textArea.current.value = ''
    }
  }
  return (
    <Form className="w-100">
      <Form.Group className="mb-3" controlId="name">
        <Form.Control
          as="textarea"
          rows={3}
          onKeyPress={handleOnChange}
          placeholder="Enter message to send"
          ref={textArea}
        />
      </Form.Group>
    </Form>
  )
}
export default SendTextFormComponent
