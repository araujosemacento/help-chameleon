import React, { useState, useEffect } from "react";

export default function IsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth < 720) setIsMobile(true);
      else setIsMobile(false);
    };

    checkSize();

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile;
}