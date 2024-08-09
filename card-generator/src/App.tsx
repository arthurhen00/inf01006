import { useState } from 'react'
import { Card, CardFilter } from './components'
import { ScrollArea, Separator } from './components/ui'
import { CardsFiltersSchema, getCards, PlayerData } from './data'
import { PaginationDemo } from './components/Pagination'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'

export function App() {
  const [filters, setFilters] = useState<CardsFiltersSchema>({})
  const [searchParams] = useSearchParams()

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
  const { data: playersResponse, isLoading } = useQuery<PlayerData>({
    queryKey: ['get-players', filters, page],
    queryFn: async () => {
      const players = await getCards(filters, page)
      return players
    },
  })

  return (
    <main className="flex h-screen flex-row bg-fst-900 px-12 py-6 text-snd-100">
      <CardFilter onFilter={setFilters} />

      <Separator orientation="vertical" className="bg-fst-200" />

      <div className="m mx-auto ml-4 flex w-screen flex-col justify-between gap-y-2">
        <ScrollArea>
          {!isLoading && (
            <div className="flex flex-wrap justify-center gap-4">
              {playersResponse?.data.map((card, index) => <Card {...card} key={index} />)}
            </div>
          )}
        </ScrollArea>
        {playersResponse && (
          <div className="flex flex-col gap-y-2">
            <Separator className="bg-fst-200" />
            <PaginationDemo
              items={playersResponse.items}
              page={page}
              pages={playersResponse.pages}
              listed={playersResponse.data.length}
            />
          </div>
        )}
      </div>
    </main>
  )
}
