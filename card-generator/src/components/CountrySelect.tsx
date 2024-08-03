import { Control, Controller } from 'react-hook-form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { CardsFiltersSchema } from './CardFilter'

interface YearSelectProps {
  control: Control<CardsFiltersSchema>
}

export function CountrySelect({ control }: YearSelectProps) {
  return (
    <Controller
      name="country"
      control={control}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="bg-fst-800 w-36 border-none">
            <SelectValue placeholder="Player Nation" />
          </SelectTrigger>
          <SelectContent className="bg-fst-800 text-snd-100 border-none">
            <SelectGroup>
              <SelectLabel>Nation</SelectLabel>
              <SelectItem value="any">any</SelectItem>
              <SelectItem value="2015">Brazil</SelectItem>
              <SelectItem value="2016">Eua</SelectItem>
              <SelectItem value="2017">Argentina</SelectItem>
              <SelectItem value="2018">Mexico</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
