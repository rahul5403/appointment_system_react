import React from 'react';
import { Briefcase, Clock,IndianRupeeIcon , Calendar } from 'lucide-react';
import { useSelector } from 'react-redux';

export const LawyerCard = ({ lawyer, onSelect }) => {
  const appointments = useSelector((state) =>
    state.appointments.appointments.filter(
      (apt) => apt.lawyerId === lawyer.id && apt.status === 'SCHEDULED'
    )
  );

  const availableSlots = lawyer.availableSlots.filter((slot) => !slot.isBooked);
  const isFullyBooked = availableSlots.length === 0;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center space-x-4">
        <img
          src={lawyer.imageUrl}
          alt={lawyer.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-900">{lawyer.name}</h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                isFullyBooked
                  ? 'bg-red-100 text-red-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {isFullyBooked ? 'Fully Booked' : 'Available'}
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Briefcase className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {lawyer.specialties.join(', ')}
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">30 min consultation</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <IndianRupeeIcon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">₹{lawyer.hourlyRate}/hour</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600">
              {availableSlots.length} slots available
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onSelect(lawyer)}
        disabled={isFullyBooked}
        className={`mt-4 w-full py-2 px-4 rounded-md transition-colors ${
          isFullyBooked
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isFullyBooked ? 'No Available Slots' : 'Book Appointment'}
      </button>
    </div>
  );
};