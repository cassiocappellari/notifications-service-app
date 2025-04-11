import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notification';

describe('Read notification', () => {
  it('should be able to read a Notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    void expect(() => {
      return readNotification.execute({
        notificationId: 'fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
