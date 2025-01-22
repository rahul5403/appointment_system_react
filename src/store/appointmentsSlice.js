import { createSlice } from "@reduxjs/toolkit";
import { initialAppointments } from "../data/mockData";

const initialState = {
  appointments: initialAppointments,
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    bookAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    updateAppointmentStatus: (state, action) => {
      const appointment = state.appointments.find(
        (apt) => apt.id === action.payload.id
      );
      if (appointment) {
        appointment.status = action.payload.status;
      }
    },
  },
});

export const { bookAppointment, updateAppointmentStatus } =
  appointmentsSlice.actions;
export default appointmentsSlice.reducer;
