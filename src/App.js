import Feed from './feed/Feed';
import { AuthProvider } from "./hooks/useAuth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './user/Login';
import Confirm from "./user/Confirm";
import Post from "./feed/Creation/NewPost";
import NewPost from './feed/Creation/NewPost';
import Topics from './topics/Topics';
import { useState } from 'react';
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
                <Topics/>
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
