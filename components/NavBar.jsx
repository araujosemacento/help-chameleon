import Image from "next/image";
import Link from "next/link";
import "@/styles/NavBar.css";
export default function NavBar() {
  return (
    <header className={`bg-gradient-to-b from-background-100 to-background-50 font-domine`}>
      <nav className={`flex flex-row justify-between`}>
        <div className={`flex flex-wrap items-center`}>
          {/*<Image
              className={`p-4`}
              src="/icon-192x192.png"
              alt="Camaleão"
              width={80}
              height={80}
              />*/}
          <h3 className={`p-3 text-text-600 sm:text-lg lg:text-2xl`}>Prog II - Help Chameleon</h3>
        </div>
        <div className="flex text-text-600 font-bold items-center">
          <Link
            className={`btn`}
            href={`#`}
          >
            Fazer Login
          </Link>
          <Link
            className={`btn`}
            href={`#`}
          >
            Cadastre-se
          </Link>
        </div>
      </nav>
    </header>
  );
}
