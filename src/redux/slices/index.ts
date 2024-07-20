import { combineSlices } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { configSlice } from "./configSlice";
import { cryptoDataSlice } from "./cryptoDataSlice";

export const rootReducer = combineSlices(
  authSlice,
  configSlice,
  cryptoDataSlice
);
