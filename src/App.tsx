import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import Home from 'pages/booking/Home'
import Login from 'pages/auth/Login'
import Register from 'pages/auth/Register'
import { setUser } from 'store/slice/authSlice'
import { useAppDispatch } from 'store/hooks'
import { TopNav } from 'components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BookingAPI } from 'api/BookingAPI'
import { User } from 'interface'
import { PATH_URL } from 'config/pathUrl'

function App(): JSX.Element {
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    if (
      ![PATH_URL.register, PATH_URL.login].includes(
        pathname as PATH_URL.register | PATH_URL.login,
      )
    ) {
      BookingAPI.userInfo()
        .then((res) => {
          const user = res.data.user as User
          dispatch(setUser(user))
        })
        .catch((e) => console.log('Error ', e))
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <TopNav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>

      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default App
