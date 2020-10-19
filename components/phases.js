import React from "react";
import PropTypes from "prop-types";
import Alea from "alea";

const target = document.getElementById('target')

function Phase({seed, prng, ...rest}){
  const [visibility, setVisibility] = React.useState({});
  React.useEffect(() => {
    setVisibility(visibilityStyle(prng()))
  },[seed])
  const handleChange = () => setVisibility(visibilityStyle(Math.random()));
  return <div onMouseOver={handleChange} style={visibility} {...rest} />
}

export default function CreatePhases(numberOfPhases, numberOfColumns, seed){
    var prng = new Alea(seed)
    const array = new Array(numberOfPhases).fill(undefined).map((_,index)=> <Phase seed={seed} prng={prng} key={index}/>);
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

function visibilityStyle(randomNumber){
  return (randomNumber > .3) ? {visibility:'visible'} : {};
}

