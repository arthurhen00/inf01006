import { getNations, getYears, getPositions, CardsFiltersSchema, cardsFiltersSchema } from '@/data'
import { Button, Input, Label, Separator } from './ui'
import { StatsPopover, StringSelect } from '.'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'

export function CardFilter() {
  const [searchParams, setSearchParams] = useSearchParams()

  const methods = useForm<CardsFiltersSchema>({
    resolver: zodResolver(cardsFiltersSchema),
    defaultValues: {
      year: 'any',
      foot: 'any',
      nation: 'any',
      position: 'any',
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
          <StringSelect control={methods.control} name={'nation'} fetchData={getNations} />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Label>Player nation</Label>
          <StringSelect control={methods.control} name={'year'} fetchData={getYears} />
        </div>
        <div className="flex items-center justify-between gap-x-2">
          <Label>Player position</Label>
          <StringSelect control={methods.control} name={'position'} fetchData={getPositions} />
        </div>
        <Separator className="bg-fst-200" />
        <Button className="self-end border-[1px] border-snd-300 bg-fst-800 text-snd-100">
          Procurar
          <Search className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </FormProvider>
  )
}
