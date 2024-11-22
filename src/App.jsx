import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Room from './components/Room';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Features from './components/Features';
import Pro from './components/Pro';
import { Provider } from 'react-redux';
import store from './store/store';
import CreateRoomType from './components/CreateRoomType';

function App() {
  return (
    <Provider store={store}> 
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pro" element={<Pro />} />
          <Route path="/create-room-type" element={<CreateRoomType />} />
          <Route path="/room-design" element={<Room />} />
          {/* room-design */}
          <Route path="/caracteristiques" element={<Features/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tarifs" element={<Pricing />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;