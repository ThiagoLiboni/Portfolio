import { useState } from "react";
import { IBM } from "../common/text/projects";

function Projects() {
  const projectsPages = [
    [
      {
        id: 1,
        name: "IBM-insurance",
        text: IBM,
        title: "Individual Broker Management (IBM) - Insurance",
        link: "https://github.com/ThiagoLiboni/Portfolio/",
      },
    ],
  ];
  const [page, setPage] = useState(0);
  const currentProjects = projectsPages[page];

  return (
    <div className="container w-100">
      <div className="title">Projetos</div>
      {currentProjects.map((project) => (
        <div className="content-project d-flex ">
          <div
            className="project-header d-flex flex-column me-5"
            style={{ minWidth: "20%", width: "20%" }}
          >
            <div className="box-icon-project d-flex justify-content-start pe-4 pb-2">
              <div className="project-name d-flex justify-content-end align-items-center">
                <div className="box-name-project-squad"></div>
                <div className="text" style={{whiteSpace:"nowrap"}}>{project.name}</div>
              </div>
            </div>
            <div
              className="box-preview-mp4 w-100 mt-5"
              style={{ height: "180px" }}
            >
              <video width="100%" height="100%" controls>
                <source src="caminho/do/seu/video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>
          <div className="description-project pt-2">
            <div className="title-project mb-3">{project.title}</div>
            <div className="text" style={{ whiteSpace: "normal" }}>
              {project.text}
            </div>
            <a
              href="https://github.com/IBM-Insurances"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no GitHub
            </a>{" "}
      <div
        className="handler-pages position-relative w-100 d-flex mt-4 mb-5"
      >
        <button
          className="btn btn-light me-3"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          style={{ scale: "0.65" }}
        >
          &lt; Anterior
        </button>
        <div
          className="text-light align-self-center"
          style={{ fontSize: "10px" }}
          >
          Página {page + 1} de 1
        </div>
        <button
          className="btn btn-light ms-3"
          onClick={() =>
            setPage((prev) => Math.min(prev + 1, projectsPages.length - 1))
          }
          disabled={page === projectsPages.length - 1}
          style={{ scale: "0.65" }}
          >
          Próxima &gt;
        </button>
      </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Projects;
