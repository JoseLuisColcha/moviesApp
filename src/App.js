import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import MovieList from "./components/MovieList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<MovieList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
  