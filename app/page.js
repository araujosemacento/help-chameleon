"use client";

import * as React from "react";
import NavBar from "@/components/NavBar";
import CustomCarousel from "@/components/Carousel";

export default function Home() {
  const heightRef = React.useRef(null);
  React.useLayoutEffect(() => {});

  return (
    <div className={`flex flex-col max-h-screen`}>
      <NavBar />
      <main className={`flex flex-row justify-center h-screen`}>
        <section
          className={`flex place-content-center items-center w-1/2 max-h-screen`}
        >
          <CustomCarousel />
        </section>
        <section
          className={`flex place-content-center items-center w-1/2 max-h-screen`}
        >
          Bem-vindo à cadeira de Programação II!
        </section>
      </main>
    </div>
  );
}
