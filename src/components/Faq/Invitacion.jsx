import "./invitacion.css";
import { GiPriceTag } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { VscCheckAll } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";

const Invitacion = () => {
  return (
    <div>
    <fieldset>
        <legend>¡Atención Distribuidores!</legend>
            ¿Buscas un producto de alta rotación y calidad garantizada? Nuestra pre-mezcla pre-dosificada es la solución ideal para ofrecer a tus clientes.
            <br/>
            Este proceso garantiza que la pre-mezcla conserve su resistencia, adherencia y facilidad de aplicación.
            <ul>
                <li>Precios mayoristas exclusivos <GiPriceTag /></li>
                <li>Alto margen de ganancia  <FaMoneyBillTrendUp /></li>
                <li>Calidad garantizada para fidelizar clientes <VscCheckAll /></li>
                <li>Envíos y condiciones especiales para distribuidores  <CiDeliveryTruck /></li>
            </ul>
            Contáctanos para conocer nuestras tarifas y convertirte en distribuidor oficial. 
            <br/>
            <br/>
            <span>¡Crezcamos juntos!</span>
        </fieldset>
    </div>
  );
};

export default Invitacion;
