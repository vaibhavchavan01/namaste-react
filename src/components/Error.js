import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1>Opps !!</h1>
            <h2>Somthing went wrong !!</h2>
            <h3>{err.status}: { err.statusText}</h3>
        </div>
    )
}

export default Error
