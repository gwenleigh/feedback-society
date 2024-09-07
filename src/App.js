import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Forum from './components/Forum';
import Post from './components/Post';
import ForumStructure from './components/ForumStructure';
import forumData from './data/forumData';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact component={Forum} />
          <Route path="/post" component={Post} />
        </Routes>
        <ForumStructure categories={forumData} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;


