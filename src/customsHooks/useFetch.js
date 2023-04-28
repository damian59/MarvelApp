import { useState, useEffect } from "react";

export function useFetch(url){

    const [data, setData] = useState([]);
    
    useEffect(() =>{
      fetch(url)
      .then(res=>res.json())
      .then(data=>{setData(data.data.results)})
        .catch(eror=>console.log(eror))
    
    }, [URL]);

    return {data, setData}
}