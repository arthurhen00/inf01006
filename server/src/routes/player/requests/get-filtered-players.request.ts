import { IsNumber, IsString, Max, Min } from 'class-validator'
import { IsOverallMaxGreaterThanMin } from '@src/lib/is-overall-max-greater-than-min.validator'

export class GetFilteredPlayersRequest {
  @IsString()
  name: string

  @IsNumber()
  @Min(0)
  @Max(100)
  overallMin: number

  @IsNumber()
  @Min(0)
  @Max(100)
  overallMax: number

  preferedFoot: string

  year: number

  nation: string
}
