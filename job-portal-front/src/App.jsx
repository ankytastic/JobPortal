import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import MockTest from './components/Mocktest';
import Jobavailability from './components/JobAvailability';
import AboutContact from './components/AboutContact';
import JobOpenings from './components/JobOpenings';
import NotifyStatus from './components/NotifyStatus';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ textAlign: 'center'}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mocktest" element={<MockTest />} />
          <Route path="/apply" element={<Jobavailability />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/jobs" element={<JobOpenings />} />
          <Route path="/status" element={<NotifyStatus />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
