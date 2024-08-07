import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui'
import { CardsFiltersSchema } from '.'
import { Control, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'

interface SelectProps {
  control: Control<CardsFiltersSchema>
  name: keyof CardsFiltersSchema
  fetchData: () => Promise<string[]> | string[]
}

export function StringSelect({ control, name, fetchData }: SelectProps) {
  const [values, setValues] = useState<string[]>([])

  useEffect(() => {
    async function fetchValues() {
      const data = await fetchData()
      setValues(data)
    }
    fetchValues()
  }, [fetchData])

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="w-36 border-none bg-fst-800">
            <SelectValue placeholder="TESTE" />
          </SelectTrigger>
          <SelectContent className="border-none bg-fst-800 text-snd-100">
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              <SelectItem value={'any'}>any</SelectItem>
              {values.map((value, index) => (
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
