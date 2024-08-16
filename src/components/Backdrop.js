import React from 'react'

function Backdrop({sidebar , closeback}) {
  return (
    <>
    <div className={sidebar?"backdrop backdropopen":"backdrop"} onClick={closeback}>
        
    </div> 
    </>
  )
}

export default Backdrop
