import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { RoutesModule } from './routes/routes.module'

@Module({
  imports: [RoutesModule],
  controllers: [AppController],
})
export class AppModule {}
