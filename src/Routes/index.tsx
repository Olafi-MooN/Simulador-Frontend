import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "../Pages/Home";
import { Quiz } from "../Pages/Quiz";
import { LandingPage } from "../Pages/Landingpage";
import { Profile } from "../Pages/Profile";
import { ProfileEdit } from "../Pages/Profile/ProfileEdit";
import { Navbar } from "../Components/Navbar";

const Router = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
      <Navbar>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/quiz/:id" element={<Quiz />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile/edit" element={<ProfileEdit />}></Route>
        </Routes>
      </Navbar>
    </BrowserRouter>
  )
}

export { Router };
