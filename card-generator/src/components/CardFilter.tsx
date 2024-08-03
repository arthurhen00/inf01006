import { YearSelect } from './YearSelect'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Separator } from './ui/separator'
import { FormProvider, useForm } from 'react-hook-form'
import { StatsPopover } from './StatsPopover'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { CountrySelect } from './CountrySelect'

const cardsFiltersSchema = z.object({
  player_name: z.string(),
  year: z.string(),
  minOverall: z.coerce.string(),
  maxOverall: z.coerce.string(),
  country: z.string(),
})
export type CardsFiltersSchema = z.infer<typeof cardsFiltersSchema>

export function CardFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const methods = useForm<CardsFiltersSchema>({
    resolver: zodResolver(cardsFiltersSchema),
    defaultValues: {
      year: 'any',
      minOverall: '',
      maxOverall: '',
      country: 'any',
    },
  })

  function handleFilterCards(data: CardsFiltersSchema) {
    console.log(data, searchParams)
    setSearchParams((state) => {
      if (data.player_name) {
        state.set('player_name', data.player_name)
      } else {
        state.delete('player_name')
      }

      return state
    })

    setSearchParams((state) => {
      if (data.year) {
        state.set('year', data.year)
      } else {
        state.delete('year')
      }

      return state
    })

    setSearchParams((state) => {
      if (data.minOverall) {
        state.set('minOverall', data.minOverall)
      } else {
        state.delete('minOverall')
      }

      return state
    })

    setSearchParams((state) => {
      if (data.maxOverall) {
        state.set('maxOverall', data.maxOverall)
      } else {
        state.delete('maxOverall')
      }

      return state
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleFilterCards)} className="flex w-80 flex-col gap-y-2 px-4">
        <h1 className="text-center text-2xl font-bold">Search for a specific player card</h1>
        <div className="flex flex-col gap-y-1">
          <Input
            id="player_name"
            placeholder="Search Names..."
            className="border-none bg-[#1e2124]"
            {...methods.register('player_name')}
          />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <StatsPopover />
          <StatsPopover />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Label>Card year</Label>
          <YearSelect control={methods.control} />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Label>Player nation</Label>
          <CountrySelect control={methods.control} />
        </div>
        <Separator className="bg-fst-200" />
        <Button className="text-snd-100 border-snd-300 bg-fst-800 self-end border-[1px]">
          Procurar
          <Search className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </FormProvider>
  )
}
