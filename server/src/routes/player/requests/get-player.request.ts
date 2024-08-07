import { IsNotEmpty, IsNumberString, IsString } from 'class-validator'

export class GetPlayerRequest {
  @IsNotEmpty()
  @IsString()
  id: string
}
