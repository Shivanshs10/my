import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/ProductPage" element={<Productpage/>} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
