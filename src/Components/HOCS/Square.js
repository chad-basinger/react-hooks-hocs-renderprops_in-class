import React from 'react'
import withStyles from './withStyles'

const Square = props => {
  return (
    <div {...props} style={{withStyles}}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default Square