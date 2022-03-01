import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import UserAddModal from '../../components/UserModal/UserAddModal'
import { AuthContext } from '../../context/AuthContext'
import { MessengerPage } from '../Messenger'
import './Home.css'

function HomePage() {
  const { user } = useContext(AuthContext)
  return <Container>{user ? <MessengerPage /> : <UserAddModal />}</Container>
}
export default HomePage
