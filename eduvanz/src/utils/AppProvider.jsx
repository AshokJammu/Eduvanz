import React, { createContext } from "react";
import { store } from "../redux/store";
import { addRegistration } from "../redux/action";

export const AppContext = createContext();

class AppProvider extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleUpdate);
  }
  handleUpdate = () => {
    this.forceUpdate();
  };
  componentWillUnmount() {
    this.unsubscribe();
  }
  handleaddRegistration = payload => {
    store.dispatch(addRegistration(payload));
  };
  render() {
    const { handleaddRegistration } = this;
    console.log(store.getState());
    return (
      <AppContext.Provider value={{ ...store.getState(), handleaddRegistration }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
