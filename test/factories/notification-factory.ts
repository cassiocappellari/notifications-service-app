import { Content } from '../../src/app/entities/content';
import {
  Notification,
  NotificationProps,
} from '../../src/app/entities/notification';

type NotificationOverride = Partial<NotificationProps>;

export function makeNotification(
  notificationOverride: NotificationOverride = {},
) {
  return new Notification({
    recipientId: '123456',
    content: new Content('New message'),
    category: 'social',
    createdAt: new Date(),
    ...notificationOverride,
  });
}
