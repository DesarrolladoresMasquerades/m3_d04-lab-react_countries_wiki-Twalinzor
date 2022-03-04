import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function CountriesList(props) {

    const {name, alpha2Code, alpha3Code} = props.country

    return(
        // <div className="countryList">
        //     <h4>
        //         <Link to={alpha3Code}>{name}</Link>
        //     </h4>
        //         <p>
        //         <img 
        //             src={`https://flagpedia.net/data/flags/w580/${alpha2Code.toLowerCase()}.png`}
        //             alt="" 
        //             width="100px" 
        //             height="auto"/>
        //         </p>
        //     </div>
  
        
              <a className="list-group-item list-group-item-action" href="/ABW">
                <img src={`https://flagpedia.net/data/flags/w580/${alpha2Code.toLowerCase()}.png`} alt="pajiaijsdjhabd"/>
                <p><Link to={alpha3Code}>{name}</Link></p>
              </a>
    )
}

{/* <div className="col-5" style="max-height: 90vh; overflow: scroll">
            <div className="list-group">
              <a className="list-group-item list-group-item-action" href="/ABW">
                <img src={`https://flagpedia.net/data/flags/w580/${alpha2Code.toLowerCase()}.png`}/>
                <p><Link to={alpha3Code}>{name}</Link></p>
              </a>
              </div>
              </div> */}
