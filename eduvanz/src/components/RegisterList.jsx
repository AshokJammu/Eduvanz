import React from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Profiles from "./Profiles";
import AllList from "./AllList";

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
      .get("https://eduvanz.herokuapp.com/users")
      // .then((res) => console.log(res.data, "response"));
      // .get("http://localhost:5000/users")
      .then((res) =>
        this.setState({
          userdata: res.data,
        })
      );
  }
  handleSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchInput: this.state.search,
      searchState:!this.state.searchState
    });
  };

  render() {
    const { userdata } = this.state;
    // console.log("sear", this.state.ageData);
    const { match } = this.props;
    const userArr = userdata.data;
    
    return (
      <div>
        <h1>UserDetails</h1>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            aria-label="Search"
            value={this.state.search}
            onChange={(e) =>
              this.setState({
                search: e.target.value,
              })
            }
            placeholder="search by name & locality"
          />

          <button
            onClick={this.handleSearch}
            class="btn btn-outline-success my-2 my-sm-0"
          >
            search
          </button>
        </form>
        <br />
        <br />
         
        <div class="row">
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
                <div class="col-sm-4">
                  <div class="card mb-3 card-cascade alert-primary ">
                    <div class="card-body ">
                      <h5 class="card-title card-header-title">{item.name}</h5>
                      <p class="card-text ">{item.locality}</p>
                      <button class="btn btn-success">
                        <Link key={item._id} to={`${match.url}/${item._id}`}>
                          View Full details
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        <Route
          path="/userdetails/:id"
          render={(props) => <Profiles userArr={userArr} {...props} />}
        />
        {!this.state.searchState && <AllList />}
      </div>
    );
  }
}

export default RegisterList;
