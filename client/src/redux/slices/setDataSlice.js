import { createSlice } from "@reduxjs/toolkit";

const setDataSlice= createSlice({
  name: "setit",

  initialState: {
    alldata: [],
  },

  reducers: {
    addData: (state,actions) => {


      console.log(actions.payload);
      

      state.alldata=[actions.payload];
      
    },
  },

  
});

export const { addData } = setDataSlice.actions;

export default setDataSlice.reducer;
