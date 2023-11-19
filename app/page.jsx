/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { Button, Input } from "@material-tailwind/react";

export default function Home() {
  const router = useRouter();

  const [isMobile, setIsMobile] = React.useState(false);
  const [panel, setPanel] = React.useState(true);
  const [dimensions, setDimensions] = React.useState([]);

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      setIsMobile(dimensions.width < 720);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions.width]);

  return (
    <div className={`flex flex-col min-h-screen bg-background-50`}>
      <NavBar />
      <main
        className={`flex relative flex-col md:flex-row m-auto bg-background-100 w-[80vw] h-[80vh] rounded-xl shadow-xl overflow-hidden`}
      >
        <section
          className={`flex absolute w-full h-full top-0 left-0 z-10 transition-all duration-600`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 100}%)` }
              : { transform: `translateX(-${panel ? 0 : 100}%)` }
          }
        >
          <div className="flex flex-col absolute top-0 bottom-[35%] w-full md:left-0 md:right-[35%] md:h-full md:w-auto justify-center items-center gap-4 p-6 md:p-10">
            <div className="flex flex-col md:w-3/4 w-full overflow-auto rounded-xl shadow-lg bg-background-200">
              <h1 className="text-base md:text-2xl text-text-900 m-8 mt-6 mb-2 md:mb-4">
                Bem-vindo(a) de volta!
              </h1>
              <p className="text-xs md:text-base text-text-700 mx-8 mb-2">
                Entre com uma de suas contas:
              </p>
              <div className="flex flex-row w-full justify-center gap-4 my-4">
                <Button
                  color="deep-purple"
                  size="sm"
                  className="flex gap-2 place-content-center p-2 md:px-6"
                >
                  <img
                    src="https://api.iconify.design/ant-design:google-circle-filled.svg?color=%23ffffff"
                    alt="Google circle filled"
                  />
                  Google
                </Button>
                <Button
                  color="deep-purple"
                  size="sm"
                  className="flex gap-2 place-content-center p-2 md:px-6"
                >
                  <img
                    src="https://api.iconify.design/ant-design:github-outlined.svg?color=%23ffffff"
                    alt="Github outlined"
                  />
                  Github
                </Button>
              </div>
              <div className="flex w-[90%] place-self-center justify-center items-center gap-4 px-4 md:py-2">
                <hr className="w-1/2 border-text-500" />
                <span className="text-text-500 text-xs">OU</span>
                <hr className="w-1/2 border-text-500" />
              </div>
              <p className="text-xs md:text-base text-text-700 m-2 mx-8 md:mx-8 md:m-4">
                Entre com e-mail e senha:
              </p>
              <div className="flex flex-col place-content-center mb-4 mx-4 md:mx-8 gap-4 md:gap-6">
                <Input
                  variant={`${isMobile ? "outlined" : "standard"}`}
                  type="email"
                  color="deep-purple"
                  label="E-mail"
                  className="text-text-800"
                />
                <Input
                  variant={`${isMobile ? "outlined" : "standard"}`}
                  type="password"
                  color="deep-purple"
                  label="Senha"
                  className="text-text-800"
                />
                <Button
                  color="deep-purple"
                  variant="gradient"
                  size={`${isMobile ? "sm" : "md"}`}
                  className="m-2"
                >
                  Entrar
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`flex flex-col md:flex-row absolute w-full md:w-[70%] h-[70%] md:h-full top-[65%] md:top-0 md:left-[65%] rounded-3xl bg-gradient-to-br from-primary-200 to-accent-400 z-20 transition-all duration-600 overflow-hidden shadow-[0_0_5px_0.25px_var(--secondary-600)]`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 143}%)` }
              : { transform: `translateX(-${panel ? 0 : 143}%)` }
          }
        >
          <div className="flex flex-row md:flex-col justify-center items-center text-center gap-4 text-text-900 h-1/2 md:h-full w-full md:w-1/2 p-6 md:p-10"></div>
          <div className="flex flex-row md:flex-col justify-center items-center text-center gap-4 text-text-900 h-1/2 md:h-full w-full md:w-1/2 p-6 md:p-10"></div>
        </section>
        <section
          className={`flex absolute w-full h-full top-[100%] md:top-0 md:left-[100%] z-10 transition-all duration-600`}
          style={
            isMobile
              ? { transform: `translateY(-${panel ? 0 : 100}%)` }
              : { transform: `translateX(-${panel ? 0 : 100}%)` }
          }
        ></section>
      </main>
    </div>
  );
}
