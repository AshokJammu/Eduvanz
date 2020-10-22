import React from "react";
import axios from "axios";

// import { AppContext } from "../utils/AppProvider";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      dob: " ",
      profession: " ",
      locality: " ",
      guests: "",
      address: "",
    };
  }

  handleClick = () =>{
    console.log("ash")
    axios.post("http://localhost:5000/register",this.state)
    .then(res=>  console.log(res))
  }
  render() {
    const {
      name,
      age,
      dob,
      profession,
      locality,
      guests,
      address,
    } = this.state;
    //console.log(this.state, "states");
    // const { handleaddRegistration } = this.context;

    return (
      <div style={{ height:500,width:500,borderBlockStartColor:"red",marginLeft:350}}>
        Name:
        <input
          value={name}
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
          placeholder="name"
          style={{width:200,height:30,padding:5}}
        />
        <br />
        <br />
        Age:
        <input
          value={age}
          type ="Number"
          onChange={(e) =>
            this.setState({
              age: e.target.value,
            })
          }
          placeholder="age"
          style={{width:200,height:30,padding:5}}
        />
        <br />
        <br />
        DOB:
        <input
          value={dob}
          type="Date"
          onChange={(e) =>
            this.setState({
              dob: e.target.value,
            })
          }
          placeholder="dob"
          style={{width:200,height:30,padding:5}}
        />
        <br />
        <br />
        Profession:
        <select value={profession} onChange={(e) =>
            this.setState({
              profession: e.target.value,
            })} 
            style={{width:200,height:30,padding:5}}>
          <option  >Choose...</option>
          <option value="Student" >Student</option>
          <option value="Employed">Employed</option>
        </select>
        <br />
        <br />
        Locality:
        <input
          value={locality}
          onChange={(e) =>
            this.setState({
              locality: e.target.value,
            })
          }
          placeholder="locality"
          style={{width:200,height:30,padding:5}}
        />
        <br />
        <br />
        Guests:
         
        <select value={guests} onChange={(e) =>
            this.setState({
              guests: e.target.value,
            })}
            style={{width:200,height:30,padding:5}} >
          <option value="0">0</option>
          <option value="1" >1</option>
          <option value="2">2</option>
        </select>
        <br />
        <br />
        Address:
        <textarea
          value={address}
          onChange={(e) =>
            this.setState({
              address: e.target.value,
            })
          }
          placeholder="address"
          style={{width:200,height:30,padding:5}}
        />
        <br />
        <br />
        {/* <button onClick={() => handleaddRegistration(this.state)} style={{backgroundColor:"red",height:50,width:100,padding:5}} > ADD </button> */}
        <button onClick={this.handleClick} style={{backgroundColor:"red",height:50,width:100,padding:5}} > ADD </button>

      </div>
    );
  }
}

// Register.contextType = AppContext;

export default Register;
