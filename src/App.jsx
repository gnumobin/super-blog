import { Route, Routes } from "react-router";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./styles/general.css";
import NewCard from "./pages/NewCard";
import ScrollToTop from "./components/utils/ScrollToTop";
import Edit from "./pages/Edit";

const data = [
  {
    title: "۱۰ نکته برای بهبود خواب شبانه و افزایش انرژی روزانه",
    tag: "سلامتی",
    author: {
      name: "سارا احمدی",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      date: "۱۴۰۴ مهر ۲۰",
    },
    img: "https://picsum.photos/id/1011/800/600", // تصویر قابل دسترس از ایران
  },
  {
    title: "راهنمای سفر به شمال ایران: جاهای دیدنی و تجربه‌های خاص",
    tag: "سفر",
    author: {
      name: "امیر حسینی",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "۱۴۰۴ مهر ۲۱",
    },
    img: "https://picsum.photos/id/1025/800/600",
  },
  {
    title: "۵ دستور غذای سریع و سالم برای روزهای شلوغ",
    tag: "غذا",
    author: {
      name: "نگار ملکی",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
      date: "۱۴۰۴ مهر ۲۲",
    },
    img: "https://picsum.photos/id/1035/800/600",
  },
  {
    title: "تمرینات خانگی برای تقویت عضلات بازو و شانه",
    tag: "ورزش",
    author: {
      name: "مهدی کریمی",
      img: "https://randomuser.me/api/portraits/men/33.jpg",
      date: "۱۴۰۴ مهر ۲۳",
    },
    img: "https://picsum.photos/id/1041/800/600",
  },
  {
    title: "آخرین نوآوری‌های هوش مصنوعی و تاثیر آن بر زندگی ",
    tag: "تکنولوژی",
    author: {
      name: "رعنا موسوی",
      img: "https://randomuser.me/api/portraits/women/15.jpg",
      date: "۱۴۰۴ مهر ۲۴",
    },
    img: "https://picsum.photos/id/1050/800/600",
  },
  {
    title: "چطور با مدیریت زمان، استرس را کاهش دهیم؟",
    tag: "روانشناسی",
    author: {
      name: "حسن رضایی",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "۱۴۰۴ مهر ۲۵",
    },
    img: "https://picsum.photos/id/1062/800/600",
  },
];

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/post" element={<Post />} />
        <Route path="/new" element={<NewCard data={data} />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
