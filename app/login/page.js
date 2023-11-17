"use client";

import Image from "next/image";

export default function Login() {
  return (
    <div className={`flex absolute top-0 left-0 w-screen h-screen z-50`}>
      <Image src="/loading.svg" alt="loading" layout="fill" objectFit="cover" />
    </div>
  );
}
