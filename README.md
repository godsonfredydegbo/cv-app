# CV Builder - REACT Application

## Overview

CV Builder is a modern REACT application that allows users to create, edit, and preview a professional CV in real time.

Users can input their personal information, education, and work experience through a clean interface, then switch to a preview mode to see a formatted CV.

This project focuses on mastering core REACT concepts such as state management, props, and conditional rendering

---

## Features

- Edit Mode: Fill in your CV information using forms
- Preview Mode: Display a clean CV layout
- Real-time data binding
- Component-based architecture
- Dynamic form handling with a single handler
- Controlled components for all inputs
- Toggle between Edit and Prewiew modes

---

## Tech Stack

- REACT (with Vite)
- JavaScript (ES6+)
- Tailwind CSS
- HTML5

---

## Project Structure

src
│   ├── App.jsx
│   ├── components
│   │   ├── CVPreview.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   └── GeneralInfo.jsx
│   ├── index.css
│   └── main.jsx
└── vite.config.js

---

## Installation & Setup

1. Clone the repository:
```
git clone https://github.com/godsonfredydegbo/cv-app.git
```

2. Navigate into the project:
```
cd cv-app
```

3. Install dependencies:
```
npm install
```

4. Run the development server:
```
npm run dev
```

---

## How it works

### 1. Global State Management

All data is stored in the main `App.jsx` using REACT's `useState`.

```
const [generalInfo, setGeneralInfo] = useState({...})
```

---

### 2. Props System

Data and update functions are passed down to child components:
```
<GeneralInfo data={generalInfo} setData={setGeneralInfo}/>
```

---

### 3. Controlled Components

Each input is controlled using:
```
value={data.name}
onChange={handleChange}
```

---

### 4. Dynamic Form Handling

A single function updates all inputs dynamically:
```
setData({
    ...data,
    [name]: value
})
```

---

### 5. Conditional Rendering

The app switches between Edit and Preview modes:
```
isEditing ? <Form /> : <CVPreview />
```

---

## Learning Objectives 

This project helps you understand:

- REACT state management
- Props and data flow
- Controlled inputs
- Component structure
- Conditional rendering
- Clean code practices

---

## Common Challenges

- Understanding the spread operator (`...data`)
- Managing state immutability
- Passing props correctly
- Avoiding undefined errors
- Keeping inputs synced with state

---

## Future Improvements

This project can be significantly upgraded advanced features:

### UI / UX Enhancements
- Modern and premium UI design (glassmorphism, gradients, shadows)
- Improved layout with grid systems
- Better typography and spacing
- Dark mode support

### Animations
- Smooth transitions between Edit and Preview
- Fade / slide animations
- Micro-interactions for inputs and buttons
- Use of libraries like Framer Motion or GSAP

---

### CV Features
- Multiple CV templates (modern, classic, minimal)
- Option to choose layout format
- Live preview themes
- Section reodering (drag & drop)

---

### Advanced Functionnality
- Add multiple education and experience entries (arrays)
- Form validation
- Auto-save in localStorage
- Export CV as PDF
- Download / Print CV

---

### Fullstack Upgrade (Future)
- User authentification
- Save CVs online
- Database integration (PostgreSQL)
- Backend with Node.js or Django

---

## Possible Extensions 

- Multilingual support
- AI-generated CV suggestions
- Resume scoring system
- Integration with LinkedIn data

---

## Conclusion

This project is a strong foundation for learning REACT and building real-world applications.

It demonstrates how to structure an app, manage data efficiently, and create an dynamic user interface.

---

Built by [Godson Degbo]

---

## ⭐ If you like this project

Feel free to:
- Star the repository 
- Fork it 
- Improve it
- Share it