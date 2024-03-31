import Image from "next/image"
import heroPhoto from '@/../public/hero.webp'

export default function Hero() {
  return (
    <section className="relative h-[500px]">
      <Image
        alt="Living room setup"
        className="absolute  inset-0 object-cover w-full h-full"
        height="500"
        src={heroPhoto}
        style={{
          aspectRatio: "1000/500",
          objectFit: "cover",
        }}
        width="1000"
      />
      <div className="absolute inset-0 backdrop:blur-sm bg-opacity-55 bg-black flex py-32 justify-center text-center">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-8xl font-bold text-white">El Dormitorio Decoracion</h1>
          <p className="text-lg md:text-3xl text-white">Muebles artesanales en Pamplona</p>
        </div>
      </div>
    </section>
  )
}
