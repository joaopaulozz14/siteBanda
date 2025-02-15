import "./App.css";
import Footer from "./components/footer/Footer";
import Form from "./components/forms/Form";
import Header from "./components/header/Header";
import NewsComponent from "./components/newsComponent/NewsComponent";
import PhotosComponent from "./components/photosComponent/PhotosComponent";
import VideosComponent from "./components/videosComponent/VideosComponent";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/watch" element={<VideosComponent />} />
        <Route path="/photos" element={<PhotosComponent />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
