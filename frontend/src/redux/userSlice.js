 import { createSlice } from "@reduxjs/toolkit";


var initialState = {}; 
if(localStorage.getItem('user')==null){
    initialState = {
      email: "",
      firstName: "",
      image: "",
      lastName: "",
      _id: "",
    };
}else{
   initialState = JSON.parse(localStorage.getItem('user'));
}
 

// function that acpect a object that containing three element(name , intial_state , reducers)
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      // console.log(action.payload.data);
      //   state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      const user_data = {
        email: action.payload.data.email,
        firstName: action.payload.data.firstName,
        image: action.payload.data.image,
        lastName: action.payload.data.lastName,
        _id: action.payload.data._id,
      };

      localStorage.setItem('user'  , JSON.stringify(user_data));
    },

    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
      localStorage.removeItem('user');
    },
  },
});

export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
