import React from 'react';
import { useSelector } from 'react-redux';
import { CalendarDays, Clock, Mail, User, X } from 'lucide-react';

export const AppointmentHistory = ({ lawyer, onClose }) => {
  const appointments = useSelector((state) =>
    state.appointments.appointments.filter((apt) => apt.lawyerId === lawyer.id)
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            Appointment History - {lawyer.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {appointments.length === 0 ? (
          <p className="text-center text-gray-500 py-4">
            No appointment history available.
          </p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <span>{appointment.clientName}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-gray-500" />
                    <span>{appointment.clientEmail}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="w-5 h-5 text-gray-500" />
                    <span>
                      {new Date(appointment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <span>
                      {appointment.timeSlot.start} - {appointment.timeSlot.end}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      appointment.status === 'SCHEDULED'
                        ? 'bg-blue-100 text-blue-800'
                        : appointment.status === 'COMPLETED'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};