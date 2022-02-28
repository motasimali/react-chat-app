import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import UserAddModal from '../../components/UserModal/UserAddModal'
import { AuthContext } from '../../context/AuthContext'
import './Home.css'

function HomePage() {
  const { user } = useContext(AuthContext)
  return <Container>{user ? <h4>Home Page</h4> : <UserAddModal />}</Container>
}
export default HomePage
