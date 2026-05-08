# MERN Blog Website

A full-stack blogging platform built using the MERN stack where users can create, edit, publish, and manage blogs with rich text editing and image uploads.

---

## Features

- User Authentication
- Create/Edit/Delete Blogs
- Draft Saving
- Rich Text Editor (Editor.js)
- Image Uploads with Cloudinary
- Firebase Authentication
- Admin Dashboard
- Blog Tags & Search
- Responsive UI
- JWT Authentication
- MongoDB Database Integration

---

## Tech Stack

### Frontend
- React.js
- React Router
- Editor.js
- Axios
- Tailwind CSS / CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

### Services
- Firebase Authentication
- Cloudinary Image Hosting

---

## Project Structure

```bash
client/
server/
```

---

## Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Install Dependencies

Frontend:

```bash
cd client
npm install
```

Backend:

```bash
cd server
npm install
```

---

## Environment Variables

Create `.env` inside `server/`

```env
DB_LOCATION=your_mongodb_connection_string
SECRET_ACCESS_KEY=your_jwt_secret
```

---

## Firebase Setup

1. Create Firebase Project
2. Enable Authentication
3. Generate Firebase Admin SDK Key
4. Place JSON file inside:

```bash
server/
```

5. Add Firebase config inside:

```bash
src/common/firebase.jsx
```

---

## Cloudinary Setup

Update:

```bash
src/common/aws.jsx
```

Add:
- cloud_name
- unsigned upload_preset

---

## Run the Project

Frontend:

```bash
npm run dev
```

Backend:

```bash
npm start
```

---

## Screenshots

Add screenshots here.

Example:
- Home Page
- Editor Page
- Dashboard
- Publish Form

---

## Future Improvements

- Comments System
- Blog Likes
- Dark/Light Mode
- User Profiles
- Bookmark Blogs
- SEO Optimization

---

## Learning Outcomes

Through this project I learned:
- Full Stack MERN Development
- Authentication & Authorization
- REST APIs
- MongoDB CRUD Operations
- Cloudinary Integration
- Firebase Integration
- Rich Text Editor Integration

---

## Author

Rishi

GitHub:
https://github.com/rishavraj13
