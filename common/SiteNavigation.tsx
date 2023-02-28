import Link from "next/link";

export const SiteNavigation = () => {
  return (
    <div className="w-1/5 pl-12 pt-8">
      <ul className="flex gap-5 flex-col">
        <li>
          <Link href="/sites">General</Link>
        </li>
        <li>
          <Link href="/sites/grammar">Grammar</Link>
        </li>
      </ul>
    </div>
  );
};
