import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <header className={`flex flex-row p-2 w-full`}>
      <div className={`flex flex-row items-center gap-6 mx-2`}>
        <Image
          src="/icon-192x192.png"
          alt="logo"
          width={50}
          height={50}
          loading="lazy"
          className={`w-11 rounded-2xl p-[5px] bg-text-600`}
        />

        <h1 className={`text-text-600`}>Programação II</h1>
      </div>
    </header>
  );
}
