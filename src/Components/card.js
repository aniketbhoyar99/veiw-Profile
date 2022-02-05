import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
 
  return (
    <div className="parent-class">
      <div>
        <div style={{ width: "200px",borderRadius:"30px"}}>
          <img src={props.image} alt="product-img" height="200" width="100%" />
        </div>
        <div className="details-wrapper">
          <p>FirstName :{props.firstname}</p>
          <p>LastName :{props.lastname}</p>
          <button className="veiw-profile-wrapper">
            <Link
              to={"/profile/" + props.address.buildingNumber}
              className="link-btn"
            >
              View Profile
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
