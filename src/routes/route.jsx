import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StartPage } from "../pages/startPage"
import { HomePage } from '../pages/homePage';

export const CustomRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path='/home' element={<HomePage />} />
            </Routes>
        </Router>
    )
}