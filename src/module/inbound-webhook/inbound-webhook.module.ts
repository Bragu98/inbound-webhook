import { Module } from '@nestjs/common';
import { InboundWebhookService } from './inbound-webhook.service';
import { InboundWebhookController } from './inbound-webhook.controller';

@Module({
  controllers: [InboundWebhookController],
  providers: [InboundWebhookService],
})
export class InboundWebhookModule {}
