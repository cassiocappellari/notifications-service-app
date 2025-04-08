import { SendNotification, SendNotificationRequest } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a Notification', () => {
    const sendNotification = new SendNotification();

    const sendNotificationRequest: SendNotificationRequest = {
      recipientId: '123456',
      content: 'New message',
      category: 'social',
    };

    const { notification } = sendNotification.execute(sendNotificationRequest);

    expect(notification).toBeTruthy();
  });
});
