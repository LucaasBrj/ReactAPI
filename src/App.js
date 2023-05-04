import './App.css';
import { useNavigate } from 'react-router-dom';
import Router from "./Router"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function RequireAuth({ children }) {
    const user = localStorage.getItem("user"); // TODO Get user from local storage
    const navigate = useNavigate();

    if (user === null) {
        navigate('/login', { replace: true });
    } else {
        return children;
    }
}

function App() {

  return (
    <div>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;
