"use client";

import * as React from "react";
import {
  styled,
  alpha,
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import Button from "@mui/material/Button";
import NavBar from "@/components/NavBar";
import { TextField } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import { useRouter } from "next/navigation";
import CustomCarousel from "@/components/Carousel";
import Image from "next/image";

const theme = createTheme({
  palette: {
    hameleon: {
      main: "var(--background-400)",
      light: "var(--accent-700)",
      dark: "var(--accent-700)",
      contrastText: "var(--text-100)",
    },
    google: {
      main: "#E2E8F0",
      light: "#CBD5E1",
      dark: "#F1F5F9",
      contrastText: "#0F172A",
    },
    github: {
      main: "#1F2937",
      light: "#111827",
      dark: "#374151",
      contrastText: "#F3F4F6",
    },
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "var(--secondary-400)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--secondary-800)",
    },
  },
});

export default function Login() {
  const heightRef = React.useRef(null);
  React.useLayoutEffect(() => {});
  const router = useRouter();

  return (
    <div className={`flex flex-col max-h-screen`}>
      <StyledEngineProvider injectFirst>
        <NavBar />
        <main className={`flex flex-row justify-center h-screen gap-16 p-16`}>
          <section
            className={`flex place-content-center items-center w-1/2 max-h-screen`}
          >
            <CustomCarousel />
          </section>
          <section
            className={`flex flex-col gap-8 place-content-center items-center w-1/3 max-h-screen rounded-2xl bg-background-600 py-4`}
          >
            <CssTextField label="Email" />
            <CssTextField type="password" label="Senha" />
            <ThemeProvider theme={theme}>
              <Button
                className="font-bold rounded-2xl px-16"
                variant="contained"
                size="medium"
                color="hameleon"
              >
                Fazer Login
              </Button>
              <p className={`text-text-100 px-12 text-justify font-bold`}>
                ————— OU —————
              </p>
              <Button
                className="font-bold rounded-2xl pr-16 pl-12"
                variant="contained"
                size="medium"
                color="google"
              >
                <Image src={"/google.png"} alt="google login" width={20} height={20} className="mr-4" />
                Google
              </Button>
              <Button
                className="font-bold rounded-2xl pr-16 pl-12"
                variant="contained"
                size="medium"
                color="github"
              >
                <Image src={"/github.png"} alt="github login" width={20} height={20} className="mr-4" />
                GitHub
              </Button>
            </ThemeProvider>
          </section>
        </main>
      </StyledEngineProvider>
    </div>
  );
}
