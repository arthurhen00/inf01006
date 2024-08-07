import { Card, CardFilter } from './components'
import { ScrollArea, Separator } from './components/ui'

export function App() {
  return (
    <main className="flex h-screen flex-row bg-fst-900 px-12 py-6 text-snd-100">
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
