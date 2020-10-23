import React from "react";
import axios from "axios";
// const Reports = () => (
//   <div>
//     <h1>Contacts</h1>
//   </div>
// );
class Reports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ageData: "",
      userdata: "",
      localityData:""
    };
  }
  componentDidMount() {
    axios
      // .get("https://eduvanz.herokuapp.com/users")
      // .then((res) => console.log(res.data, "response"));
      .get("http://localhost:5000/users")
      .then((res) =>
        this.setState({
          userdata: res.data,
          localityData:res.data.data
        })
      );
  }

  handleClickAge = (e) => {
    // console.log(e.target.value)
    this.setState({
      ageData: e.target.value,
    });
  };

  handleLocalData=(e)=>{
    // console.log(e.target.value)
    this.setState({
      localityData:e.target.value
    })
  }
  render() {
    console.log("sear", this.state.localityData);
    const { userdata } = this.state;
    const userArr = userdata.data;
    console.log("ass", userArr);
    return (
      <>
        <h1>Dashboard</h1>
        <div>
          <select value={this.state.ageData} onChange={this.handleClickAge}>
            <option value="13-18">13-18</option>
            <option value="18-25">18-25</option>
            <option value="25+">25+</option>
          </select>

          <select  value={this.state.localityData} onChange={this.handleLocalData} >
            <option>Choose locality</option>
         {userArr&&userArr.map((item)=> (
            <option value={item.locality} key={item._id}>{item.locality}</option>
            )
            )}
            </select>
        </div>

        <div>
          {userArr &&
            userArr
              .filter((item) => {
                if (this.state.ageData === "13-18") {
                  if (item.age >= 13 && item.age < 18) {
                    console.log(item);
                    return item;
                  }
                } else if (this.state.ageData === "18-25") {
                  // console.log("18")
                  if (item.age >= 18 && item.age < 25) {
                    console.log(item);
                    return item;
                  }
                } else if (this.state.ageData === "25+") {
                  console.log("25");
                  if (item.age >= 25) {
                    console.log(item);
                    return item;
                  }
                }
                return null;
              })
              
              .map((item) => (
                <div>
                  {item.name}
                  {item.locality}
                </div>
              ))}
        </div>
        <div>
          {userArr&&userArr
            .filter((item)=>{
              if(item.locality === this.state.localityData){
                return item
              }
              return null
            })
            .map((item) => (
              <div>
                {item.name}
                {item.locality}
              </div>
            ))}
          
        </div>
      </>
    );
  }
}

export default Reports;
