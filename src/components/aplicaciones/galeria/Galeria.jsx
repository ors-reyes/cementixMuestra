import { useEffect } from "react"
import "./galeria.css"
import negra from '../../assets/images/galeria/negra.jpg'

const Galeria = () => {
    

  return (
    <div className="carousel" >
        {/* <img
            // src="../../assets/images/galeria/negra.jpg"
            src={negra}
            
        /> */}
        <div className="List">
            <div className="item" 
                style={{backgroundImage:"{negra}"}}
            >
                <div className="content">
                    <div className="title">Pre-mezcla</div>
                    <div className="name">NEGRA</div>
                    <div className="des">
                        <ul>
                            <li>Unir elementos de construcción.</li>
                            <li>Nivelar superficie.</li>
                            <li>Rellenar huecos.</li>
                            <li>Reparar estructuras.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item" 
                style={{backgroundImage:"url(../../assets/images/galeria/blanca.jpg)"}}
            >
                <div className="content">
                    <div className="title">Pre-mezcla</div>
                    <div className="name">BLANCA</div>
                    <div className="des">
                        <ul>
                            <li>Flexibilidad.</li>
                            <li>Permeabilidad.</li>
                            <li>Adhesión.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item" 
                style={{backgroundImage:"url(../../assets/images/galeria/impermeable.jpg)"}}
            >
                <div className="content">
                    <div className="title">Pre-mezcla</div>
                    <div className="name">IMPERMEABLE</div>
                    <div className="des">
                        <ul>
                            <li>Cimentación y muros de contención.</li>
                            <li>Terrazas y azoteas.</li>
                            <li>Baños y cocinas.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item" 
                style={{backgroundImage:"url(../../assets/images/galeria/resistencia.jpg)"}}
            >
                <div className="content">
                    <div className="title">Pre-mezcla</div>
                    <div className="name">RESISTENCIA</div>
                    <div className="des">
                        <ul>
                            <li>Muros de contención.</li>
                            <li>Almacenes.</li>
                            <li>Pistas deportivas.</li>
                            <li>Estacionamiento.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="arrows">
            <button className="prev"></button>
        </div>
    </div>
  )
}

export default Galeria
