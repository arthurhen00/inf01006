import { Card } from './components/Card'
import { SelectDemo } from './components/Select'
import { Input } from './components/ui/input'
import { ScrollArea } from './components/ui/scroll-area'
import { Separator } from './components/ui/separator'

export function App() {
  return (
    <main className="flex h-screen flex-row bg-stone-300 px-12 py-6">
      <nav className="w-80 bg-blue-100 px-4">
        <Input type="name" placeholder="Name" />
        <Input type="name" placeholder="Name" />
        <Input type="name" placeholder="Name" />
        <Input type="name" placeholder="Name" />
        <SelectDemo />
        <Separator className="bg-stone-700" />
      </nav>

      <Separator orientation="vertical" className="bg-stone-700" />

      <ScrollArea className="mx-auto w-screen bg-red-100">
        <div className="flex flex-wrap justify-center">
          <Card />
          <Card />
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
          <div className="m-2 h-56 w-44 bg-black">1</div>
        </div>
      </ScrollArea>
    </main>
  )
}
