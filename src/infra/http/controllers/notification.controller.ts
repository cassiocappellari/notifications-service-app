import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
