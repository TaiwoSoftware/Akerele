import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='error'>
        <h1>404 error 😎</h1>
        <Link to='/'>
        <p>Back home</p>
        </Link>
    </div>
  )
}

export default ErrorPage