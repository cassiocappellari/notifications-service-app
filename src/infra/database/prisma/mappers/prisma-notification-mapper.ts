import { Notification as PrismaNotification } from '@prisma/client';
import { Content } from 'src/app/entities/content';
import { Notification } from 'src/app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(notification: PrismaNotification): Notification {
    return new Notification(
      {
        category: notification.category,
        content: new Content(notification.content),
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        canceledAt: notification.canceledAt,
        createdAt: notification.createdAt,
      },
      notification.id,
    );
  }
}
