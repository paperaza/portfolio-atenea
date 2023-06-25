import React, {useState} from "react";
import * as S from "./NavBar.styles"; //(* as S = importar tido como S)la (S) es el alias con la que llamamos los estilos S.

const NavBar = () => {
    const [showMenuBurger, setShowMenuBurger] = useState(false);
    const clickItemNav = (item) => {
        console.log(item);
        document.getElementById(item).scrollIntoView({behavior:"smooth"})
    };

    return (
        <S.ContainerNavBar>
            <S.ContainerLogo>
                <S.ImageLogo src="/img/Logo.jpeg" alt="Logo Paul"/>
                <div>
                    <h1>Paul Peraza</h1>
                    <h2>Sw Developer FrontEnd.</h2>
                </div>
            </S.ContainerLogo>

            <S.ContainerBurger onClick={() => setShowMenuBurger(!showMenuBurger)}>
                <S.BurgerMenu/>
                <S.BurgerMenu/>
                <S.BurgerMenu/>
            </S.ContainerBurger>

            <S.ContainerItems showMenuBurger = {showMenuBurger}>
                <p onClick={() => clickItemNav("about-me")}>About Me</p>
                <p onClick={() => clickItemNav("projects")}>Projects</p>
                <S.Button onClick={() => clickItemNav("contact")}>🤙 Contact me</S.Button>
            </S.ContainerItems>

        </S.ContainerNavBar>
    );
}

export default NavBar;
