import { Injectable } from '@nestjs/common';


@Injectable()
export class InboundWebhookService {
  create(data: any) {
    return data;
  }
}
