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
  min_pac: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_pac: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_sho: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_sho: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_pas: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_pas: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_dri: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_dri: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_def: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_def: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  min_phy: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  max_phy: number

  @IsOptional()
  @IsString()
  foot: string

  @IsOptional()
  @IsString()
  year: string

  @IsOptional()
  @IsString()
  nation: string

  @IsOptional()
  @IsString()
  position: string
}
