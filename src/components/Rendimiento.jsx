import "./rendimiento/rendimiento.css"
import Prueba from './inicio/Prueba'
import FondoA1 from './rendimiento/FondoA1'
import IconA1 from './rendimiento/iconA1'
import TitulosA from "./rendimiento/titulos/TitulosA"
import TituComple from "./rendimiento/titulos/TituComple"
import TituComple2 from "./rendimiento/titulos/TituComple2"
import TituComple3 from "./rendimiento/titulos/TituComple3"
import TituComple4 from "./rendimiento/titulos/TituComple4"
import FondoA21 from "./rendimiento/FondoA21"
import FondoA22 from "./rendimiento/FondoA22"
import FondoA23 from "./rendimiento/FondoA23"
import FondoA24 from "./rendimiento/FondoA24"
import IconA2 from "./rendimiento/IconA2"
import IconA3 from "./rendimiento/IconA3"
import IconA4 from "./rendimiento/IconA4"
import TituComple0 from "./rendimiento/titulos/TituComple0"
import TituComple1 from "./rendimiento/titulos/TituComple0"
import IconA0 from "./rendimiento/IconA0"

const Rendimiento = () => {
  return (
    <div>
      {/* <h4>Rendimiento</h4> */}
      {/* <div className='relleno'></div> */}
      <Prueba elem={<TitulosA complementos={<TituComple0/>}/>}/>
      <div className='rendimiento'>
        <Prueba elem={<FondoA1 icon={<IconA0/>}/>}/>
        <Prueba elem={<FondoA21/>}/>
      </div>
      <Prueba elem={<TitulosA complementos={<TituComple/>}/>}/>
      <div className='rendimiento'>
        <Prueba elem={<FondoA1 icon={<IconA1/>}/>}/>
        <Prueba elem={<FondoA22/>}/>
      </div>
      <Prueba elem={<TitulosA complementos={<TituComple2/>}/>}/>
      <div className='rendimiento'>
        <Prueba elem={<FondoA1 icon={<IconA2/>}/>}/>
        <Prueba elem={<FondoA23/>}/>
      </div>
      <Prueba elem={<TitulosA complementos={<TituComple3/>}/>}/>
      <div className='rendimiento'>
        <Prueba elem={<FondoA1 icon={<IconA3/>}/>}/>
        <Prueba elem={<FondoA23/>}/>
      </div>
      <Prueba elem={<TitulosA complementos={<TituComple4/>}/>}/>
      <div className='rendimiento'>
        <Prueba elem={<FondoA1 icon={<IconA4/>}/>}/>
        <Prueba elem={<FondoA24 />}/>
      </div>
      {/* <div className='relleno'></div> */}
    </div>
  )
}

export default Rendimiento
