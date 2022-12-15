import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import EndroitsList from "./components/endroits/EndroitsList";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profil from "./pages/profil/Profil";
import Error from "./components/Error";
import AddEndroit from "./pages/endroits/AddEndroit";
import EditEndroit from "./pages/endroits/EditEndroit";
import DocumentPages from "./pages/documents/DocumentPages";
import ReclamationList from "./components/reclamation/ReclamationList";
import AddReclamation from "./pages/reclamation/AddReclamation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/endroit" element={<EndroitsList />} />
        <Route path="/add" element={<AddEndroit />} />
        <Route path="/edit/:id" element={<EditEndroit />} />
        <Route path="/document" element={<DocumentPages />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="*" element={<Error />} />
        <Route path="/reclamation" element={<ReclamationList />} />
        <Route path="/reclamation/:id" element={<AddReclamation />} />

      </Routes>
    </div>
  );
}

export default App;
