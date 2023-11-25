/* eslint-disable @next/next/no-img-element */

import "@/public/loading/loading.css";
export default function Loading() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-full top-1/2 absolute">
        <img
          src="/loading/hormeleon.svg"
          alt="footprint"
          className="absolute w-12 rotate-[15deg]"
        />
      </div>
    </div>
  );
}
