import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from 'src/app/repositories/notification-repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId,
      },
    });

    return notification
      ? PrismaNotificationMapper.toDomain(notification)
      : null;
  }

  async findByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: {
        recipientId,
      },
    });

    return notifications.map((notification) =>
      PrismaNotificationMapper.toDomain(notification),
    );
  }

  async countByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: {
        recipientId,
      },
    });

    return count;
  }

  async create(notification: Notification): Promise<void> {
    const notificationToPrisma =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: notificationToPrisma,
    });
  }

  async update(notification: Notification): Promise<void> {
    const notificationToPrisma =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.update({
      where: {
        id: notificationToPrisma.id,
      },
      data: notificationToPrisma,
    });
  }
}
