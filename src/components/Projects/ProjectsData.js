import chkraImage from "../../images/techs/chakra.png";
import reactBootstrapImage from "../../images/techs/react-bootstrap.png";
import reactRouterdomImage from "../../images/techs/react-router-dom.png";
import sassImage from "../../images/techs/sass.png";
import reactImage from "../../images/techs/react.png";
import semanticImage from "../../images/techs/semantic.png";
import styledImage from "../../images/techs/styled-logo.png";
import viteImage from "../../images/techs/vite.png";
import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";
import gasolineraProject from "../../images/projects/gasolinera.jpeg";
import marvelProject from "../../images/projects/marvel.jpeg";
import rickMorty from "../../images/projects/rick-morty.jpeg";
import tareasProject from "../../images/projects/todo.jpeg";

export const projectsPortfolio = [

    {
        title: "Rick & Morty API",
        image: rickMorty,
        techs:[
            {name:"React", src:reactImage},
            {name:"CSS",   src:cssImage  },
        ],
        description: "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
        repository: "https://github.com/paperaza/rick-and-morty.git",
        website:"https://radiant-kelpie-4ab10d.netlify.app/",
    },

    {
        title: "Todo list",
        image: tareasProject,
        techs:[
            {name:"React", src:reactImage},
            {name:"Semantic UI React",   src:semanticImage  },
        ],
        description: "Application created with React JS and Semantic UI, to make a list of tasks where you can add or remove it.",
        repository: "https://github.com/paperaza/Gestor-de-tareas.git",
        website:"https://grand-queijadas-464d13.netlify.app/",
    },

    {
        title: "Simpsons API",
        image: simpsonProject,
        techs:[
            {name:"React JS", src:reactImage},
            {name:"Styled Components",   src:styledImage  },
        ],
        description: "Application created with React JS and Styled Componets to meke request an external API of Simpsons. ",
        repository: "https://github.com/paperaza/phrases-simpsons.git",
        website:"https://64978e7e93d707347e1f1db6--fabulous-puffpuff-0b9e9e.netlify.app/",
    },

    {
        title: "Marvel API",
        image: marvelProject,
        techs:[
            {name:"React", src:reactImage},
            {name:"React Router",   src:reactRouterdomImage },
            {name:"Sass",   src:sassImage },
            {name:"Semantic",   src:semanticImage },
        ],
        description: "Application created with React JS, React-Router and Sass to make a request an external API of Marvel.",
        repository: "https://github.com/paperaza/marvel-react.git",
        website:"https://648e4623b952095a2a052cd2--precious-lily-175817.netlify.app/",
    },

    {
        title: "Dynamic Form",
        image: dynamicFormProject,
        techs:[
            {name:"Reac JS", src:reactImage},
            {name:"React Bootstrap",   src:reactBootstrapImage  },
        ],
        description: "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
        repository: "https://github.com/paperaza/dynamic-form.git",
        website:"https://6484f56e691fdf2c32a037f7--zesty-pasca-993d35.netlify.app/",
    },

    {
        title: "Fuel Station",
        image: gasolineraProject,
        techs:[
            {name:"Vite", src:viteImage},
            {name:"Chakra",   src:chkraImage},
            {name:"React Router DOM",   src:reactRouterdomImage},
        ],
        description: "Application created with Vite where you can save the information and see it on a summary",
        repository: "https://github.com/paperaza/gasolinera-react.git",
        website:"https://6498aea47a500b46ef29bf73--precious-gelato-92aee5.netlify.app/",
    },
    
];


