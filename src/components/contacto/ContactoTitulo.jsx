import { useEffect } from "react"
import "./contactoTitulo.css"


const ContactoTitulo = () => {
  const enviar = document.querySelector("#enviar")
  useEffect(()=>{
    // console.log(enviar)
  })
  return (
    <div className="contactoTitulo">
      <h1>CONTÁCTANOS</h1>
      <form>
        <input className="nombre" placeholder="NOMBRE"/>
        <input className="telefono" placeholder="TELÉFONO"/>
        <textarea className="mensaje" placeholder="MENSAJE"/>
        <button className="enviar" id="enviar" onClick={(e)=>{e.preventDefault();}}>ENVIAR</button>
      </form>
    </div>
  )
}

export default ContactoTitulo
