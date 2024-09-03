import { Controller, Post, Body } from '@nestjs/common';
import { InboundWebhookService } from './inbound-webhook.service';
import { DataDto } from './dto/data.dto';

@Controller('inbound-webhook')
export class InboundWebhookController {
  constructor(private readonly inboundWebhookService: InboundWebhookService) {}

  @Post()
  create(@Body() data: DataDto) {
    return this.inboundWebhookService.create(data);
  }
}
