import Link from "next/link"
import { SofaIcon } from "../Icons/Icons"
export default function Header() {
  return (
    <header className="flex items-center  justify-between px-8 py-4 bg-transparent ">
      <Link className="flex items-center" href="#">
        <SofaIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">El Dormitorio</span>
      </Link>
      <nav className="flex gap-4">
        <Link className="text-sm font-medium hover:underline" href="#">
          Sofas
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Tables
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Chairs
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          Beds
        </Link>
      </nav>
    </header>
  )
}
