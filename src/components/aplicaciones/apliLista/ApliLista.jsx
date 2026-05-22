import "./apliLista.css"

const ApliLista = () => {
  return (
    // className="x-500" style={{
    //   animation:"1s forwards x-100 ",
    //   opacity:"1",
    //   margin:"50px 0px 10px 0px"
      
    //   }}
    <div className='contApliLista y-500' style={{
      animation:"1s forwards y-500 "
      
      }}>
        <ul className="apliSecc secc1">
            <li>Unir elementos de construcción.</li>
            <li>Construcción de muros.</li>
            <li>Reparar paredes.</li>
            <li>Colocación de tejas.</li>
            <li>Impermeabilización de paredes.</li>
            <li>Reparaciones estructurales.</li>
            <li>Nivelar superficies.</li>
            <li>Rellenar huecos.</li>
        </ul>
        <ul className="apliSecc secc1">
            <li>Carpetas para cerámicas.</li>
            <li>Asentar ladrillos.</li>
            <li>Baños y cocinas.</li>
            <li>Colocación de pisos.</li>
            <li>Revoques Interior / Exterior.</li>
            <li>Cimentación y muros de contención.</li>
            <li>Muros para tanque de agua subterránea.</li>
            <li>Levantar paredes.</li>
        </ul>
        <ul className="apliSecc secc1">
            <li>Sótanos y espacios subterráneos.</li>
            <li>Revestimientos.</li>
            <li>Muros de nivelación.</li>
            <li>Bloques de concreto o piedras.</li>
            <li>Terrazas y azoteas.</li>
            <li>Estacionamiento.</li>
            <li>Fachadas y muros exteriores.</li>
            <li>Encadenado y columnas de hormigón (agregando triturada).</li>
        </ul>
    </div>
  )
}

export default ApliLista
