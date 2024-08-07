import { Control, Controller } from 'react-hook-form'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'
import { CardsFiltersSchema } from './CardFilter'

interface NationSelectProps {
  control: Control<CardsFiltersSchema>
}

export function NationSelect({ control }: NationSelectProps) {
  return (
    <Controller
      name="nation"
      control={control}
      render={({ field }) => (
        <Select value={field.value} onValueChange={field.onChange}>
          <SelectTrigger className="w-36 border-none bg-fst-800">
            <SelectValue placeholder="Player Nation" />
          </SelectTrigger>
          <SelectContent className="border-none bg-fst-800 text-snd-100">
            <SelectGroup>
              <SelectLabel>Nation</SelectLabel>
              <SelectItem value="any">any</SelectItem>
              <SelectItem value="Brazil">Brazil</SelectItem>
              <SelectItem value="Eua">Eua</SelectItem>
              <SelectItem value="2017">Argentina</SelectItem>
              <SelectItem value="Argentina">Mexico</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
