import React from 'react'
import Prueba from './inicio/Prueba'
import Apreparacion from './preparacion/Axplicacion/Apreparacion'
import Elementos from './inicio/Elementos'
import TimeLine from './preparacion/Axplicacion/TimeLine'

const Preparacion = () => {
  return (
    <div>
      <Apreparacion/>
      <Prueba elem={<Elementos h4={'" Modo de Preparación "'}/>}/>
      <Prueba elem={<TimeLine/>}/>
      {/* <div className='relleno'></div> */}
      {/* <Prueba elem={<Axplicacion/>}/> */}
    </div>
  )
}

export default Preparacion
