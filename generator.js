import React from "react";
import ReactDOM from "react-dom";

const target = document.getElementById('target')

function Phase({index, ...rest}){
  const [visibility, setVisibility] = React.useState(UpdateVisibilityStyle());
  const handleChange = () => setVisibility({visibility:'visible'});
  //var style = visibility? {visibility:'visible'} : {};
  return <div key={index} style={visibility} {...rest}/>
}

function CreatePhases(numberOfPhases, numberOfColumns){
    const array = new Array(numberOfPhases).fill(undefined).map((_,index)=> <Phase key={index}/>);
    return (
      <div id="phases" className={"columns-"+numberOfColumns}>
        {array}
      </div>
    )
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
                <input type="number" onChange={handleNumberOfPhasesChange} id="numberOfPhases" value={numberOfPhases.toString()}/>
              
                <label htmlFor="numberOfColumns">Number of Columns</label>
                <input type="number" onChange={handleNumberOfColumnsChange} id="numberOfColumns" value={numberOfColumns.toString()}/>
              
              </form>
              {CreatePhases(numberOfPhases, numberOfColumns)}
            </div> 
          
  )
  
}
ReactDOM.render(<App />, target);