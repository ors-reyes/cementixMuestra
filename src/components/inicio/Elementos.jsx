import React from 'react'

const Elementos = ({h4}) => {
  return (
    <div className='bg-a'>
      <h4  className="x-500" style={{
        animation:"1s forwards x-100 ",
        opacity:"1",
        margin:"50px 0px 10px 0px"
        
        }}>
        {h4}
        </h4>
    </div>
  )
}


export default Elementos
