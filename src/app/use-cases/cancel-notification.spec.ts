import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a Notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    const notification = new Notification({
      recipientId: '123456',
      content: new Content('New message'),
      category: 'social',
      createdAt: new Date(),
    });

    await notificationRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    void expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
