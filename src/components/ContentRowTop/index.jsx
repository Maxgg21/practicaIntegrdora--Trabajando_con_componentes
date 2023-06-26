import { ContentRowMovies } from "../ContentRowMovies/index";
import { GenresInDB } from "../GenresInDB/index";
import { LastMovieInDB } from "../LastMovieInDB/index";

export const ContentRowTop = () => {
      const datas = [
            {
                  titulo: "Movies in Data Base",
                  cifra: 21,
                  color: "primary",
            },
            {
                  titulo: "Total awards",
                  cifra: 79,
                  color: "success",
            },
            {
                  titulo: "Actors quantity",
                  cifra: 49,
                  color: "warning",
            },
      ];
      const genres = ["Acción", "Animación", "Aventura", "Ciencia Ficción", "Comedia", "Documental", "Drama", "Fantasia", "Infantiles", "Musical"];

      return (
            <>
                  {/* <!-- Content Row Top --> */}
                  <div className="container-fluid">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                        </div>
                        <div className="row">
                              {datas.map((data, i) => (
                                    <ContentRowMovies key={i} titulo={data.titulo} cifra={data.cifra} color={data.color} />
                              ))}
                        </div>
                        {/* <!-- Content Row Last Movie in Data Base --> */}
                        <div className="row">
                              <LastMovieInDB />
                              {/* <!-- Genres in DB --> */}
                              <div className="col-lg-6 mb-4">
                                    <div className="card shadow mb-4">
                                          <div className="card-header py-3">
                                                <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                                          </div>
                                          <div className="card-body">
                                                <div className="row">
                                                      {genres.map((genre, i) => (
                                                            <GenresInDB key={i} genre={genre} />
                                                      ))}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* <!--End Content Row Top--> */}
            </>
      );
};