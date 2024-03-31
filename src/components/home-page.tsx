import { CardContent, Card } from "@/components/ui/card"
import Header from "./Header/Header"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./Icons/Icons"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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


