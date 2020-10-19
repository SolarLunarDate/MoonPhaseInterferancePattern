import React from "react";
import PropTypes from "prop-types";

const target = document.getElementById('target')

function Phase({...rest}){
  const [visibility, setVisibility] = React.useState({});
  React.useEffect(() => {
    setVisibility(UpdateVisibilityStyle())
  },[])
  const handleChange = () => setVisibility(UpdateVisibilityStyle());
  return <div onMouseOver={handleChange} style={visibility} {...rest} />
}

export default function CreatePhases(numberOfPhases, numberOfColumns){
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

