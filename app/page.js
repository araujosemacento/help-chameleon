"use client";

import * as React from "react";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
export default function Home() {
  const router = useRouter();

  const [isMobile, setIsMobile] = React.useState(false);
  const [size, setSize] = React.useState(0);
  const [panel, setPanel] = React.useState(true);

  React.useEffect(() => {
    setSize(window.innerWidth);
    setIsMobile(size < 720);
  }, [size]);

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
          className={`flex absolute w-full md:w-[70%] h-[70%] md:h-full top-[65%] md:top-0 md:left-[65%] rounded-3xl bg-gradient-to-br from-primary-200 to-accent-400 z-20 transition-all duration-600 overflow-hidden shadow-[0_0_5px_0.25px_var(--secondary-600)]`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 143}%)` }
              : { transform: `translateX(-${panel ? 0 : 143}%)` }
          }
        >
          <div className="h-full w-1/2 p-10"></div>
          <div className="h-full w-1/2 p-10"></div>
        </section>
        <section
          className={`flex absolute w-full h-full top-[100%] md:top-0 md:left-[100%] z-10 transition-all duration-600`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 100}%)` }
              : { transform: `translateX(-${panel ? 0 : 100}%)` }
          }
        />
      </main>
    </div>
  );
}
