import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const MostrarNivel = DialogPrimitive.Root;
export const MostrarTrigger = DialogPrimitive.Trigger;

export const MostrarContent = () => {
  <DialogPrimitive.Portal style={{ opacity: 0 }}>
    <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-accent-100/10 backdrop-blur-sm pointer-events-none" />
    <DialogPrimitive.Content
      /*onEscapeKeyDown={(e) => e.preventDefault()}*/
      onPointerDownOutside={(e) => e.preventDefault()}
      className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#E7D6F5] p-6 shadow-xl text-black place-content-center"
    ></DialogPrimitive.Content>
  </DialogPrimitive.Portal>;
};
