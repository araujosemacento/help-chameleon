"use client";

import * as React from "react";
import { Switch } from "@mui/material";
import TransitionalModal from "@/components/Modal";

export default function Testes() {
const [approved, setApproved] = React.useState(false);

  return (
    <main className={`flex gap-4 items-center justify-center min-h-screen`}>
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
