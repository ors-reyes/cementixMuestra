import React from 'react'
import Elementos from "./inicio/Elementos"
import Prueba from "./inicio/Prueba"
import ContFaq from './Faq/ContFaq'
import Invitacion from './Faq/Invitacion'
const FAQ = () => {
  return (
    <div>
      <Prueba elem={<Elementos h4={'" Preguntas frecuentes "'}/>}/>
      <Prueba elem={<ContFaq/>}/>
      <Invitacion/>
      {/* <div className='relleno'></div> */}
    </div>
  )
}

export default FAQ
