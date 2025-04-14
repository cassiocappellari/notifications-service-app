import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from 'src/app/use-cases/cancel-notification';
import { ReadNotification } from 'src/app/use-cases/read-notification';
import { UnreadNotification } from 'src/app/use-cases/unread-notification';
import { CountNotificationsByRecipient } from 'src/app/use-cases/count-notifications-by-recipient';
import { GetNotificationsByRecipient } from 'src/app/use-cases/get-notifications-by-recipient';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countNotificationsByRecipient: CountNotificationsByRecipient,
    private getNotificationsByRecipient: GetNotificationsByRecipient,
  ) {}

  @Get(':recipientId/count')
  async countByRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countNotificationsByRecipient.execute({
      recipientId,
    });

    return { count };
  }

  @Get(':recipientId/get-by-recipient')
  async getByRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getNotificationsByRecipient.execute({
      recipientId,
    });

    return {
      notifications: notifications.map((notification) =>
        NotificationViewModel.toHTTP(notification),
      ),
    };
  }

  @Patch(':notificationId/cancel')
  async cancel(@Param('notificationId') notificationId: string) {
    await this.cancelNotification.execute({ notificationId });
  }

  @Patch(':notificationId/read')
  async read(@Param('notificationId') notificationId: string) {
    await this.readNotification.execute({ notificationId });
  }

  @Patch(':notificationId/unread')
  async unread(@Param('notificationId') notificationId: string) {
    await this.unreadNotification.execute({ notificationId });
  }

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
