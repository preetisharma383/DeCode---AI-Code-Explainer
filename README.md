# 🧠 DeCode – AI Code Explainer

**DeCode** is an AI-powered web app that explains code in simple language.
Paste your code, choose the programming language, and get an easy-to-understand explanation powered by **OpenAI’s OSS-120B model** through the Nebius API.

---

## 🚀 Live Demo

🌐 **Frontend (Vercel)**: (https://de-code-ai-code-explainer.vercel.app/)
⚙️ **Backend (Render)**: (https://decode-ai-code-explainer.onrender.com)

---

## 🏗️ Tech Stack

### **Frontend**

* ⚛️ React (with Vite)
* 🎨 Tailwind CSS
* 🔄 Fetch API (for backend communication)
* 🧩 React Markdown for rich text display

### **Backend**

* 🟢 Node.js + Express
* 🛡️ Helmet + CORS + Rate Limiting (security)
* 🤖 OpenAI SDK (Nebius API)
* 🔐 dotenv for environment variables

---

## 📂 Folder Structure

```
aiwebapp/
│
├── client/              # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/              # Express backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/preetisharma383/codesplain.git
cd codesplain
```

### 2️⃣ Setup Backend (Server)

```bash
cd server
npm install
```

Create a `.env` file inside the `/server` folder:

```env
API_KEY=your_openai_or_nebius_api_key
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Run the backend locally:

```bash
npm start
```

Server will run at:
➡️ `http://localhost:5000`

---

### 3️⃣ Setup Frontend (Client)

```bash
cd ../client
npm install
npm run dev
```

Frontend will run at:
➡️ `http://localhost:5173`

---

## 🌐 Deployment

### **Backend (Render)**

1. Push your code to GitHub.
2. Go to [https://render.com](https://render.com)
3. Create a new **Web Service**.
4. Root directory: `/server`
5. Add environment variables:

   * `API_KEY`
   * `FRONTEND_URL=https://<your-vercel-domain>`
6. Build Command: `npm install`
7. Start Command: `npm start`

### **Frontend (Vercel)**

1. Go to [https://vercel.com](https://vercel.com)
2. Import your repo.
3. Root directory: `/client`
4. Add environment variable:

   ```
   VITE_API_URL=https://decode-ai-code-explainer.onrender.com
   ```
5. Deploy 🚀

---

## 🧪 Test Snippets

### JavaScript

```javascript
function greet(name) {
  if (!name) return "Hello, Stranger!";
  return `Hello, ${name}!`;
}
console.log(greet("Preeti"));
```

### Python

```python
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(5))
```

### Java

```java
public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for(int i = 1; i <= 5; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }
}
```

---

## 💡 Features

* ✨ Explain code in **plain English**
* 📋 Copy explanation with one click
* 💾 Keeps your previous code until deleted
* ⚡ Fast, simple, and clean UI
* 🔒 Secure API with rate limits and CORS protection

---

## 🧰 Future Enhancements

* 🗣️ Add voice explanation (text-to-speech)
* 🌍 Support for more languages (C++, PHP, etc.)
* 💾 User authentication and history
* 📊 Save & share explanations

---

## 👩‍💻 Author

**Preeti Sharma**
📘 [GitHub: preetisharma383](https://github.com/preetisharma383)

---

## 🪪 License

This project is licensed under the **MIT License** — free for personal and commercial use.

---

Would you like me to format this `README.md` with **badges** (for React, Node.js, Render, Vercel, etc.) at the top for a more eye-catching GitHub profile look? It’ll make it look like a professional open-source project.

