import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export default function Categories() {
  return (
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
  )
}
