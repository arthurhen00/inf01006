import { IsNumber, IsString, Max, Min, IsOptional } from 'class-validator'

export class GetFilteredPlayersRequest {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_overall: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_overall: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_pace: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_pace: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_shooting: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_shooting: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_passing: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_passing: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_dribbling: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_dribbling: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_defending: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_defending: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_physic: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_physic: number

  @IsOptional()
  @IsString()
  foot: string

  @IsOptional()
  @IsNumber()
  year: number

  @IsOptional()
  @IsString()
  nation: string

  @IsOptional()
  @IsString()
  position: string
}
