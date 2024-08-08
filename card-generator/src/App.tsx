import { useState } from 'react'
import { Card, CardFilter } from './components'
import { ScrollArea, Separator } from './components/ui'
import { Player } from './data'

export function App() {
  const [cards, setCards] = useState<Player[] | never[]>([])

  return (
    <main className="flex h-screen flex-row bg-fst-900 px-12 py-6 text-snd-100">
      <CardFilter onFilter={setCards} />

      <Separator orientation="vertical" className="bg-fst-200" />

      <ScrollArea className="mx-auto w-screen">
        <div className="flex flex-wrap justify-center gap-4">
          {cards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </ScrollArea>
    </main>
  )
}
