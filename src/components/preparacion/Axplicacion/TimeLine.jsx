import "./timeLine.css"
import { VscCheckAll } from "react-icons/vsc";
import { FaExclamationTriangle } from "react-icons/fa";
import { PiNumberOneFill } from "react-icons/pi";
import { PiNumberTwoFill } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";

const TimeLine = () => {
  return (
    <div className="timeLine y-500" style={{
        animation:"1s forwards y-100 ",
        opacity:"1",
        margin:"50px 0px 10px 0px"
        
        }}>
      <ul>
        <li>
          <div className="date">
            1) Preparación de los materiales y herramientas
          </div>
          <div className="title">
            Antes de iniciar, asegúrate de contar con lo siguiente:
          </div>
          <div className="descr">
            <VscCheckAll fill="#143f30"/> Bolsa de pre-mezcla pre-dosificada del tipo que necesites.
            <br />
            <br />
            <VscCheckAll fill="#143f30"/> Agua limpia (potable o de pozo sin impurezas).
            <br />
            <br />
            <VscCheckAll fill="#143f30"/> Recipiente o balde grande para mezclar.
            <br />
            <br />
            <VscCheckAll fill="#143f30"/> Paleta, cuchara de albañil o batidora mecánica (dependiendo del
            método de mezclado).
            <br />
            <br />
            <VscCheckAll fill="#143f30"/> Superficie limpia donde realizarás la mezcla.
          </div>
        </li>
        <li>
          <div className="date">2) Dosificación del agua</div>
          <div className="title">
            Para cada bolsa de 15 kg, agrega aproximadamente 2.5 litros de agua
            limpia.
          </div>
          <div className="descr">
            <FaExclamationTriangle fill="#143f30"/> Si la mezcla queda demasiado seca, añade pequeñas cantidades de
            agua gradualmente hasta lograr la consistencia deseada.
            <br />
            <br />
            <FaExclamationTriangle fill="#143f30"/> Evita el exceso de agua, ya que esto puede afectar la resistencia
            final de la mezcla.
          </div>
        </li>
        <li >
          <div className="date">3) Mezclado manual o mecánico</div>
          <div className="title">Puedes mezclar la pre-mezcla de dos formas:</div>
          <div className="title">
          <PiNumberOneFill size={25} fill="#143f30"/> Mezclado manual (para pequeñas cantidades):
          </div>
          <div className="descr">
            1. Vacía la bolsa de pre-mezcla en el recipiente o sobre una
            superficie limpia.
            <br />
            <br />
            2. Agrega el agua poco a poco mientras revuelves con la cuchara de
            albañil o paleta.
            <br />
            <br />
            3. Mezcla hasta obtener una pasta homogénea, sin grumos secos o
            exceso de agua.
          </div>
          <div className="title">
            <PiNumberTwoFill size={25} fill="#143f30"/> Mezclado mecánico (para mayor eficiencia y consistencia):
          </div>
          <div className="descr">
            1. Usa una mezcladora de concreto.(trompito)
            <br />
            <br />
            2. Vierte la pre-mezcla en el recipiente y añade el agua
            progresivamente.
            <br />
            <br />
            3. Mezcla durante 3 a 5 minutos hasta lograr una pasta uniforme.
          </div>
        </li>
        <li >
          <div className="date">4) Tiempo de reposo</div>
          <div className="title"></div>
          <div className="descr">
            <CiTimer size={25} fill="#143f30"/> Deja reposar la mezcla durante 10 minutos antes de su aplicación.
            Esto permite que los componentes se hidraten correctamente y
            optimiza la trabajabilidad del producto.
          </div>
        </li>
        <li >
          <div className="date">5) Aplicación</div>
          <div className="title"></div>
          <div className="descr">
            Una vez reposada, la mezcla está lista para usarse. Dependiendo del
            tipo de pre-mezcla y la aplicación, puedes extenderla con llana,
            cuchara de albañil o verterla en moldes o estructuras.
            <br />
            <br /><FaExclamationTriangle fill="#143f30"/>  Tiempo de uso recomendado: 
            <br/>
            Usa la mezcla en un plazo máximo
            de 60 minutos después de su preparación para evitar que pierda sus
            propiedades.
          </div>
        </li>
      </ul>

      <fieldset>
        <legend>Tip adicional:</legend>
            No agregues agua una vez que la mezcla haya comenzado a fraguar, ya que esto debilita su resistencia final.
            <br/>
            Este proceso garantiza que la pre-mezcla conserve su resistencia, adherencia y facilidad de aplicación.
        </fieldset>
        <div className="iconos">
          <div className="iconsA"></div>
          <div className="iconsB"></div>
      </div>
    </div>
  );
};

export default TimeLine;
