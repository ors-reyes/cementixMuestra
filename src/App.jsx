import { Route, Routes } from "react-router-dom"
import Inicio from "./components/Inicio"
import Variedad from "./components/Variedad"
import NavBar from "./components/nav/NavBar"
import Aplicaciones from "./components/Aplicaciones"
import Preparacion from "./components/Preparacion"
import Rendimiento from "./components/Rendimiento"
import FAQ from "./components/FAQ"
import Prueba from "./components/inicio/Prueba"
import ContactoTitulo from "./components/contacto/ContactoTitulo"
import Footer from "./components/footer/Footer"
// import ScrollToTop from "./components/ScrollToTop"
const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
      {/* <ScrollToTop/> */}
        <Route path="/" element={<Inicio/>} />
        <Route path="/aplicaciones" element={<Aplicaciones/>} />
        <Route path="/preparacion" element={<Preparacion/>} />
        <Route path="/rendimiento" element={<Rendimiento/>} />
        <Route path="/variedad" element={<Variedad/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Routes>
      <Prueba elem={<ContactoTitulo/>}/>
      {/* <Prueba elem={}/> */}
      <Footer/>
      {/* <div className="relleno2"></div> */}
    </>
  )
}

export default App
