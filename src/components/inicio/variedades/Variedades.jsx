import "./variedades.css"

const Variedades = (props) => {
  console.log(props)
  return (
    <div className="varie varieA varieAActive">
        <div className="titulo">
            <h2>PRE-MEZCLA <br/>{props.pre}</h2>
            <p>Cemeto y Arena</p>
            <br/>
        </div>
        <br/>
        <div className="descrip">Composición básica sirve de base a la mayoria de usos en trabajos de albañileria.<br/><br/>
        </div>
        <div className="lista">
            <h3>Se usa en:</h3>
            <br/>
            <ul>
                <li>Unir elementos de construcción.</li>
                <li>Nivelar superficie.</li>
                <li>Rellenar huecos.</li>
            </ul>
        </div>
        <div className="icon"></div>
    </div>
  )
}

export default Variedades
