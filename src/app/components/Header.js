import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <h1 className="text-xl font-bold">Quentin Guillaume</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            {/*<li><Link href="/contact">Contact</Link></li>*/}
          </ul>
        </nav>
      </div>
    </header>
  );
}