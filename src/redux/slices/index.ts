import { combineSlices } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";

export const rootReducer = combineSlices(authSlice);
