import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Forum from './components/Forum';
import Post from './components/Post';
import ForumStructure from './components/ForumStructure';

import LoginPage from './pages/LoginPage';
import SingUpPage from './pages/SingUpPage';
import forumData from './data/forumData';
import './App.css';

const Layout = () => {
  const location = useLocation();

  // Determine if we are on the login page
  const isLoginPage = location.pathname === '/login';
  const isSignUpPage = location.pathname === '/signup';

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/post" element={<Post />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SingUpPage />} />
        </Routes>
        {!isLoginPage && !isSignUpPage && <ForumStructure categories={forumData} />}
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;


