import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  isLoading: false,
  update: false,
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
  },
});

export const { setCities, setLoading, setUpdate } = citiesSlice.actions;
export default citiesSlice.reducer;
