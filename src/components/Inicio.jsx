import Beneficios from "./inicio/beneficios/Beneficios";
// import ContactoTitulo from "./contacto/ContactoTitulo";
import Elementos from "./inicio/Elementos";
import Lista from "./inicio/lista/Lista";
import Pala from "./inicio/pala/Pala";
import Precaucion from "./inicio/precaucion/Precaucion";
import Explicacion from "./inicio/presentacion/Explicacion";
import PromoTxt from "./inicio/promocion/PromoTxt";
import IndexA from "./inicio/promocion/svg/IndexA";
import IndexB from "./inicio/promocion/svg/IndexB";
import Prueba from "./inicio/Prueba";
import VariedadHa from "./inicio/variedades/VariedadHa";
const Inicio = () => {
  return (
    <>
      <Prueba elem={<Explicacion/>}/>
      <div className="tres">
        <Prueba elem={<PromoTxt/>}/>
        <div className="promoImg">
          <Prueba elem={<IndexA/>}/>
          <Prueba elem={<IndexB/>}/>
        </div>
      </div>
      <Prueba elem={<Elementos h4={'" Variedades disponibles "'}/>}/>
      <Prueba elem={<h2 className="tituH2 y100"  style={{animation:"1s y100 forwards"}}>Cada variedad de producto esta dosificado según su aplicación.</h2>}/>
      <VariedadHa/>
      <Prueba elem={<Elementos h4={'" Industria Paraguaya "'}/>}/>
      <Prueba elem={<Precaucion/>}/>
      <Prueba elem={<Lista/>}/>
      <Prueba elem={<Pala/>}/>
      <Prueba elem={<Beneficios/>}/>
      {/* <Prueba elem={<ContactoTitulo/>}/> */}
      
      {/* <div className="relleno2"></div> */}
    </>
  );
};

export default Inicio;
