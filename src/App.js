import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [medicamento, setMedicamento] = useState("");
  const [codigo, setCodigo] = useState("");
  const [tablaMedicamentos, setTablaMedicamentos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultado, setResultado] = useState({});

  
  useEffect(()=>{
    if(medicamento === '') return;
    consultarApi();
  },[medicamento, codigo]);

  const handleChange = e ==>{
    
  }

  const consultarApi = async () => {
    
    const url = 'https://gtw-prod.alemana.io/public/api-farmacos/v1/amp?q=${medicamento}&refset=${codigo}';
    
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();


  }

  
  return (
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          velue={busqueda}
          placeholder="Búsqueda por Nombre o Empresa"
          
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-sm table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Nombre de Usuario</th>
              <th>Correo</th>
              <th>Sitio Web</th>
              <th>Ciudad</th>
              <th>Empresa</th>
            </tr>
          </thead>
          <tbody>
            {medicamento &&
              medicamento.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.id}</td>
                  <td>{usuario.name}</td>
                  <td>{usuario.phone}</td>
                  <td>{usuario.username}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.website}</td>
                  <td>{usuario.address.city}</td>
                  <td>{usuario.company.name}</td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default App;
