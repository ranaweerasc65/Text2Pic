import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage';
import NotfoundPage from '../pages/NotfoundPage';
import Profilepage from '../pages/Profilepage';
import Dashboard from '../pages/Dashboard';
import Registerpage from '../pages/Registerpage';
import ResetPasswordPage from '../pages/ResetPasswordPage';

import PrivateRoute from './PrivateRoute';
import MeetTheTeamPage from '../pages/MeetTheTeam';
import OurStoryPage from '../pages/OurStory';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsConditionPage from '../pages/TermsCondition';


export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Loginpage />} />
          <Route path='/register' element={<Registerpage />} />
          
          <Route element={<PrivateRoute/>}>
              <Route path='/dashboard' element={<Dashboard />} exact/>
              <Route path='/profile' element={<Profilepage />} />
          </Route>
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='*' element={<NotfoundPage />} />


          <Route path='/meet-the-team' element={<MeetTheTeamPage />} />
          <Route path='/about-us' element={<OurStoryPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms-and-conditions' element={<TermsConditionPage />} />

        </Routes>
      </Router>
    </>
  );
}

