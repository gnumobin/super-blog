import { Route, Routes } from "react-router";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./styles/general.css";
import NewCard from "./pages/NewCard";
import ScrollToTop from "./components/utils/ScrollToTop";
import Edit from "./pages/Edit";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/new" element={<NewCard />} />
        <Route path="/edit" element={<Edit />} />
        {/* <Route path="/car/:id" element={<CarPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/panel" element={<Login />} /> */}
      </Routes>
      <Footer />
      {/* <Header />
      <Home />
      <Post />
      <Footer /> */}
    </div>
  );
}

export default App;
