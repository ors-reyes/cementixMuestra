import "./variedadTextos.css"
import { VscCheckAll } from "react-icons/vsc";

const VariedadTextos = () => {
  return (
    <div className="variedadTextos">
        <div className="varieTxt1">
            <h2>¿QUÉ ES Y POR QUÉ DEBERÍAS USARLA?</h2>
            <br/>
            <p>La pre-mezcla pre-dosificada es un producto diseñado para garantizar la calidad y resistencia óptima en cada aplicación. Ya viene con la proporción exacta de cemento, agregados y aditivos, lo que elimina el margen de error y evita desperdicios.</p>
        </div>
        <div className="varieTxt2">
            <div>
                <p><VscCheckAll fill="#143f30"/> AHORRO DE TIEMPO</p>
                <p><VscCheckAll fill="#143f30"/> MEJOR CALIDAD Y RESISTENCIA</p>
                <p><VscCheckAll fill="#143f30"/> MÁS LIMPIEZA EN LA OBRA</p>
            </div>
            <div>
                <p><VscCheckAll fill="#143f30"/> MENOS MATERIAL DESPERDICIADO</p>
                <p><VscCheckAll fill="#143f30"/> MENOS TIEMPO DE TRABAJO</p>
                <p><VscCheckAll fill="#143f30"/> MENOR DESGASTE DE HERRAMIENTAS</p>
            </div>
        </div>
        <div className="varieTxt3">
            <h2>MODO DE EMPLEO</h2>
            <br/>
            <p>Amasar la pre-mezcla con agua limpia (aproximadamente 2,500 cc) por cada bolsa de 15 kg de forma manual o mecánicamente, hasta lograr una pasta homogénea; reposar por 10 minutos aproximadamente antes de aplicar.</p>
        </div>
        <div className="varieTxt4">
            <h3>Haz la prueba.</h3>
            <br/>
            <p>Si aún no has trabajado con pre-mezclas pre-dosificadas,te invitamos a probarla en tu próxima obra. ¡Notarás la diferencia desde el primer uso!</p>
        </div>
      
    </div>
  )
}

export default VariedadTextos
