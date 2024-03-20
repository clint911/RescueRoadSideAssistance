import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Profile from "../Profile/Profile";
import Contact from "../Contacts/Contact";
import Search from "../Search/Search";
import SearchResult from "../SearchResults/SearchResults";

import "./NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/*className brand*/}
        <Route path="/Login" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/SearchResult" element={<SearchResult />} />
      </Routes>
      <div className="left-items">
        <span className="brand">RoadsideRescue</span>
        <span className="nav-item">Services</span>
        <span className="nav-item">Repairs</span>
        <span className="nav-item">TopPicks</span>
      </div>
      <div className="right-items">
        <button className="search-button">Search</button>
        {/*Login onClick changes the whole page layout */}
        <button className="login-button">Login</button>
      </div>
    </nav>
  )
}
