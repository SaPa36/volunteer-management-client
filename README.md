# 🤝 Volunteer Management System

A robust platform designed to connect passionate volunteers with meaningful opportunities. This application features secure authentication, real-time slot management, and a fully responsive design supporting both Light and Dark modes.

## 🔗 Live Links
* **Client Deployment:** [https://volunteer-management-1de8f.web.app](https://volunteer-management-1de8f.web.app)
* **Server API:** [Your Vercel Server Link Here]

---



## 📸 Project Showcase

### 🏠 Landing Page (Light & Mobile)
| Desktop Home (Light Mode) | Mobile View |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/19699c8f-f44a-427a-b414-d2c2c38844a0" height="600" width="800" alt="Desktop Light Mode" /> | <img src="https://github.com/user-attachments/assets/dbe7c354-169b-4535-b57f-b313da6db280" width="220" alt="Mobile Home" /> |

### 📋 User Dashboard (Manage Assets)
| Manage My Posts | My Volunteer Requests |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/6f6db6f0-82c6-47ee-9428-b7fe59aaa2ea" width="450" alt="Manage Posts" /> | <img src="https://github.com/user-attachments/assets/b5d9ff52-0af9-4b46-9aa5-de1c9552360f" width="450" alt="Volunteer Requests" /> |

### 🛠️ Core Functionality
| Volunteers Need Section | Create Post Form |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/2b49573a-a814-493a-b339-ae23cc4f304f" width="450" height="350" alt="Volunteers Need" /> | <img src="https://github.com/user-attachments/assets/8a3b9090-93c9-4055-ab5d-27d112a3d3cf" width="450" height="350" alt="Create Post" /> |

---


## ✨ Features

* **Secure Authentication:** Uses **Firebase Auth** combined with **JSON Web Tokens (JWT)** stored in HTTP-only cookies for maximum security.
* **Dynamic Banner:** High-performance, themed slider using **Swiper.js** with cross-fade effects.
* **Volunteer Post Management:** Full CRUD (Create, Read, Update, Delete) capabilities for organizers.
* **Real-time Availability:** Automatically decrements the number of volunteers needed when a user submits a request.
* **Search & Filter:** Easily find opportunities using the integrated search bar on the "All Volunteer Posts" page.
* **Responsive UI:** Beautifully crafted with **Tailwind CSS** and **DaisyUI**, featuring seamless theme switching.

---

## 🛠️ Tech Stack

**Frontend:**
* React.js (Vite)
* React Router DOM (Private Routing)
* Tailwind CSS & DaisyUI
* Firebase Authentication
* Axios (with HTTP-only cookie support)
* React Toastify (Notifications)

**Backend:**
* Node.js & Express.js
* MongoDB (NoSQL Database)
* JWT (Authentication)
* Cookie-parser

---

## 🔒 JWT Implementation Flow

1.  **Login:** User logs in via Firebase (Email or Google).
2.  **Token Generation:** The client sends the user's email to the `/jwt` endpoint.
3.  **Secure Storage:** The server signs a token and sends it back in an `httpOnly`, `secure`, `sameSite: none` cookie.
4.  **Verification:** Private API routes use a `verifyToken` middleware to validate the cookie before returning data.



---

## 🚀 Installation & Local Setup

### Prerequisites
* Node.js installed
* MongoDB Atlas Account
* Firebase Project

### 1. Backend Setup
```bash
git clone https://github.com/SaPa36/volunteer-management-server.git
cd volunteer-management-server
npm install

Create a .env file:
DB_USER=volunteerAdmin
DB_PASS=U32Vo5KWJWi0WHOB

npm start

2. Frontend Setup
git clone https://github.com/SaPa36/volunteer-management-client.git
cd volunteer-management-client
npm install
Create a .env.local with your Firebase config and npm run dev.

📝 License
Distributed under the MIT License. See LICENSE for more information.

👤 Author
Nur Sapa

GitHub: @SaPa36




---

### Pro-Tip for your GitHub:
Since you are about to push this, remember to **not** include your `.env` file. You should also check your **Network** tab in Chrome DevTools to ensure that when you log in, the `/jwt` request returns a `Set-Cookie` header. If it does, your README's "Security" section is 100% accurate!

**Would you like me to help you generate a professional `LICENSE` file text to accompany this README?**
