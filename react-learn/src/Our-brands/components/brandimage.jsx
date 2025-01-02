import { useEffect, useState } from "react";
import axios from "axios";


export default function Brand_image(){
    const[value,setValue]=useState([])
    useEffect(() => {
        axios
          .get('http://localhost:5000/api/brand')
          .then(res => setValue(res.data))
          .catch(err => console.error("Error fetching data:", err));
      }, []);

    return(
        <>
          <div   className="pt-10 grid grid-cols-2 lg:flex md:grid md:grid-cols-3 justify-items-center lg:justify-center lg:flex ">
    { value.map((item,index)=>(
      <div className="m-4 overflow-hidden rounded-full">
      <a href=""><img src={`http://localhost:5000/${item.imagePath}`}  className="rounded-full lg:w-32 lg:h-32 w-32 h-32 xl:h-40 xl:w-40 md:w-40 md:h-40 transition duration-300 ease-in-out hover:scale-110"/></a> 
     </div>
     
    ))}
    </div>
        </>
    )
}