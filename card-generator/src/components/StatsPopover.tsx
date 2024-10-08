import { Button, Input, Label, Popover, PopoverContent, PopoverTrigger } from '@/components/ui'
import { Plus } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

export function StatsPopover() {
  const { register } = useFormContext()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="default" className="border-[1px] border-snd-300 bg-fst-800 text-snd-100">
          <Plus className="mr-2 h-3 w-3" />
          Stats filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 border-none bg-fst-800 text-snd-100">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Stats</h4>
            <p className="text-sm">Set the advanced filters.</p>
          </div>

          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Overall</Label>
              <Input
                type="number"
                id="min-overall"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_overall')}
              />
              <Input
                type="number"
                id="max-overall"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_overall')}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Pace</Label>
              <Input
                type="number"
                id="min-pac"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_pac')}
              />
              <Input
                type="number"
                id="max-pac"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_pac')}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Shooting</Label>
              <Input
                type="number"
                id="min-sho"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_sho')}
              />
              <Input
                type="number"
                id="max-sho"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_sho')}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Passing</Label>
              <Input
                type="number"
                id="min-pas"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_pas')}
              />
              <Input
                type="number"
                id="max-pas"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_pas')}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Dribbling</Label>
              <Input
                type="number"
                id="min-dri"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_dri')}
              />
              <Input
                type="number"
                id="max-dri"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_dri')}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Defending</Label>
              <Input
                type="number"
                id="min-def"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_def')}
              />
              <Input
                type="number"
                id="max-def"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_def')}
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Physic</Label>
              <Input
                type="number"
                id="min-phy"
                placeholder="MIN"
                className="no-spinner col-span-1 h-8"
                {...register('min_phy')}
              />
              <Input
                type="number"
                id="max-phy"
                placeholder="MAX"
                className="no-spinner col-span-1 h-8"
                {...register('max_phy')}
              />
            </div>
            {/*
            <div className="grid grid-cols-3 items-center gap-2">
              <Label>Preferred foot</Label>
              <div className="flex">
                <Label className="flex items-center gap-x-2">
                  <input
                    type="radio"
                    value="any"
                    {...register('foot')}
                    className="h-4 w-4 border-fst-100 text-snd-100 focus:bg-snd-200"
                  />
                  Any
                </Label>
                <Label className="ml-4 flex items-center gap-x-2">
                  <input
                    type="radio"
                    value="left"
                    {...register('foot')}
                    className="h-4 w-4 border-fst-100 text-snd-100 focus:bg-snd-200"
                  />
                  Left
                </Label>
                <Label className="ml-4 flex items-center gap-x-2">
                  <input
                    type="radio"
                    value="right"
                    {...register('foot')}
                    className="h-4 w-4 border-fst-100 text-snd-100 focus:bg-snd-200"
                  />
                  Right
                </Label>
              </div>
            </div>
            */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
