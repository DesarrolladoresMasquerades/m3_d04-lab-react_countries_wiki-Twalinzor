import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import countriesData from "./countries.json";
import { useState } from 'react';
import CountriesList from './components/CountriesList';
import { Routes, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';

function App() {

  const [countriesList, setCountriesList] = useState(countriesData)

  return (
  <div className="App">
    <Navbar />
    <div class="container">
        <div class="row">
        <div className="col-5" style={{"max-height": "90vh", "overflow": "scroll"}}>
            <div className="list-group">
    {countriesList.map((country)=>{
      return(
        <div>
        <CountriesList country={country}/>
        <Routes>
          <Route exact path={"/" + country.alpha3Code} element={<CountryDetails country={country}/>}/>
        </Routes>
        </div>
      )
    })}
    </div>
    </div>
    </div>
   </div>
  </div>
  )
}
export default App;