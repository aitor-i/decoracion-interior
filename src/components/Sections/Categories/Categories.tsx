import { Card, CardContent } from '@/components/ui/card'
import sofas from '@/../public/sofas.webp'
import tables from '@/../public/table.webp'
import chairs from '@/../public/chairs.webp'
import beds from '@/../public/beds.webp'
import Image from 'next/image'


export default function Categories() {
  return (
    <section className="py-12 md:py-32 px-8 bg-white ">
      <h2 className="text-2xl font-semibold mb-4">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card>
          <Image
            alt="Sofas"
            className="w-full h-48 object-cover"
            height="200"
            src={sofas}
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
          <Image
            alt="Tables"
            className="w-full h-48 object-cover"
            height="200"
            src={tables}
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
          <Image
            alt="Chairs"
            className="w-full h-48 object-cover"
            height="200"
            src={chairs}
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
          <Image
            alt="Beds"
            className="w-full h-48 object-cover"
            height="200"
            src={beds}
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
  )
}
