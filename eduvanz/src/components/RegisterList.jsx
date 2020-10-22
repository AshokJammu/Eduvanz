import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
 import axios from "axios"
class RegisterList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search:"",
            userdata:[]
        }
    }
    componentDidMount(){
      axios.get("http://localhost:5000/users")
      .then(res=>this.setState({
        userdata:res.data
      }))
    }
  render() {
     
    const {search,userdata} = this.state
    console.log(userdata.data,"data")
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
        <ul>{userdata.data.map(item => <div><Link key={item.id}> {item.name} {item.locality}</Link></div>)}</ul>
      </div>
    );
  }
}

export default RegisterList;