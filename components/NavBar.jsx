import Link from "next/link";

export default function NavBar() {
  return (
    <header className={`flex bg-background-50 text-text-900 py-3 px-4 justify-between items-center font-serif`}>
      <h2>Programação II</h2>
      <nav className={`items-center font-bold`}>
        <ul className={`flex flex-row gap-4`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
