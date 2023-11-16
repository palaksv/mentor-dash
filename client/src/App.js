import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "./pages/Dashboard/Dashboard.css";
import LoginPage from './pages/LoginSignup/LoginPage';
import Assessment from "./components/Assessments/Assessment";
import axios from "axios";
import Dashboard from "./pages/Dashboard/Dashboard";


axios.defaults.baseURL="http://localhost:5000";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        

          <Route path="/loginsignup" element={<LoginPage/>} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/dashboard" element={<Dashboard />} />


          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
