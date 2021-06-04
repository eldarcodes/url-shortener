# URL-Shortener

## Installation

```
git clone https://github.com/mirzabekov00/url-shortener.git
```

## Server setup

```
cd server/

yarn

yarn dev
```

## Web setup

```
cd client/

yarn

yarn start
```
---
## API (auth)

| Method |        Route       |                  Body                   | Response |
| ------ | ------------------ | --------------------------------------- | -------- |
|  POST  | /api/auth/register | `email: string`<br />`password: string` | `status: 201 / 400`<br />`message: string`     |
|  POST  |   /api/auth/login  | `email: string`<br />`password: string` | `token: string`<br />`userId: string`      |

