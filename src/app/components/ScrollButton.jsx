import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 200;

      if (scrollPosition > scrollThreshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-10 right-5">
      {showButton && (
        <div
          className="transition-all hover:scale-110 flex justify-center items-center dark:bg-white h-16 w-16 rounded-full cursor-pointer shadow-lg border border-slate-300 bg-teal-600"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-6 w-6"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M112 328l144-144 144 144"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
