import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/Productpage" element={<Productpage/>} /> {/* Map /products to the ProductPage component */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
