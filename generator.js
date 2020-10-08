import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const target = document.getElementById('target')

function Phase({...rest}){
  const [visibility, setVisibility] = React.useState(UpdateVisibilityStyle());
  const handleChange = () => setVisibility(UpdateVisibilityStyle());
  return <div onMouseOver={handleChange} style={visibility} {...rest} />
}

function CreatePhases(numberOfPhases, numberOfColumns){
    const array = new Array(numberOfPhases).fill(undefined).map((_,index)=> <Phase key={index}/>);
    return (
      <div id="phases" className={"columns-"+numberOfColumns}>
        {array}
      </div>
    )
}
CreatePhases.propTypes = {
  numberOfPhases: PropTypes.number.isRequired,
  numberOfColumns: PropTypes.number.isRequired
}

function UpdateVisibilityStyle(){
  return (Math.random() > .3) ? {visibility:'visible'} : {};
}

function useLocalStorageState(key, defaultValue=''){
  const [state, setState] = React.useState(
    () => parseInt(window.localStorage.getItem(key)) || defaultValue,
     );
   React.useEffect(() => {
     window.localStorage.setItem(key, state), [state]
   })
   return [state, setState]

}

function App(){

  const [numberOfPhases, setNumberOfPhases] = useLocalStorageState("numberOfPhases", 4584)
  const [numberOfColumns, setNumberOfColumns] = useLocalStorageState("numberOfColumns", 5)

  const handleNumberOfPhasesChange = event => setNumberOfPhases(parseInt(event.target.value));
  const handleNumberOfColumnsChange = event => setNumberOfColumns(parseInt(event.target.value))
  return(
            <div>
              <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="numberOfPhases">Number of Phases</label>
                <input min="1" type="number" onChange={handleNumberOfPhasesChange} id="numberOfPhases" value={numberOfPhases.toString()}/>
              
                <label htmlFor="numberOfColumns">Number of Columns</label>
                <input max="13" min="1" type="number" onChange={handleNumberOfColumnsChange} id="numberOfColumns" value={numberOfColumns.toString()}/>
              
              </form>
              {CreatePhases(numberOfPhases, numberOfColumns)}
            </div> 
          
  )
  
}
ReactDOM.render(<App />, target);