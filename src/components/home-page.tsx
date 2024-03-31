import { CardContent, Card } from "@/components/ui/card"
import Image from "next/image"
import Header from "./Header/Header"
import Hero from "./Sections/Hero/Hero"
import Furnitures from "./Sections/Furnitures/Furnitures"
import Categories from "./Sections/Categories/Categories"
import Footer from "./Footer/Footer"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Furnitures />
        <Categories />
      </main>
      <Footer />
    </div>
  )
}


