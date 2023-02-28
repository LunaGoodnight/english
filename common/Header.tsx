import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full flex justify-center py-5 bg-blue-200">
      <div className="w-11/12 flex">
        <Link href="/" className="w-1/6">
          English
        </Link>
        <nav className="w-5/6">
          <ul className="w-full flex gap-5 justify-end">
            <li>
              <Link href="/sites">Sites</Link>
            </li>
            <li>
              <Link href="/quiz">Quiz</Link>
            </li>
            <li>
              <Link href="/reading">Reading</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
