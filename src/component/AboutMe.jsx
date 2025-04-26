import { text } from "../../public/common/text/aboutMe";

function AboutMe() {
  const aboutMe = text;

  return (
    <div className="d-flex w-100 align-items-start pt-2">
      <div className="content-aboutMe d-flex pt-3 ps-3 justify-content-between align-content-center">
        <div className="aboutMe-info">
          <div className="title">Sobre mim</div>
          <div
            className="abouteMe-text text d-flex w-100"
          >
            {aboutMe}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center me-5">
          <img
            src="../public/common/knowledge.png"
            style={{ width: "300px", height: "300px", margin:"20px 0" }}
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
