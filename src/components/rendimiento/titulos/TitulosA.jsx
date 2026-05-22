import "./titulosA.css"

const TitulosA = ({complementos}) => {
  return (
    <div className='titulosA'>
        <svg viewBox="0 0 5000 1000" className="titulosAsvg">
        {/* <rect x="0" y="0" width="5000" height="1000"/> */}
        {complementos}

        <polyline class="lineTitulo" points="4749,922.1 1600,922.1 1600,820.3 "/>
        <polyline class="lineAtras" points="249,922.1 808.9,922.1 808.9,820.3 "/>
        <line class="lineReglaVert" x1="705.3" y1="79.4" x2="705.3" y2="769.4"/>
        
        <path class="lineCuadrado" d="M942.8,79.4H1466c45.9,0,83.4,37.5,83.4,83.4v523.2c0,45.9-37.5,83.4-83.4,83.4H942.8
            c-45.9,0-83.4-37.5-83.4-83.4V162.8C859.4,117,896.9,79.4,942.8,79.4z"/>
        <g>
            <line class="lineLargoTitulo" x1="705.3" y1="79.4" x2="810.3" y2="79.4"/>
            <line class="lineLargoTitulo" x1="705.3" y1="424.4" x2="810.3" y2="424.4"/>
            <line class="lineLargoTitulo" x1="705.3" y1="769.4" x2="810.3" y2="769.4"/>

            <line class="lineLargoTitulo" x1="859.4" y1="922.1" x2="859.4" y2="817.1"/>
            <line class="lineLargoTitulo" x1="1204.4" y1="922.1" x2="1204.4" y2="817.1"/>
            <line class="lineLargoTitulo" x1="1549.4" y1="922.1" x2="1549.4" y2="817.1"/>
        </g>
        <g>
            <line class="lineMedianoTitulo" x1="780.3" y1="252.2" x2="705.3" y2="252.2"/>
            <line class="lineMedianoTitulo" x1="780.3" y1="596.7" x2="705.3" y2="596.7"/>
            <line class="lineMedianoTitulo" x1="1032.2" y1="847.1" x2="1032.2" y2="922.1"/>
            <line class="lineMedianoTitulo" x1="1376.7" y1="847.1" x2="1376.7" y2="922.1"/>
        </g>
        <g>
            <line class="lineCortoTitulo" x1="705.3" y1="338.3" x2="755.3" y2="338.3"/>
            <line class="lineCortoTitulo" x1="705.3" y1="166" x2="755.3" y2="166"/>
            <line class="lineCortoTitulo" x1="705.3" y1="510.6" x2="755.3" y2="510.6"/>
            <line class="lineCortoTitulo" x1="705.3" y1="682.8" x2="755.3" y2="682.8"/>
            <line class="lineCortoTitulo" x1="1118.3" y1="872.1" x2="1118.3" y2="922.1"/>
            <line class="lineCortoTitulo" x1="946" y1="872.1" x2="946" y2="922.1"/>
            <line class="lineCortoTitulo" x1="1290.6" y1="922.1" x2="1290.6" y2="872.1"/>
            <line class="lineCortoTitulo" x1="1462.8" y1="872.1" x2="1462.8" y2="922.1"/>
        </g>
        
        <line class="lineReglaHori" x1="859.4" y1="922.1" x2="1549.4" y2="922.1"/>
        </svg>
    </div>
  )
}

export default TitulosA
