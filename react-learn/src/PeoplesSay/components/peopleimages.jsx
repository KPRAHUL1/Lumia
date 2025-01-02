import { useState } from "react";

export default function People_Image(props){
  const [value,setvalue]=useState(false);
const handleEnter=()=>{
  setvalue(false);
}
const handleLeave=()=>{
  setvalue(true);
}
  const {titles,tag,subtitle,images,description,star,images1}=props;

    return(
        <>
     <div className="grid grid-cols-1 p-5 text-center justify-items-center border-2 rounded-xl gap-5 mx-5 xl:mx-0 my-6 bg-white shadow" 
     onMouseEnter={handleEnter}
     onMouseLeave={handleLeave}>  
      <h4> {titles} </h4>
    <p className="">{tag}</p>
    <img src={value?images1:images} alt="" className="rounded-full h-32 w-32"  />
    <div className="flex"><i className={star}></i>
                <i className={star}></i>
                <i className={star}></i>
                <i className={star}></i>
                <i className={star}></i></div>
                <h4>{subtitle}</h4>
                <p className="text-sm">{description}</p></div>  
                 </>
    )
}