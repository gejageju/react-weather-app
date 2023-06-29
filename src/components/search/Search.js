import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import { geoApiUrl,geoApiOptions } from "./../../utils/api";
//import AsyncSelect from "react-select/async";
const Search= (props)=>{
    
    const [search,setSearch]=useState(null)
    
    const handleOnChange = (searchData)=>{
        setSearch(searchData);
        props.onSearchChange(searchData);
        //console.log(searchData);
    }
    const loadOptions=async(inputValue)=>{
        
        return fetch(
            `${geoApiUrl}?namePrefix=${inputValue}`, 
            geoApiOptions)
            .then((result)=>result.json())
            .then((result)=>{
                return {
                    options : result.data.map((city)=>{
                        return {
                            value : `${city.latitude} ${city.longitude}`,
                            label : `${city.name},${city.country}`
                        }
                    })
                }
            })
              .catch((err)=>console.log(err));
 
    };

    //console.log(search)
    return(
        <div>
           <AsyncPaginate
           className="search"
           placeholder="Search for city"
           debounceTimeout={1500}
           value={search}
           onChange={handleOnChange}
           loadOptions={loadOptions}
           />
           
           
        </div>
        
    )
}
export default Search;