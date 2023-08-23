import { Route,BrowserRouter,Routes } from 'react-router-dom';
import './App.css';
import Maps from "./components/Maps"
import Data from './components/Data';
function App() {
  return (
    <div className="App">
             
       <BrowserRouter>
    
    <Routes>
    <Route path="/Maps" element={<Maps/>}></Route>
    <Route path="/" element={<Data/>}></Route>
    </Routes>
      </BrowserRouter>

      <footer className="App-footer">
            <p>© 2023 Virginia Beach Schools. All rights reserved.</p>
            <p>Contact: <a href="mailto:info@vbschools.net">info@vbschools.net</a></p>
        </footer>
    </div>
  );
}

export default App;
