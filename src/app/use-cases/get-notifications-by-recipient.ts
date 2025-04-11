import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { Notification } from '../entities/notification';

export interface GetNotificationsByRecipientRequest {
  recipientId: string;
}

interface GetNotificationsByRecipientResponse {
  notifications: Notification[];
}

@Injectable()
export class GetNotificationsByRecipient {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: GetNotificationsByRecipientRequest,
  ): Promise<GetNotificationsByRecipientResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
