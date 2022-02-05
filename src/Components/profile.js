import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetDataQuery } from "./createApi";

const Profile = () => {
  const id = useParams();
  console.log("id", id);
  const [newData, setNewData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const { data: Lists } = useGetDataQuery();

  useEffect(() => {
    setNewData(Lists && Lists.data ? Lists.data : []);
  }, [Lists]);
  useEffect(() => {
    setDisplayData(
      newData.filter((val) => val.address.buildingNumber === id.buildingNumber)
    );
  }, [newData]);
  console.log(">>", displayData);
  return (
    <div>
      <div className="container">
        {displayData.map((val) => {
          return (
            <div className="cards">
              <div className="inner-cards-wrapper">
                <div className="profile-img">
                  <img
                    src={val.image}
                    alt="product-img"
                    height="200"
                    width="40%"
                  />
                </div>
                <div className="profile-details-wrapper">
                  <div>
                    <h3>Self Information</h3>
                    <p>FirstName : {val.firstname}</p>
                    <p>LaststName : {val.lastname}</p>
                    <p>phone:{val.phone}</p>
                  </div>
                  <div className="adress-details-wrapper">
                    <h3>Address</h3>
                    <p> City :{val.address.city}</p>
                    <p> Counrty :{val.address.country}</p>
                    <p>streetName :{val.address.streetName}</p>
                  </div>
                </div>
              </div>
              <div className="back-btn-wrapper">
                <button className="back-btn">
                  <Link to="/" className="btn btn-primary btn-block">
                    Back to Home
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
