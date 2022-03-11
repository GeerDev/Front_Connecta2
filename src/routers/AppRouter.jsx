import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import NotFound from "../components/NotFound/NotFound"
import { MainRoutes } from "./MainRouter";

import PrivateZone from "../guards/PrivateZone"

export const AppRouter = () => {
    return (
        <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
    
              <Route path="/main/*" element={ 
                    <PrivateZone>
                         <MainRoutes /> 
                    </PrivateZone> 
              } />
              <Route path="*" element={ <NotFound />  } />
          </Routes>
        </Router>
    )
}