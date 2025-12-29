import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import './App.css';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OrganizerDashboard from './pages/dashboard/OrganizerDashboard';
import PostEventPage from './pages/organizer/PostEventPage';
import PaymentTrackerPage from './pages/organizer/PaymentTrackerPage';
import ManpowerDashboard from './pages/dashboard/ManpowerDashboard';
import BrowseJobsPage from './pages/manpower/BrowseJobsPage';
import VendorDashboard from './pages/dashboard/VendorDashboard';
import Chat from './components/Chat';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />

              {/* Organizer Routes */}
              <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
              <Route path="/organizer/post-event" element={<PostEventPage />} />
              <Route path="/organizer/payments" element={<PaymentTrackerPage />} />

              {/* Manpower Routes */}
              <Route path="/manpower/dashboard" element={<ManpowerDashboard />} />
              <Route path="/manpower/browse-jobs" element={<BrowseJobsPage />} />
              <Route path="/manpower/applications" element={<BrowseJobsPage />} />

              {/* Vendor Routes */}
              <Route path="/vendor/dashboard" element={<VendorDashboard />} />

              {/* Common Routes */}
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
