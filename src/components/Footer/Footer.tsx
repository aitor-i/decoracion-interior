import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/Icons/Icons"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-4 bg-white ">
      <div className="flex items-center space-x-4">
        <FacebookIcon className="h-6 w-6" />
        <TwitterIcon className="h-6 w-6" />
        <InstagramIcon className="h-6 w-6" />
      </div>
      <div className="text-sm text-gray-500 ">© 2024 Furniture Shop. All rights reserved.</div>
    </footer>
  )
}
