import React from 'react';

const styles = {
    default: {
      color: '#0f0f0f',
      background:
        'linear-gradient(to bottom, #98989877, #d8d8d8 65%, #ababab33 100%',
      borderRadius: '4px',
      padding: '.4rem 1rem',
      border: '1px solid #d8d8d8ab',
      outline: 'none',
      fontSize: '1rem',
    },
  
    darkMode: {
      background: 'linear-gradient(to bottom, #000000 ,#434343 50%',
      color: 'white',
    },

    pinkMode: {
      background: '#ffc0cb',
      color: 'white'
    }
  }

const withStyles = (WrappedComponent) => {
    return (props) => {
        let style = { ...styles.default }
        //Styles will default to the default styling
        if (props.darkMode) {
          style = { ...style, ...styles.darkMode }
        }
        //If a prop of darkMode is provided, it will switch some of the styles to reflect that.
        if (props.pinkMode) {
          style = { ...style, ...styles.pinkMode }
        }

        return <WrappedComponent {...props} style={style}/>
    }
}

export default withStyles;