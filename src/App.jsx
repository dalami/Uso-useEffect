import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [paises, setPaises] = useState([]);
  const [busqueda,setBusqueda]= useState('')

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch('../JSON/paises.json');
        const data = await response.json();
        setPaises(data);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
      }
    };

    cargarDatos();
  }, []);

   const buscarPais=(e)=>{
      setBusqueda(e.target.value)
   }

   const resultado = paises.filter((pais)=>
    pais.nombre_pais.toLowerCase().includes(busqueda.toLowerCase())
   )

  return (
    <div>
      <input type="text" placeholder="Buscar país" value={busqueda} onChange={buscarPais}/>
      <div>
        {resultado.map((pais) => (
          <div key={pais.nombre_pais}>
            <div>
              <div>
                <h2>{pais.nombre_pais}</h2>
              </div>
              <ul>
                <li>Atracciones Principales: {pais.atracciones}</li>
                <li>Idioma: {pais.idioma}</li>
                <li>Comidas Populares: {pais.comidas}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
