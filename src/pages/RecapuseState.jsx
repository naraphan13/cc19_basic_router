import React, { useState } from 'react'


function RecapuseState() {

const num = 5
const [number,setNumber] = useState(4)
console.log(number);

const hdlIncrease = ()=>{
console.log('Easy,useStatee');


}

  return (
    <div>
      <h1 className='text-8xl'>{number}</h1>
      <br />
      <button onClick={hdlIncrease} className='bg-green-500 p-2 hover:scale-105 hover:duration-300 rounded-md shadow-md hover:bg-green-700'>Increase</button>
    </div>
  )
}

export default RecapuseState