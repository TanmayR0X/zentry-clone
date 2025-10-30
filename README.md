🎮 Zentry Clone

A React-based gaming website inspired by Zentry, featuring smooth GSAP animations, Tailwind CSS styling, and Docker support for easy deployment.

🚀 Features

✨ Futuristic, animation-rich UI/UX

⚡ Smooth page transitions powered by GSAP

🎨 Responsive styling using Tailwind CSS

🐳 Containerized with Docker for consistent deployment

🛠️ Tech Stack

React (Vite): Fast frontend framework for building modern interfaces

Tailwind CSS: Utility-first CSS framework for rapid styling

GSAP (GreenSock): Professional-grade animation library

Docker: Simplifies app packaging and deployment

🏗️ Running the Project

You can run this project locally or with Docker.

🔹 1. Local Development Setup

Clone the repository:

git clone https://github.com/yourusername/zentry-clone.git


Navigate to the project directory:

cd zentry-clone


Install dependencies:

npm install


Run the development server:

npm run dev


Your app will be available at:
👉 http://localhost:5173

🐳 2. Docker Deployment

Make sure Docker is installed and running.

Build the Docker image:

docker build -t zentry:v1.0 .


Run the Docker container:

docker run -p 5173:5173 zentry:v1.0


The app will be live at:
👉 http://localhost:5173

📂 Folder Structure
zentry-clone/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── package.json
├── vite.config.js
└── README.md

👨‍💻 Author

Tanmay Rajput
Frontend Developer — React | GSAP | Tailwind | Docker
