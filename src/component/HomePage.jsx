import React, { useRef, useState } from "react";
import AboutMe from "./AboutMe";

function HomePage() {

const contentMain = useRef(null)
const [showAboutMe, setShowAboutMe] = useState(false);


function handleShowAboutMe() {
    contentMain.current.classList.add('home-content');
    setTimeout(()=>{
      setShowAboutMe(true)
    },1000)
}

  return showAboutMe ? (
      <AboutMe />
    ) :(
    <div
      ref={contentMain}
      className="container wellcome-content d-flex justify-content-between"
      style={{ width: "65%" }}
    >
      <div className="wellcome-info">
        <div className="wellcome">
          <div className="text">Olá, meu nome é</div>
          <h2 className="author text-end" style={{ paddingRight: "70px", whiteSpace:"nowrap" }}>
            Thiago Liboni
          </h2>
          <div className="text">
            e seja bem vindo ao meu Portfólio de Desenvolvedor
          </div>
        </div>
        <div className="list-skills d-flex w-100 justify-content-between mt-5">
          <div className="icon-skill d-flex rounded-circle overflow-hidden " style={{justifyContent:'flex-end'}}>
            <img src="../src/common/logos/javascript.png" />
          </div>
          <div className="icon-skill d-flex rounded-circle overflow-hidden">
            <img src="../src/common/logos/nodejs.png" style={{scale:'1.4'}} />
            </div>
          <div className="icon-skill d-flex rounded-circle overflow-hidden">
          <img src="../src/common/logos/typescript.png"/>
          </div>
          <div className="icon-skill d-flex rounded-circle overflow-hidden">
          <img src="../src/common/logos/docker.png"/>
          </div>
          <div className="icon-skill d-flex rounded-circle overflow-hidden">
          <img src="../src/common/logos/redis.png"/>
          </div>
          <div className="icon-skill d-flex rounded-circle overflow-hidden">
          <img src="../src/common/logos/github.png"/>
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-light btn-lg btn-pst" onClick={handleShowAboutMe}>Apresentação</button>
        </div>
      </div>
      <div
        className="photo d-flex"
        style={{minWidth:"350px", width: "350px", height: "auto" }}
      >
        <img
          className="rounded-circle overflow-hidden"
          src="../src/common/profile.jpeg"
        />
      </div>
    </div>
  );
}
export default HomePage;
