import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import Header from "./Header/Header"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons/Icons"
import Hero from "./Sections/Hero/Hero"
import Furnitures from "./Sections/Furnitures/Furnitures"
import Categories from "./Sections/Categories/Categories"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Furnitures />
        <Categories />
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


