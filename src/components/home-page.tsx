/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Zn8jbjIuEF3
 */
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-4 bg-white ">
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
      <main className="flex-1">
        <section className="relative h-[500px]">
          <img
            alt="Living room setup"
            className="absolute inset-0 object-cover w-full h-full"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1000/500",
              objectFit: "cover",
            }}
            width="1000"
          />
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">Welcome to Furniture Shop</h1>
              <p className="text-lg text-white">Discover our exclusive collection of furniture</p>
            </div>
          </div>
        </section>
        <section className="py-12 px-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <img
                alt="Furniture 1"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Furniture 1</h3>
                <p className="text-gray-500">$199</p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Furniture 2"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Furniture 2</h3>
                <p className="text-gray-500">$299</p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Furniture 3"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Furniture 3</h3>
                <p className="text-gray-500">$399</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-12 px-8 bg-gray-100 ">
          <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <img
                alt="Sofas"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Sofas</h3>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Tables"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Tables</h3>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Chairs"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Chairs</h3>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Beds"
                className="w-full h-48 object-cover"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <CardContent>
                <h3 className="text-lg font-semibold">Beds</h3>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between px-8 py-4 bg-white ">
        <div className="flex items-center space-x-4">
          <FacebookIcon className="h-6 w-6" />
          <TwitterIcon className="h-6 w-6" />
          <InstagramIcon className="h-6 w-6" />
        </div>
        <div className="text-sm text-gray-500 ">© 2024 Furniture Shop. All rights reserved.</div>
      </footer>
    </div>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}