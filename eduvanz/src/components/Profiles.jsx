import React from "react";

const Profiles = (props) => {
  const { userArr, match } = props;
//   console.log(props, userArr);
  const items = userArr && userArr.find((item) => item._id === match.params.id);
//   console.log(items, "items");
  return (
    <>
      <h1>USerProfiles</h1>
      <div>Name:{items&&items.name}</div>
      <div>Age:{items&&items.age}</div>
      <div>DOB:{items&&items.dob}</div>
      <div>Profession:{items&&items.profession}</div>
      <div>Locality:{items&&items.locality}</div>
      <div>Guests:{items&&items.guests}</div>
      <div>Address:{items&&items.address}</div>
      
    </>
  );
};

export default Profiles;
