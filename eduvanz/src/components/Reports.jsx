import React from "react";
import axios from "axios";

class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageData: "",
      userdata: [],
      localityData: "",
      value: null,
      localityArr: "",
    };
  }
  componentDidMount() {
    axios
      // .get("https://eduvanz.herokuapp.com/users")
      // .then((res) => console.log(res.data, "response"));
      .get("http://localhost:5000/users")
      .then((res) =>
        this.setState({
          userdata: res.data.data,
        })
      );
  }

  handleClickAge = (e) => {
    //console.log(e.target.value);
    var ageDataCount = this.state.userdata.filter((item) => {
      if (e.target.value === "13-18") {
        if (item.age >= 13 && item.age < 18) {
          // console.log(item);
          return item;
        }
      } else if (e.target.value === "18-25") {
        // console.log("18")
        if (item.age >= 18 && item.age < 25) {
          //console.log(item);
          return item;
        }
      } else if (e.target.value === "25+") {
        // console.log("25");
        if (item.age >= 25) {
          //console.log(item);
          return item;
        }
      }
      return null;
    });

    this.setState({
      value: ageDataCount.length,
    });
  };

  handleLocalData = (e) => {
    console.log(e.target.value);
    var localDataCount = this.state.userdata.filter((item) => {
      if (e.target.value === item.locality) {
        return item;
      }
      return null;
    });
    //console.log(localDataCount.length);
    this.setState({
      value: localDataCount.length,
    });
  };

  handleClickCount=(e)=>{
    console.log(e.target.value);
    var professionsCount = this.state.userdata.filter((item) => {
      if (e.target.value === item.profession) {
        return item;
      }
      return null;
    });
    console.log(professionsCount.length);
    this.setState({
      value: professionsCount.length,
    });
  }
  render() {
     
    const { userdata } = this.state;
    // const userArr = userdata.data;
    var localUsers = [];
    var seletLocality = [];
    console.log(userdata)
    if (userdata.length !== 0) {
      for (var i = 0; i < userdata.length; i++) {
        localUsers.push(userdata[i].locality);
      }
      // console.log("localusers",localUsers)
      for (var j = 0; j < localUsers.length; j++) {
        for (var k = j + 1; k < localUsers.length; k++) {
          if (localUsers[j] === localUsers[k]) {
            localUsers[k] = " ";
          }
        }
      }

      for (var l = 0; l < localUsers.length; l++) {
        if (localUsers[l] !== " ") {
          seletLocality.push(localUsers[l]);
        }
      }
    }
    //console.log("selectLocality", seletLocality);
    return (
      <>
        <h1>Dashboard</h1>
        <div class="row">
          <div class="col-3">
            <select
              class="custom-select mr-sm-2 alert-primary"
              onChange={this.handleClickAge}
            >
              <option>Choose Agegroup</option>
              <option value="13-18">13-18</option>
              <option value="18-25">18-25</option>
              <option value="25+">25+</option>
            </select>
          </div>
          <div class="col-3">
            <select
              class="custom-select mr-sm-2 alert-primary"
              onChange={this.handleLocalData}
            >
              <option>Choose locality</option>
              {seletLocality &&
                seletLocality.map((item) => (
                  <option value={item}>{item}</option>
                ))}
            </select>
          </div>
          <div class="col-3">
            <button class="btn alert-primary">Avg groupSize</button>
          </div>
          <div class="col-3">
            {/* <button class="btn alert-primary" >
              Count Of Student&Professionals
            </button> */}
            <select
              class="custom-select mr-sm-2 alert-primary"
              onChange={this.handleClickCount}
            >
              <option>Total Count</option>
              <option value="Student">Student</option>
              <option value="Employed">Employed</option>
            </select>
          </div>
        </div>

        <br></br>
        <div>
          <h1 className="display-1 textcenter alert-primary">
            {this.state.value}
          </h1>
        </div>
      </>
    );
  }
}

export default Reports;
