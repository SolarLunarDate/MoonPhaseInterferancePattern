import React from "react";
import ReactDOM from "react-dom";

const target = document.getElementById('target')

function Phase({index, ...rest}){
  const [visibility, setVisibility] = React.useState(UpdateVisibilityStyle());
  const handleChange = () => setVisibility({visibility:'visible'});
  //var style = visibility? {visibility:'visible'} : {};
  return <div key={index} style={visibility} {...rest}/>
}

function CreatePhases(numberOfPhases){
    const array = new Array(numberOfPhases).fill(undefined).map((_,index)=> <Phase key={index}/>);
    return (
      <div id="phases">
        {array}
      </div>
    )
}
function UpdateVisibilityStyle(){
  return (Math.random() > .3) ? {visibility:'visible'} : {};
}


function App(){
  const [numberOfPhases, setnumberOfPhases] = React.useState(
    parseInt(window.localStorage.getItem('numberOfPhases')) || 4584,
    );
  React.useEffect(() => {
    window.localStorage.setItem('numberOfPhases', numberOfPhases)
  })
  const handleChange = event => setnumberOfPhases(parseInt(event.target.value));
  return(
            <div>
              <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="numberOfPhases">Number of Phases</label>
                <input type="number" onChange={handleChange} id="numberOfPhases" value={numberOfPhases.toString()}/>
              </form>
              {CreatePhases(numberOfPhases)}
            </div> 
          
  )
  
}
ReactDOM.render(<App />, target);