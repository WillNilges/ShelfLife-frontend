import React,{useState, useEffect, Component} from 'react';
// import Select from 'react-select';
import logo from './logo.svg';
import './App.css';
import ProjectList from "./ProjectList";
import {getGraylist, getWhitelist, Project} from "./api";

// var graylistShown = true;
// var whitelistShown = false;

function App() {

  // const mongo_collection_option = [
  //   { value: 'whitelist', label: 'Whitelist' },
  //   { value: 'graylist', label: 'Graylist' },
  // ];

  const [graylist, setGraylist] = useState<Project[]>([]);
  useEffect( () => { requestGraylist() }, []); // Show graylist by default

  const [whitelist, setWhitelist] = useState<Project[]>([]);

  const [selectedProject, selectProject] = useState<string>();
  // useEffect( () => {
  //   const fetchData = async () => {
  //     const graylistResponse = await getWhitelist();
  //     setWhitelist(graylistResponse);
  //   }
  //   fetchData();
  // }, []);

    // var list;
    // if (whitelistShown) list = <ProjectList projects={whitelist}/>;
    // if (graylistShown) list = <ProjectList projects={graylist}/>;

  function openProject(projectName: string) {
    console.log("You are opening: {}", projectName);
    selectProject(projectName);
    
  }

  async function requestGraylist() {
    const graylistResponse = await getGraylist();
    setGraylist(graylistResponse);
  }

  async function requestWhitelist() {
    const whitelistResponse = await getWhitelist();
    setGraylist(whitelistResponse);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='buttonRow'>
          <button onClick={requestGraylist}>
            Show Graylist
          </button>

          <button onClick={requestWhitelist}>
            Show Whitelist
          </button>
          <div>
            selectedProject: {
              selectedProject
            }
          </div>

        </div>
        
        {/* <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> */}

        <ProjectList projects={graylist} handleSelectProject={openProject}/>
      </header>
    </div>
  );
}

export default App;