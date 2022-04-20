import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './user/Login';
import Confirm from "./user/Confirm";
import UserHome from './UserHome';      
import { useEffect, useState } from 'react'; 
import Temp from "./Temp";
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Router>
      <AuthProvider>
      <Routes>
            <Route
              path="/"
              element={
                <Temp/>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
        </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
