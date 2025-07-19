# FullStackSQL 🚀

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![Neon](https://img.shields.io/badge/PostgreSQL-Neon-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)
![Status](https://img.shields.io/badge/status-in%20progress-yellow)

A **full-stack web application** built with Node.js, Express, Prisma ORM, and PostgreSQL (hosted on Neon). This project demonstrates a modern backend stack using Prisma for database modeling and migrations, along with a RESTful API architecture.

---

## 📦 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma
- **Package Manager:** npm
- **Dev Tools:** Nodemon, VS Code
- **Hosting (DB):** Neon.tech

---

## 🌟 Features

✅ User authentication (sign-up, login, JWT support)  
✅ RESTful API architecture  
✅ Prisma ORM with migrations and PostgreSQL  
✅ Secure environment variables with `.env`  
✅ Error handling middleware  
✅ Database hosted on Neon.tech (PostgreSQL)  

---

## 🚀 Getting Started

### 🛠️ Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Neon.tech](https://neon.tech/) account (for PostgreSQL DB)
- [VS Code](https://code.visualstudio.com/) (optional)

---

### 📥 Installation
Clone the repository:
```bash
git clone https://github.com/ADITYABHURAN/Fullstacksql.git
cd Fullstacksql
````

Install dependencies:

```bash
npm install
```

---

### ⚙️ Set up Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
DATABASE_URL="postgresql://<username>:<password>@<host>/<database>?sslmode=require"
```

Replace `<username>`, `<password>`, `<host>`, and `<database>` with your Neon PostgreSQL credentials.

---

### 🗄️ Run Prisma Migrations

Generate the database tables:

```bash
npx prisma migrate dev --name init
```

Generate Prisma Client:

```bash
npx prisma generate
```

---

### ▶️ Start the Server

Start in development mode:

```bash
npm run dev
```

Server runs at: [http://localhost:4000](http://localhost:4000)

---

## 📖 API Endpoints

| Method | Route            | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Fetch all users   |
| POST   | `/api/users`     | Create a new user |
| GET    | `/api/users/:id` | Fetch user by ID  |
| PUT    | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 🙋‍♂️ Author

Made with ❤️ by [Aditya Bhuran](https://github.com/ADITYABHURAN)

```
