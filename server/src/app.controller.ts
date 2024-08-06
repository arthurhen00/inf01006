import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('healthcheck')
  async healthcheck(): Promise<string> {
    return 'OK'
  }
}
