"use client";

import * as React from "react";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const [isMobile, setIsMobile] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [dimensions, setDimensions] = React.useState([]);

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
      setIsMobile(dimensions.width < 720);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [dimensions.width]);

  return (
    <div className={`flex flex-col min-h-screen bg-background-100`}>
      <NavBar />
      <main
        className={`flex relative flex-col md:flex-row m-auto bg-background-200 w-[70vw] h-[70vh] rounded-xl shadow-xl overflow-hidden`}
      >
        <section
          className={`flex absolute w-full h-full top-0 left-0 z-10 transition-all duration-600`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 100}%)` }
              : { transform: `translateX(-${panel ? 0 : 100}%)` }
          }
        />
        <section
          className={`flex flex-col md:flex-row absolute w-full md:w-[70%] h-[70%] md:h-full top-[65%] md:top-0 md:left-[65%] rounded-3xl bg-gradient-to-br from-primary-200 to-accent-400 z-20 transition-all duration-600 overflow-hidden shadow-[0_0_5px_0.25px_var(--secondary-600)]`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 143}%)` }
              : { transform: `translateX(-${panel ? 0 : 143}%)` }
          }
        >
          <div className="flex flex-row md:flex-col justify-center items-center text-center gap-4 text-text-900 h-1/2 md:h-full w-full md:w-1/2 p-6"></div>
          <div className="flex flex-row md:flex-col justify-center items-center text-center gap-4 text-text-900 h-1/2 md:h-full w-full md:w-1/2 p-6"></div>
        </section>
        <section
          className={`flex absolute w-full h-full top-[100%] md:top-0 md:left-[100%] z-10 transition-all duration-600`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 100}%)` }
              : { transform: `translateX(-${panel ? 0 : 100}%)` }
          }
        />
        <Button className="absolute left-[50%] top-[50%] z-50" onClick={() => { setPanel(!panel) }}>Trocar</Button>
      </main>
    </div>
  );
}
