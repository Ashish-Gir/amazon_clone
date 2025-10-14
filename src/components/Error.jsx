import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <div className="errorPage">
            <h1 style={{textAlign:'center'}}> 404 Error </h1>
            <p>page not found</p>
          <Link  to={"/"}>go to home</Link>
        </div>
    </div>
  )
}

export default Error
