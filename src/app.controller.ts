import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { Notification } from '@prisma/client';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: Notification) {
    const { content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        recipientId: randomUUID(),
        content,
        category,
      },
    });
  }
}
