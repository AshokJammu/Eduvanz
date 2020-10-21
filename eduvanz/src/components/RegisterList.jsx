import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { AppContext } from "../utils/AppProvider";

class RegisterList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search:""
        }
    }
  render() {
    const { data } = this.context;
    const {search} = this.state
    console.log(data,"data")
    return (
      <div>
       <h1>UserDetails</h1>
       <input
          value={search}
          onChange={(e) =>
            this.setState({
              search: e.target.value,
            })
          }
          placeholder="search by name & locality"
          style={{width:200,height:20,padding:5}}
        />
        <button style={{width:100,height:35,padding:5}}>search</button>
        <ul>{data?.map(item => <div><Link key={item.id}> {item.name} {item.locality}</Link></div>)}</ul>
      </div>
    );
  }
}

RegisterList.contextType = AppContext;

export default RegisterList;