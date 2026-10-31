import React from 'react'
import { useRouteError } from 'react-router-dom'



const ErrorElement = () => {
    const error = useRouteError()
    console.log(error);
    
  return (
    <div>Damn this error is new. contact someone else don't disturb us</div>
  )
}

export default ErrorElement