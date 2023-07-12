import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
  const imgLogo = "https://img.freepik.com/vector-premium/joystick-gamepad-consola-juegos-o-controlador-juegos-juegos-computadora-icono-vector-3d-estilo-minimalista-dibujos-animados_365941-761.jpg?w=2000"
  return (
    <header>
      <img className="imgLogo" src= {imgLogo} alt="Imagen Logo" />

      <nav>

        <ul>
          <li>Consolas</li>
          <li>PS4</li>
          <li>PS5</li>
        </ul>
       
 
      </nav>


    <CartWidget/>
    </header>
  )
}

export default NavBar