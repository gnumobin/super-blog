import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import Post from "./pages/Post";
import NewCard from "./pages/NewCard";
import EditList from "./pages/EditList";
import Edit from "./pages/Edit";

import ScrollToTop from "./components/utils/ScrollToTop";
import "./styles/general.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "۱۰ نکته برای بهبود خواب شبانه و افزایش انرژی روزانه",
      tag: "سلامتی",
      author: {
        name: "سارا احمدی",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        date: "۱۴۰۴ مهر ۲۰",
      },
      img: "https://picsum.photos/id/1011/800/600",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
      title: "چطور با مدیریت زمان، استرس را کاهش دهیم؟",
      tag: "روانشناسی",
      author: {
        name: "حسن رضایی",
        img: "https://randomuser.me/api/portraits/men/22.jpg",
        date: "۱۴۰۴ مهر ۲۵",
      },
      img: "https://picsum.photos/id/1062/800/600",
    },
  ]);

  const location = useLocation();

  const pageVariants = {
    initial: { x: "100%", opacity: 0.8 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0.8 },
  };

  const pageTransition = {
    type: "spring",
    ease: [0.22, 1, 0.36, 1],
    duration: 0.3,
  };

  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <ScrollToTop />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Home data={data} />
              </motion.div>
            }
          />
          <Route
            path="/edit"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <EditList data={data} setData={setData} />
              </motion.div>
            }
          />
          <Route
            path="/editOne"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Edit data={data} setData={setData} />
              </motion.div>
            }
          />
          <Route
            path="/new"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <NewCard data={data} />
              </motion.div>
            }
          />
          <Route
            path="/post"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Post data={data} />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
