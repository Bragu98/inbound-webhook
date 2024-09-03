import { Injectable } from '@nestjs/common';
import { DataDto } from './dto/data.dto';


@Injectable()
export class InboundWebhookService {
  create(data: DataDto) {
    return data;
  }
}
