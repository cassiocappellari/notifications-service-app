import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const { content, category, recipientId, readAt, id } = notification;

    await this.prismaService.notification.create({
      data: {
        id,
        content: content.value,
        category,
        recipientId,
        readAt,
      },
    });
  }
}
