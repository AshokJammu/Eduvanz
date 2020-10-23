import React from "react";
import axios from "axios";
import "./Register.css";
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

  handleClick = () => {
    console.log("ash",this.state);
    axios
      // .post("http://localhost:5000/register", this.state)
      .post("https://eduvanz.herokuapp.com/register",this.state)
      .then((res) => console.log(res));
  };
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
    // console.log(this.state, "states");
    // const { handleaddRegistration } = this.context;

    return (

      <div class="alert alert-primary" role="alert">
        {/* Form */}
        <div class="container contact">
          <div class="row">
            <div class="col-md-3">
              <div class="contact-info">
                <img
                  src="https://image.ibb.co/kUASdV/contact-image.png"
                  alt="ige"
                />
                <h2>Register With Us</h2>
                <h4>We would love to hear from you !</h4>
              </div>
            </div>
            <div class="col-md-9">
              <div class="contact-form">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="fname">
                    Name:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={name}
                      onChange={(e) =>
                        this.setState({
                          name: e.target.value,
                        })
                      }
                      placeholder="name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="lname">
                    Age:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="Number"
                      class="form-control"
                      value={age}
                      onChange={(e) =>
                        this.setState({
                          age: e.target.value,
                        })
                      }
                      placeholder="age"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">
                    DOB
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="date"
                      class="form-control"
                      id="email"
                      value={dob}
                      onChange={(e) =>
                        this.setState({
                          dob: e.target.value,
                        })
                      }
                      placeholder="dob"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">
                    Profession
                  </label>
                  <div class="col-sm-10 ">
                    <select
                      value={profession}
                      onChange={(e) =>
                        this.setState({
                          profession: e.target.value,
                        })
                      }
                      style={{ width: 200, height: 30, padding: 5 }}
                    >
                      <option>Choose...</option>
                      <option value="Student">Student</option>
                      <option value="Employed">Employed</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-group">
                  <label class="control-label col-sm-2" for="fname">
                    Locality:
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      value={locality}
          onChange={(e) =>
            this.setState({
              locality: e.target.value,
            })
          }
                      placeholder="Locality"
                    />
                  </div>
                </div>
                 
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">
                    Guests
                  </label>
                  <div class="col-sm-10">
                  <select value={guests} onChange={(e) =>
            this.setState({
              guests: e.target.value,
            })}
            style={{width:200,height:30,padding:5}} >
          <option value="0">0</option>
          <option value="1" >1</option>
          <option value="2">2</option>
        </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="comment">
                    Address
                  </label>
                  <div class="col-sm-10">
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      value={address}
                      onChange={(e) =>
                        this.setState({
                          address: e.target.value,
                        })
                      }
                      placeholder="address"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default" onClick={this.handleClick}>
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Register.contextType = AppContext;

export default Register;
