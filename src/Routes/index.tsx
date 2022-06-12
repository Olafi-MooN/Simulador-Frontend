import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../Pages/Home";
import { Quiz } from "../Pages/Quiz";
import { LandingPage } from "../Pages/Landingpage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/quiz/:id" element={<Quiz />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router };
