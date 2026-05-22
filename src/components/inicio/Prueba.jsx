import { useEffect, useState } from 'react'
import useIntersection from '../useIntersection'

const Prueba = ({elem}) => {
    const [elementoRef, intersection] = useIntersection({threshold: 0.3,})
    const elemento = elementoRef.current
    const [views, setViews]= useState(false)
    useEffect(()=>{
        if(intersection){
          setViews(intersection)
            // console.log(elemento.children[0])
        }
    })
  return (
    <div className='intersection' ref={elementoRef}>
      {views ? elem : <div className='relleno'></div>}
    </div>
  )
}

export default Prueba
