import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // API 데이터 참고 후 수정
  id: "",
  address: "",
  category: ""
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    // 수정
  }
});

export const {} = locationSlice.actions;
