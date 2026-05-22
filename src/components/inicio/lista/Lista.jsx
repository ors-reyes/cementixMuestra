import "./lista.css";
import { BsClipboard2CheckFill } from "react-icons/bs";
{/* <BsClipboard2CheckFill /> */}


const Lista = () => {
  return (
    <div className="lista2 x-100" style={{animation:"1s x-100 forwards"}}>
      <p><strong>Ahorro de tiempo:   <BsClipboard2CheckFill size={40} color="#000"/></strong>  Olvídate de medir y mezclar manualmente. Solo agrega agua y está lista para usar.
      </p>
      <p><strong>Mejor calidad y resistencia:   <BsClipboard2CheckFill size={40} color="#000" /></strong>  Cada bolsa está formulada para ofrecer un rendimiento uniforme, sin sorpresas.
      </p>
      <p><strong>Menos desperdicio:   <BsClipboard2CheckFill size={40} color="#000" /></strong>  Usas solo lo necesario, reduciendo pérdidas y costos.
      </p>
      <p><strong>Más limpieza en la obra:   <BsClipboard2CheckFill size={40} color="#000" /></strong>  Menos polvo y residuos en el ambiente de trabajo.
      </p>
    </div>
  );
};

export default Lista;
