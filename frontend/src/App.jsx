import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from "./views/Home";
import ContactForm from "./views/Contact";
import About from "./views/About";
import Apply from "./views/Apply";
import Admissions from "./views/Admissions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/apply"
        element={<Apply />}
      />

      <Route
        path="/admissions"
        element={<Admissions />}
      />
    </Routes>
  );
}