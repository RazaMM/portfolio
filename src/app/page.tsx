import DigitalClock from "@/components/DigitalClock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Raza Mahmood</h1>
      <DigitalClock />
    </main>
  )
}
