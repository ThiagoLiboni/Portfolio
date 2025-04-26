import { useLocation, useNavigate } from "react-router-dom";
import HomePage from "./component/HomePage.jsx";
import Ability from "./component/Abilities.jsx";
import Projects from "./component/Projects.jsx";
import Contacts from "./component/Contacts.jsx";
import "../public/style-e-btn.css";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let element;

  switch (location.pathname) {
    case "/":
      element = <HomePage />;
      break;
    case "/skills":
      element = <Ability />;
      break;
    case "/projects":
      element = <Projects />;
      break;
    case "/contacts":
      element = <Contacts />;
      break;
  }
  function homePage() {
    window.location.assign("/");
    toggleBurguer();
  }
  function skillsPage() {
    navigate("/skills");
    toggleBurguer();
  }
  function projectsPage() {
    navigate("/projects");
    toggleBurguer();
  }
  function contactsPage() {
    navigate("/contacts");
    toggleBurguer();
  }

  const [isIconActived, setIsIconActived] = useState(false);
  const [isMenuExtended, setIsMenuExtended] = useState(true);
  const [isMenuContracted, setIsMenuContracted] = useState(false);

  const toggleBurguer = () => {
    if (isMenuContracted) {
      setIsIconActived((prev) => {
        const newState = !prev;
        if (newState) {
          setTimeout(() => {
            setIsMenuExtended(true);
          }, 700);
        } else {
          setIsMenuExtended(false);
        }

        return newState;
      });
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setIsMenuExtended(false);
        setIsMenuContracted(true);
      }else{
        setIsMenuExtended(true);
        setIsMenuContracted(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="bg-image position-absolute w-100" style={{height:"90vh"}}></div>
      <nav className="navbar nav-top fixed-top">
        <h2 className="title text-light m-0">PORTFÓLIO</h2>
        <div
          id="icon-btn-main"
          className={`burguer ${isIconActived ? "open" : ""}`}
          onClick={toggleBurguer}
          style={{ display: isMenuContracted ? "flex" : "none" }}
        >
          <div className="menu"></div>
        </div>
        <div
          id="nav-btn-main"
          className="nav-btn justify-content-between"
          style={{ width: "60vw", display: isMenuExtended ? "flex" : "none" }}
        >
          <button
            type="button"
            className="btn btn-outline-light btn-menu-main"
            style={{ width: "23%" }}
            onClick={homePage}
          >
            Início
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-menu-main"
            style={{ width: "23%" }}
            onClick={skillsPage}
          >
            Habilidades
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-menu-main"
            style={{ width: "23%" }}
            onClick={projectsPage}
          >
            Projetos
          </button>
          <button
            type="button"
            className="btn btn-outline-light btn-menu-main"
            style={{ width: "23%" }}
            onClick={contactsPage}
          >
            Contatos
          </button>
        </div>
      </nav>

      <div className="content">{element}</div>

      <nav className="navbar fixed-bottom px-3">
        <div className="text-light">
          <button type="button" className="btn-lng">
            PT-BR
          </button>{" "}
          |{" "}
          <button className="btn-lng" type="button">
            ENG-US
          </button>
        </div>
        <div className="last-update">Última atualização em 22/04/2025</div>
      </nav>
    </div>
  );
}

export default App;
