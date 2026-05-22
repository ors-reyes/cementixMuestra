import React from 'react'
import Prueba from './inicio/Prueba'
import Axplicacion from './aplicaciones/Axplicacion/Axplicacion'
import Elementos from './inicio/Elementos'
import ApliLista from './aplicaciones/apliLista/ApliLista'
// import Galeria from './aplicaciones/galeria/Galeria'
import FilterImagenes from './aplicaciones/filterImg/FilterImagenes'
import Galeria from './aplicaciones/galeria/Galeria'

const Aplicaciones = () => {
  return (
    <div>
      {/* <Prueba elem={Explicacion}/> */}
      {/* <Galeria/> */}
      <Prueba elem={<Elementos h4={'" APLICACIONES "'}/>}/>
      <Prueba elem={<Axplicacion/>}/>
      <Prueba elem={<ApliLista/>}/>
      {/* <Galeria/> */}
      {/* <h4>Ha</h4> */}
      <FilterImagenes/>
      {/* <div className='relleno'></div> */}
    </div>
  )
}

export default Aplicaciones
