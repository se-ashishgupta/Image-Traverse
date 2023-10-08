import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import PhotoDetails from './page/PhotoDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import "./App.css";
import Search from './page/Search';
import Loader from './components/Loader';
import toast, { Toaster } from "react-hot-toast";
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  // Getting error from store 
  const { error } = useSelector(state => state.photos);

  // Message popup whenever error found 
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  });


  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchphoto' element={<Search />} />
        <Route path='/photo/:id' element={<PhotoDetails />} />
      </Routes>
      <Footer />
      <Toaster />
      <ScrollToTop />
    </Router>
  );
};

export default App;