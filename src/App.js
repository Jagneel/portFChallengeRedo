import React, { Component, useEffect, useState } from 'react';
import './App.css';
import { AbvFilter, Chart, DatePicker } from './components';
import punkapi from './api/punkApi'

const App = () => {
    
    // Set date to specific time period 
    const [dateFrom, setDateFrom ] = useState('2012-01-01')
    const [dateTill, setDateTill ] = useState('2012-12-31')

    const [yearFrom, monthFrom, dayFrom] = dateFrom.split('-');
    const newDateFrom = `${monthFrom}-${yearFrom}`
    const [yearTill, monthTill, dayTill] = dateTill.split('-');
    const newDateTill = `${monthTill}-${yearTill}`

    // Create function that filters beerData by ABV 

    const [abvLow, setAbvLow] = useState(0)
    const [abvHigh, setAbvHigh] = useState(60)


    // Use initial set date and abv data to input params into url api and render a chart on page load

    const [beerData, setBeerData ] = useState([])
    const [isData, setisData] = useState(false)
    
    
    const fetchData = async () =>  {
      const response = await punkapi.get('beers', {
        params: {
          brewed_after: newDateFrom,
          brewed_before: newDateTill,
          abv_gt: abvLow,
          abv_lt:abvHigh,
          per_page: 80
        }
      })
      setBeerData(response.data)
      setisData(true)
    }


    // reformat the beerData into a modified data for chart

    let dataSlice = []

    for(let i=0; i<beerData.length; i++){

      if(beerData[i].first_brewed.length > 4){
          dataSlice.push({
              name : beerData[i].name,
              abv: beerData[i].abv,
              first_brewed: beerData[i].first_brewed,
              month: beerData[i].first_brewed.slice(0, 2),
              year: beerData[i].first_brewed.slice(3, 7),
              monthYear: beerData[i].first_brewed.slice(0, 2) + "-" + beerData[i].first_brewed.slice(3, 7)
          })
      } else {
          dataSlice.push({
              name : beerData[i].name,
              abv: beerData[i].abv,
              first_brewed: "01/" + beerData[i].first_brewed,
              month: "01", 
              year: beerData[i].first_brewed,
              monthYear: "01" + "-" + beerData[i].first_brewed
          })
        } 
     }

     // Sort in ascending order

     dataSlice.sort(
      (a, b) => (a.year - b.year) || (a.month - b.month)
     );
   
    let count = []

    // count the data so the Nivo chart can read and output our dataset

    dataSlice.forEach(function(i){
        count[i.monthYear] = (count[i.monthYear] || 0 ) + 1;
    })

    

    var countObj = Object.entries(count)

    console.log(countObj)

   
 
    return (
      <div className="App">
        <DatePicker dateFrom={dateFrom} setDateFrom={setDateFrom} dateTill={dateTill} setDateTill={setDateTill} onChange={() => {}} />
        <AbvFilter setAbvLow={setAbvLow} setAbvHigh={setAbvHigh}/><br></br>
        <button onClick={fetchData}>Render Table</button>
        {/* <Chart  data={countObj}/> */}
        { isData ? <Chart data={countObj}/> : <div><br></br>Loading...</div>}
      </div>
    )
}

export default App;
