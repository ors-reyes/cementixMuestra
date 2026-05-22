import "./variedadHa.css"
import useIntersection from '../../useIntersection'
import { useEffect } from "react"

const VariedadHa = () => {
    
    const [blancaRef, isIntersectingBlanca] = useIntersection({threshold:0.1,})
    useEffect(()=>{
        
        const blanca = blancaRef.current
        
        if(isIntersectingBlanca){
            const blanca = blancaRef.current
            blanca.childNodes.forEach(vari => {
                vari.classList.add ("varieAActive")
            });
        }
    })
  return (
    <>  
        <div className="variedadHa"  ref={blancaRef}>
            <div className="varie varieA">
                <div className="titulo">
                    <h2>
                        PRE-MEZCLA <br/>
                        NEGRA
                    </h2>
                    <p>Cemeto y Arena</p>
                    <br/>
                </div>
                <br/>
                <div className="descrip">
                Dosificación para reparaciones en estructuras con herrajes y trabajos que requieran mayor dureza.
                    <br/>
                    <br/>
                </div>
                <div className="lista">
                    <h3>Se usa en:</h3>
                    <br/>
                    <ul>
                        <li>Unir elementos de construcción.</li>
                        <li>Nivelar superficie.</li>
                        <li>Rellenar huecos.</li>
                        <li>Reparar estructuras.</li>
                    </ul>
                </div>
                <div className="icon"></div>
            </div>
            <div className="varie varieB">
                <div className="titulo">
                    <h2>
                        PRE-MEZCLA <br/>
                        BLANCA
                    </h2>
                    <p>Cemento , Arena y Cal</p>
                    <br/>
                </div>
                <br/>
                <div className="descrip">
                Su dosificación está preparada para trabajos de mamposterías y revoques, aportando mayor adherencia y consistencia.
                    <br/>
                    <br/>
                </div>
                <div className="lista">
                    <h3>Propiedades:</h3>
                    <br/>
                    <ul>
                        <li>Flexibilidad.</li>
                        <li>Permeabilidad.</li>
                        <li>Adhesión.</li>
                    </ul>
                </div>
                <div className="icon"></div>
            </div>
            <div className="varie varieC">
                <div className="titulo">
                    <h2>
                        PRE-MEZCLA <br/>
                        IMPERMEABLE
                    </h2>
                    <p>Cemento , Arena y Aditivos</p>
                    <br/>
                </div>
                <br/>
                <div className="descrip">
                Dosificada para formar una barrera impermeable que evita las filtraciones.
                    <br/>
                    <br/>
                </div>
                <div className="lista">
                    <h3>Se usa en:</h3>
                    <br/>
                    <ul>
                        <li>Cimentación y muros de contención.</li>
                        <li>Terrazas y azoteas.</li>
                        <li>Baños y cocinas.</li>
                    </ul>
                </div>
                <div className="icon"></div>
            </div>
            <div className="varie varieD">
                <div className="titulo">
                    <h2>
                        PRE-MEZCLA <br/>
                        DE RESISTENCIA
                    </h2>
                    <p>Cemento(+) y Arena</p>
                    <br/>
                </div>
                <br/>
                <div className="descrip">
                Especialmente dosificada para soportar condiciones extremas. Con adherencia y durabilidad superiores en sus aplicaciones.
                    <br/>
                    <br/>
                </div>
                <div className="lista">
                    <h3>Se usa en:</h3>
                    <br/>
                    <ul>
                        <li>Almacenes.</li>
                        <li>Pistas deportivas.</li>
                        <li>Estacionamiento.</li>
                        <li>Encadenado y columnas de hormigón (agregando triturada).</li>
                    </ul>
                </div>
                <div className="icon"></div>
            </div>
        </div>
    </>
  )
}

export default VariedadHa
