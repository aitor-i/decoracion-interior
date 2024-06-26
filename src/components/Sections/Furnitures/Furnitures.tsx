import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

import sofa1 from '@/../public/sofa1.webp'
import sofa2 from '@/../public/sofa-2.webp'
import desk from '@/../public/desk.webp'

export default function Furnitures() {
  return (
    <section className="py-12 md:py-32 px-8">
      <h2 className="text-2xl font-semibold mb-4">Featured Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <Image
            alt="Furniture 1"
            className="w-full h-48 object-cover"
            height="200"
            src={sofa1}
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
          <Image
            alt="Furniture 2"
            className="w-full h-48 object-cover"
            height="200"
            src={sofa2}
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
          <Image
            alt="Furniture 3"
            className="w-full h-48 object-cover"
            height="200"
            src={desk}
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
  )
}
