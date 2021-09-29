import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

  const peticionGet=async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
      console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    peticionGet();
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
