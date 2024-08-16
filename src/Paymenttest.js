import React from 'react'

function Paymenttest() {


    const getData =(data)=>{
    
        return fetch('http://localhost:5000/api/payment', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }).then((response)=>{
          response.json()
        }).catch((error)=>{
          console.log(error)
        })
       
      
    }


    const makepayment = ()=>{
        getData({amount:10,email:'rg307125@gmail.com'}).then((response)=>{
          console.log(response)
        })
    }   
  return (
    <div>
      <button onClick={makepayment} className='btn btn-primary'> payment test</button>
    </div>
  )
}

export default Paymenttest
