import { configureStore } from "@reduxjs/toolkit";

import placesReducer from "./features/places";
import citiesReducer from "./features/cities";
import userReducer from "./features/user";

export const store = configureStore({
  reducer: {
    places: placesReducer,
    cities: citiesReducer,
    user: userReducer,
  },
});
