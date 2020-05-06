import React,{ useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    api.get('repositories').then((response)=>{
      console.log('response =>',response);
      setRepositories(response.data);
    })
  },[]);

  async function handleAddRepository() {
    setRepositories([...repositories, `Novo repositorio ${Date.now()}`]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repositorio => 
        <li key={repositorio.id}>
         {repositorio.title}

          <button onClick={() => handleRemoveRepository(repositorio.id)}>
            Remover
          </button>
        </li>)}
        
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
