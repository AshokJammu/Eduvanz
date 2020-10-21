import React from "react";
import { AppContext } from "../utils/AppProvider";

class RegisterList extends React.Component {
  render() {
    const { data } = this.context;
    console.log(data,"data")
    return (
      <div style={{ width: 100 }}>
        UserDetails
        <ul>{data?.map(item => <li key={item.id}> {item.name}</li>)}</ul>
      </div>
    );
  }
}

RegisterList.contextType = AppContext;

export default RegisterList;