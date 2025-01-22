import { configureStore } from "@reduxjs/toolkit";

import lawyersReducer from "./lawyersSlice";
import appointmentsReducer from "./appointmentsSlice";

export const store = configureStore({
  reducer: {
    lawyers: lawyersReducer,
    appointments: appointmentsReducer,
  },
});
