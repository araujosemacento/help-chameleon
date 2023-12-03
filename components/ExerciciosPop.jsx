"use client";

import * as React from "react";
import * as Popover from "@radix-ui/react-popover";

export const Pop = Popover.Root;
export const PopTrigger = Popover.Trigger;

export const PopContent = (props) => {
  return (
    <Popover.Portal>
      <Popover.Content
        sideOffset={5}
        className="w-64 rounded-md bg-white p-4 shadow-md"></Popover.Content>
      <Popover.Arrow />
    </Popover.Portal>
  );
};
