import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select'

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an year" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Year</SelectLabel>
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
  )
}
