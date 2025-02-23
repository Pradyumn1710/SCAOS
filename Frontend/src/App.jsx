import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./mycomponents/Homepage/Header";
import { Suspense, lazy, useState, useEffect } from "react";
import Loader from "./mycomponents/Loader"; // Import Loader component

// Lazy loading pages
const Homepage = lazy(() => import("./Pages/Homepage"));
const Form = lazy(() => import("./mycomponents/other/Form"));
const AdminDashboard = lazy(() => import("./Pages/Admin"));
const GenerateBill = lazy(() => import("./mycomponents/Admin/generate-bill/GenerateBill"));
const Services = lazy(() => import("./Pages/Services"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Minimum 2-second delay
    };

    if (document.readyState === "complete") {
      handleLoad(); // If already loaded, start 2-sec timer
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show loader for at least 2 seconds
      ) : (
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/form" element={<Form />} />
              <Route path="/adminpannelabhijeet" element={<AdminDashboard />} />
              <Route path="/admin/generate" element={<GenerateBill />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
