import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Loading, Navbar } from '../components'
const HomeLayout = () => {
  const navigation = useNavigation()
  const loading = navigation.state === 'loading'
  return (
    <>
  <Header/>
  <Navbar/>
  {
    loading ? <Loading/> :
        <section className='align-element'>
        <Outlet />
      </section> }
    </>
  )
}

export default HomeLayout