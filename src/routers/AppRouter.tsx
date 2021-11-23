import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="home" element={<HomePage />} />
            </Routes>
            
        </BrowserRouter>
    )
}
