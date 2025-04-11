import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CountNotificationsByRecipient } from './count-notifications-by-recipient';

describe('Count notifications by recipient', () => {
  it('should be able to count Notifications by recipient', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countNotificationsByRecipient = new CountNotificationsByRecipient(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countNotificationsByRecipient.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
