import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookAppointment } from '../store/appointmentsSlice';
import { updateLawyerAvailability } from '../store/lawyersSlice';
import { X, Calendar } from 'lucide-react';

export const AppointmentForm = ({ lawyer, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    selectedSlot: '',
  });

  const existingAppointments = useSelector((state) =>
    state.appointments.appointments.filter(
      (apt) => apt.lawyerId === lawyer.id && apt.status === 'SCHEDULED'
    )
  );

  const availableSlots = lawyer.availableSlots.filter((slot) => {
    const isBooked = existingAppointments.some(
      (apt) => apt.timeSlot.id === slot.id
    );
    return !isBooked && !slot.isBooked;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedTimeSlot = lawyer.availableSlots.find(
      (slot) => slot.id === formData.selectedSlot
    );

    // Double check availability before booking
    const isSlotAvailable = availableSlots.some(slot => slot.id === selectedTimeSlot.id);
    if (!isSlotAvailable) {
      alert('Sorry, this time slot is no longer available. Please select another slot.');
      return;
    }

    const appointment = {
      id: Math.random().toString(36).substr(2, 9),
      lawyerId: lawyer.id,
      clientName: formData.clientName,
      clientEmail: formData.clientEmail,
      date: new Date().toISOString(),
      timeSlot: selectedTimeSlot,
      status: 'SCHEDULED',
    };

    dispatch(bookAppointment(appointment));
    dispatch(
      updateLawyerAvailability({
        lawyerId: lawyer.id,
        timeSlot: selectedTimeSlot,
      })
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-semibold mb-4">Book Appointment with {lawyer.name}</h2>
        
        {availableSlots.length === 0 ? (
          <div className="text-center py-6">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-red-600 font-medium mb-2">
              No appointments available
            </p>
            <p className="text-gray-500 text-sm">
              This lawyer is fully booked. Please try another lawyer or check back later.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.clientName}
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.clientEmail}
                onChange={(e) =>
                  setFormData({ ...formData, clientEmail: e.target.value })
                }
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Available Time Slots
              </label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.selectedSlot}
                onChange={(e) =>
                  setFormData({ ...formData, selectedSlot: e.target.value })
                }
              >
                <option value="">Select a time slot</option>
                {availableSlots.map((slot) => (
                  <option key={slot.id} value={slot.id}>
                    {slot.start} - {slot.end}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};