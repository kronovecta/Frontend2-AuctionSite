import React from 'react'

const ErrorMessage = ({type, message}) => {
    let errorClass = "alert alert-" + type;
  return (
    <div className={errorClass}>{message}</div>
  )
}

export default ErrorMessage