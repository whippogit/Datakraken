function Search() {
  const pulsar = () => {
    document.getElementById("lista").style.display = "block";
  };

  const up = () => {
    document.getElementById("lista").style.display = "none";
  };

  const botonNoticias = () => {
    document.getElementById("form-noticias").style.display = "block";
  };

  const botonLeyendas = () => {
    document.getElementById("form-leyendas").style.display = "block";
  };

  const botonHistorias = () => {
    document.getElementById("form-historias").style.display = "block";
  };

  const botonEsteros = () => {
    document.getElementById("form-esteros-del-ibera").style.display = "block";
  };

  return (
    <>
      <button
        onClick={() => {
          pulsar();
        }}
        className="btn btn-dark text-white button-new nav-link dropdown-toggle"
      >
        add new...
      </button>

      <ul className="dropdown-menu bg-dark" id="lista">
        <div className="d-flex justify-content-end me-3 bg-dark">
          <a
            className=" font-montserrat bg-dark"
            id="up"
            onClick={() => {
              up();
            }}
          >
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1680635827/boton-eliminar_alsxq9.png"
              alt="cancelar"
              title="cancelar"
              className="boton-cancelar"
            />
          </a>
        </div>
        <li>
          <a
            className="dropdown-item font-montserrat bg-dark text-white"
            onClick={() => {
              botonNoticias();
            }}
          >
            Noticias
          </a>
        </li>
        <li>
          <a
            className="dropdown-item font-montserrat bg-dark text-white"
            onClick={() => {
              botonLeyendas();
            }}
          >
            Leyendas
          </a>
        </li>
        <li>
          <a
            className="dropdown-item font-montserrat bg-dark text-white"
            onClick={() => {
              botonHistorias();
            }}
          >
            Historias
          </a>
        </li>

        <li>
          <a
            className="dropdown-item font-montserrat bg-dark text-white"
            onClick={() => {
              botonEsteros();
            }}
          >
            Esteros del Iberá
          </a>
        </li>
      </ul>
    </>
  );
}

export default Search;
