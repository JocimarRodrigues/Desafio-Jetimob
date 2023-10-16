import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../../components/Container'
import Navbar from '../../components/Navbar'

const LayoutPage = () => {
  return (
    <main>
        <Navbar />
        <Container>
            <Outlet />
        </Container>
    </main>
  )
}

export default LayoutPage