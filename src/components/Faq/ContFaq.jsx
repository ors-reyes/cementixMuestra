import "./contFaq.css"
import { VscCheckAll } from "react-icons/vsc";
import { TbSquareNumber1Filled, TbSquareNumber2Filled, TbSquareNumber3Filled, TbSquareNumber4Filled  } from "react-icons/tb";
import { FaDiamond } from "react-icons/fa6";

const ContFaq = () => {
    return (
        <div className="faqConte y-500" style={{
        animation:"1s forwards y-100 ",
        opacity:"1",
        
        }}>
          <ul className="acordeon">
            <li>
              <input type="checkbox" id="uno"/>
              <label htmlFor="uno">1. ¿Qué ventajas tiene CEMENTIX Py frente a una mezcla tradicional?</label>
              <div className="respuesta">
                <p>
                <VscCheckAll fill="#143f30"/> Ahorra tiempo y esfuerzo, ya que no necesitas medir los materiales.
                <br/>
                <br/>
                <VscCheckAll fill="#143f30"/> Garantiza una dosificación exacta y homogénea, evitando errores humanos.
                <br/>
                <br/>
                <VscCheckAll fill="#143f30"/> Reduce el desperdicio y optimiza el uso de materiales.
                <br/>
                <br/>
                <VscCheckAll fill="#143f30"/> Menos polvo y suciedad en la obra, manteniendo un ambiente más limpio.
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="dos"/>
              <label htmlFor="dos">2. ¿Se puede usar en interiores y exteriores?</label>
              <div className="respuesta">
                <p>Sí, todas las variedades están diseñadas para resistir condiciones tanto en interiores como en exteriores, asegurando durabilidad y buen acabado en cualquier entorno.</p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="tres"/>
              <label htmlFor="tres">
                3. ¿Cómo se prepara la mezcla?
              </label>
              <div className="respuesta">
                <p>
                  <TbSquareNumber1Filled size="25" fill="#143f30"/> Vierte el contenido de la bolsa en un recipiente limpio.
                  <br/>
                  <br/>
                  <TbSquareNumber2Filled size="25" fill="#143f30"/> Agrega 2.5 litros de agua limpia por cada bolsa de 15 kg.
                  <br/>
                  <br/>
                    <TbSquareNumber3Filled size="25" fill="#143f30"/> Mezcla de manera manual o con una mezcladora mecánica hasta obtener una pasta homogénea.
                  <br/>
                  <br/>
                    <TbSquareNumber4Filled size="25" fill="#143f30"/> Deja reposar 10 minutos antes de aplicar.
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="cuatro"/>
              <label htmlFor="cuatro">
                4. ¿Cuánto rinde una bolsa de 15 kg?
              </label>
              <div className="respuesta">
                <p>
                <FaDiamond size="10" fill="#143f30"/> Dependerá del tipo de aplicación:
                <br/>
                <br/>
                <FaDiamond size="10" fill="#143f30"/> Mampostería: 11.25 kg por metro cuadrado.
                <br/>
                <br/>
                <FaDiamond size="10" fill="#143f30"/> Revoques y enlucidos: 11.25 kg por metro cuadrado.
                <br/>
                <br/>
                <FaDiamond size="10" fill="#143f30"/> Metros lineales de pegado de bloques: 15 kg por metro.
                <br/>
                <br/>
                <FaDiamond size="10" fill="#143f30"/> Carga de columnas con piedra triturada: 11.25 kg/m con 4 bolsas de piedra.
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="cinco"/>
              <label htmlFor="cinco">
                5. ¿La pre-mezcla impermeable realmente evita filtraciones?
              </label>
              <div className="respuesta">
                <p>
                  Sí, contiene aditivos especiales que repelen el agua, evitando filtraciones y humedad. Es ideal para zonas como baños, sótanos y paredes expuestas a la intemperie.
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="seis"/>
              <label htmlFor="seis">
                6. ¿Se puede almacenar por mucho tiempo?
              </label>
              <div className="respuesta">
                <p>
                  Sí, siempre y cuando la bolsa se mantenga cerrada y almacenada en un lugar seco y protegido de la humedad. La vida útil recomendada es de hasta 6 meses.
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="siete"/>
              <label htmlFor="siete">
                7. ¿Puedo usarla con otros aditivos o modificar la mezcla?
              </label>
              <div className="respuesta">
                <p>
                  No es necesario, ya que la fórmula está diseñada para ofrecer el mejor desempeño sin necesidad de agregar otros productos.
                </p>
              </div>
            </li>
            <li>
              <input type="checkbox" id="ocho"/>
              <label htmlFor="ocho">
                8. ¿Se puede aplicar en estructuras de carga?
              </label>
              <div className="respuesta">
                <p>
                  Sí, especialmente la Pre-Mezcla de Resistencia, que está formulada para soportar cargas estructurales en columnas, vigas y bases.
                </p>
              </div>
            </li>
          </ul>
        </div>
      );
}

export default ContFaq
