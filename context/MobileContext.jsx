"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export const MobileContext = createContext();

export function MobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    const checkSize = () => {
      setWindowSize(window.innerWidth);

      if (windowSize < 720) setIsMobile(true);
      else setIsMobile(false);
    };

    checkSize();
    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, [windowSize]);

  return (
    <MobileContext.Provider value={{ isMobile, windowSize }}>{children}</MobileContext.Provider>
  )
}

export function useMobile() {
  return useContext(MobileContext);
}