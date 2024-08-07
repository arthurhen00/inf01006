import { IsNumber, IsString, Max, Min, IsOptional } from 'class-validator'

export class GetFilteredPlayersRequest {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  overallMin: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  overallMax: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  potentialMin: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  potentialMax: number

  @IsOptional()
  @IsString()
  preferedFoot: string
}
