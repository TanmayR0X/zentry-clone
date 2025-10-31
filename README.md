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


## 📷 **ScreenShots**

## 💻 Dekstop View

| **Section** | **Preview** |
|:------------|:------------|
|  **Home**  | <img width="1899" height="860" alt="Screenshot 2025-10-31 193521" src="https://github.com/user-attachments/assets/e4140b91-902a-44b1-bbf5-0098fbba009d" /> |
|  **About** | <img width="1901" height="868" alt="Screenshot 2025-10-31 195123" src="https://github.com/user-attachments/assets/f66c8504-5a44-4a9e-98d0-12addd3bb371" /> |
|  **Story** | <img width="1895" height="860" alt="Screenshot 2025-10-31 195205" src="https://github.com/user-attachments/assets/9a445d0b-1e64-4402-bbf5-9da87157f128" /> |


## 📱 Mobile View

| <img width="361" height="741" alt="Screenshot 2025-10-31 193610" src="https://github.com/user-attachments/assets/a1b80620-2d8a-4db7-beee-e735b56fa3c5" /> | <img width="362" height="738" alt="Screenshot 2025-10-31 193704" src="https://github.com/user-attachments/assets/43390d1c-e76b-43e2-a64f-3f3680b049f5" /> | <img width="361" height="740" alt="Screenshot 2025-10-31 193741" src="https://github.com/user-attachments/assets/8d177030-62f6-4bf7-a8c1-7bdef788b1cc" /> |
|:---:|:---:|:---:|
| Home | Features | Story |




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
