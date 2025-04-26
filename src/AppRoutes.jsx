import { Routes, Route } from "react-router-dom";
import App from "./App";
import Ability from "./component/Abilities";
import Projects from "./component/Projects";
import Contacts from "./component/Contacts";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/skills" element={<Ability />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Route>
    </Routes>
  );
}
