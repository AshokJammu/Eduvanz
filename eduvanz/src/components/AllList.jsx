import React from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import Profiles from "./Profiles";

class AllList extends React.Component {
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

    const userArr = userdata.data;

    return (
      <div>
        <h1>UserDetails</h1>

        <br />
        <br />
        <div class="row">
          {/* const items = userArr && userArr.find((item) => item.name === search) */}
          {userArr &&
            userArr.map((item) => (
              <div class="col-sm-4">
                <div class="card mb-3 card-cascade alert-primary ">
                  <div class="card-body ">
                    <h5 class="card-title card-header-title">{item.name}</h5>
                    <p class="card-text ">{item.locality}</p>
                    <button class="btn btn-success">
                      <Link key={item._id} to="/">
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
      </div>
    );
  }
}

export default AllList;
