import LoginPage from './Page/Login/LoginPage';
import Home from './Page/Home/Home'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = () => {
    return (
            <Routes>
                <Route path="/login" element={<LoginPage />}>
                <Route index element={<Home />} />
                </Route>
            </Routes>
    )
}

export default Router;