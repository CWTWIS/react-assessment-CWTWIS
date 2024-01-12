[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rXoA-UQB)
# React Assessment : My Todo List (CC16)

### Overview

Please follow these conditions before code!

- Programming Language
  - Javascript or TypeScript
- Technologies
  - Javascript DOM, ReactJs, ViteJs, NextJs, Node.js
  - CSS Framework : Bootstrap, Tailwind, Scss, Vanilla css or MUI
- API calling with method POST, GET, PATCH, DELETE for todo listing.
- Create React component
- Create page atleast 2 page
- Use React Hooks

  - useState
  - useEffect

- Bonus point (read more in [Bonus](#Bonus) section)
  - Create React component
    - High Order Components
  - Create Routing 2 page /login, /todo_list
    - createBrowserRouter and RouterProvider
  - Create State management (context or redux)
  - Use Other Hooks
    - useNavigate
    - useParams
  - Create Custom Hooks
  - Deploy Vercel

# Example UI

[Figma TODO LIST CLICK!](<https://www.figma.com/file/7IUnZ0T4gHcMmCUci8QiwW/Todo-List-for-Figma-projects-(Community)-(Copy)?type=design&node-id=1%3A230&mode=design&t=TQaatX2h2Tjg70W3-1>)

![image](./example.png)

# APIs

### Auth api

| API     | Endpoint                                       | Method |
| ------- | ---------------------------------------------- | ------ |
| Regiter | https://paybox-wnfo.onrender.com/auth/register | POST   |
| Login   | https://paybox-wnfo.onrender.com/auth/login    | POST   |
| GetMe   | https://paybox-wnfo.onrender.com/auth/me       | GET    |

- Register require body json on key "emailOrMobile" , "password", "confirmPassword", "firstname" and "lastname" (USE POSTMAN for register if you don't have credential before)
- Login require body json on key "emailOrMobile" and "password"
- GetMe require token in Header Authorization ()

```js
// You can use this function for getMe
async function getMe() {
  let token; // get token from somewhere
  const res = await fetch('https://paybox-wnfo.onrender.com/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`, // put your token here
    },
  });
  const data = await res.json();
  console.log(data);
}
```

### Todo list api

| API             | Endpoint                                                      | Method |
| --------------- | ------------------------------------------------------------- | ------ |
| get all my todo | http://103.74.254.49:8000/todo/?firstname=first&lastname=last | GET    |
| create new todo | http://103.74.254.49:8000/todo/                               | POST   |
| update todo     | http://103.74.254.49:8000/todo/update/:id                     | PATCH  |
| delete todo     | http://103.74.254.49:8000/todo/delete/:id                     | DELETE |

- GET /todo require query string with key "firstname" and "lastname"
- POST /todo require body json on key "task" and "firstname" and "lastname"
- PATCH /todo/update/:id require path param with id of todo and body json with any key of todo
- DELETE /todo/delete/:id require path param with id of todo

# Instruction

- Section 1 (Part1-Part2) : ทำ App ได้
- Section 2 (Part3 : Bonus) : ทำให้ App ทำงานได้ดี
- Section 4 (Part4 : CleanCode) : ทำให้คนอื่นอยากทำงานด้วย (แม้กระทั่งตัวเองในอนาคต)

## Part-1 : Project Setup and UI (50pts)

### 1A : Project Setup (10pts)

- [x ] Create Project with Create React App or ViteJs
- [x ] Clean up unused files and code
- [x ] Install dependencies or packages that you need for this project
- [x ] Pick some CSS Framework and Install eg. Bootstrap, Tailwind, Scss, Vanilla css or MUI
- [x ] Setup Well-organized Folder Structure
- [x ] Using Git and Github for Version Control System
- [x ] Using Comand Line for run project

### 1B : Build UI with React Component (20pts)

- [ ] Understand UI Design and UI Flow (Figma)
- [ ] Write Clean & Reausable UI
- [ ] Good Naming for Component
- [ ] Manage UI state appropriately

### 1C : Precise UI with Design (20pts)

- [x ] Precise UI : Login Page
- [ ] Precise UI : Todo Page

## Part-2 : Feature and Logic (50pts)

### 2A : Auth and Login (15pts)

- [x ] Login with email and password
- [x ] Can submit form with Enter key or Button
- [x ] Implement State Management for Login Page
- [x ] Connect to API
- [x ] Can Login

### 2B : TodoList (35pts)

- [x ] Show Todo List when Render Page (State Management & API)
- [x ] Can Create Todo (State Management & API)
- [x ] Can Update Todo (State Management & API)
- [x ] Can Delete Todo (State Management & API)
- [x ] Can Logout (State Management & API)

#### suggestion

- If you can't call API, you can mock data in your project. you will get half point.
- If yon can't login, you can mock you firstname and lastname. for send to API.

## Part-3 : Bonus (0-100pts)

- [ ] Implement Validation in Login Page (5pts)
- [ ] Implement Validation in Todo Page (5pts)
- [ ] Feature Register and Register Page(20pts)
- [ ] Using Context API for State Management (10pts)
- [x ] Using React Router for Routing (10pts)
- [x ] Auto Login with Local Storage (10pts)
- [x ] Using Custom Hooks (10pts)
- [ ] Implement Protected Route and Redirect Route (10pts)
- [ ] New Feature or Amazing UI (Depend on your creativity) (10pts)
- [ ] Deploy to Vercel or Netlify (10pts)
- paste your link here

## Part-4 : Become Extraordinary Developer (100pts)

### Clean Code

- [ ] DRY (Don't Repeat Yourself)
- [ ] SOLID (S : Single Responsibility Principle)
- [ ] Avoid Big Component
- [ ] Avoid Magic Value (Hard Code)
- [ ] Readable Code
- [ ] Good Naming for Variable, Function, Component, etc.
- [ ] Good Commenting
- [ ] Implement React Design Pattern and Avoid Anti Pattern
- [x ] Use Async Await instead of Promise then catch
- [ ] Well-organized Folder Structure
- [ ] Well-organized Git Commit Message

# Can and Can't

- Open Slide , Docs , Stackoverflow , Google
- Don't AI , Don't Copy , Don't Cheat
- Don't ask your friend, Don't ask your teacher
- Don't use other code from other project (COPY PASTE)
