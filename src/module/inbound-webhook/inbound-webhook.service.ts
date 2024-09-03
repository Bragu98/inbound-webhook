import { Injectable } from '@nestjs/common';
import { CreateInboundWebhookDto } from './dto/create-inbound-webhook.dto';
import { UpdateInboundWebhookDto } from './dto/update-inbound-webhook.dto';

@Injectable()
export class InboundWebhookService {
  create(createInboundWebhookDto: CreateInboundWebhookDto) {
    return 'This action adds a new inboundWebhook';
  }

  findAll() {
    return `This action returns all inboundWebhook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inboundWebhook`;
  }

  update(id: number, updateInboundWebhookDto: UpdateInboundWebhookDto) {
    return `This action updates a #${id} inboundWebhook`;
  }

  remove(id: number) {
    return `This action removes a #${id} inboundWebhook`;
  }
}
