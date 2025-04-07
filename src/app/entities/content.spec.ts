import { Content } from './content';

describe('Notification content', () => {
  it('should create a notification content', () => {
    const content = new Content('Você recebeu uma notificação');

    expect(content).toBeTruthy();
  });

  it('should not create a notification content if less than 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('should not create a notification content if more than 240 characters', () => {
    expect(() => new Content('1'.repeat(241))).toThrow();
  });
});
