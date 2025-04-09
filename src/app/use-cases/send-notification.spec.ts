import { Notification } from '../entities/notification';
import { SendNotification, SendNotificationRequest } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a Notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    const sendNotificationRequest: SendNotificationRequest = {
      recipientId: '123456',
      content: 'New message',
      category: 'social',
    };

    await sendNotification.execute(sendNotificationRequest);

    expect(notifications).toHaveLength(1);
  });
});
