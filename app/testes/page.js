"use client";

import * as React from "react";
import { Switch } from "@mui/material";
import TransitionalModal from "@/components/Modal";
import CustomCarousel from "@/components/Carousel";

export default function Testes() {
  const [approved, setApproved] = React.useState(false);

  return (
    <main
      className={`flex flex-col gap-4 items-center justify-center min-h-screen`}
    >
      <CustomCarousel />
      <Switch
        checked={approved}
        onChange={() => {
          setApproved(!approved);
        }}
      />
      <TransitionalModal approved={approved} />
    </main>
  );
}
