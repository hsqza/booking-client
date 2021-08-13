import { BookingAPI } from 'api/BookingAPI'
import React, { useEffect } from 'react'

const Home = (): JSX.Element => {
  useEffect(() => {
    BookingAPI.showMessage('show-cookie')
      .then(({ data }) => console.log('SUCCESS ', data))
      .catch((e) => console.log('ERROR ', e.response.data))
  }, [])
  return (
    <div className='container-fluid'>
      <h1 className='p-5 text-center'>Home Page</h1>
    </div>
  )
}

export default Home
