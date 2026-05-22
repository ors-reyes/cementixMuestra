import "./beneficios.css"
import { VscCheckAll } from "react-icons/vsc";

const Beneficios = () => {
  return (
    <div className="beneficios y100" style={{animation:"1s y100 forwards"}}>
        <div className="bene contAbene">
          <h1>BENEFICIOS</h1>
          <br/>
          <div className="textBe">
            <p>- Mayor control de stock.</p>
            <p>- Practicidad.</p>
            <p>- Trabajabilidad.</p>
            <p>- Buena terminación.</p>
          </div>
          {/* <div className="iconBene0"></div> */}
        </div>
        <div className="bene contBbene">
          <div className="textBe">
            <p><VscCheckAll fill="#143f30"/> Evita errores de dosajes.</p>
            <p><VscCheckAll fill="#143f30"/> Evita Desperdicios.</p>
            <p><VscCheckAll fill="#143f30"/> Mantener una mezcla homogénea.</p>
          </div>
          <div className="iconBene1"></div>
        </div>
        <div className="bene contBbene">
          <div className="textBe">
            <p><VscCheckAll fill="#143f30"/> Ahorro tiempo.</p>
            <p><VscCheckAll fill="#143f30"/> Ahorro en mano de obra.</p>
            <p><VscCheckAll fill="#143f30"/> Ahorro en aditivos.</p>
          </div>
          <div className="iconBene2"></div>
        </div>
    </div>
  )
}

export default Beneficios
