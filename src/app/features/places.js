import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  places: [],
  isLoading: false,
  update: false,
};

export const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action) => {
      state.places = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUpdate: (state, action) => {
      state.update = action.payload;
    },
  },
});

export const { setPlaces, setLoading, setUpdate } = placesSlice.actions;
export default placesSlice.reducer;
