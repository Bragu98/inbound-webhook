import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InboundWebhookModule } from './module/inbound-webhook/inbound-webhook.module';

@Module({
  imports: [
    InboundWebhookModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
