import Prueba from "../../inicio/Prueba"
import "./contIz.css"

const ContIz = () => {
  return (
    <div className="contenedorVariedades">
        <Prueba elem={
            <div className="contIz cont1 x-100"  style={{animation:"1s x-100 forwards"}}>
                <div className="contIcon">
                    <div className="iconVa icon1"></div>
                    <div className="tituVa">
                        <p>PRE-MEZCLA <br/><span>NEGRA</span> </p>
                        {/* <div>NEGRA</div> */}
                        <div>Cemento y arena</div>
                    </div>
                </div>
                <div className="contList">
                    <ul>
                        <li>Reparación de niveles en piso alisado.</li>
                        <li>Elaboración de carpeta para piso.</li>
                        <li>Elaboración de piso alisado.</li>
                        <li>Reparación de grietas estructurales y fisuras de paredes.</li>
                        <li>Reparación de quiebre de paredes para ductos etc.</li>
                    </ul>
                </div>
            </div>
        }/>
        <div className="contIz cont2 reverse">
            <div className="contIcon reverse">
                <div className="tituVa">
                    <p>PRE-MEZCLA <br/><span>BLANCA</span> </p>
                    {/* <div>NEGRA</div> */}
                    <div>Cemento, Arena y Cal</div>
                </div>
                <div className="iconVa icon2"></div>
            </div>
            <div className="contList">
                <ul className="reverse">
                    <li>Para asentar ladrillos.</li>
                    <li>Revoques exterior.</li>
                    <li>Reparaciones varias.</li>
                    <li>Revoques finos, acabados lisos.</li>
                </ul>
            </div>
        </div>
        <Prueba elem={
            <div className="contIz cont3 x-100"  style={{animation:"1s x-100 forwards"}}>
                <div className="contIcon">
                    <div className="iconVa icon3"></div>
                    <div className="tituVa">
                        <p>PRE-MEZCLA <br/><span>IMPERMEABLE</span> </p>
                        {/* <div>NEGRA</div> */}
                        <div>Cemento, Arena, Cal e Impermeable</div>
                    </div>
                </div>
                <div className="contList">
                    <ul>
                        <li>Colocación y reparación de techos.</li>
                        <li>Revoques interiores exteriores.</li>
                        <li>Mampostería de aislacion.</li>
                        <li>Trabajos de reparaciones de humedad.</li>
                        <li>Colocación de layotas y piedras exteriores.</li>
                        <li>Revoques interior exterior.</li>
                    </ul>
                </div>
            </div>
        }/>
        <div className='contIz cont4 reverse'>
            <div className="contIcon reverse">
                <div className="tituVa">
                    <p>PRE-MEZCLA <br/><span>DE RESISTENCIA</span> </p>
                    {/* <div>NEGRA</div> */}
                    <div>Cemento de Mayor Resistencia</div>
                </div>
                <div className="iconVa icon4"></div>
            </div>
            <div className="contList">
                <ul className="reverse">
                    <li>Bases y sobrecimientos de estructuras.</li>
                    <li>Columnas y vigas de refuerzo.</li>
                    <li>Reparaciones estructurales de concreto.</li>
                    <li>Pisos de alto tránsito o industriales.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ContIz
