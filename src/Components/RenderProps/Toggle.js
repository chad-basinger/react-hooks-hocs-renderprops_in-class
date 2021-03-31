import React, {useState} from 'react'

//use this Toggle to Open/Close a component :)
const Toggle = ({style, children}) => {
    const [isOpen, setIsOpen] = useState(true)
    // console.log(isOpen)


    return (
        
        <div>
            {
                //if toggle isOpen then display props.children, in this case the child is the h1 tag in renderProps.
                isOpen ? children : null
            }
            <button onClick={() => setIsOpen(!isOpen)}>
                Open/Close
                
            </button>
        </div>
    )
}

export default Toggle;
