import React, { useState, useEffect } from 'react'

const isAdmin = (WrappedComponent) => {
    return (props) => {
        const [isAdmin, setAdmin] = useState(false)

        useEffect(() => {
            if(props.admin) {
                setAdmin(true)
            } else {
                setAdmin(false)
            }
        }, props.admin)

        return isAdmin ? <WrappedComponent {...props}/> : <div></div>
    }
}

export default isAdmin;