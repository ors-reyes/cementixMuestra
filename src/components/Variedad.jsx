import Elementos from "./inicio/Elementos"
import Prueba from "./inicio/Prueba"
import Imagen from "./Variedad/imagen/Imagen"
import "./Variedad.css"
import ContIz from "./Variedad/contenidos/ContIz"

import VariedaBloqueB from "./Variedad/contenidos/VariedaBloqueB"
import VariedadTextos from "./Variedad/contenidos/VariedadTextos"

const Variedad = () => {
  return (
    <div>
      <Prueba elem={<Imagen/>}/>
      <Prueba elem={<Elementos h4={'" Variedades "'}/>}/>
      <Prueba elem={<h2 className="tituH2 y100"  style={{animation:"1s y100 forwards"}}>Disponemos de cuatro tipos de pre-mezclas para adaptarnos a tus necesidades.</h2>}/>
      <ContIz/>
      <VariedaBloqueB/>
      <VariedadTextos/>
      
      {/* <div className='relleno'></div> */}
    </div>
  )
}

export default Variedad
