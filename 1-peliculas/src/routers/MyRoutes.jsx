import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
      </Routes>
    </Router>
  );
};
