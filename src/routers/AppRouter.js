import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import NotFound from "../components/NotFound/NotFound"
import { MainRoutes } from "./MainRouter";

export const AppRouter = () => {
    return (
        <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
    
              <Route path="/main/*" element={ <MainRoutes />  } />
              <Route path="*" element={ <NotFound />  } />
          </Routes>
        </Router>
    )
}