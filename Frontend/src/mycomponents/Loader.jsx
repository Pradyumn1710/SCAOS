import { useState, useEffect } from "react";

const Loader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-blue-100 flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-8 border-blue-200 rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-blue-500 rounded-full animate-spin"></div>
      </div>
      <div className="mt-4 text-blue-600 text-xl font-semibold">
        Preparing to sparkle{dots}
      </div>
    </div>
  );
};

export default Loader;
