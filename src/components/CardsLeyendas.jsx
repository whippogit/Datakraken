import NavTabs from "./NavTabs";
import Swal from "sweetalert2";

function CardsLeyendas({ leyendas }) {
  function confirmDelete(id) {
    {
      Swal.fire({
        title: "Deseas eliminar?",
        text: "No se podrá revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar!",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/delete/leyenda/" + id;
          Swal.fire(
            "Eliminado!",
            "La publicación ha sido eliminada",
            "success"
          );
        }
      });
    }
  }

  const vacio = () => {
    if (leyendas.length === parseInt(0)) {
      return (
        <div className="d-flex justify-content-center text-white m-3">
          <h5>no hay publicaciones</h5>
        </div>
      );
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div className="mt-5">
        <NavTabs />
      </div>
      <h5 className="mb-5 mt-5 titulo">
        <a href="/api/leyendas" className="text-white">
          Leyendas
        </a>
      </h5>
      <div className="row bg-container-cards position-relative">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger wbadge">
          {leyendas.length}
          <span class="visually-hidden">unread messages</span>
        </span>
        {vacio()}
        {leyendas.map((datoApi) => (
          <a
            className="col card-config"
            key={datoApi._id}
            href={`/api/leyendas/${datoApi._id}`}
          >
            <div className="d-flex justify-content-end mt-1">
              <a className="me-3">
                <i class="fa-solid fa-gear iconSetting"></i>
              </a>
              <a
                type="button"
                onClick={() => {
                  confirmDelete(datoApi._id);
                }}
                href="#"
              >
                <i class="fa-solid fa-trash-can iconDelete"></i>
              </a>
            </div>
            <div className="row p-2 mt-3">
              <div className="col-2">
                <img
                  src={datoApi.image_url}
                  alt={datoApi.titleLegends}
                  title={datoApi.titleLegends}
                  className="img-avatar rounded"
                />
              </div>
              <div className="col-10">
                <h6 className="text-truncate">{datoApi.titleLegends}</h6>
                <h6 className="text-ago ps-2">
                  subido el {datoApi.dateLegends}
                </h6>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <h6 className="text-ago ps-2">hace 1 sem </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default CardsLeyendas;
