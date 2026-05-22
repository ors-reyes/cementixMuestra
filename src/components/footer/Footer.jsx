// import React, { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
import "./footer.css"
import { TfiPaintBucket } from "react-icons/tfi";
import { GrDocumentPerformance } from "react-icons/gr";
import { BiSelection } from "react-icons/bi";
import { TbTrowel } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiConcreteBag } from "react-icons/gi";
import { TiLocationOutline } from "react-icons/ti";
import { FaArrowCircleUp } from "react-icons/fa";
// import ScrollToTop from "../ScrollToTop";

const Footer = () => {
    const gotop = ()=>{
            window.scrollTo(0,0)
    }
  return (
    <footer>
        <div className="separador"></div>
        <div className="contFooter">
            <div className="foo logoFoo"></div>
            <div className="foo part1">
                <ul>
                    <li><GiConcreteBag size={30}/> - Pre-M. Negra</li>
                    <li><GiConcreteBag size={30}/> - Pre-M. Blanca</li>
                    <li><GiConcreteBag size={30}/> - Pre-M. Impermeable</li>
                    <li><GiConcreteBag size={30}/> - Pre-M. Resistencia</li>
                </ul>
            </div>
            <div className="foo part2">
                <ul>
                    <li><TbTrowel size={30}/> - Aplicaciones</li>
                    <li><TfiPaintBucket size={30}/> - Preparación</li>
                    <li><GrDocumentPerformance size={30}/> - Rendimiento</li>
                    <li><BiSelection size={30}/> - Variedad</li>
                </ul>
            </div>
            <div className="foo phone">
                <ul>
                    <li className="titCF">CONTACTOS</li>
                    <li><FaWhatsapp size={30}/> +595 975 186 151</li>
                    {/* <li><FaWhatsapp size={30}/> +595 984 883 565</li> */}
                    <li><MdOutlineAlternateEmail size={30}/> ventas@cementixpy.com</li>
                </ul>
            </div>
            <div className="goTop" onClick={gotop}><FaArrowCircleUp size={40}/></div>
        </div>
        <div className="derechos">
            <div className="anio">Copyright 2025©</div>
            <object className='rsFoo' type='image/svg+xml' data='./redes.svg'></object>
            <div className="ubicacion"><TiLocationOutline size={30}/> - Amistad e/ Arsenales y López de Vega</div>
        </div>
        
    </footer>
  )
}

export default Footer
