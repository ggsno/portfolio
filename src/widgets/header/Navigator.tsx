import Link from "next/link";
import { navDict } from "./consts";
import { Fragment } from "react";

export default function Navigator() {
  return (
    <>
      <div
        className="fixed flex-center justify-center
          h-nav-height w-full
          backdrop-blur-sm bg-gray-950/75 text-gray-50
        "
      >
        <ul className="hidden sm:flex gap-12">
          {Object.values(navDict).map((navItem) => (
            <Fragment key={navItem}>
              <li>
                <Link href={`#${navItem}`}>{navItem}</Link>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
      <div className="h-nav-height"></div>
    </>
  );
}
