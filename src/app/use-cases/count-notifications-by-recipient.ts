import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';

export interface CountNotificationsByRecipientRequest {
  recipientId: string;
}

interface CountNotificationsByRecipientResponse {
  count: number;
}

@Injectable()
export class CountNotificationsByRecipient {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: CountNotificationsByRecipientRequest,
  ): Promise<CountNotificationsByRecipientResponse> {
    const { recipientId } = request;

    const count =
      await this.notificationRepository.countByRecipientId(recipientId);

    return {
      count,
    };
  }
}
