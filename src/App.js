import React,{ useState, useEffect } from "react";
import api from './services/api';

import { uuid } from 'uuidv4' ;


import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    api.get('repositories').then((response)=>{
      
      setRepositories(response.data);
    })
  },[]);

  async function handleAddRepository() {
    const repository = 
      {
        id: uuid(),
        title:"Desafio ReactJS",
        url:"https://github.com/lucaslopes116/conceitos-reactjs",
        techs:"Reactjs"
      }
    
    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {

    const repository = repositories.find(repositorio => repositorio.id === id);

    if(repository) {
      setRepositories(repositories.filter(repositorio => repositorio.id !== repository.id));
    }
    
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
