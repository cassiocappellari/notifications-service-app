import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification, SendNotificationRequest } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a Notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const sendNotificationRequest: SendNotificationRequest = {
      recipientId: '123456',
      content: 'New message',
      category: 'social',
    };

    const { notification } = await sendNotification.execute(
      sendNotificationRequest,
    );

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
