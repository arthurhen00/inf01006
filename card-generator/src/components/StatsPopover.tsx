import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

export function StatsPopover() {
  const { setValue } = useFormContext()
  const [minOverall, setMinOverall] = useState('')
  const [maxOverall, setMaxOverall] = useState('')
  const [minPotential, setMinPotential] = useState('')
  const [maxPotential, setMaxPotential] = useState('')
  const [foot, setFoot] = useState('any')

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" className="bg-fst-800 border-snd-300 text-snd-100 border-[1px]">
          <Plus className="mr-2 h-3 w-3" />
          Stats filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-fst-800 text-snd-100 w-80 border-none">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Stats</h4>
            <p className="text-sm">Set the dimensions for the layer.</p>
          </div>

          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Overall</Label>
              <Input
                id="min-overall"
                placeholder="MIN"
                className="col-span-1 h-8"
                value={minOverall}
                onChange={(e) => {
                  setMinOverall(e.target.value)
                  setValue('minOverall', e.target.value ? e.target.value : '')
                }}
              />
              <Input
                id="max-overall"
                placeholder="MAX"
                className="col-span-1 h-8"
                value={maxOverall}
                onChange={(e) => {
                  setMaxOverall(e.target.value)
                  setValue('maxOverall', e.target.value ? e.target.value : '')
                }}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Potential</Label>
              <Input
                id="min-potential"
                placeholder="MIN"
                className="col-span-1 h-8"
                value={minPotential}
                onChange={(e) => {
                  setMinPotential(e.target.value)
                  setValue('minPotential', e.target.value ? e.target.value : '')
                }}
              />
              <Input
                id="max-potential"
                placeholder="MAX"
                className="col-span-1 h-8"
                value={maxPotential}
                onChange={(e) => {
                  setMaxPotential(e.target.value)
                  setValue('maxPotential', e.target.value ? e.target.value : '')
                }}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Prefered foot</Label>
              <RadioGroup
                defaultValue="any"
                className="flex"
                value={foot}
                onValueChange={(value) => {
                  setFoot(value)
                  setValue('foot', value)
                }}
              >
                <div className="flex items-center gap-x-2">
                  <RadioGroupItem value="any" id="any" className="border-fst-100 text-snd-100 focus:bg-snd-200" />
                  <Label htmlFor="any">Any</Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <RadioGroupItem
                    value="left"
                    id="left-foot"
                    className="border-fst-100 text-snd-100 focus:bg-snd-200"
                  />
                  <Label htmlFor="left-foot">Left</Label>
                </div>
                <div className="flex items-center gap-x-2">
                  <RadioGroupItem
                    value="right"
                    id="right-foot"
                    className="border-fst-100 text-snd-100 focus:bg-snd-200"
                  />
                  <Label htmlFor="right-foot">Right</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
