import { Separator } from './ui/separator'

export function Card() {
  return (
    <div className="m-2 flex h-56 w-44 items-center justify-center bg-yellow-600">
      <div className="flex h-52 w-40 flex-col rounded-3xl bg-zinc-700">
        <div className="flex pl-2 pt-2">
          <div className="flex flex-col items-center font-bold text-white">
            <div>93</div>
            <div className="mb-1">RW</div>
            <img src="https://cdn.sofifa.net/flags/ar.png" className="mb-1 h-5 w-7"></img>
            <img src="https://cdn.sofifa.net/teams/73/60.png" className="h-9 w-10"></img>
          </div>
          <div className="flex items-end">
            <img src="https://cdn.sofifa.net/players/158/023/22_120.png"></img>
          </div>
        </div>

        <div className="flex h-full flex-col items-center rounded-b-3xl bg-slate-600 text-white">
          <div className="font-bold">L. Messi</div>
          <Separator className="bg-zinc-400" />
          <div className="flex text-sm">
            <div className="flex flex-col">
              <span>90 PAC</span>
              <span>83 SHO</span>
              <span>80 PAS</span>
            </div>
            <Separator orientation="vertical" className="ml-2 mr-2 bg-zinc-400" />
            <div className="flex flex-col">
              <span>88 DRI</span>
              <span>44 DEF</span>
              <span>77 PHY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
