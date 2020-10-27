import React from "react";
import ReactDOM from "react-dom";
import CreatePhases from "./components/phases";
import Download from "./components/Download";
import { useQueryState } from 'use-location-state'

const target = document.getElementById('target')

function App(){

  const [numberOfPhases, setNumberOfPhases] = useQueryState("numberOfPhases", 4584)
  const [numberOfColumns, setNumberOfColumns] = useQueryState("numberOfColumns", 5)
  const [year, setYear] = useQueryState("year", 2020)
  const [lunarMonth, setLunarMonth] = useQueryState("lunarMonth", 5)
  const [lunarDay, setLunarDay] = useQueryState("lunarDay", 5)
  const handler = (fun, event) => fun(parseInt(event.target.value), { method: 'push' })
  const seed = {year: year, lunarMonth: lunarMonth, lunarDay: lunarDay}
  return(
            <div>
              <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="numberOfPhases">Number of Phases</label>
                <input min="1" type="number" onChange={ e => handler(setNumberOfPhases, e)} id="numberOfPhases" value={numberOfPhases.toString()}/>

                <fieldset>
                  <legend>Seed For Random Number Generator:</legend>
                    <label htmlFor="year">Year</label>
                    <input type="number" onChange={e => handler(setYear, e)} id="year" value={year.toString()}/>
                    <label htmlFor="lunar-month">Lunar Month</label>
                    <input type="number" onChange={e => handler(setLunarMonth, e)} id="lunar-month" value={lunarMonth.toString()}/>
                    <label htmlFor="lunar-day">Lunar Day</label>
                    <input type="number" onChange={e => handler(setLunarDay, e)} id="lunar-day" value={lunarDay.toString()}/>  
                </fieldset>
                <label htmlFor="numberOfColumns">Number of Columns</label>
                <input max="13" min="1" type="number" onChange={e => handler(setNumberOfColumns, e)} id="numberOfColumns" value={numberOfColumns.toString()}/>
              
              </form>
              <Download>
                {CreatePhases(numberOfPhases, numberOfColumns, seed)}
              </Download>
            </div> 
          
  )
  
}

ReactDOM.render(<App />, target);
