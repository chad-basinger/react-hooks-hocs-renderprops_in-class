import React from 'react'
import withStyles from './withStyles';
import isAdmin from './isAdmin'

const Square = props => {
  return (
    <div {...props} style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
//only export/display if the component has the admin prop!!
export default isAdmin(withStyles(Square))