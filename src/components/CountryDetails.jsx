import { useState } from "react"
import { Route, Routes, Link } from "react-router-dom"

export default function CountryDetails(props) {

    const {name, alpha3Code, capital, area, borders, alpha2Code} = props.country

    return(
        <div>
            <img 
                src={`https://flagpedia.net/data/flags/w580/${alpha2Code.toLowerCase()}.png`}
                alt="" 
                width="150px" 
                height="auto"/>
            <h1>{name}</h1>
            <h3>{capital}</h3>
            <h3>{area}</h3>
            <h3>{borders.map((border)=>{
                return(
                        <p><Link to={"/" + border}>{border}</Link></p>
                    )
                })}
            </h3>
        </div>
    )
}