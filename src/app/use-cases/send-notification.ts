import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  execute(request: SendNotificationRequest): SendNotificationResponse {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
      createdAt: new Date(),
    });

    return {
      notification,
    };
  }
}
