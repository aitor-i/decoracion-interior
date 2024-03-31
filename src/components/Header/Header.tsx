import Link from "next/link"
export default function Header() {
  return (
    <header className="flex items-center bg-brown-100 justify-between px-8 py-4 bg-white ">
      <Link className="flex items-center" href="#">
        <HomeIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">Furniture Shop</span>
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
