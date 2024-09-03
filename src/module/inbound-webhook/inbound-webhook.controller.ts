import { Controller, Post, Body } from '@nestjs/common';
import { InboundWebhookService } from './inbound-webhook.service';

@Controller('inbound-webhook')
export class InboundWebhookController {
  constructor(private readonly inboundWebhookService: InboundWebhookService) {}

  @Post()
  create(@Body() data: any) {
    return this.inboundWebhookService.create(data);
  }
}
