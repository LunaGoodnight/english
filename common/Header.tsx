import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full flex justify-center bg-blue-300 px-8 py-5">
      <Link href="/" className="w-1/6">
        English
      </Link>
      <nav className="w-5/6">
        <ul>
          <li>
            <Link href="/sites">Sites</Link>
          </li>
          <li>
            <Link href="/quiz">Sites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
