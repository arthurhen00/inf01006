import { Control, Controller } from 'react-hook-form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { CardsFiltersSchema } from './CardFilter'

interface YearSelectProps {
  control: Control<CardsFiltersSchema>
}

export function YearSelect({ control }: YearSelectProps) {
  return (
    <Controller
      name="year"
      control={control}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="bg-fst-800 w-36 border-none">
            <SelectValue placeholder="Select a year" />
          </SelectTrigger>
          <SelectContent className="bg-fst-800 text-snd-100 border-none">
            <SelectGroup>
              <SelectLabel>Year</SelectLabel>
              <SelectItem value="any">any</SelectItem>
              <SelectItem value="2015">2015</SelectItem>
              <SelectItem value="2016">2016</SelectItem>
              <SelectItem value="2017">2017</SelectItem>
              <SelectItem value="2018">2018</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
