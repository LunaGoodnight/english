import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full flex justify-center bg-blue-300 px-8 py-5">
      <div className="w-1/6">English</div>
      <nav className="w-5/6">
        <ul>
          <li>
            <Link href="/sites">Sites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
