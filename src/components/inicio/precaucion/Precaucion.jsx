import "./precaucion.css";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiStoneWall } from "react-icons/gi";
import { FaBan } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaGlassWaterDroplet } from "react-icons/fa6";


const Precaucion = () => {
  return (
    <div className="x-100"  style={{animation:"1s x-100 forwards"}}>
        <div className="preIcon"></div>
      <fieldset className="preca">
        <legend>CEMENTIX Py</legend>
        <IoCheckmarkDoneSharp /> Tiene una infinidad de aplicaciones.<br/>
        <GiStoneWall /> Puedes reparar tus paredes, revocar tus murallas, agregándoles solo <FaGlassWaterDroplet /> (agua).<br/>
        <FaTrashAlt /> Olvídate de comprar todo por separado y pensar después qué  hacer con la sobra.<br/>
      </fieldset>
      <fieldset className="preca">
        <legend>IDEAL para:</legend>
          <ul>
            <li>Revoques finos en interiores y exteriores.</li>
            <li>Pegado de bloques y ladrillos en cualquier entorno.</li>
            <li>Reparaciones y nivelaciones en diversas superficies.</li>
          </ul>
      </fieldset>
      <fieldset className="preca">
        <legend>NO AGREGAR CEMENTO U OTROS ADITIVOS.</legend>
        Es una mezcla predosificada para evitar errores de dosajes y mantener una homogeneidad y óptima calidad.<br/>
        <FaBan color="red"/> No agregar cemento u otros aditivos.
      </fieldset>
      <div className="iconos">
          <div className="iconsA"></div>
          <div className="iconsB"></div>
      </div>
    </div>
  );
};

export default Precaucion;
