# 🎮 **Zentry Clone**

A React-based gaming website inspired by Zentry, featuring smooth GSAP animations, Tailwind CSS styling, and Docker support for easy deployment.

**Live Demo:** [zentry-clone-t.vercel.app](zentry-clone-t.vercel.app)




## ✨ **Features**

- Futuristic, animation-rich UI/UX

- Smooth page transitions powered by GSAP

- Responsive styling with Tailwind CSS

- Dockerized setup for easy and consistent deployment

## 🧠 **Tech Stack**

| Technology           | Description                                   |
| -------------------- | --------------------------------------------- |
| **React (Vite)**     | Fast, modern frontend framework               |
| **Tailwind CSS**     | Utility-first CSS for rapid styling           |
| **GSAP (GreenSock)** | High-performance JavaScript animation library |
| **Docker**           | Containerization for consistent environments  |

## 🚀 **Getting Started**

You can run this project locally or using Docker.

### **1. Local Development**

Clone the repository

```git clone https://github.com/yourusername/zentry-clone.git```


Navigate to the project directory

```cd zentry-clone```


Install dependencies

```npm install```


Run the development server

```npm run dev```


The application will be available at:
```http://localhost:5173```



### **2. Docker Deployment**

Ensure Docker is installed and running.

Build the Docker image

```docker build -t zentry:v1.0 .```


Run the container

```docker run -p 5173:5173 zentry:v1.0```


Then visit:
```http://localhost:5173```

## 📂 **Folder Structure**

<pre> zentry/
├─ node_modules/
├─ public/
│  └─ favicon.ico
│
├─ src/
│  ├─ components/
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
│
├─ .dockerignore
├─ .gitignore
├─ Dockerfile
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
 </pre>


 ## 🌟**Highlights**

- Built with React (Vite) for speed and modularity

- Styled with Tailwind CSS for modern, responsive design

- GSAP for fluid, professional animations

- Fully Dockerized for deployment flexibility
