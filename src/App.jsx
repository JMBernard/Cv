import Main from './pages/Main.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ="/" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
