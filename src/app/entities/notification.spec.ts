import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a Notification', () => {
    const notification = new Notification({
      content: new Content('Nova notificação'),
      category: 'social',
      recipientId: randomUUID(),
      createdAt: new Date(),
    });

    expect(notification).toBeTruthy();
  });
});
