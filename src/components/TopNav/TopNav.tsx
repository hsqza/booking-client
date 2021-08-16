import React from 'react'
import { BookingAPI } from 'api/BookingAPI'
import { useHistory, Link } from 'react-router-dom'
import { useAppSelector } from 'store/hooks'
import { PATH_URL } from 'config/pathUrl'

const TopNav = (): JSX.Element => {
  const history = useHistory()
  const { user } = useAppSelector((state) => state.auth)
  let links: JSX.Element | null = <></>

  const onLogout = () =>
    BookingAPI.logoutUser()
      .then(() => history.push(PATH_URL.login))
      .catch((e) => console.log('Error ', e))

  if (user.email) {
    links = (
      <>
        <Link className='nav-link' to='/'>
          Home
        </Link>
        <Link className='nav-link' to='/logout' onClick={onLogout}>
          Logout
        </Link>
      </>
    )
  } else {
    links = (
      <>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </>
    )
  }

  return (
    <div className='nav bg-light d-flex justify-content-between'>{links}</div>
  )
}

export default TopNav
