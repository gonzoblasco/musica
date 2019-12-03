import React, { useState } from 'react';

const Formulario = ({ consultarAPILetra }) => {
  const [busqueda, agregarBusqueda] = useState({
    artista: '',
    cancion: ''
  });

  const actualizarState = (e) => {
    agregarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    });
  };

  const enviarInformacion = (e) => {
    e.preventDefault();

    consultarAPILetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent  mb-5 pt-5 pb-2"
            onSubmit={enviarInformacion}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      className="form-control"
                      name="artista"
                      onChange={actualizarState}
                      placeholder="Nombre Artista"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      className="form-control"
                      name="cancion"
                      onChange={actualizarState}
                      placeholder="Nombre Canción"
                      required
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">Buscar</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
