import { Notification } from '../entities/notification';

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract update(notification: Notification): Promise<void>;
  abstract countByRecipientId(recipientId: string): Promise<number>;
  abstract findByRecipientId(recipientId: string): Promise<Notification[]>;
}
