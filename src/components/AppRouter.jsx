import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';
import NotfoundPage from '../pages/NotfoundPage';
import Profilepage from '../pages/Profilepage';
import Dashboard from '../pages/Dashboard';
import Registerpage from '../pages/Registerpage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import GalleryPage from '../pages/GalleryPage';

import PrivateRoute from './PrivateRoute';
import MeetTheTeamPage from '../pages/MeetTheTeam';
import OurStoryPage from '../pages/OurStory';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsConditionPage from '../pages/TermsCondition';

export default function AppRouter() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={currentUser ? <Navigate to="/dashboard" /> : <Loginpage />} />
        <Route path="/register" element={currentUser ? <Navigate to="/dashboard" /> : <Registerpage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
        <Route path="/about-us" element={<OurStoryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profilepage />} />
          <Route path='/gallery/:userId' element={<GalleryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/gallery/:userId" element={<GalleryPage />} />
        </Route>

        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotfoundPage />} />
      </Routes>
    </Router>
  );
}
