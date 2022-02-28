import React, { useContext, useRef } from 'react'
import './UserAddModal.css'
import { Button, Form, Modal } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'
import { loginCall } from '../../authCalls'

/**
 * User Add Modal
 */
function UserAddModal() {
  const { isFetching, dispatch } = useContext(AuthContext)
  const name = useRef()
  const handleClick = (e) => {
    e.preventDefault()
    loginCall({ name: name.current.value }, dispatch)
  }
  return (
    <Modal
      show
      centered
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton={false}>
        <Modal.Title id="example-custom-modal-styling-title">
          Add Your User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleClick}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="string"
              placeholder="Enter Full Name"
              ref={name}
            />
            <Form.Text className="text-muted">
              This name will be displayed in each conversation.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isFetching}>
            Start Chatting
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
export default UserAddModal
