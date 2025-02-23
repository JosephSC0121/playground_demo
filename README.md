# Playground Demo

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-blue?logo=tailwind-css)

> Playground is a learning platform for programming and mathematics, featuring an AI-powered chatbot to assist users with exercises.

## Features

- Learn programming fundamentals and OOP  
- AI chatbot assistance for solving exercises  
- Interactive coding environment  
- User authentication and progress tracking  
- Built with React, Vite, and TailwindCSS  

## Project Structure

```plaintext
.  
├── public/ (Static assets)  
│   └── vite.svg  
├── src/  
│   ├── api/ (API integration)  
│   ├── assets/ (Images & styles)  
│   ├── components/ (Reusable UI components)  
│   ├── context/ (Global state management)  
│   ├── hooks/ (Custom hooks)  
│   ├── interfaces/ (TypeScript interfaces)  
│   ├── pages/ (App pages)  
│   ├── services/ (Business logic & API services)  
│   ├── main.tsx (Entry point)  
│   └── App.tsx (Main application)  
├── tailwind.config.js  
├── vite.config.js  
├── eslint.config.js  
└── package.json  
```

## Quick Start

### Install Dependencies
```sh
pnpm install
```

### Run Development Server
```sh
pnpm dev
```

### Build for Production
```sh
pnpm build
```

## Environment Variables
Create a `.env.local` file and add:
```env
VITE_API_URL=your_backend_url
VITE_AI_BOT_KEY=your_ai_bot_api_key
```

## License
MIT License © 2025 Playground Team

