import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from "./ProjectList";
import {getProjects, Project} from "./api";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect( () => {
    const fetchData = async () => {
      const apiResponse = await getProjects();
      setProjects(apiResponse);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ProjectList projects={projects}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
