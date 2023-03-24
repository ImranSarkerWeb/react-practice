import React from "react";
import "./Country.css";
const Country = (props) => {
  //   console.log(props);
  const { name, flags } = props.country;
  return (
    <div className="country">
      <h3>Country Name: {name.common}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
