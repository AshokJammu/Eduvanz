import React from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Profiles from "./Profiles";

class RegisterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      userdata: "",
      searchInput: "",
      ageData: "",
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
        })
      );
  }
  handleSearch = () => {
    this.setState({
      searchInput: this.state.search,
    });
  };

  render() {
    const { userdata } = this.state;
    // console.log("sear", this.state.ageData);
    const { match } = this.props;
    const userArr = userdata.data;
    // let query = new URLSearchParams(history,location.search)
    // console.log(query,"query")
    return (
      <div>
        <h1>UserDetails</h1>
        <input
          value={this.state.search}
          onChange={(e) =>
            this.setState({
              search: e.target.value,
            })
          }
          placeholder="search by name & locality"
          style={{ width: 200, height: 20, padding: 5 }}
        />
        <button
          style={{ width: 100, height: 35, padding: 5 }}
          onClick={this.handleSearch}
        >
          search
        </button>
        <ul>
          {/* const items = userArr && userArr.find((item) => item.name === search) */}
          {userArr &&
            userArr
              .filter((item) => {
                if (
                  item.name === this.state.searchInput ||
                  item.locality === this.state.searchInput
                ) {
                  return item;
                }
                return null;
              })
              .map((item) => (
                <div>
                  <Link key={item._id} to={`${match.url}/${item._id}`}>
                    {item.name}
                    {item.locality}
                  </Link>
                </div>
              ))}
        </ul>
        <Route
          path="/userdetails/:id"
          render={(props) => (
            // <Product addToCart={addToCart} data={data} {...props} />
            <Profiles userArr={userArr} {...props} />
          )}
        />
         
          {/* <Reports userArr={this.state.userdata} /> */}
        
      </div>
    );
  }
}

export default RegisterList;
