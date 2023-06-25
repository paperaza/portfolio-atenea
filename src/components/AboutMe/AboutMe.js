import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks = [
        {
            name:"Github",
            link:"https://github.com/paperaza",
            logo:logoGithub,
        },

        {
            name:"Linkedin",
            link:"https://www.linkedin.com/in/paul-peraza-162390249/",
            logo:logoLinkeind,
        },

        {
            name:"Youtube",
            link:"https://www.youtube.com/channel/UCN5keskDtomQoAcnL532uuQ",
            logo:logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello I'm</p>
                        <p>Paul Andres Peraza Vidueñes</p>
                        <p>Sw Developer FrontEnd.</p>
                    </S.Title>
                    <S.DescriptionText>
                    Técnico en sistemas con conocimientos básicos en FrontEnd  utilizando 
                    lenguaje de Marcado de Hipertexto (HTML), hojas de estilo en cascada CSS  y 
                    lenguaje de secuencias de comandos JavaScript,  también creación de proyectos 
                    con REACT gracias a la culminación del curso básico FrontEnd que aprobe con 
                    Todos a la U y la universidad Distrital.
                    </S.DescriptionText>

                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a 
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                            
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/img/Logo.jpeg" alt="PaulPeraza - FrontEnd Developer"/>
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};

export default AboutMe