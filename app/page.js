"use client";

import * as React from "react";
import {
  styled,
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavBar from "@/components/NavBar";
import CustomCarousel from "@/components/Carousel";
import { useRouter } from "next/navigation";

const theme = createTheme({
  palette: {
    hameleon: {
      main: "var(--background-500)",
      light: "var(--accent-700)",
      dark: "var(--accent-700)",
      contrastText: "var(--text-100)",
    },
  },
});

export default function Home() {
  const heightRef = React.useRef(null);
  React.useLayoutEffect(() => {});
  const router = useRouter();

  return (
    <div className={`flex flex-col max-h-screen`}>
      <StyledEngineProvider injectFirst>
        <NavBar />
        <main
          className={`flex flex-col sm:flex-row justify-center sm:h-screen`}
        >
          <section
            className={`flex place-content-center items-center w-1/2 max-h-screen`}
          >
            <CustomCarousel />
          </section>
          <section
            className={`flex flex-col gap-8 place-content-center items-center w-1/3 max-h-screen`}
          >
            <h1 className={`text-text-600 text-center`}>
              Bem-vindo(a) à cadeira de Programação II!
            </h1>
            <p className={`text-text-800 px-12 text-justify`}>
              Never thought I&apos;d make it. Three days grade school, three
              days high school. Those were awkward. Three days college. I&apos;m
              glad I took a day and hitchhiked around the hive. You did come
              back different.
            </p>
            <p className={`text-text-800 px-12 text-justify`}>
              How come you don&apos;t fly everywhere? It&apos;s exhausting. Why
              don&apos;t you run everywhere? It&apos;s faster. Yeah, OK, I see,
              I see. All right, your turn. TiVo. You can just freeze live TV?
              That&apos;s insane! You don&apos;t have that? We have Hivo, but
              it&apos;s a disease. It&apos;s a horrible, horrible disease.
            </p>
            <ThemeProvider theme={theme}>
              <Button
                className="font-bold rounded-2xl px-16"
                onClick={() => {
                  router.push("/login");
                }}
                variant="contained"
                size="large"
                color="hameleon"
              >
                Fazer Login
              </Button>
            </ThemeProvider>
          </section>
        </main>
      </StyledEngineProvider>
    </div>
  );
}
