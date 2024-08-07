import { IsNumber, IsString, Max, Min, IsOptional } from 'class-validator'

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

  @IsNumber()
  @Min(0)
  @Max(100)
  potentialMin: number

  @IsNumber()
  @Min(0)
  @Max(100)
  potentialMax: number

  @IsString()
  preferedFoot: string
}
