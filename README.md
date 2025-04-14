<h1 align="center">Notifications API service</h1>

<h3 align="center"> 
	Status: finished :heavy_check_mark:
</h3>

## 📋 Index

- [About](#-about)
- [Routes](#-routes)
- [Technologies](#-technologies)
- [How To Use](#-how-to-use)
- [Author](#-author)
- [License](#-license)

## 🚀 About

This API was built using **TypeScript**, **Node.js**, **NestJS**, **Prisma ORM**, **Jest** and **SQLite**, which simulates a Notifications service that is able to create, update, read, unread, cancel, count and retrieve notifications. 

## 🗺️ Routes

|route|HTTP Method|description
|:---|:---:|:---:
|`/notifications/recipient/:recipientId`|GET|Get notifications by recipient
|`/notifications/recipient/:recipientId/count`|GET|Count notifications by recipient
|`/notifications`|POST|Creates a notification
|`/notifications/:notificationId/cancel`|PATCH|Cancel a notification
|`/notifications/:notificationId/read`|PATCH|Read a notification
|`/notifications/:notificationId/unread`|PATCH|Unread a notification

**Requests**

- POST: `/notifications`
```json
{
	"recipientId": "e467037f-d52c-450f-98d9-4fa5b1df0872",
	"content": "New notification example 1",
	"category": "social"
}
```

## 🤖 Technologies

The project was developed using this technologies:

- TypeScript
- Node.js
- NestJS
- Prisma ORM
- Jest
- SQLite

## ⚙ How to Use

```bash
# Clone this repository

$ git clone https://github.com/cassiocappellari/notifications-service-app

# Enter the project folder

$ cd notifications-service-app

# Install the dependencies

$ npm install

# Start the project

$ npm run start

```

## 👨‍🚀 Author

**Cássio Cappellari**

- GitHub: [@cassiocappellari](https://github.com/cassiocappellari)
- LinkedIn: [@cassiocappellari](https://www.linkedin.com/in/cassiocappellari/)

---

Developed with 💚 by Cássio Cappellari!
