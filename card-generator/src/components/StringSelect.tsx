import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui'
import { Control, Controller } from 'react-hook-form'
import { CardsFiltersSchema } from '@/data'
import { useQuery } from '@tanstack/react-query'

interface SelectProps {
  control: Control<CardsFiltersSchema>
  name: keyof CardsFiltersSchema
  fetchData: () => Promise<string[]> | string[]
}

export function StringSelect({ control, name, fetchData }: SelectProps) {
  const { data: selectResponse, isLoading } = useQuery({
    queryKey: ['get-'+name],
    queryFn: async () => {
      const response = await fetchData()
      return response
    },
  })

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select value={field.value ? String(field.value) : undefined} onValueChange={field.onChange} disabled={isLoading}>
          <SelectTrigger className="w-36 border-none bg-fst-800">
            <SelectValue placeholder={name} />
          </SelectTrigger>
          <SelectContent className="border-none bg-fst-800 text-snd-100">
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              <SelectItem value="any">Any</SelectItem>
              {selectResponse?.map((value, index) => (
                <SelectItem value={value} key={index}>
                  {value}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
