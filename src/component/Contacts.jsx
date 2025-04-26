function Contacts() {
  return (
    <div className="container w-100 mt-4" style={{height:"80vh"}}>
      <div className="title">Contatos</div>
      <div
        className="contacts mt-5 d-flex flex-column justify-content-between"
        style={{ height: "10%" }}
      >
        <div className="ct-cel">
            <i class="bi bi-whatsapp" style={{color:"white", marginRight:"5px", fontSize:"20px"}}></i>
          <a href="tel:+5512991291870">(12) 9 9129-1870</a>
        </div>
        <div className="ct-email">
        <i class="bi bi-envelope-at-fill" style={{color:"white", marginRight:"5px", fontSize:"20px"}}></i>
          <a href="mailto:thiago_sl2@hotmail.com">thiago_sl2@hotmail.com</a>
        </div>
        <div className="ct-linkedIn">
          <i className="bi bi-linkedin" style={{color:"white", marginRight:"5px", fontSize:"20px"}}></i>
          <a
            href="www.linkedin.com/in/thiago-liboni"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </div>
        <div className="ct-github">
        <i class="bi bi-github" style={{color:"white", marginRight:"5px", fontSize:"20px"}}></i>
          <a
            href="https://github.com/ThiagoLiboni"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
