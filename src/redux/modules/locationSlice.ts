import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // API 데이터 참고 후 수정
  location: { lat: "", lng: "" },
  id: "",
  address: "",
  category: "",
  restrooms: [],
  stores: []
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    getCurrentLocation: (state, action) => {
      state.location.lat = action.payload;
      state.location.lng = action.payload;
    },
    getRestrooms: (state, action) => {
      state.restrooms = action.payload;
    },
    getStores: (state, action) => {
      state.stores = action.payload;
    }
  }
});

export const { getCurrentLocation, getRestrooms } = locationSlice.actions;
export default locationSlice.reducer;
