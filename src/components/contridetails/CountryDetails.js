import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function CountryDetails({paises ,SetPaises }){

   const [detalhes , setDetalhes] = useState({})
   const [isLoading, setIsLoading] = useState(true);
   const { alpha3Code } = useParams();
  let teste = []
  useEffect(()=>{
    setIsLoading(true)
    async function fechDetalhes(){
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      setDetalhes(response.data)
      setIsLoading(false);
    }
    fechDetalhes()
  },[])

  isLoading === false && (
    
      detalhes.borders.forEach((element)=>{
      
       paises.forEach((pais)=>{
      
          if(pais.alpha3Code === element){
          teste.push(pais)
          
        }
      })
    }) 
        
    )
    
  
    return(
        <>
         {isLoading === false && (
          
         <div className="col-7">
            <h1>{detalhes.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{detalhes.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {`${detalhes.area} km`}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                     
                     {teste.map((element)=>{
                      return( 
                        <>
                        <Link to={`/pais/${element.alpha3Code}`}>
                          <li>{element.name.common}</li>
                        </Link>
                        </>
                      )
                     })}

                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          )} </>
    )
}

export default CountryDetails;