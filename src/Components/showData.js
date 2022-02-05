import React, { useState, useEffect } from "react";
import Card from "./card";
import { useGetDataQuery } from "./createApi";
const ShowData = () => {
  const [allData, setallData] = useState([]);
// useEffect(() => {  
//     axiosPost();
// }, [])
//   const axiosPost = async () => {
//     const response = await fetch("https://fakerapi.it/api/v1/persons");
//     const postData = await response.json();
//       console.log("postData", postData);
//     setallData( postData.data);
//   };
  
const {
  data: Lists,
} = useGetDataQuery();

 useEffect(() => {
   setallData(Lists && Lists.data ? Lists.data : []);
 }, [Lists]);

//  console.log("//", allData);
  return (
    <div>
      <div className="main-wrapper">
        <div className="row">
          {allData.map((val) => {
            return(
           <div className="inner-Wrapper">
             <Card {...val}/>
           </div>
           ) })}
        </div>
      </div>
    </div>
  );
}

export default ShowData;
