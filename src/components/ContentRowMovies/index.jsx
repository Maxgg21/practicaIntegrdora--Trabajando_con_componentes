import PropTypes from "prop-types";
export const ContentRowMovies = (props) => {
      return (
            <>
                  {/* <!-- Movies in Data Base --> */}
                  <div className="col-md-4 mb-4">
                        <div className={`card border-left-${props.color} shadow h-100 py-2`}>
                              <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                          <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.titulo}</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                                          </div>
                                          <div className="col-auto">
                                                <i className="fas fa-film fa-2x text-gray-300"></i>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
};
ContentRowMovies.propTypes = {
      titulo: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      cifra: PropTypes.number.isRequired,
      icono: PropTypes.string.isRequired,
};
ContentRowMovies.defaultProps = {
      titulo: "Movies in Data Base",
      color: "",
      cifra: 0,
      icono: "",
};