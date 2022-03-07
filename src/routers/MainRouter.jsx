import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import PostDetail from '../components/PostDetail/PostDetail';
import Profile from '../components/Profile/Profile';
import Header from '../components/UI/Header/Header';

import '../styles/main.scss';

export const MainRoutes = () => {
    return (
        <div className='main'>
        <Header />
            <div className="routes">
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/postdetail/:_id" element={<PostDetail />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            </div>
        </div>
            )
}