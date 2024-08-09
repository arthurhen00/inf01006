import { IsOptional, IsString } from 'class-validator'

export class GetPaginationRequest {
  @IsOptional()
  @IsString()
  page: string
}
