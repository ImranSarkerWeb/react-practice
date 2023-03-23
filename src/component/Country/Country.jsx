import React from "react";
import "./Country.css";
const Country = (props) => {
  //   console.log(props);
  return (
    <div className="country">
      <h3>Country Name: {props.country.name.common}</h3>
      <img src={props.country.flags.png} alt="" />
    </div>
  );
};

export default Country;
