import { createSlice } from '@reduxjs/toolkit';
import { lawyers } from '../data/mockData';

const initialState = {
  lawyers,
};

const lawyersSlice = createSlice({
  name: 'lawyers',
  initialState,
  reducers: {
    updateLawyerAvailability: (state, action) => {
      const lawyer = state.lawyers.find((l) => l.id === action.payload.lawyerId);
      if (lawyer) {
        const slotIndex = lawyer.availableSlots.findIndex(
          (slot) => slot.id === action.payload.timeSlot.id
        );
        if (slotIndex !== -1) {
          lawyer.availableSlots[slotIndex].isBooked = true;
        }
      }
    },
  },
});

export const { updateLawyerAvailability } = lawyersSlice.actions;
export default lawyersSlice.reducer;