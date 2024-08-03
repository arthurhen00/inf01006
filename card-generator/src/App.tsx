import { Card } from './components/Card'
import { CardFilter } from './components/CardFilter'
import { ScrollArea } from './components/ui/scroll-area'
import { Separator } from './components/ui/separator'

export function App() {
  return (
    <main className="bg-fst-900 text-snd-100 flex h-screen flex-row px-12 py-6">
      <CardFilter />

      <Separator orientation="vertical" className="bg-fst-200" />

      <ScrollArea className="mx-auto w-screen">
        <div className="flex flex-wrap justify-center gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </ScrollArea>
    </main>
  )
}
