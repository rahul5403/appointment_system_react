import { addDays, format, setHours, setMinutes } from 'date-fns';

const generateTimeSlots = (date) => {
  const slots = [];
  for (let hour = 9; hour < 17; hour++) {
    for (let minutes = 0; minutes < 60; minutes += 30) {
      const start = setMinutes(setHours(date, hour), minutes);
      const end = setMinutes(setHours(date, hour), minutes + 30);
      slots.push({
        id: `${format(start, 'HH:mm')}-${format(end, 'HH:mm')}`,
        start: format(start, 'HH:mm'),
        end: format(end, 'HH:mm'),
        isBooked: false,
      });
    }
  }
  return slots;
};

export const lawyers = [
  {
    id: '1',
    name: 'Manish Sahu',
    specialties: ['CORPORATE', 'PROPERTY'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661746228321-8de24c08c6a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGluZGlhbiUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    hourlyRate: 250,
    availableSlots: generateTimeSlots(new Date()),
  },
  {
    id: '2',
    name: 'Akash Yadav',
    specialties: ['CRIMINAL', 'FAMILY'],
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hourlyRate: 300,
    availableSlots: generateTimeSlots(addDays(new Date(), 1)),
  },
  {
    id: '3',
    name: 'Heena khan',
    specialties: ['DIVORCE', 'FAMILY'],
    imageUrl: 'https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    hourlyRate: 275,
    availableSlots: generateTimeSlots(addDays(new Date(), 2)),
  },
];

export const initialAppointments = [];
