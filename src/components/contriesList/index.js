import axios from "axios";
import { useState, useEffect } from "react";
import { Route , Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import CountryDetails from "../contridetails/CountryDetails";




function ContriesList(){
    const[paises , setPaises] = useState([])
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect( ()=>{
      setIsLoading(true)
      async function fecthPaises(){
          const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
         setPaises(response.data)
      }
      setIsLoading(false)
  fecthPaises()
    },[])



 return(
    isLoading === false && (<>
    <div className="col-5" style={{maxHeight:" 90vh", overflow: "scroll"}}>
    <div className="list-group" >
            {paises.map((element)=>{
                return(
                    <>
                    <Link to={`/pais/${element.alpha3Code}`}>
                    <div class="list-group-item list-group-item-action">
                        <p>{element.name.common}</p>
                        <img src ={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`} atl=".."/>
                    </div>
                     </Link>
                    </>
                )
            })}
    </div>
    </div>  

    <Routes>
      <Route path="/pais/:alpha3Code" element={<CountryDetails paises={paises} setPaises={setPaises}/>}/>
     </Routes>
   </>
    )

 )


}

    
export default ContriesList;