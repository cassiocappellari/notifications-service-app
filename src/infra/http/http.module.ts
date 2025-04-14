import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from 'src/app/use-cases/cancel-notification';
import { ReadNotification } from 'src/app/use-cases/read-notification';
import { UnreadNotification } from 'src/app/use-cases/unread-notification';
import { CountNotificationsByRecipient } from 'src/app/use-cases/count-notifications-by-recipient';
import { GetNotificationsByRecipient } from 'src/app/use-cases/get-notifications-by-recipient';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountNotificationsByRecipient,
    GetNotificationsByRecipient,
  ],
})
export class HttpModule {}
