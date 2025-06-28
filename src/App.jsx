// Example usage of the migrated components in a React application

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import CSS
import './css/globals.css';
import './css/carousel.css';

// Import migrated components
import Navbar from './components/Navbar_Phx';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import { ThemeProvider } from './components/theme-provider';
import LandingPage from './components/LandingPage';
import HomeContent from './components/HomeContent';

import Blogs from './pages/Blogs'; // Add this import for Blogs
import OurJourney from './pages/OurJourney'; // Import OurJourney page
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/login";
import AdminDashboard from "./pages/AdminDashboard";
import TeamBatches from './pages/teamBatches';



// Example Home page that uses the components
const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <LandingPage />
        <HomeContent />
      </main>
    </div>
  );
};

// Main App component with routing
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Routes>
         <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} /> {/* Added Blogs route */}
          <Route path="/our-journey" element={<OurJourney />} /> {/* Added OurJourney route */}
           <Route path="/blog/:id" element={<BlogDetail />} />
           <Route path="/notphoenixadmin" element={<Login />} />
           <Route path="/admin/dashboard" element={<AdminDashboard />} />
           <Route path="/our-team" element={<TeamBatches />} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;