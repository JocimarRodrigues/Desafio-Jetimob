import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import {BiSolidHome} from "react-icons/bi"

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <div className={styles.logo}>
          <p>
            <span>Jet</span>imob Livraria
          </p>
          <BiSolidHome  size={25} style={{backgroundColor: "white", color: "#002a66", borderRadius: "50px", border: "5px solid white"}}/>
        </div>
        <div className={styles.links}>
          <Link to="/">Inicio</Link>
          <Link to="/novoLivro">Adicionar Livro</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
