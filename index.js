import React from "react";
import ReactDOM from "react-dom";
import CreatePhases from "./components/phases";
import useLocalStorageState from "./helpers/local-storage-state";


const target = document.getElementById('target')

function App(){

  const [numberOfPhases, setNumberOfPhases] = useLocalStorageState("numberOfPhases", 4584)
  const [numberOfColumns, setNumberOfColumns] = useLocalStorageState("numberOfColumns", 5)
  const [seed, setSeed] = useLocalStorageState("seed", 5)
  const handleNumberOfPhasesChange = event => setNumberOfPhases(parseInt(event.target.value));
  const handleNumberOfColumnsChange = event => setNumberOfColumns(parseInt(event.target.value))
  const handleSeedChange = event => setSeed(parseInt(event.target.value))
  return(
            <div>
              <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="numberOfPhases">Number of Phases</label>
                <input min="1" type="number" onChange={handleNumberOfPhasesChange} id="numberOfPhases" value={numberOfPhases.toString()}/>
              
                <label htmlFor="seed">Seed For Random Number Generator</label>
                <input min="1" type="number" onChange={handleSeedChange} id="seed" value={seed.toString()}/>
              
                <label htmlFor="numberOfColumns">Number of Columns</label>
                <input max="13" min="1" type="number" onChange={handleNumberOfColumnsChange} id="numberOfColumns" value={numberOfColumns.toString()}/>
              
              </form>
              {CreatePhases(numberOfPhases, numberOfColumns, seed)}
            </div> 
          
  )
  
}
ReactDOM.render(<App />, target);