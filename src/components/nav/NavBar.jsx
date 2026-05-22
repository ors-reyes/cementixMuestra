import { NavLink } from 'react-router-dom'
import "./navBar.css"

const NavBar = () => {
    const menuActive =()=>{
        const menu = document.querySelector(".menu")
        const nav = document.querySelector(".nav")
        nav.classList.toggle ("navActive")
        menu.classList.toggle ("menuActive")
      }
  return (
    <>
        <div className="navBar">
            <div className="menu" onClick={menuActive}></div>
            <div className="logo"></div>
            <div className="nav noiseB">
                <NavLink  to={"/"} className="navItem">
                    <div  onClick={menuActive}>INICIO</div>
                </NavLink>
                <NavLink  to={"/aplicaciones"} className="navItem">
                    <div  onClick={menuActive}>APLICACIONES</div>
                </NavLink>
                <NavLink  to={"/preparacion"} className="navItem">
                    <div  onClick={menuActive}>PREPARACIÓN</div>
                </NavLink>
                <NavLink  to={"/rendimiento"} className="navItem">
                    <div  onClick={menuActive}>RENDIMIENTO</div>
                </NavLink>
                <NavLink  to={"/variedad"} className="navItem">
                    <div  onClick={menuActive}>VARIEDAD</div>
                </NavLink>
                <NavLink  to={"/faq"} className="navItem">
                    <div  onClick={menuActive}>FAQ</div>
                </NavLink>
                <object className='rs' type='image/svg+xml' data='./redes.svg'></object>
            </div>
        </div>
        <div id="home"></div>
    </>
  )
}

export default NavBar
