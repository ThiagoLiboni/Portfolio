import { useEffect, useMemo, useState } from "react";
import {
  docker,
  github,
  JS,
  mongodb,
  NodeJS,
  PG,
  redis,
  TS,
} from "../../public/common/text/skills";

const allSkills = [
  {
    id: 1,
    name: "Javascript",
    level: "⭐⭐⭐⭐",
    desc: JS,
    img: "javascript.png",
  },
  {
    id: 2,
    name: "Node.js",
    level: "⭐⭐⭐",
    desc: NodeJS,
    img: "nodejs.png",
  },
  {
    id: 3,
    name: "TypeScript",
    level: "⭐⭐⭐",
    desc: TS,
    img: "typescript.png",
  },
  { id: 4, name: "Docker", level: "⭐⭐", desc: docker, img: "docker.png" },
  { id: 5, name: "Redis", level: "⭐⭐", desc: redis, img: "redis.png" },
  { id: 6, name: "GitHub", level: "⭐⭐", desc: github, img: "github.png" },
  {
    id: 7,
    name: "MongoDB",
    level: "⭐⭐⭐",
    desc: mongodb,
    img: "mongodb.png",
  },
  {
    id: 8,
    name: "PostgreSQL",
    level: "⭐⭐⭐",
    desc: PG,
    img: "postgres.png",
  },
];

function Ability() {
  const [page, setPage] = useState(0);
  const skillsPerPage = 2

  useEffect(() => {
    const handleResize = () => {
      setPage(0); 
      
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsPages = useMemo(() => {
    const pages = [];
    for (let i = 0; i < allSkills.length; i += skillsPerPage) {
      pages.push(allSkills.slice(i, i + skillsPerPage));
    }
    return pages;
  }, [skillsPerPage]);

  const totalPages = skillsPages.length
  const currentSkills = skillsPages[page] || [];

  return (
    <div className="container w-100 mt-4" style={{height:"auto"}}>
      <div className="title">Habilidades</div>
      {currentSkills.map((skill) => (
        <div key={skill.id} className="content-abilities d-flex w-100">
          <div className="content-icon-abilities me-5" style={{ minWidth: "20%", width: "20%" }}>
            <div className="box-icon-skill d-flex justify-content-end pe-4 pb-2">
              <div className="skill-name d-flex flex-column justify-content-end align-items-end">
                <div className="text">{skill.name}</div>
                <div>{skill.level}</div>
              </div>
            </div>
            <div className="img-icon">
              <img
                src={`../public/common/logos/${skill.img}`}
                alt={skill.name}
                style={{ width: "45px", height: "45px", borderRadius: "50%" }}
              />
            </div>
          </div>
          <div className="text" style={{ whiteSpace: "normal" }}>
            {skill.desc}
          </div>
        </div>
      ))}
      <div
        className="handler-pages position-relative w-100 d-flex"
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
          Página {page + 1} de {totalPages}
        </div>
        <button
          className="btn btn-light ms-3"
          onClick={() =>
            setPage((prev) => Math.min(prev + 1, skillsPages.length - 1))
          }
          disabled={page === skillsPages.length - 1}
          style={{ scale: "0.65" }}
        >
          Próxima &gt;
        </button>
      </div>
    </div>
  );
}

export default Ability;
