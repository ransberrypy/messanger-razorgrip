import React from 'react'

function Messagebox({message}) {
    return (
        <div className="message">
            <p className='text'>
                {message.text}
            </p>
            <p className='meta'>Rans <span>{message.time}</span></p>
        </div>
    )
}

export default Messagebox
