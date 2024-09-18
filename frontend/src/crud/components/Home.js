// Aqui será criado o header do site com uma barra de navegação que usará Link para mudar o conteudo da página através do Outlet onde o conteúdo da próximas página será carregado abaixo

import "../css/reset.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
        <div> Olá </div>
    )
}

export default Home