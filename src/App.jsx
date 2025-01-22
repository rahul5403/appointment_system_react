import {  useState } from "react";
import { Provider, useSelector } from "react-redux";

import { LawyerCard } from "./components/LawyerCard";
import { AppointmentForm } from "./components/AppointmentForm";
import { AppointmentHistory } from "./components/AppointmentHistory";
import { Scale } from "lucide-react";

import { store } from "./store/index";

function AppContent() {
  const lawyers = useSelector((state) => state.lawyers.lawyers);
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [showAppointmentHistory, setShowAppointmentHistory] = useState(false);

  const handleLawyerSelect = (lawyer) => {
    setSelectedLawyer(lawyer);
    setShowAppointmentForm(true);
  };

  const handleViewHistory = (lawyer) => {
    setSelectedLawyer(lawyer);
    setShowAppointmentHistory(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Scale className="w-8 h-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Legal Appointment System
              </h1>
             
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lawyers.map((lawyer) => (
            <div key={lawyer.id} className="space-y-4">
              <LawyerCard lawyer={lawyer} onSelect={handleLawyerSelect} />
              <button
                onClick={() => handleViewHistory(lawyer)}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
              >
                View Appointment History
              </button>
            </div>
          ))}
        </div>

        {showAppointmentForm && selectedLawyer && (
          <AppointmentForm
            lawyer={selectedLawyer}
            onClose={() => setShowAppointmentForm(false)}
          />
        )}

        {showAppointmentHistory && selectedLawyer && (
          <AppointmentHistory
            lawyer={selectedLawyer}
            onClose={() => setShowAppointmentHistory(false)}
          />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
