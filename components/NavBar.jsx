import Image from "next/image";

export default function NavBar() {
  return (
    <header className={`flex flex-row p-2 h-16 w-full bg-[#4b1eae]`}>
      <div className={`flex relative flex-row w-full items-center gap-4 mx-2`}>
        <Image
          src="/hameleon.png"
          alt="logo"
          width={50}
          height={50}
          priority={true}
          className={`rounded-full w-[12vw] h-[12vw] sm:w-16 sm:h-16 drop-shadow-lg`}
        />

        <div className="flex flex-row absolute w-full place-content-center md:place-content-start md:px-20">
          <h1
            className={`text-[#e6e6e6]`}
            style={{ textShadow: "1px 3px 5px #13072c" }}
          >
            Programação II
          </h1>
        </div>
      </div>
    </header>
  );
}
