import { ADD_REGISTRATION } from "./actionTypes";

const initState = {
    data:[
        {
            id:1,
            name:"Ashok",
            age:"25",
            dob: "1995-10-02",
            profession:"Employed",
            locality:"Vizag",
            guests:1,
            address:"nellimarla,vzm,535218",
            status: false
        },
        {
            id:2,
            name:"Kumar",
            age:"15",
            dob:"2020-10-02",
            profession:"Student",
            locality:"Vizag",
            guests:1,
            address:"nellimarla,vzm,535218",
            status: false,
          },
          {
            id:3,
            name:"Naidu",
            age:"35",
            dob:"18/11/1984",
            profession:"Employed",
            locality:"Vizag",
            guests:0,
            address:"nellimarla,vzm,535218",
            status: false,
          }
    ]
};


const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case ADD_REGISTRATION:
        let item = {
          id: state.data[state.data.length - 1].id + 1,
          name:payload.name,
          age:payload.age,
          dob:payload.dob,
          profession:payload.profession,
          locality:payload.locality,
          guests:payload.guests,
          address:payload.address,
          status: false
        };
        return {
          ...state,
          data: [...state.data, item]
        };
      default:
        return state;
    }
  };
  
  export default reducer;